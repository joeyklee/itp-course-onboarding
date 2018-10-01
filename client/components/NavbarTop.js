var html = require("choo/html")

var LoginModal = require("./LoginModal");

var css = require("sheetify")

css`
header{
  min-height:90px;
}
`


module.exports = function(name, state, emit) {

  let toggleLoginModal = function(e){
    emit("user:loginModal")
  }

  let loginBtn = function(){
    if(state.authenticated === true){
      return html`<li> <a href="/">logout</a> </li>`
    }else{
      return html`<li> <a onclick=${toggleLoginModal}>login</a> </li>`
    }
  }


  return html`
  <header class="flex flex-row w-100 h2 bg-washed-red dark-blue">
    <nav class="z-1 flex flex-row w-100 h-100 justify-between pl4 pr4 pt2 pb2">
      <ul class="flex flex-row items-center navRight list ma0 pa0 h-100">
        <li class="mr4 f3"><a class="link dark-blue hover-bg-light-blue" href="/">ITP Syllabus Maker</a></li>
        <li class="mr4"><a class="link dark-blue" href="/create">create</a></li>
      </ul>
      <ul class="navLeft flex flex-row items-center navRight list ma0 h-100">
        <li>${loginBtn()}</li>
      </ul>
    </nav>
  </header>
  `
}
