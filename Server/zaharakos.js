News = new Meteor.Collection('news');

if (Meteor.isServer) {
  Meteor.startup(function () {
	  if(!News.find({})) {
		  News.insert({"title": "Ice Cream", "text": "Ice Cream so good i eat nom nom nom"});
	  }
	  if(Meteor.users.find().count() === 0) {
		  Accounts.createUser({
			  username: "admin",
			  email: "moravecmj@yahoo.com",
			  password: "zaharak0s4dmin"
		  });		  
	  }
  });
  
}