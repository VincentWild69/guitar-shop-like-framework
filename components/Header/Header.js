class Header {
  handlerOpenCart() {
    cartComponent.render();
  }

  render(count) {
    const html = `
    <div class="header-container">
        <div class="header-counter" onclick="headerComponent.handlerOpenCart();">
            🔥 ${count}
        </div>
    </div>
`;

ROOT_HEADER.innerHTML = html;
  }
}

const headerComponent = new Header();