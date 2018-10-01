var html = require('choo/html')
var component = require('choo/component');


module.exports = function(name, state, emit){


  // on overview get all syllabi
  return html`
    <div>
      <h1>Overview</h1>

      ${console.log("from overview component", state.syllabi) }
      

    </div>
  `
}
