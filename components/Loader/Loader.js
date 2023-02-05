class Loader {
  handleClear() {
    ROOT_LOADER.innerHTML = '';
} 

  render() {
      const html = `
        <div class="loader-container">
          <img class="loader__img" src="components/Loader/img/loader.svg" />
        </div>
      `;

      ROOT_LOADER.innerHTML = html;
  }
}

const loaderComponent = new Loader();