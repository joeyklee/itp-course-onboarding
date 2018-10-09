// var Component = require('choo/component')
var html = require('choo/html')

function showProperties(resourceProps){
  if(resourceProps != undefined){
    return html`
    <div class="flex flex-column ml4">
      <p class="ma0">Approval: <i> ${resourceProps.status} </i></p>
      <p class="ma0">NYU Statements: ${resourceProps.nyu_statements == true ? "✅" : "⭕️" }</p>
      <p class="ma0">Valid Course URL: ${resourceProps.course_url == true ? "✅" : "⭕️" }</p>
      <p class="ma0">Open Courseware: ${resourceProps.open_access == true ? "✅" : "⭕️" }</p>
      <p class="ma0">Course Policies: ${resourceProps.course_policies == true ? "✅" : "⭕️" }</p>
      <p class="ma0">Web Accessibility Check: ${resourceProps.web_accessibility_url == "" ? "No Link Submitted" : html`<a href='resourceProps.web_accessibility_url'>Check URL</a>` }</p>
    </div>
    `
  }
}

/**

nyu_statements
course_url
open_access
course_policies
web_accessibility_url
web_accessibility_score

 */


function LinksFromData(id, state, emit, url){

  return html`
    <section class="w-100 flex flex-column">
          ${state.content.filter( item => item.url == url)[0].resources.map( item => html`
            <div>
              <h2><a class="link black hover-bg-light-blue" href='#${item.url.split("#")[1]}'>${item.title}</a></h2>
              ${item.resources.map( resource => html`
                  <div>
                    <h3><a href=${resource.url} target="_blank">${resource.title}</a></h3>
                    ${ showProperties(resource.properties) }
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
