class App {
  constructor() {
    this.$form = document.querySelector('#form');
    this.addEventListerers();
  }

  addEventListerers() {
    document.body.addEventListener('click', (event) => {});
  }

  handleFormClick() {
    this.$form.contains(event.target);
  }
}

new App();
