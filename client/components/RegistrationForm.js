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
    emit("auth:signup", formData)
  }

  return html `
    <form class="w-100 mt1" id="signup" onsubmit=${onSubmit}>
      <input class="w-100 pa2 br2 ba b--dark-blue dark-blue bg-washed-yellow" name="email" type="email" placeholder="youremail@email.com" onkeyup=${handleChange}>
      <input class="w-100 mt1 pa2 br2 ba b--dark-blue dark-blue bg-washed-yellow" name="password" type="password" placeholder="supersecretpassword" onkeyup=${handleChange}>
      <input class="pa2 mt2 br2 ba b--dark-blue dark-blue bg-washed-yellow" type="submit" value="Signup!">
    </form>
    `
}
