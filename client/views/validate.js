var html = require('choo/html')
var NavbarTop = require('../components/NavbarTop')


module.exports = view



function view (state, emit) {

  function onSubmit(e){
    e.preventDefault();
    console.log("submit!")

    let form = new FormData(e.target);
    let output = {
        email:form.get("email"),
        course_url:form.get("course_url"),
        open_access:form.get("open_access"),
        nyu_statements:form.get("nyu_statements")
    }
    console.log(output);

    // emit("formData:add", )
    // emit("pushState", "")
  }


  return html`
  <body class="code lh-copy w-100 h-100 center">
      <main class="pa3 cf center  w-60-l w-60-m w-100-s mb6">
        ${NavbarTop("NavbarTop", state, emit)}

        <h3>Instructions</h3>
        <p>Paste in the URLs to where the following materials live on your course website and/or syllabus. If you cannot link to a specific section, link to the page or document that contains the requested information.</p>
        <p>NOTE: if you do not currently have these materials ready, feel free to submit what you have - you can come back later and submit the missing urls. </p>


        <fieldset class="flex flex-column">
          <legend><h3>Submit your course</h3></legend>
          <form onsubmit=${onSubmit}>
            <fieldset class="mb4">
              <legend>Your email:</legend>
              <input class="w-100" type="text" name="email" placeholder="https://hello@yourEmail.com" value="">
            </fieldset>
            <fieldset class="mb4">
              <legend>Your course website:</legend>
              <input class="w-100" type="text" name="course_url" placeholder="https://awesomeCourse.com" value="">
            </fieldset>
            <fieldset class="mb4 mt4">
              <legend>Your course materials are:</legend>
              <label class="mr4">
                <input class="mr2" type="radio" name="open_access" value="open_access">
                Open Access
              </label>
              <label class="mr2">
                <input class="mr2" type="radio" name="open_access" value="login_only">
                By Login Only
              </label>
            </fieldset>

            <p>-- For ITP/IMA Courses Only --</p>
            <fieldset class="mb4">
              <legend>Link to the NYU Statements and Principles</legend>
              <input class="w-100" type="text" name="nyu_statements" placeholder="https://awesomeCourse.com#nyu-statements" value="">
            </fieldset>

            <input class="mt2" type="submit" value="submit">
          </form>
        </fieldset>

      </main>
    </body>
  `
}


/**
 *

 <fieldset>
   <legend>Web Accessibility</legend>
   <input class="w-100" type="text" name="web_accessibility_url" placeholder="" value="">
 </fieldset>
 */
