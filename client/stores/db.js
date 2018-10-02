const api = require("../components/feathersClientApi")

module.exports = store


function store (state, emitter) {

  // get user's existing syllabi
  state.syllabi = [];
  state.selectedSyllabusId = ""
  state.selectedSyllabus = {}


  emitter.on('DOMContentLoaded', function () {

      emitter.on('db:updateProperty', function (d, id, property) {
      // NOTE: NOT efficient at all? there must be a better way to do this?
      // Maybe it also is different using a different db.
      state.selectedSyllabus[property] = d
      // emitter.emit(state.events.RENDER)


        api.authenticate().then(() => {
          // update(id, data, params)
          api.service("syllabus")
          .update(state.selectedSyllabus._id, state.selectedSyllabus, {})
          .then((res) => {
            console.log(res)
            emit("db:find")
          })
        })


    })

    emitter.on("db:add", function(){
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

            emitter.emit("db:find");
            emitter.emit(state.events.RENDER);
          })
          .catch(err => {
            console.log("not auth'd and trying to create message");
            return err;
          });

    });

    emitter.on("db:find", function(){

        console.log("getting all!")

        api.authenticate().then((res) => {

          // api.service("users").find().then( (res) => {
          //   console.log("currentUser", res)
          // })
          console.log("currentUser", res.userId)
          api.service("syllabus")
            .find({query:{userId:res.userId, $limit:100} } )
            .then( (response) => {
            console.log(response.data)
            state.syllabi = response.data;

            // return response

            emitter.emit(state.events.RENDER);
          }).catch(err => {
            return err
          });
        })


          // emitter.emit(state.events.RENDER);
    });
    // immediately call
    // emitter.emit("db:find")

    emitter.on("db:get", function(sid){

        console.log("getting all!")

        api.authenticate().then((res) => {

          // api.service("users").find().then( (res) => {
          //   console.log("currentUser", res)
          // })
          console.log("currentUser", res.userId)
          api.service("syllabus")
            .find({query:{userId:res.userId, _id:sid} } )
            .then( (response) => {
            console.log(response.data)
            state.selectedSyllabusId = sid
            state.selectedSyllabus = response.data[0]
            // return response

            emitter.emit(state.events.RENDER);
          }).catch(err => {
            return err
          });
        })
    });

  })
}
