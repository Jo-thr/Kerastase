# Kerastase

## Tech stack

- VueJS
- TailwindCSS (colors, spacing, fonts set in `tailwind.config.js`)

If you want to change anything in the values there, here is the cmd to generate a new tailwind.css file `npx tailwindcss-cli@latest build -c content/tailwind.config.js -o content/styles/tailwind.css`

- HTML5/CSS3

## Librairies used

- AOS (used for the animations on scroll)
  https://github.com/michalsnik/aos

- Scrollactive (used for navigation in page, scroll to section with navigation)
  https://eddiemf.github.io/vue-scrollactive

- img-comparison-slider (used for before/after components)
  https://github.com/sneas/img-comparison-slider

- Swiper (used for the product carousel on top of the page as well as diagnosis and routines sliders)
  https://swiperjs.com/

## Docker

### Build

`docker build -t docker.wdg.cloud/loreal/kerastase .`
