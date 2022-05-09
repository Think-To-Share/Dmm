import { tns } from 'tiny-slider/src/tiny-slider'
import { FacilityManagement } from './classes/FacilityManagement'

// if (document.querySelector('.dmm-hero-section')) {
//     tns({
//         container: '.dmm-hero-section .slides',
//         items: 1,
//         nav: true,
//         autoplay: true,
//         autoHeight:true,
//         controls:false,
//         autoplayTimeout:5000,
//         autoplayButtonOutput: false,
//     })
// }

if (document.querySelector('.provide-better-section')) {
    tns({
        container: '.provide-better-section .slides',
        items: 1,
        nav: false,
        gutter:40,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        controlsText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>' , '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>'],
        responsive: {
            576:{
            items: 2,
            controls:false,
            },
            992:{
            items: 3,
            controls:true,
            },
        }
    })
}

// if (document.querySelector('.testimonials-section')) {
//     // hide all hero text
//     const heroText = document.querySelectorAll('.testimonial-text-main p')
//     heroText.forEach(text => {
//         text.style.display = 'none'
//     })
    
//     const heroSlider = tns({
//         container: '.testimonials-section .testimonials',
//         items: 1,
//         nav: true,
//         autoplay: true,
//         autoplayButtonOutput: false,
//         controls: false,
//     })
//     // show first hero text
//     heroText[0].style.display = 'block'

//     // show hero text on slide change
//     heroSlider.events.on('indexChanged', (info) => {
//         const text = heroText[info.index - 1]

//         if(text) {
//             heroText.forEach(text => {
//                 text.style.display = 'none'
//             })

//             text.style.display = 'block'

//             // animate hero text
//             text.classList.add('animate__animated', 'animate__slideInRight')
//             text.style.setProperty('--animate-duration', '0.5s');
//             text.addEventListener('animationend', () => {
//                 text.classList.remove('animate__animated', 'animate__slideInRight');
//             })
//         }
//     })
// }

if (document.querySelector('.testimonials-section')) {
    tns({
        container: '.testimonial-text-main .slides',
        items: 1,
        nav: false,
        autoplay: true,
        controls:false,
        autoplayTimeout:5000,
        autoHeight: true,
        autoplayButtonOutput: false,
        navContainer: '.testimonial-left .nav',
    })
}

if (document.querySelector('.case-studies-section')) {
    const slider = tns({
        container: '.case-studies-section .slides',
        items: 2,
        nav: true,
        gutter:35,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        mouseDrag: true,
        center:true,
        responsive: {
            576:{
            items: 3,
            },
        }
    })


    const case_studies_texts = document.querySelectorAll('.case-studies-section .sub-heading .text')
    case_studies_texts.forEach(text => {
        text.classList.add('hide');
    })

    // First slide should be active first
    const active_index = slider.getInfo().index
    case_studies_texts[active_index % case_studies_texts.length].classList.remove('hide')
    
    slider.events.on('indexChanged', (info) => {
        case_studies_texts.forEach(text => text.classList.add('hide'))

        case_studies_texts[info.index % case_studies_texts.length].classList.remove('hide')
    })
  
}
if (document.querySelector('.smart-integrated-section')) {
    new FacilityManagement().init();
}

// topbar
//Get the button
let totop = document.querySelector("#totop");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = () =>{scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    totop.style.display = "block";
  } else {
    totop.style.display = "none";
  }
}

window.addEventListener('load', () => {
    document.querySelector('#totop').addEventListener('click',(e) => {
        e.preventDefault();

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
})

// header space
window.addEventListener('load', () => {
    const header_height = document.querySelector('.dmm-header').offsetHeight
    document.querySelector('.header-space').style.height=`${header_height}px`;
})
