const api = require("../components/feathersClientApi")

module.exports = store


function store (state, emitter) {

   state.user = {
    authenticated: false,
    loginModal: false,
    logoutBtn: false,
    signupModal: false
  }

  emitter.on('DOMContentLoaded', function () {

    emitter.on('user:loginModal', function (count) {

      let el = document.querySelector("#loginModal")

      if(state.user.loginModal === true){
          el.classList.add("dn")
      } else{
          el.classList.remove("dn")
      }

      state.user.loginModal = !state.user.loginModal;
      emitter.emit(state.events.RENDER)
    })

    emitter.on("auth:login", function(formData){
      if(!formData){
        // try to auth using JWT from local Storage
        api.authenticate().then( () => {
            console.log("brilliant! you're auth'd!")
            emitter.emit("pushState", "messages")
        })
      } else{
        // If we get login information, add the strategy we want to use for login
        let credentials = {
          email: formData.get("email"),
          password: formData.get("password")
        }
        // create the payload
        const payload = Object.assign({ strategy: 'local' }, credentials);

        // call authenticate!
        api.authenticate(payload).then(() => {
        // Logged in
          console.log("logged in!")
          emitter.emit("pushState", "create")
        }).catch(e => {
          // Show login page (potentially with `e.message`)
          console.error('Authentication error', e);
          emitter.emit("pushState", "/")
        });
      }

    });

    emitter.on("auth:signup", function(formData){

        let credentials = {
          email: formData.get("email"),
          password: formData.get("password")
        }

        api.service('users').create(credentials).then( () => {
          console.log("sign up successful yo!")
          emitter.emit("auth:login", formData)
        }).catch( err => {
          console.log(err);
        })

    });

    emitter.on("auth:logout", function(formData){
      emitter.emit("pushState", "auth")
    });



  })
}
