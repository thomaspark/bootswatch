module.exports = function(grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner:
						'/*! Respond.js v<%= pkg.version %>: <%= pkg.description %>' +
						' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
						' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
						' * <%= pkg.website %>' +
						' */\n\n',
		uglify: {
			nonMinMatchMedia: {
				options: {
					mangle: false,
					compress: false,
					preserveComments: 'some',
					beautify: {
						beautify: true,
						indent_level: 2
					}
				},
				files: {
					'dest/respond.src.js': ['src/matchmedia.polyfill.js', 'src/respond.js']
				}
			},
			minMatchMedia: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'dest/respond.min.js': ['src/matchmedia.polyfill.js', 'src/respond.js']
				}
			},
			nonMinMatchMediaListener: {
				options: {
					mangle: false,
					compress: false,
					preserveComments: 'some',
					beautify: {
						beautify: true,
						indent_level: 2
					}
				},
				files: {
					'dest/respond.matchmedia.addListener.src.js': ['src/matchmedia.polyfill.js', 'src/matchmedia.addListener.js', 'src/respond.js']
				}
			},
			minMatchMediaListener: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'dest/respond.matchmedia.addListener.min.js': ['src/matchmedia.polyfill.js', 'src/matchmedia.addListener.js', 'src/respond.js']
				}
			}
		},
		jshint: {
			files: ['src/respond.js', 'src/matchmedia.polyfill.js'],
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: false,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				smarttabs: true,
				node: true,
				es5: true,
				strict: false
			},
			globals: {
				Image: true,
				window: true
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	// Default task.
	grunt.registerTask('default', ['jshint', 'uglify']);

};
