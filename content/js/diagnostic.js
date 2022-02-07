const HeaderComponent = {
  template: `
    <header class="main-header flex items-center justify-center bg-white">
      <a href="index.html"><img src="assets/img/logo.svg" /></a>
    </header>
  `,
};

const ButtonPrimaryComponent = {
  template: `
      <a class="flex items-center justify-center w-max mx-auto tracking-wider h-8 px-6 bg-gray font-DinCondensed text-white cursor-pointer">
        <span><slot></slot></span>
      </a>
    `,
};

const ButtonTertiaryComponent = {
  template: `
    <button class="outline-none inline-block p-3 bg-darkerGray tracking-wider font-DinCondensed text-white text-sm uppercase cursor-pointer active:bg-gray active:text-white">
      <slot></slot>
    </button>
  `,
};

const LinkCarouselComponent = {
  props: ["visible"],
  template: `
    <a v-if="visible" class="font-DinCondensed font-bold outline-none uppercase text-black underline my-6">
      <slot></slot>
    </a>
  `,
};

const CloseButtonComponent = {
  template: `
    <div class="absolute top-4 left-4 cursor-pointer">
        <img class="h-4 w-4" src="./assets/img/icons/close.svg" >
    </div>
    `,
};

const OverlayComponent = {
  template: `
    <div class="absolute top-0 h-screen overflow-hidden w-full bg-white bg-overlay z-40 overlay">
      <slot></slot>
    </div>
`,
};

const ComponentStep1 = {
  template: `
    <div class="flex flex-col items-center justify-center">
      <slot name="answers-1"></slot>
    </div>
  `,
};

const app = new Vue({
  el: "#app",
  components: {
    "header-component": HeaderComponent,
    "button-primary-component": ButtonPrimaryComponent,
    "button-tertiary-component": ButtonTertiaryComponent,
    "link-component": LinkCarouselComponent,
    "close-button-component": CloseButtonComponent,
    "overlay-component": OverlayComponent,
    "component-step-1": ComponentStep1,
  },

  data: {
    overlayHidden: true,
    answerSelected: 0,
    currentStep: 1,
    steps: 1,
    answersOne: [
      {
        id: 1,
        img: "./assets/img/stepper/2-1.jpg",
        title: "darker cooler brown hair",
      },
      {
        id: 2,
        img: "./assets/img/stepper/2-2.jpg",
        title: "intense care and anti frizz action",
      },
      {
        id: 3,
        img: "./assets/img/stepper/2-3.jpg",
        title: "strong fiber and less hair breakage",
      },
    ],

    slideOne: [
      {
        titleTop: "Recommended Routine",
        id: 1,
        subtitle:
          "Based on the answers you provided, we have the perfect Chroma Absolu routine. The Restoring Acid Care for all color-treated hair",
        img: "./assets/img/chroma/CHROMAABSOLU_ROUTINE3.jpg",
      },
      {
        titleTop: "Recommended Routine",
        id: 2,
        title: "Bain Chroma Respect",
        subtitle:
          "Color-protecting shampoo with Amino Acid for all color-treated, fine to medium hair. Free of Sulfates, Paraben and Silicone.",
        img: "./assets/img/carousel/1-1.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 3,
        title: "Masque vert chroma neutralisant",
        subtitle:
          "Intense color-depositing, redd and copper neutralizing masque for all types of dark brunette hair.",
        img: "./assets/img/carousel/1-2.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 4,
        title: "Soin acide chroma gloss",
        subtitle:
          "Resurfacing high shine rinse treatment for all types of color-treated hair.",
        img: "./assets/img/carousel/1-3.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 5,
        title: "Sérum chroma thermique",
        subtitle:
          "Universal anti-frizz antioxidant thermic leave-in serum for all color-treated hair.",
        img: "./assets/img/carousel/1-4.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
    ],
    slideTwo: [
      {
        titleTop: "Recommended Routine",
        id: 1,
        subtitle:
          "Based on the answers you provided, we have the perfect Chroma Absolu routine. The Restoring Acid Care for all color-treated hair.",
        img: "./assets/img/chroma/CHROMAABSOLU_ROUTINE2.jpg",
      },
      {
        titleTop: "Recommended Routine",
        id: 2,
        title: "Bain Riche Chroma Respect",
        subtitle:
          "Color-protecting shampoo with Lactic Acid for all color-treated, fine to trick hair. Free of Sulfates, Paraben and Silicone.",
        img: "./assets/img/carousel/1-5.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 3,
        title: "Fondant Cica Chroma",
        subtitle:
          "Strengthening, color-protecting conditioner for all types of colored, fine to medium hair",
        img: "./assets/img/carousel/1-6.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 4,
        title: "Soin acide chroma gloss",
        subtitle:
          "Resurfacing high shine rinse treatment for all types of color-treated hair.",
        img: "./assets/img/carousel/1-3.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 5,
        title: "Sérum chroma thermique",
        subtitle:
          "Universal anti-frizz antioxidant thermic leave-in serum for all color-treated hair.",
        img: "./assets/img/carousel/1-4.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
    ],
    slideThree: [
      {
        titleTop: "Recommended Routine",
        id: 1,
        subtitle:
          "Based on the answers you provided, we have the perfect Chroma Absolu routine. The ultimate healing care of all types of color treated hair.",
        img: "./assets/img/chroma/CHROMAABSOLU_ROUTINE1.jpg",
      },
      {
        titleTop: "Recommended Routine",
        id: 2,
        title: "Bain Riche Chroma Respect",
        subtitle:
          "Color-protecting shampoo with Lactic Acid for all color-treated, fine to trick hair. Free of Sulfates, Paraben and Silicone.",
        img: "./assets/img/carousel/1-5.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 3,
        title: "Masque Chroma Filler",
        subtitle:
          "Deep filling, color-protecting masque for all types of colored, medium to trick hair",
        img: "./assets/img/carousel/1-7.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 4,
        title: "Soin acide chroma gloss",
        subtitle:
          "Resurfacing high shine rinse treatment for all types of color-treated hair.",
        img: "./assets/img/carousel/1-3.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
      {
        titleTop: "Recommended Routine",
        id: 5,
        title: "Sérum chroma thermique",
        subtitle:
          "Universal anti-frizz antioxidant thermic leave-in serum for all color-treated hair.",
        img: "./assets/img/carousel/1-4.jpg",
        link: "https://hair-salons.kerastase.com/",
      },
    ],
  },

  computed: {
    currentStepComponent: function () {
      return "component-step-" + this.currentStep;
    },
  },

  methods: {
    changeSlider(n) {
      this.answerSelected = n;
      this.currentStep++;
    },
    hideOverlay() {
      this.overlayHidden = !this.overlayHidden;
    },
    resetOverlay() {
      this.overlayHidden = !this.overlayHidden;
      this.currentStep = 1;
      this.answerSelected = 0;
    },
    resetSlider() {
      this.currentStep = 1;
      this.answerSelected = 0;
    },
    answersSelect1() {
      this.answerSelected = 1;
    },
    answersSelect2() {
      this.answerSelected = 2;
    },
    answersSelect3() {
      this.answerSelected = 3;
    },
  },

  updated() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
});
