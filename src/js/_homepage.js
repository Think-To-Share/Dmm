import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.dmm-hero-section')) {
    tns({
        container: '.dmm-hero-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        controls:false,
        autoplayTimeout:5000,
        autoplayButtonOutput: false,
    })
}

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

if (document.querySelector('.testimonials-section')) {
    // hide all hero text
    const heroText = document.querySelectorAll('.testimonial-text-main p')
    heroText.forEach(text => {
        text.style.display = 'none'
    })
    
    const heroSlider = tns({
        container: '.testimonials-section .testimonials',
        items: 1,
        nav: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
    })
    // show first hero text
    heroText[0].style.display = 'block'

    // show hero text on slide change
    heroSlider.events.on('indexChanged', (info) => {
        const text = heroText[info.index - 1]

        if(text) {
            heroText.forEach(text => {
                text.style.display = 'none'
            })

            text.style.display = 'block'

            // animate hero text
            text.classList.add('animate__animated', 'animate__slideInRight')
            text.style.setProperty('--animate-duration', '0.5s');
            text.addEventListener('animationend', () => {
                text.classList.remove('animate__animated', 'animate__slideInRight');
            })
        }
    })
}

if (document.querySelector('.testimonial-box-sec')) {
    tns({
        container: '.testimonial-box-sec .slides',
        items: 1,
        nav: false,
        autoplay: true,
        controls:false,
        autoplayTimeout:5000,
        autoplayButtonOutput: false,
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
            992:{
            items: 3,
            },
        }
    })

    // document.querySelectorAll('.main-text-area .text-area p').forEach(p => {
    //     p.classList.add('hide')
    // });
    
    slider.events.on('indexChanged', (info) => {
    document.querySelectorAll('.case-studies-section .slider-container .slides .slide p').forEach(slide => {
        slide.style.opacity = '0'
    });
        const activeSlide = info.slideItems[info.index];
        activeSlide.querySelector('p').style.opacity = '1'
    })
}

