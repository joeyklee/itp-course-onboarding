var html = require('choo/html')
var NavbarTop = require('../components/NavbarTop')

var TITLE = 'client - main'

module.exports = view

let circleStyle = `width:50px; height:50px; border-radius:50%;border:4px solid #111111; background-color:#FFFFFF;`
let lineStyle = `position:relative; margin:0 auto; width:14px; height:100%; background-color:#111111; display:flex; flex-direction:column; justify-content:center; align-items:center`
let boxStyle = `width:160px; height:160px; border:2px solid black;display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding: 2px; margin-right:4px; margin-top:4px;`


function contentSection(contentData){
  return html`
    <section class="w-100 flex flex-row align-center">
      <div class="w-40-s w-20-m w-20-l flex flex-column justify-center">
          <div style="${lineStyle}">
            <div style="${circleStyle}"></div>
          </div>
      </div>
      <div class="w-60-s w-80-m w-80-l ml2 flex flex-column">
          <h2><a class="link black hover-bg-light-blue" href="${contentData.url}">${contentData.title}</a></h2>
          <div class="flex flex-row flex-wrap">
          ${contentData.resources.map(item => html`
            <div style=${boxStyle}>
              <h3><a class="link black" href="${item.url}">${item.title}</a></h3>
            </div>
            `)}
          </div>
      </div>
    </section>
  `
}


function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy w-100 h-100 center">
      <main class="pa3 cf center  w-60-l w-60-m w-100-s mb6">
        ${NavbarTop("NavbarTop", state, emit)}
        <ol>
          <li>Read the helpful notes</li>
          <li>Use a template to create your course</li>
          <li>Use the course validator to check that your course is ready to go</li>
          <li>See your course & others highlighted on our page</li>
        </ol>

        <section class="w-100 flex flex-column">
          ${state.content.map( item => contentSection(item)) }
        </section>
      </main>
    </body>
  `
}


/**

<section class="fl mw6 w-50-m w-third-l pa3">
  <h2>1.</h2>
  <p>
    Welcome to your new Choo application.
    We're very happy you've made it this far.
  </p>

  <p>
    You're now in control of your own Choo app. The moment you decide to
    deploy it, it'll work offline and on any device.
  </p>

  <br>
</section>


 */
