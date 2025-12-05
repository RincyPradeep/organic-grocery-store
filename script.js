//  Swiper JS 
        // Category Slider 
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 8,
            spaceBetween: 20,  
            navigation: {
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
            },
        });

        // Featured Products Slider
        const swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            navigation: {
                nextEl: ".btn-next2",
                prevEl: ".btn-prev2",
            },
        });

        // Popular Products Slider
        const swiper3 = new Swiper(".mySwiper3", {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            navigation: {
                nextEl: ".btn-next3",
                prevEl: ".btn-prev3",
            },
        });

        // Just arrived products Slider
        const swiper4 = new Swiper(".mySwiper4", {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            navigation: {
                nextEl: ".btn-next4",
                prevEl: ".btn-prev4",
            },
        });