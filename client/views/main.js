var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var LoginModal = require("../components/LoginModal")

var TITLE = 'client - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  function handleChange(e){
    // e.preventDefault();
    console.log("value changing!")
  }

  function onSubmit(e){
    e.preventDefault();
    var form = e.currentTarget
    var formData = new FormData(form)
    console.log(formData.get("email"))
    console.log(formData.get("password"))
    console.log("login clicked!")
    console.log(e.target)

    if(e.target.id == "signup") {
      emit("auth:signup", formData)
    }

  }



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
              <form class="w-100 mt1" id="signup" onsubmit=${onSubmit}>
                <input class="w-100 pa2 br2 ba b--dark-blue dark-blue bg-washed-yellow" name="email" type="email" placeholder="youremail@email.com" onkeyup=${handleChange}>
                <input class="w-100 mt1 pa2 br2 ba b--dark-blue dark-blue bg-washed-yellow" name="password" type="password" placeholder="supersecretpassword" onkeyup=${handleChange}>
                <input class="pa2 mt2 br2 ba b--dark-blue dark-blue bg-washed-yellow" type="submit" value="Signup!">
              </form>
            </div>
          </div>
        </div> <!-- row1 -->
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom", state, emit)}
      ${state.cache(LoginModal, "LoginModal", state, emit)}
    </body>
  `
}
