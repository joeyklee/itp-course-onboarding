// var Component = require('choo/component')
var html = require('choo/html')


function LinksFromData(id, state, emit, url){

  return html`
    <section class="w-100 flex flex-column">
          ${state.content.filter( item => item.url == url)[0].resources.map( item => html`
            <div>
              <h2><a class="link black hover-bg-light-blue" href='#${item.url.split("#")[1]}'>${item.title}</a></h2>
              ${item.resources.map( resource => html`
                  <div>
                    <a href=${resource.url} target="_blank">${resource.title}</a>
                    <p></p>
                  </div>
                `)}
            </div>
            `)}
    </section>
  `
}

// class LinksFromData extends Component {
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

module.exports = LinksFromData
