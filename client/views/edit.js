var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var LoginModal = require("../components/LoginModal")

var TITLE = 'client - edit'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  let toggleLoginModal = function(){
    emit("user:loginModal")
  }

  // let selectedData = state[state.params.featureType].filter( (feat) => feat.id === state.params.featureId )[0]
  console.log(state.params.featureId)

  let selectedDataId = state.params.featureId

  state.editing.syllabusId = selectedDataId

  let selectedData = state.syllabi.filter( (feat) => feat._id === state.params.featureId )[0]

  console.log(selectedData)

  
  return html`
  <body class="code w-100 h-100 bg-washed-yellow flex flex-column items-center">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto mt2 mb2 pr4 pl4 dark-blue" style="flex-grow:1; max-width:1200px">
        <h1>Edit</h1>
        <div id="syllabus">

        </div>

      </main>
      ${state.cache(NavbarBottom, "NavbarBottom", state, emit)}
      ${state.cache(LoginModal, "LoginModal", state, emit)}
    </body>
  `
}
