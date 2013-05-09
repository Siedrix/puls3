$(document).ready(function(){
	console.log('Starting app');

	window.routers.base = new Puls3.Routers.BaseRouter();
	window.collections.articles = new Puls3.Collections.Articles();

	window.collections.articles.on('add', function(model){
		var view = new Puls3.Views.ArticleView(model);

		view.render();

		view.$el.insertAfter("#contenido > aside");
	});

	window.views.newArticle = new Puls3.Views.ArticleNewView( $('#contenido aside') );

	window.ponyExpress = new PonyExpress({
		io : window.location.origin
	});

	window.ponyExpress.bind('connect', function(){
		window.plugs.article = new PonyExpress.BackbonePlug({
			collection : window.collections.articles
		});
	});

	var all = $.get('/articles/all');

	all.done(function(data){
		data.forEach(function(article){
			window.collections.articles.add(article);
		});

		Backbone.history.start({
			root: '/',
			pushState: true,
			silent: false
		});
	});

	all.error(function(data){
		console.log('error', data);
	});

	$('nav ul li:first').click(function(e){
		e.preventDefault();
		Backbone.history.navigate('', {trigger: true});
	});
});
