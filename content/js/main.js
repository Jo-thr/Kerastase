const HeaderComponent = {
  template: `
    <header class="main-header flex items-center justify-center bg-white">
      <img src="assets/img/logo.svg" />
    </header>
  `,
};

const ButtonPrimaryComponent = {
  template: `
    <a class="flex items-center justify-center w-100 h-8 mx-8 bg-gray font-DinCondensed text-white cursor-pointer">
      <span><slot></slot></span>
    </a>
  `,
};

const ButtonSecondaryComponent = {
  template: `
    <a class="flex items-center justify-center w-100 h-8 mx-8 bg-white border border-gray font-DinCondensed text-gray cursor-pointer">
      <span><slot></slot></span>
    </a>
  `,
};

const app = new Vue({
  el: "#app",
  components: {
    "header-component": HeaderComponent,
    "button-primary-component": ButtonPrimaryComponent,
    "button-secondary-component": ButtonSecondaryComponent,
  },
});
