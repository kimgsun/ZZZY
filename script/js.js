$(function () {
    $(".menu>li:nth-of-type(4)").click(function () {
        $(this).children(".menu_in").slideToggle()
        $(this).siblings().children(".menu_in").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
    });
});

$(function () {
    $('.tab_in > div').hide();
    $('.tabnav a').click(function () {
        $('.tab_in > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

$(function () {
    $("#col_nav>li").click(function () {
        $(this).children(".col_nav_in").slideToggle()
        $(this).siblings().children(".col_nav_in").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
    });
});

$(function () {
    $('.map_in > div').hide();
    $('.stock a').click(function () {
        $('.map_in > div').hide().filter(this.hash).fadeIn();
        $('.stock a').removeClass('on');
        $(this).addClass('on');
        return false;
    }).filter(':eq(0)').click();
});

const maxSnowflakes = 1000,
            snowflakes = [],
            container = document.getElementById("snow");

        console.clear();

        let isRunning = true;

        const generatesnowFlake = (timeout = 0, init = false) => {
            const duration = 30000 + Math.random() * 47000,
                flake = document.createElement("div"),
                id = crypto.randomUUID(),
                delay = init ? Math.random() * duration : 0;
            snowflakes.push(id);
            setTimeout(() => {
                flake.setAttribute("id", id);
                flake.setAttribute(
                    "style",
                    `
			animation-delay: -${delay}ms;
			--fallDuration: ${duration}ms;
			--fallSlideStrength: ${Math.random()};
			
			--size: ${Math.random() * 0.7 + 0.3};
			--position: ${Math.random() * 120}%;
			`
                );
                container.appendChild(flake);
                setTimeout(() => {
                    const index = snowflakes.findIndex((e) => e === id);
                    snowflakes.splice(index, index);
                    container.removeChild(flake);
                }, duration - delay);
            }, timeout);
        };

        container.setAttribute("style", `--cWidth: ${container.clientWidth}px`);
        addEventListener("resize", () =>
            container.setAttribute("style", `--cWidth: ${container.clientWidth}px`)
        );

        const loop = async () => {
            while (1) {
                await new Promise(async (resolve) => {
                    if (isRunning && snowflakes.length < maxSnowflakes && !document.hidden) {
                        requestAnimationFrame(() => {
                            generatesnowFlake(Math.random() * 50);
                            resolve();
                        });
                    } else {
                        setTimeout(resolve, 50);
                    }
                });
            }
        },
            init = () => {
                for (let i = 0; i < (maxSnowflakes - snowflakes.length) / 2; i++) {
                    generatesnowFlake(Math.random() * 50, true);
                }
            };

        init();
        loop();

        document.onvisibilitychange = (e) => {
            isRunning = !document.hidden;
            if (isRunning) init();
        };

var swiper = new Swiper(".button_t", {
    grabCursor: true,
    speed: 500,
    effect: "slide",
    loop: true,
    mousewheel: {
        invert: false,
        sensitivity: 1,
    },
});

swiper.enable();

