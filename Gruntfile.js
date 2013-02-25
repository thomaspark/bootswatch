module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	// grunt.loadNpmTasks('grunt-contrib-uglify');

	// Project configuration.
	grunt.initConfig({
		builddir: 'build',
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/**\n' +
						' * <%= pkg.description %>\n' +
						' * @version v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
						' * @link <%= pkg.homepage %>\n' +
						' * @license <%= pkg.license %>' + ' */'
		},
		build: {
			cerulean:{}, amelia: {}
		},
		clean: {
		   build: {
			   src: ['*/build.less', '*/build-responsive.less',
				   '!global/build.less', '!global/build-responsive.less']
		   }
		},
		concat: {
			dist: {
				src: ['global/build.less'],
				dest: ''
			}
		},
		recess: {
			dist: {
				options: {
					compile: true
				},
				files: {}
			}
		},
		min: {
			build: {
				src: ['<banner:meta.banner>', '<config:concat.build.dest>'],
				dest: '<%= builddir %>/<%= pkg.name %>.min.js'
			}
		}
	});

	grunt.registerMultiTask('build', 'build a theme', function() {
		var theme = this.target;
		grunt.log.writeln('building theme ' + this.target);

		var concatDest = theme + '/build.less';

		var recessDest = theme + '/' + theme + '.css';
		var recessSrc = [ theme + '/' + 'build.less' ];

		grunt.config('concat.dist.dest', concatDest);
		var files = {}; files[recessDest] = recessSrc;
		grunt.config('recess.dist.files', files);

		grunt.task.run(['concat', 'recess:dist', 'clean:build']);
	});
};