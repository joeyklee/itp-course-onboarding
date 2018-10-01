var html = require('choo/html')
var component = require('choo/component');


module.exports = function(name, state, emit){

  return html`
    <div>
      <h1>Syllabus - edit </h1>



      <button onclick= ${() => emit("syllabus:add") }>Add!</button>
    </div>
  `
}
