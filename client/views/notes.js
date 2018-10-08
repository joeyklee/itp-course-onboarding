var html = require('choo/html')
var NavbarTop = require('../components/NavbarTop')
var LinksFromData = require('../components/LinksFromData')


module.exports = view

// function scrollToView(id){
//   let el = document.querySelector(id);
//   el.scrollIntoView();
// }



function view (state, emit) {
  return html`
    <body class="code lh-copy w-100 h-100 center">
      <main class="pa3 cf center  w-60-l w-60-m w-100-s">
        ${NavbarTop("NavbarTop", state, emit)}

        ${LinksFromData("NotesLinks",state, emit, "/notes" )}

      </main>
    </body>
  `
}


/**

<section class="w-100 flex flex-column">
  ${state.content.filter( item => item.url == "/notes")[0].resources.map( item => html`
      <div id='${item.url.split("/")[1]}'>${item.title}</div>
    `)}
</section>

 */
