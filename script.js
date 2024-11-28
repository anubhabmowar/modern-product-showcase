
        var swiper = new Swiper('.swiper', {
            loop: true,
            spaceBetween: 0,
            mousewheel: true,
            speed: 1200,
            effect: 'coverflow',
            direction: 'vertical',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 10,
                modifier: 1,
                slideShadows: true,
            },
            thumbs: {
                swiper: {
                    el: '.swiper-thumbs',
                    slidesPerView: 2,
                    spaceBetween: 0,
                }
            },
            on: {
                slideChangeTransitionStart: function () {
                    gsap.from(
                        '.swiper-slide-active h2',
                        { x: -200, opacity: 0, duration: 1, delay: 0.5 }
                    );

                    gsap.from(
                        '.info p , .info span',
                        { y: 10, opacity: 0, stagger: 0.1, delay: 0.5 }
                    );

                    gsap.from(
                        '.pricing p , .pricing span , .pricing h3, .btn-block',
                        { y: 10, opacity: 0, stagger: 0.1, delay: 0.5 }
                    );

                    gsap.from('.main-img', {
                        y: 50, opacity: 0, duration: 1, delay: 1,
                    });

                    gsap.from('.swiper-thumbs', {
                        y: 20, opacity: 0, delay: 0.5
                    })
                },
            }
        });

        gsap.from(
            '.swiper-slide-active h2',
            { x: -200, opacity: 0, duration: 1, delay: 0.5 }
        );

        gsap.from(
            '.info p , .info span',
            { y: 10, opacity: 0, stagger: 0.1, delay: 0.5 }
        );

        gsap.from(
            '.pricing p , .pricing span , .pricing h3, .btn-block',
            { y: 10, opacity: 0, stagger: 0.1, delay: 0.5 }
        );

        gsap.from('.main-img', {
            y: 100, opacity: 0, duration: 1, delay: 1
        });

        gsap.from('.swiper-thumbs', {
            y: 20, opacity: 0, delay: 0.5
        })

