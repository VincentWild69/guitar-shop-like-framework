class Products {
  constructor() {
    this.classNameActive = 'products-element__btn_active';
    this.labelAdd = 'Add to cart';
    this.labelRemove = 'Delete from cart';
  }

  handlerSetLocatStorage(element, id) {
    const { pushedProduct, products } = localStorageUtil.putProduct(id);

    if (pushedProduct) {
      element.classList.add(this.classNameActive);
      element.innerText = this.labelRemove;
    } else {
        element.classList.remove(this.classNameActive);
        element.innerText = this.labelAdd;
    }

    headerComponent.render(products.length);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';

    CATALOG.forEach((item) => {
      const { id, name, price, img } = item;
      let activeClass = '';
      let buttonText = '';

      if (productsStore.indexOf(id) === -1) {
        buttonText = this.labelAdd;
      } else {
        buttonText = this.labelRemove;
        activeClass = ' ' + this.classNameActive;
      }
      
      htmlCatalog += `
          <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src="${img}" />
            <span class="products-element__price">
                ⚡️ ${price.toLocaleString()} USD
            </span>
            <button class="products-element__btn${activeClass}" onclick="productsComponent.handlerSetLocatStorage(this, '${id}');">
                ${buttonText}
            </button>
        </li>   
      `;
    });

    const html = `<ul class="products-container">${htmlCatalog}</ul>`;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsComponent = new Products();