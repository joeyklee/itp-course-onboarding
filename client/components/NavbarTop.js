// var Component = require('choo/component')
var html = require('choo/html')


function NavbarTop(id, state, emit){
  return html`
    <nav>
      <a href="/">intro</a>
      <a href="/home">→ home</a>
      <a href="/notes">→ tips &notes</a>
      <a href="/templates">→ templates</a>
      <a href="/validate">→ validator</a>
      <a href="/browse">→ browse courses</a>
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
