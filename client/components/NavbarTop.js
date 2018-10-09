// var Component = require('choo/component')
var html = require('choo/html')


function NavbarTop(id, state, emit){

  function currentPage(linkRoute){
    console.log(state.route)
    let cleanedRoute = state.route.split("/")[0]
    return cleanedRoute == linkRoute ? "bg-yellow" : ""
  }

  return html`
    <nav class="flex flex-row justify-center flex-wrap ba br2">
      <a class="${currentPage('/')} link black hover-bg-light-blue ml2" tabindex="1" href="/">intro</a>
      <a class="${currentPage('home')} link black hover-bg-light-blue ml2" tabindex="2" href="/home">→ home</a>
      <a class="${currentPage('notes')} link black hover-bg-light-blue ml2" tabindex="3" href="/notes">→ tips</a>
      <a class="${currentPage('templates')} link black hover-bg-light-blue ml2" tabindex="4" href="/templates">→ templates</a>
      <a class="${currentPage('submit')} link black hover-bg-light-blue ml2" tabindex="5" href="/submit">→ submit </a>
      <a class="${currentPage('browse')} link black hover-bg-light-blue ml2" tabindex="6" href="/browse">→ browse</a>
    </nav>
  `
}

module.exports = NavbarTop


// class NavbarTop extends Component {
//   constructor (id, state, emit) {
//     super(id)
//     this.local = state.components[id] = {}
//   }
//
//   createElement () {
//     return html`
//       <div>
//       </div>
//     `
//   }
//
//   update () {
//     return true
//   }
// }
