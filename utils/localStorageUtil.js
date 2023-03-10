class LocalStorageUtil {
  constructor() {
    this.keyName = 'products'
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  };

  putProduct(id) {
    const products = this.getProducts();
    let pushedProduct = false;

    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      pushedProduct = true;
    } else {
      products.splice(index, 1)
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return {
      pushedProduct,
      products
    }
  };
};

const localStorageUtil = new LocalStorageUtil();
