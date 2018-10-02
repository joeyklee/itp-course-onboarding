var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var LoginModal = require("../components/LoginModal")
var RegistrationForm = require("../components/RegistrationForm")

var TITLE = 'client - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  let toggleLoginModal = function(){
    emit("user:loginModal")
    emit("user:checkStatus")
  }

  return html`
  <body class="code w-100 h-100 bg-washed-yellow flex flex-column items-center">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto mt2 mb2 pr4 pl4 dark-blue" style="flex-grow:1; max-width:1200px">
        <!-- row1 -->
        <div class="w-100 h-100 flex flex-row items-center justify-center">
          <!-- left -->
          <div class="pa4 flex flex-column bg-washed-yellow w-60-l h-100 justify-center">
            <h1 class="pa0 ma0 f1 lh-solid">Welcome to the ITP Syllabus Maker!</h1>
            <p>This is a tool to help you create a course syllabus for the ITP program at NYU.</p>
          </div>
          <!-- right -->
          <div class="pa4 flex flex-column bg-washed-yellow w-40-l h-100 justify-center">
            <div class="flex flex-column w-100 pa4 br2 bg-washed-dark-blue dark-blue">
              <p class="f4 lh-copy">Join the community and start building!</p>
              ${state.cache(RegistrationForm, "RegistrationForm", state, emit)}
            </div>
          </div>
        </div> <!-- row1 -->
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom", state, emit)}
      ${state.cache(LoginModal, "LoginModal", state, emit)}
    </body>
  `
}
