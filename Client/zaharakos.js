
Router.configure({
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	autoRender: false
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
  
  Template.news.items =  function() {
	  return News.find({});
  };
  
  Template.admin.events({
	'click #btnLogOut': function(event, template) {
		if (Meteor.userId()) {
			Meteor.logout();
		} else {
			var userName = template.find('#username').value,
			 userPassword = template.find('#password').value;
			Meteor.loginWithPassword(userName, userPassword, function (error) {
				if (error) {
					console.log(error);
				}
			});
		}
	}
  });
}


