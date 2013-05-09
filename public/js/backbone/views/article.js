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
		this.extendedTemplate = swig.compile( $("#ArticleExtended_tpl").html() );

		this.model.on('change', function(){
			self.render();
		});

		window.routers.base.on('route:root', function(){
			self.render();
		});

		window.routers.base.on('route:articleSingle', function(data){
			self.render();
		});
	},
	render: function(data) {
		var self = this;
		var locals = self.model.toJSON();

		if(window.app.state === "articleSingle"){
			if( window.app.article !== this.model.get('id') ){
				this.$el.hide();
				this.$el.html('');
			}else{
				this.$el.show();
				this.$el.html(this.extendedTemplate({post:locals}));
			}
		}else{
			this.$el.show();
			this.$el.html(this.template({post:locals}));
		}

		return this;
	},
	upvote : function(e){
		e.preventDefault();
		e.stopPropagation();

		this.model.set("votes", parseInt( this.model.get("votes"), 10 ) + 1 );
		this.model.save();
	},
	downvote : function(e){
		e.preventDefault();
		e.stopPropagation();

		this.model.set("votes", parseInt( this.model.get("votes"), 10 ) - 1 );
		this.model.save();
	},
	navigate : function(){
		var self = this;

		Backbone.history.navigate('article/' + self.model.get('id'), {trigger: true});
	}
});
