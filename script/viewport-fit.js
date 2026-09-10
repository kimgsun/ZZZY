(function () {
    var DESIGN_WIDTH = 1400;
    var rafId = null;

    function viewportWidth() {
        var w = window.innerWidth;
        if (window.visualViewport && window.visualViewport.width) {
            w = Math.min(w, window.visualViewport.width);
        }
        return w;
    }

    function applyFit() {
        rafId = null;

        var scale = Math.min(1, viewportWidth() / DESIGN_WIDTH);
        var root = document.documentElement;

        root.style.zoom = String(scale);
        // zoom으로 시각 높이가 줄어들어도 뷰포트를 채우도록 보정
        root.style.minHeight = scale < 1 ? (100 / scale) + 'vh' : '';
        root.style.overflowX = 'hidden';

        if (document.body) {
            document.body.style.overflowX = 'hidden';
        }

        // zoom 반영 후 스크롤 애니메이션이 좌표를 다시 읽도록 알림
        window.dispatchEvent(new CustomEvent('viewportfit'));
    }

    function fitViewport() {
        if (rafId != null) return;
        rafId = requestAnimationFrame(applyFit);
    }

    fitViewport();

    window.addEventListener('resize', fitViewport, { passive: true });
    window.addEventListener('orientationchange', fitViewport, { passive: true });
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', fitViewport, { passive: true });
    }
})();
