var html = require('choo/html');
var NavbarTop = require('../components/NavbarTop');
var css = require('sheetify');

module.exports = view

css`
.alternate{
  animation-name: swing;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;

  animation-direction: alternate;
}

@keyframes swing{
  0%{
    transform: translateX(0px);
  }
  100%{
    transform: translateX(10px);
  }
}

`
function view (state, emit) {
  return html`
    <body class="code lh-copy w-100 h-100 center">
      <main class="pa3 cf center  w-60-l w-60-m w-100-s mb6">
        ${NavbarTop("NavbarTop", state, emit)}
        <div class="flex flex-column mt4">
          <p>Hello there!</p>
          <p>We’re so very excited that you’re teaching at ITP.</p>
          <p>As part of our community, you are helping to drive a larger movement of educators, artists, designers, and wonderhumans dedicated to supporting a healthy, inclusive, & accessible learning environment on- and off-line.</p>
          <p>The resources on this site are meant to help ensure your course is as enjoyable and insightful as it is welcoming to people of all backgrounds, skills, and needs.</p>
          <p>Welcome to ITP!</p>
        </div>

        <div class="w-100 flex flex-column items-end">
        <div class="tr">

          <p>Sincerely, <br> The ITP Community</p>

        </div>
          <button style="" onclick="${() => emit('pushState','home')}" class="alternate pa3 bg-yellow ba b--black bw2">Super! Let's get started!</button>
        </div>

      </main>
    </body>
  `
}
