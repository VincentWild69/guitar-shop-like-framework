
function render() {
  const products = localStorageUtil.getProducts();

  headerComponent.render(products.length);
	productsComponent.render();	
}

render();