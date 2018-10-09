var html = require('choo/html')
var NavbarTop = require('../components/NavbarTop')
var LinksFromData = require('../components/LinksFromData')

module.exports = view

function view (state, emit) {
  return html`
  <body class="code lh-copy w-100 h-100 center">
      <main class="pa3 cf center  w-60-l w-60-m w-100-s mb6">
        ${NavbarTop("NavbarTop", state, emit)}
        ${LinksFromData("TemplatesLinks",state, emit, "/templates" )}

      </main>
    </body>
  `
}
