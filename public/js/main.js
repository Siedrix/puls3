$(document).ready(function(){
	console.log('Starting app');

	window.collections.articles = new Puls3.Collections.ArticlesCollection();

	window.collections.articles.on('add', function(model){
		var view = new Puls3.Views.ArticleView(model);

		view.render();

		view.$el.appendTo("#contenido");
	});

	window.routers = new Puls3.Routers.BaseRouter();

	var xhr = $.get('/articles/all');

	xhr.done(function(data){
		console.log(data);

		data.forEach(function(articles){
			window.collections.articles.add(articles);
		});

		Backbone.history.start({
			root : "/",
			pushState : true,
			silent : false
		});
	});

	$('nav li:first').on('click', function(){
		Backbone.history.navigate('', {trigger: true});
	});

});
