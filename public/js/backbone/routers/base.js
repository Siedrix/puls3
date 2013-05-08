Puls3.Routers.BaseRouter = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"article/:id" : "article"
	},
	initialize : function(){
		var self = this;

		console.log('Base Router started');
	},
	root: function(){
		var self = this;

		console.log('Root routes');

		$('#contenido > div').remove();

		window.app.state = "root";

		window.collections.articles.forEach(function(article){
			var view = new Puls3.Views.ArticleView(article);

			view.render();
			view.$el.appendTo('#contenido');
		});
	},
	article: function(id){
		var self = this;

		$('#contenido > div').remove();

		window.app.state = "article::single";

		var article = window.collections.articles.getOne(id);

		if(article){
			var view = new Puls3.Views.ArticleExtendedView(article);

			view.render();
			view.$el.appendTo('#contenido');
		}else{
			Backbone.history.navigate('', {trigger: true});
		}
	}
});
