var html = require('choo/html')
var Syllabus = require("../components/syllabus")
var TITLE = 'client - edit'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        ${state.cache(Syllabus, "Syllabus", state, emit)}
      </main>
    </body>
  `

}
