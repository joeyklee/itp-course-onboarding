const api = require("../components/feathersClientApi")

module.exports = store


function store (state, emitter) {
  state.syllabi = [];

  emitter.on('DOMContentLoaded', function () {

    emitter.on("syllabus:add", function(){
        console.log("add syllabus");

        let output = {
          title: "Test course wow awesome!",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          instructorName:"Joey Lee",
          instructorUrl:"https://itp.nyu.edu",
          courseWebsite:"https://itp.nyu.edu",
          courseMaterial: [
            {week:1,
              title:"Week 1",
              description:"Week 1 Course Materials, Assignment, Readings & References"
            },
            {week:2,
              title:"Week 2",
              description:"Week 2 Course Materials, Assignment, Readings & References"
            },
            {week:3,
              title:"Week 3",
              description:"Week 2 Course Materials, Assignment, Readings & References"
            }
          ]
        }

        api
          .authenticate()
          .then(() => {
            api.service("syllabus").create(output)
              .then( (response) => {
                console.log(response)
                return response
              }).catch(err => {
                return err
              });

            // emitter.emit("messages:getMessages");
            emitter.emit(state.events.RENDER);
          })
          .catch(err => {
            console.log("not auth'd and trying to create message");
            return err;
          });

    });

    emitter.on("syllabus:find", function(){
        console.log("getting all!")

        api.service("syllabus").find()
          .then( (response) => {
            console.log(response.data)
            state.syllabi = response.data;

            // return response

            emitter.emit(state.events.RENDER);
          }).catch(err => {
            return err
          });

          // emitter.emit(state.events.RENDER);
    });
    // immediately call
    emitter.emit("syllabus:find")


  })
}
