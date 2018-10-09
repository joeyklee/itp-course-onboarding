module.exports = store

store.storeName = 'content'
function store (state, emitter) {

  state.content = [
    {title:"Tips and Notes", url:"/notes", resources:[
      {title:"Tips from faculty", description:"", url:"/notes#from-faculty", resources:[
        {title:"ITP Advice to Adjuncts", url:"http://facultyhelp.itp.nyu.edu/advice-to-adjuncts"},
        {title:"ITP How to Make a Syllabus", url:"http://facultyhelp.itp.nyu.edu/syllabus-template"},
        {title:"ITP Faculty Discussion on Syllabi's", url:"https://docs.google.com/document/d/1lGkoWRffV4py3DJqFzB0vOhmPrHs-N9KWiqV7yonWtA/edit"}
      ]},
      {title:"Feedback from students", description:"", url:"/notes#from-students", resources:[
        {title:"Coming Soon!", url:"#"}
      ]}
    ]},
    {title:"Course/Syllabus Templates", url:"/templates", resources:[
      {title:"Course Templates & How-To's", description:"", url:"/templates#course-templates", resources:[
        {title:"Github Course Template", url:""},
        {title:"Wordpress How-to", url:""},
        {title:"Google Classroom How-to", url:""}
      ]},
      {title:"Syllabus Templates", description:"", url:"/templates#syllabus-templates", resources:[
        {title:"Markdown Syllabus Template", url:""},
        {title:"Raw HTML Template", url:""},
        {title:"Word Document (.Doc) ", url:""},
        {title:"Google Drive Template", url:""}
      ]},
      {title:"Selected Course Examples", description:"", url:"/templates#selected-examples", resources:[
        {title:"Physical Computing @ ITP", url:"https://itp.nyu.edu/physcomp/itp/syllabus/"},
        {title:"Introduction to Computational Media @ ITP", url:"https://github.com/ITPNYU/ICM-2018"},
      ]}
    ]},
    {title:"Validate & Submit Your Course", url:"/validate", resources:[
      {title:"Validator App", description:"", url:"/validate"}
    ]},
    {title:"Browse ITP Courses", url:"/browse", resources:[
      {title:"Open ITP Courses", description:"", url:"/browse", resources:[
        {title:"Physical Computing @ ITP", url:"https://itp.nyu.edu/physcomp/itp/syllabus/",
          properties:{
            status: "pending",
            nyu_statements:true,
            course_url:true,
            open_access:true,
            course_policies: true,
            web_accessibility_url: "",
            web_accessibility_checked: false,
            web_accessibility_score: 0.0
          }
        },
        {title:"Introduction to Computational Media @ ITP", url:"https://github.com/ITPNYU/ICM-2018",
          properties:{
            status: "pending",
            nyu_statements:true,
            course_url:true,
            open_access:true,
            course_policies: true,
            web_accessibility_url: "",
            web_accessibility_checked: false,
            web_accessibility_score: 0.0
          }
        },
      ]}
    ]},
  ]

  

  emitter.on('DOMContentLoaded', function () {

    emitter.on('content:get', function (count) {
      emitter.emit(state.events.RENDER)
    })

  })
}
