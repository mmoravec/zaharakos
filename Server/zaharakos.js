News = new Meteor.Collection('news');

if (Meteor.isServer) {
  Meteor.startup(function () {
	  if(!News.find({})) {
		  News.insert({"title": "Ice Cream", "text": "Ice Cream so good i eat nom nom nom"});
	  }
  });
  
}