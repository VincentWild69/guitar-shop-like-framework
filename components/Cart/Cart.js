class Cart {
  handleClear() {
    ROOT_CART.innerHTML = '';
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
        if (productsStore.indexOf(id) !== -1) {
            htmlCatalog += `
                <tr>
                    <td class="cart-element__name">⚡️ ${name}</td>
                    <td class="cart-element__price">${price.toLocaleString()} USD</td>
                </tr>
            `;
            sumCatalog += price;
        }
    });
    
    const html = `
      <div class="cart-container">
          <div class="cart__close" onclick="cartComponent.handleClear();"></div>
          <table class="cart-table">
              ${htmlCatalog}
              <tr class="cart-element__last">
                  <td class="cart-element__name">💥 TOTAL:</td>
                  <td class="cart-element__price cart-element__price_total">${sumCatalog.toLocaleString()} USD</td>
              </tr>
          </table>
      </div>
    `;

    ROOT_CART.innerHTML = html;
  }
}

const cartComponent = new Cart();