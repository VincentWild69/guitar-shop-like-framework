class Error {
  render(err) {
    const html = `
      <div class="error-container">
            <div class="error-message">
                <h3>Something goes wrong</h3>
                <p>Try later</p>
                <p>${err || ''}</p>
            </div>
      </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorComponet = new Error();

