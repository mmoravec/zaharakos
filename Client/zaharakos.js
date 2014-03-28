
Router.configure({
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	autoRender: true 
});

Accounts.config({
	forbidClientAccountCreation: true
});

Router.map(function() {
	this.route('admin', {
		path: '/admin'
	});	
	
	this.route('news', {
		path: '/news'
	});

	this.route('home', {
		template: 'hello',
		path: '/'
	});
  
	this.route('/', {
		template: 'hello',
		path: '/home'
	});
});

if (Meteor.isClient) {

  Template.hello.greeting = function () {
    return "Welcome to zaharakos.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  
  /* News Template */
  Template.news.items =  function() {
	  return News.find({});
  };
  
  /*Admin Template */
  Template.admin.events({

  });
  
  Template.admin.loggedIn = function() {
	  return Meteor.userId();
  }
  
  Template.admin.items = function() {
	  return News.find();
  };
}


