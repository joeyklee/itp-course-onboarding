var html = require('choo/html')
var Overview = require("../components/overview")
var NavbarTop = require("../components/navbarTop")
var TITLE = 'client - overview'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      ${state.cache(NavbarTop, "NavbarTop", state, emit)}
      <main class="pa3 cf center">
        ${state.cache(Overview, "Overview", state, emit)}

        <ul>
          ${state.syllabi.map( (syllabus) => html`
              <li>${syllabus.title}</li>
            `)}
        </ul>
      </main>
    </body>
  `

}
