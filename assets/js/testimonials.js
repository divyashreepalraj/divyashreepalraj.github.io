/**
 * TESTIMONIALS CAROUSEL ENGINE
 * Divya Shree P - Portfolio Website
 */

export const initTestimonials = () => {

    const container = document.querySelector(
        '.testimonial-carousel-container'
    );

    const track = document.querySelector(
        '.testimonial-track'
    );

    const prevBtn = document.querySelector(
        '.carousel-btn-prev'
    );

    const nextBtn = document.querySelector(
        '.carousel-btn-next'
    );

    const dotsContainer = document.querySelector(
        '.carousel-dots'
    );

    if (!container || !track) return;

    const cards = Array.from(
        track.querySelectorAll('.testimonial-card')
    );

    if (!cards.length) return;


    /* =====================================================
       DYNAMIC STAR RATINGS
    ===================================================== */

    const renderRatings = () => {

        const ratings = document.querySelectorAll(
            '.testimonial-rating'
        );

        ratings.forEach((ratingElement) => {

            const rating = Math.max(
                0,
                Math.min(
                    5,
                    parseFloat(
                        ratingElement.dataset.rating
                    ) || 0
                )
            );

            ratingElement.innerHTML = '';

            for (let i = 1; i <= 5; i++) {

                const star =
                    document.createElement('span');

                star.className = 'rating-star';

                /*
                 * Full star
                 */
                if (rating >= i) {

                    star.classList.add('full');

                /*
                 * Half star
                 */
                } else if (rating >= i - 0.5) {

                    star.classList.add('half');

                /*
                 * Empty star
                 */
                } else {

                    star.classList.add('empty');

                }

                star.textContent = '★';

                ratingElement.appendChild(star);

            }

            ratingElement.setAttribute(
                'aria-label',
                `${rating} out of 5 stars`
            );

        });

    };

    renderRatings();


    /* =====================================================
       STATE
    ===================================================== */

    let currentIndex = 0;

    let cardsPerView = 2;

    let autoSlideTimer = null;

    let resizeTimer = null;

    const AUTOPLAY_INTERVAL = 5000;


    /* =====================================================
       RESPONSIVE CARDS PER VIEW
    ===================================================== */

    const getCardsPerView = () => {

        if (window.innerWidth >= 768) {
        return 2;
    }

    return 1;

    };


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const isReducedMotion = () => {

        return window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

    };


    /* =====================================================
       MAX INDEX
    ===================================================== */

    const getMaxIndex = () => {

        return Math.max(
            0,
            cards.length - cardsPerView
        );

    };


    /* =====================================================
       PAGE COUNT
    ===================================================== */

    const getPageCount = () => {

    return Math.max(
        1,
        Math.ceil(
            cards.length / cardsPerView
        )
    );

};

    /* =====================================================
       CURRENT PAGE
    ===================================================== */

    const getCurrentPage = () => {

    const maxIndex = getMaxIndex();

    if (currentIndex >= maxIndex) {
        return getPageCount() - 1;
    }

    return Math.floor(
        currentIndex / cardsPerView
    );

};


    /* =====================================================
       CREATE DOTS
    ===================================================== */

    const createDots = () => {

        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';

        const pageCount =
            getPageCount();

        if (pageCount <= 1) return;


        for (let i = 0; i < pageCount; i++) {

            const dot =
                document.createElement('button');

            dot.type = 'button';

            dot.className =
                `carousel-dot ${
                    i === getCurrentPage()
                        ? 'active'
                        : ''
                }`;

            dot.setAttribute(
                'aria-label',
                `Go to testimonial slide ${i + 1}`
            );

            dot.setAttribute(
                'aria-selected',
                i === getCurrentPage()
                    ? 'true'
                    : 'false'
            );


            dot.addEventListener(
                'click',
                () => {

                    currentIndex =
                        Math.min(
                            i * cardsPerView,
                            getMaxIndex()
                        );

                    updateSlider();

                    restartAutoSlide();

                }
            );


            dotsContainer.appendChild(dot);

        }

    };


    /* =====================================================
       GET ACTUAL CARD WIDTH
    ===================================================== */

    const getCardWidth = () => {

        if (!cards[0]) return 0;

        return cards[0]
            .getBoundingClientRect()
            .width;

    };


    /* =====================================================
       GET ACTUAL GAP
    ===================================================== */

    const getGap = () => {

        const styles =
            window.getComputedStyle(track);

        return parseFloat(styles.gap) || 0;

    };


    /* =====================================================
       UPDATE SLIDER
    ===================================================== */

    const updateSlider = (
        animate = true
    ) => {

        const maxIndex =
            getMaxIndex();


        /* Keep index valid */

        currentIndex =
            Math.max(
                0,
                Math.min(
                    currentIndex,
                    maxIndex
                )
            );


        /*
         * Measure the REAL rendered
         * card width.
         */

        const cardWidth =
            getCardWidth();

        const gap =
            getGap();


        /*
         * Distance to move one card.
         */

        const step =
            cardWidth + gap;


        const moveDistance =
            currentIndex * step;


        /*
         * Respect reduced motion.
         */

        if (
            !animate ||
            isReducedMotion()
        ) {

            track.style.transition =
                'none';

        } else {

            track.style.transition =
                'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)';

        }


        track.style.transform =
            `translate3d(-${moveDistance}px, 0, 0)`;


        /* =================================================
           UPDATE DOTS
        ================================================= */

        if (dotsContainer) {

            const currentPage =
                getCurrentPage();

            const dots =
                Array.from(
                    dotsContainer.children
                );


            dots.forEach(
                (dot, index) => {

                    const active =
                        index === currentPage;

                    dot.classList.toggle(
                        'active',
                        active
                    );

                    dot.setAttribute(
                        'aria-selected',
                        active
                            ? 'true'
                            : 'false'
                    );

                }
            );

        }

    };


    /* =====================================================
       NEXT
    ===================================================== */

    const nextSlide = () => {

        const maxIndex =
            getMaxIndex();


        if (currentIndex >= maxIndex) {

            currentIndex = 0;

        } else {

            currentIndex =
                Math.min(
                    currentIndex +
                    cardsPerView,
                    maxIndex
                );

        }


        updateSlider();

    };


    /* =====================================================
       PREVIOUS
    ===================================================== */

    const previousSlide = () => {

        const maxIndex =
            getMaxIndex();


        if (currentIndex <= 0) {

            currentIndex = maxIndex;

        } else {

            currentIndex =
                Math.max(
                    0,
                    currentIndex -
                    cardsPerView
                );

        }


        updateSlider();

    };


    /* =====================================================
       AUTOPLAY
    ===================================================== */

    const startAutoSlide = () => {

        if (
            isReducedMotion() ||
            autoSlideTimer
        ) {
            return;
        }


        autoSlideTimer =
            setInterval(
                nextSlide,
                AUTOPLAY_INTERVAL
            );

    };


    const stopAutoSlide = () => {

        if (!autoSlideTimer) return;

        clearInterval(
            autoSlideTimer
        );

        autoSlideTimer = null;

    };


    const restartAutoSlide = () => {

        stopAutoSlide();

        startAutoSlide();

    };


    /* =====================================================
       BUTTONS
    ===================================================== */

    prevBtn?.addEventListener(
        'click',
        () => {

            previousSlide();

            restartAutoSlide();

        }
    );


    nextBtn?.addEventListener(
        'click',
        () => {

            nextSlide();

            restartAutoSlide();

        }
    );


    /* =====================================================
       HOVER PAUSE
    ===================================================== */

    container.addEventListener(
        'mouseenter',
        stopAutoSlide
    );


    container.addEventListener(
        'mouseleave',
        startAutoSlide
    );


    /* =====================================================
       FOCUS PAUSE
    ===================================================== */

    container.addEventListener(
        'focusin',
        stopAutoSlide
    );


    container.addEventListener(
        'focusout',
        startAutoSlide
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        'resize',
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        const newCardsPerView =
                            getCardsPerView();


                        /*
                         * Rebuild carousel when
                         * breakpoint changes.
                         */

                        if (
                            newCardsPerView !==
                            cardsPerView
                        ) {

                            cardsPerView =
                                newCardsPerView;

                            currentIndex = 0;

                            createDots();

                        }


                        /*
                         * Recalculate actual
                         * card dimensions.
                         */

                        updateSlider(false);

                    },
                    150
                );

        }
    );


    /* =====================================================
       TOUCH SWIPE
    ===================================================== */

    let touchStartX = 0;

    let touchCurrentX = 0;

    let isTouching = false;


    track.addEventListener(
        'touchstart',
        (event) => {

            touchStartX =
                event.touches[0]
                    .clientX;

            touchCurrentX =
                touchStartX;

            isTouching = true;

            stopAutoSlide();

        },
        {
            passive: true
        }
    );


    track.addEventListener(
        'touchmove',
        (event) => {

            if (!isTouching) return;

            touchCurrentX =
                event.touches[0]
                    .clientX;

        },
        {
            passive: true
        }
    );


    track.addEventListener(
        'touchend',
        () => {

            if (!isTouching) return;

            isTouching = false;


            const difference =
                touchStartX -
                touchCurrentX;


            const SWIPE_THRESHOLD = 40;


            if (
                Math.abs(difference) >=
                SWIPE_THRESHOLD
            ) {

                if (difference > 0) {

                    nextSlide();

                } else {

                    previousSlide();

                }

            }


            restartAutoSlide();

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    cardsPerView =
        getCardsPerView();

    createDots();


    /*
     * Wait until layout is fully calculated.
     */

    requestAnimationFrame(
        () => {

            updateSlider(false);

            startAutoSlide();

        }
    );

};