module.exports = function(grunt) {
	grunt.initConfig({
		bb_generate: {
			options: {
				appname       : "Puls3",
				appsrc        : "public/js/backbone",
				routersrc     : "public/js/backbone/routers/",
				modelsrc      : "public/js/backbone/models/",
				viewsrc       : "public/js/backbone/views/",
				collectionsrc : "public/js/backbone/collections/",
				templatesrc   : "public/js/backbone/templates/"
			},
			router:{},
			view:{},
			collection:{},
			model:{},
			template:{}
		},
		uglify: {
			options: {
				compress: true,
				report : true,
				banner: '/*!<%= grunt.template.date() %> */\n'
			},
			app: {
				files: {
					'public/vendors.min.js': [
						'public/js/vendor/jquery-1.9.1.min.js',
						'public/js/vendor/modernizr-2.6.2.min.js',
						'public/js/vendor/underscore.js',
						'public/js/vendor/backbone.js',
						'public/js/vendor/swig.js',
						'public/js/vendor/neon.js',
						'public/js/vendor/CustomEvent.js',
						'public/js/vendor/CustomEventSupport.js',
						'public/js/vendor/socket.io.js',
						'public/js/vendor/PonyExpress.js'
					],
					'public/app.min.js': [
						'public/js/init.js',
						'public/js/backbone/models/article.js',
						'public/js/backbone/collections/articles.js',
						'public/js/backbone/views/article.js',
						'public/js/backbone/views/articleExtended.js',
						'public/js/backbone/views/articleNew.js',
						'public/js/backbone/routers/base.js',
						'public/js/main.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bb-generate');

	grunt.registerTask('default', ['uglify']);
};