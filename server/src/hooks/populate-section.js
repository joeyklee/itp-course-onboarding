// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    // grab the data from the context
    const {data} = context;

    // if the data contains no text
    // if(!data.text){
    //   throw new Error("a message must have text!")
    // }

    // the auth'd user
    // const user = context.params.user;

    // console.log(context.data);
    // context.data.resources.push("Yo!")
    // if(context.data.resources != undefined){
    //    context.data.resources.push(context.data.resourceId)
    // } else{
    //    context.data.resources = [];
    //    context.data.resources.push(context.data.resourceId)
    // }
    // ObjectId("5bbe7bcbdfef4a975f3aa328")
    let resourceId = context.data.resourceId;
    let sectionId = context.params.query._id;

    // await context.app.service("sections").Model
    //   .update(
    //     {_id:sectionId},
    //     {$push:{resources:resourceId}},
    //     function(err, success){
    //       if(err){
    //         console.log(err);
    //       } else{
    //         console.log(success);
    //       }
    //   }
    // )


    const { result } = context;
  	const { Model } = context.app.service('sections');

    // let section = await Model
    //   .findOne(
    //     {_id:sectionId}
    // ).populate('resources').exec();


    let section = await Model
      .findOneAndUpdate(
        {_id:sectionId},
        {$push:{resources:resourceId}}
    ).populate('resources').exec();




    console.log("i'm the section: ", section);

    // section.resources.push(resourceId);

    context.result = section;


    // console.log("i'm the result: ", context.result);


    // console.log("I'm the data", context.data);
    // console.log("I'm the params", context.params);

    return context;
  };
};
