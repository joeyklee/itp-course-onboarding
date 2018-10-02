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
  }



  return html`
  <body class="code w-100 h-100 bg-washed-yellow flex flex-column items-center">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto mt2 mb2 pr4 pl4 dark-blue" style="flex-grow:1; max-width:1200px">
        <h1>Create</h1>
        <p>
          Here's a list of your current courses.
        </p>
        <div>
          <button onclick= ${() => emit("db:add") }>Add!</button>
        </div>
        <ul>
          ${state.syllabi.map( (syllabus) => html`
              <li><a href="/edit/${syllabus._id}" onclick=${() => emit("db:get", syllabus._id) }>${syllabus.title}</a></li>
            `)}
        </ul>
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom", state, emit)}
      ${state.cache(LoginModal, "LoginModal", state, emit)}
    </body>
  `
}
