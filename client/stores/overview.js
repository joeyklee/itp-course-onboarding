const api = require("../components/feathersClientApi")

module.exports = store


function store (state, emitter) {

  emitter.on('DOMContentLoaded', function () {

    emitter.on("overview:all", function(){
        console.log("overview:all!")

    });

  })
}
