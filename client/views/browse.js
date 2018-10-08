var html = require('choo/html')

module.exports = view

function view (state, emit) {
  return html`
  <body class="code lh-copy">
    <main class="pa3 cf center">
      <h1>Hello!</h1>
    </main>
  </body>
  `
}
