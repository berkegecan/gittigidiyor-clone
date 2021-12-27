/*** Slider Tabs ***/
var triggerTabList = [].slice.call(document.querySelectorAll('#slider1 button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

/*** Fiyat Swiper Slider ***/
var swiper = new Swiper(".fiyatSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5400,
    disableOnInteraction: false,
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/** Urun Swiper **/
var swiper = new Swiper(".urunSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".urunSwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});