var html = require("choo/html")
var css = require("sheetify")


css`
footer{
  min-height:100px;
}
`


module.exports = function(state, emit) {


  return html`
    <footer class="w-100 h4 flex flex-column bg-washed-red pa2 dark-blue">
      <div class="w-100 flex flex-row pa2 pl4">
        <div class="w-40 flex flex-column">
            <small>Doing our best to make better syllabi.</small>
            <small>Made with ♡ using Choo.js & Feathers.js.</small>
        </div>
        <div class="w-60 pl2 pr4 flex flex-row justify-between">
          <div>
            <ul class="list ma0 pl0">
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
          <div>
            <ul class="list ma0 pl0">
              <li>report issue</li>
              <li>contribute</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `
}
