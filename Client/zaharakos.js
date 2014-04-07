
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
		path: '/',
		layoutTemplate: 'complexLayout',
		yieldTemplates: {
			'topNav': {to: 'menu'},
			'footer': {to: 'footer'},
			'social': {to: 'social'}
		},	
		onAfterAction: function() {
			jQuery.getScript("js/jquery.roundabout.min.js")
				.done(function() {
					$('.roundabout').roundabout();
				});
		}
		
	});
 
	this.route('eventinfo', {
		path: '/eventinfo'
	});

});

if (Meteor.isClient) {

  /* Home Template */



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


