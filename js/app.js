// creo le diverse view
var HomeView = Backbone.View.extend({
	render: function() {
		this.$el.html(
			'<h1>Home page</h1>' +
			'<a href="#first">Vai alla Prima pagina</a>');
	}
});

var FirstView = Backbone.View.extend({
	render: function() {
		this.$el.html(
			'<h1>View First</h1>' +
			'<a href="#">Ritorna alla Home page</a>');
	}
});

var NoRouteView = Backbone.View.extend({
	render: function() {
		this.$el.html(
			'<h1>Sembra tu abbia digitato l\'URL sbagliato...</h1>' +
			'<a href="#">Ritorna alla Home page</a>');
	}	
});


var view;
// creo il Router
var AppRouter = Backbone.Router.extend({
	routes: {
		'': 'home',
		'first': 'routeToFirst',
		'*default': 'noRoute'
	},
	home: function() {
		console.log('home route');
		if (view) {
			view.undelegateEvents();
		}
		view = new HomeView({ el: '#content' });
		view.render();
	},
	routeToFirst: function() {
		console.log('first route');
		if (view) {
			view.undelegateEvents();
		}
		view = new FirstView({ el: '#content' });
		view.render();		
	},
	noRoute: function() {
		console.log('no route');
		if (view) {
			view.undelegateEvents();
		}
		view = new NoRouteView({ el: '#content' });
		view.render();			
	}
});

// creo istanza del router
var router = new AppRouter();

// comincio ascolto del cambio url
Backbone.history.start();