Puls3.Collections.ArticlesCollection = Backbone.Collection.extend({

    model: Puls3.Models.ArticleModel,
    name: "articles",
    url:"",
    search : function(letters){
        if(letters == "") return this;
        var pattern = new RegExp(letters,"gi");
        return _(this.filter(function(data) {
            return pattern.test(data.get("name"));
        }));
    },
    comparator : function(item){
        return item.get("name");
    },
    getOne : function(id){
        var articles = this.filter(function(data) {
            return data.get("id") == id;
        });

        if(articles.length){
            return articles[0];
        }else{
            return null;
        }
    },
    parse : function(resp) {
        return resp.data;
    }
});

Puls3.Collections.Articles = Puls3.Collections.ArticlesCollection;