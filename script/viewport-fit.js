(function () {
    var DESIGN_WIDTH = 1400;
    var applying = false;

    function viewportWidth() {
        var w = window.innerWidth;
        if (window.visualViewport && window.visualViewport.width) {
            w = Math.min(w, window.visualViewport.width);
        }
        return w;
    }

    function fitViewport() {
        if (applying) return;
        applying = true;

        var scale = Math.min(1, viewportWidth() / DESIGN_WIDTH);
        var root = document.documentElement;

        root.style.zoom = String(scale);
        root.style.overflowX = 'hidden';

        if (document.body) {
            document.body.style.overflowX = 'hidden';
        }

        requestAnimationFrame(function () {
            applying = false;
        });
    }

    fitViewport();

    window.addEventListener('resize', fitViewport, { passive: true });
    window.addEventListener('orientationchange', fitViewport, { passive: true });
})();
