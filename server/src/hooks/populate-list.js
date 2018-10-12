// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    // grab the data from the context
    // const {data} = context;

    // the auth'd user
    // const user = context.params.user;

    let sectionId = context.data.sectionId;
    let tutorialId = context.params.query._id;

    const { result } = context;
  	const { Model } = context.app.service('lists');

    let tutorial = await Model
      .findOneAndUpdate(
        {_id:tutorialId},
        {$push:{sections:sectionId}},
        // {$addToSet:{resources:resourceId}},
        {new:true}
    ).populate({
      path:'sections',
      populate:{
        path:'resources',
        model:'resources'
      }
    })

    // https://stackoverflow.com/questions/24414975/mongoose-populate-sub-sub-document
    // populate('sections')
    // .populate('sections.resources').exec();

    console.log(tutorial)

    context.result = tutorial;
    context.data = tutorial;



    return context;

  };
};
