var html = require("choo/html");


module.exports = function(name, state, emit){


  function handleChange(e){
    // e.preventDefault();
    console.log("value changing!")
  }

  function onSubmit(e){
    e.preventDefault();
    var form = e.currentTarget
    var formData = new FormData(form)
    // console.log(formData.get("email"))
    // console.log(formData.get("password"))
    // console.log("login clicked!")
    // console.log(e.target)
    emit("auth:login", formData)
    // TODO: make sure only to redirect if auth'd
    toggleLoginModal()
  }

  let toggleLoginModal = function(){
    emit("user:loginModal")
  }


  return html`
    <div id="loginModal" class="dn">
    <div class="w-100 h-100 absolute flex flex-column justify-center items-center bg-washed-red dark-blue" style="top:0; left:0">
      <div class="w-40">
        <div class="w-100 flex flex-row items-end justify-end">
          <a class="right" onclick=${toggleLoginModal}>close</a>
        </div>
        <h3>Welcome back lovely person!</h3>
        <form class="w-100 mt1" id="login" onsubmit=${onSubmit}>
          <input name="email" class="w-100 pa2 br2 ba b--dark-blue dark-blue bg-washed-red" type="email" placeholder="youremail@email.com" onkeyup=${handleChange}>
          <input name="password" class="w-100 mt1 pa2 br2 ba b--dark-blue dark-blue bg-washed-red" type="password" placeholder="supersecretpassword" onkeyup=${handleChange}>
          <input class="pa2 mt2 br2 ba b--dark-blue dark-blue bg-washed-red" type="submit" value="Login!">
        </form>
      </div>
    </div>
  `
}
