'use strict';

var path = require('path');
var sass = require('node-sass');
var autoprefixer = require('autoprefixer');

module.exports = function (grunt) {
  grunt.loadNpmTasks('@lodder/grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    builddir: 'dist',
    buildtheme: '',
    banner: '/*!\n' +
            ' * Bootswatch v<%= pkg.version %>\n' +
            ' * Homepage: <%= pkg.homepage %>\n' +
            ' * Copyright 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license %>\n' +
            ' * Based on Bootstrap\n' +
            '*/\n',
    swatch: {
      cerulean: {},
      cosmo: {},
      cyborg: {},
      darkly: {},
      flatly: {},
      journal: {},
      litera: {},
      lumen: {},
      lux: {},
      materia: {},
      minty: {},
      pulse: {},
      sandstone: {},
      simplex: {},
      sketchy: {},
      slate: {},
      solar: {},
      spacelab: {},
      superhero: {},
      united: {},
      yeti: {}
    },
    clean: {
      build: {
        src: ['dist/*/build.scss']
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      dist: {
        src: [],
        dest: ''
      }
    },
    copy: {
      vendor: {
        files: [
          {expand: true, cwd: 'node_modules/font-awesome', src: ['css/**', 'fonts/**'], dest: 'docs/_vendor/font-awesome/'},
          {expand: true, cwd: 'node_modules/jquery', src: ['dist/**'], dest: 'docs/_vendor/jquery/'},
          {expand: true, cwd: 'node_modules/bootstrap', src: ['dist/**'], dest: 'docs/_vendor/bootstrap/'}
        ]
      },
      css: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['**/*.css', '**/*.scss'],
          dest: 'docs/4/'
        }]
      }
    },
    postcss: {
      options: {
        processors: [
          autoprefixer()
        ]
      },
      dist: {
        src: [],
        dest: ''
      }
    },
    cssmin: {
      options: {
        level: {
          1: {
            specialComments: 'all',
            roundingPrecision: 6
          }
        }
      },
      dist: {
        src: [],
        dest: ''
      }
    },
    watch: {
      files: ['dist/*/_variables.scss', 'dist/*/_bootswatch.scss'],
      tasks: 'build',
      options: {
        livereload: true,
        nospawn: true
      }
    },
    connect: {
      base: {
        options: {
          base: 'docs',
          port: 3000,
          livereload: true,
          open: true
        }
      },
      keepalive: {
        options: {
          port: 3000,
          livereload: true,
          keepalive: true,
          open: true
        }
      }
    }
  });

  grunt.registerTask('none', function() {});

  grunt.registerTask('build', 'build a regular theme from scss', function(theme, compress) {
    theme = theme === undefined ? grunt.config.get('buildtheme') : theme;
    compress = compress === undefined ? true : compress;

    var isValidTheme = grunt.file.exists('dist/' + theme, '_variables.scss') && grunt.file.exists('dist/' + theme, '_bootswatch.scss');

     // cancel the build (without failing) if this directory is not a valid theme
    if (!isValidTheme) {
      return;
    }
    var concatSrc = 'build/scss/build.scss';
    var concatDest = 'dist/' + theme + '/build.scss';
    var scssSrc = 'dist/' + theme + '/build.scss';
    var scssDest = grunt.config.get('builddir') + '/' + theme + '/bootstrap.css';

    var dist = {src: concatSrc, dest: concatDest};
    var distPost = {src: scssDest, dest: scssDest};
    grunt.config.set('concat.dist', dist);
    grunt.config.set('postcss.dist', distPost);
    var files = {};
    files[scssDest] = scssSrc;
    grunt.config.set('sass.dist.files', files);
    grunt.config.set('sass.dist.options.implementation', sass);
    grunt.config.set('sass.dist.options.outputStyle', 'expanded');
    grunt.config.set('sass.dist.options.precision', 6);

    grunt.task.run([
      'concat',
      'sass:dist',
      'postcss:dist',
      'clean:build',
      compress ? 'compress:' + scssDest + ':' + grunt.config.get('builddir') + '/' + theme + '/bootstrap.min.css' : 'none',
      'copy:css'
    ]);
  });

  grunt.registerTask('compress', 'minify a built css file', function(fileSrc, fileDst) {
    var distPost = {src: fileSrc, dest: fileDst};
    grunt.config.set('cssmin.dist', distPost);
    grunt.log.writeln('Minifying file ' + fileSrc);
    grunt.task.run(['cssmin:dist']);
  });

  grunt.registerMultiTask('swatch', 'build a theme', function() {
    var t = this.target;
    grunt.task.run('build:' + t);
    grunt.task.run('compress:' + t);
  });

  grunt.registerTask('swatch', 'build a theme from scss ', function (theme) {
    var t = theme;
    if (!t) {
      for (t in grunt.config.get('swatch')) {
        grunt.task.run('build:' + t);
      }
    } else {
      grunt.task.run('build:' + t);
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    var theme = path.basename(path.dirname(filepath));
    console.log(theme);
    grunt.config.set('buildtheme', theme);
  });

  grunt.registerTask('vendor', 'copy:vendor');

  grunt.registerTask('server', 'connect:keepalive');

  grunt.registerTask('default', ['connect:base', 'watch']);
};
