Puls3.Views.ArticleNewView = Backbone.View.extend({
	events:{
		"click button" : "newArticle"
	},
	className:"",
	initialize : function($el){
		this.$el = $el;
	},
	newArticle : function(e){
		var title   = this.$el.find('#title').val(),
			content = this.$el.find('#content').val(),
			tag     = this.$el.find('#tag').val();

		if(title && content && tag){
			var model = new Puls3.Models.ArticleModel({
				title:title,
				tag:tag,
				content:content
			});

			var xhr = model.save();

			xhr.done(function(data){
				Backbone.history.navigate('article/' + data.id, {trigger: true});
			});
		}else{
			alert("Necesitas tener titulo, contenido y tag");
		}

	}
});
