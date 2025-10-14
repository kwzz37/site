import Splide from '@splidejs/splide';

new Splide( '.splide' ).mount();

new Splide( '#slider1' ).mount();

new Splide( '#slider2' ).mount();

new Splide( '#slider3' ).mount();

var splide = new Splide( '.splide', {
  direction: 'ttb',
  height   : '10rem',
  wheel    : true,
} );

splide.mount();