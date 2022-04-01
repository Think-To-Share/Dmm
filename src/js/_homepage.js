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