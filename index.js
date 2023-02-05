
function render() {
  const products = localStorageUtil.getProducts();

  headerComponent.render(products.length);
	productsComponent.render();	
}

loaderComponent.render();

let CATALOG = [];

fetch('server/catalog.json')
  .then((res) => res.json())
  .then((data) => {
    CATALOG = data;
    setTimeout(() => {
      loaderComponent.handleClear();
      render();
    }, 1000)

  })
  .catch((err) => {
    loaderComponent.handleClear();
    errorComponet.render(err);
  });