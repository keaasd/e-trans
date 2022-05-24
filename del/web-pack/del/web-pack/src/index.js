import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';
import $ from 'jquery';

import Swiper, { Navigation, Pagination } from 'swiper';




// Swiper свайпер
var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],  
    breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 1
        },
        1121: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 3
        }
      }
});
// trands
var swiper = new Swiper(".trandsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 1
      }
    }
});
let tabButton = document.querySelector('.category__button');
let gridItem = document.querySelectorAll('.catalog-grid__item');
// по клику на кнопку (tabButton) добавляем класс (active display: block) к табличкам (catalog-grid__item)

tabButton.onclick = () => {
  for (let i = 0; i < gridItem.length; i++) {
    if (i < 8) {
      gridItem[i].classList.add('catalog-grid_active')
    }
    
  }

}
// const hidd = for (let i = 0; i < gridItem.length; i++) {
//   if (i < 8) {
//     gridItem[i].classList.add('catalog-grid_active')
//   }

//  gridItem.length(4).classList.add('hidden');
//  let gridItems = gridItem.length(4);
//  tabButton.onclick = () => {
//    for (let i = 0; i < gridItem.length; i++) {
//      if (i < 8) {
//        gridItem[i].classList.add('catalog-grid_active')
//      }
     
//    }
//   }
 
	// клик мышкой несколько обработчиков события

	//  tabButton.addEventListener('click', () => {
  //     gridItem.classList.add('catalog-grid_active')
  //   })