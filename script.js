// Dropdown menu
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const toggle = document.querySelector(".dropdown-toggle");
    const menu = document.querySelector(".dropdown-menu");

    // Toggle when clicking "PAGES"
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent closing from document click
        menu.classList.toggle("show");
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", () => {
        menu.classList.remove("show");
    });

    // Prevent closing when clicking inside dropdown
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});



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