Puls3.Views.ArticleView = Backbone.View.extend({
	events:{
		"click > article" : "navigate",
		"click .likes_up" : "upvote",
		"click .likes_down" : "downvote"
	},
	className:"",
	initialize : function(model){
		var self = this;

		this.model = model;
		this.template = swig.compile( $("#Article_tpl").html() );

		this.model.on('change', function(){
			self.render();
		});
	},
	render: function(data) {
		var self = this;
		var locals = self.model.toJSON();

		this.$el.html(this.template({post:locals}));

		return this;
	},
	upvote : function(e){
		e.preventDefault();

		this.model.set("votes", parseInt( this.model.get("votes"), 10 ) + 1 );
		this.model.save();
	},
	downvote : function(e){
		e.preventDefault();

		this.model.set("votes", parseInt( this.model.get("votes"), 10 ) - 1 );
		this.model.save();
	},
	navigate : function(){
		var self = this;

		Backbone.history.navigate('article/' + self.model.get('id'), {trigger: true});
	}
});
