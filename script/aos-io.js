/**
 * AOS CSS용 스크롤 트리거
 * AOS 기본 JS는 offsetTop + pageYOffset으로 판정해서 css zoom과 어긋난다.
 * getBoundingClientRect(시각 좌표)로 aos-animate를 직접 토글한다.
 */
(function () {
    var DURATION = 1500;
    var OFFSET = 120;
    var ticking = false;
    var nodes = [];

    function setBodyAttrs() {
        var body = document.body;
        if (!body) return;
        body.setAttribute('data-aos-easing', 'ease');
        body.setAttribute('data-aos-duration', String(DURATION));
        body.setAttribute('data-aos-delay', '0');
    }

    function collect() {
        nodes = Array.prototype.slice.call(document.querySelectorAll('[data-aos]'));
        nodes.forEach(function (el) {
            el.classList.add('aos-init');
        });
    }

    function update() {
        ticking = false;
        var vh = window.innerHeight || document.documentElement.clientHeight;

        nodes.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            var visible = rect.top < vh - OFFSET && rect.bottom > OFFSET * 0.25;

            if (visible) {
                el.classList.add('aos-animate');
            } else {
                el.classList.remove('aos-animate');
            }
        });
    }

    function requestUpdate() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    }

    function refresh() {
        collect();
        requestUpdate();
    }

    function init() {
        setBodyAttrs();
        refresh();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', refresh, { passive: true });
    window.addEventListener('orientationchange', refresh, { passive: true });
    window.addEventListener('load', refresh);
    window.addEventListener('viewportfit', refresh);

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', refresh, { passive: true });
        window.visualViewport.addEventListener('scroll', requestUpdate, { passive: true });
    }
})();
