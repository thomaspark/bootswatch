module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    builddir: '.',
    buildtheme: '',
    banner: '/*!\n' +
            ' * Bootswatch v<%= pkg.version %>\n' +
            ' * Homepage: <%= pkg.homepage %>\n' +
            ' * Copyright 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license %>\n' +
            ' * Based on Bootstrap\n' +
            '*/\n',
    swatch: {
      cerulean:{}, cosmo:{}, cyborg:{}, darkly:{},
      flatly:{}, journal:{}, lumen:{}, paper:{},
      sandstone:{}, simplex:{}, slate:{}, spacelab:{},
      superhero:{}, united:{}, yeti:{}, custom:{}
    },
    clean: {
      build: {
        src: ['*/build.scss', '!assets/scss/build.scss']
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
    exec: {
      postcss: {
        command: 'npm run postcss'
      }
    },
    watch: {
      files: ['*/_variables.scss', '*/_bootswatch.scss', '*/index.html'],
      tasks: 'build',
      options: {
        livereload: true,
        nospawn: true
      }
    },
    connect: {
      base: {
        options: {
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
    theme = theme === undefined ? grunt.config('buildtheme') : theme;
    compress = compress === undefined ? true : compress;

    var isValidTheme = grunt.file.exists(theme, '_variables.scss') && grunt.file.exists(theme, '_bootswatch.scss');

     // cancel the build (without failing) if this directory is not a valid theme
    if (!isValidTheme) {
      return;
    }
    var concatSrc;
    var concatDest;
    var scssDest;
    var scssSrc;
    var files = {};
    var dist = {};
    concatSrc = 'assets/scss/build.scss';
    concatDest = theme + '/build.scss';
    scssDest = '<%=builddir%>/' + theme + '/bootstrap.css';
    scssSrc = [theme + '/' + 'build.scss'];

    dist = {src: concatSrc, dest: concatDest};
    grunt.config('concat.dist', dist);
    files = {};
    files[scssDest] = scssSrc;
    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.style', 'expanded');
    grunt.config('sass.dist.options.sourcemap', 'none');
    grunt.config('sass.dist.options.precision', 8);
    grunt.config('sass.dist.options.unix-newlines', true);
 
    grunt.task.run(['concat', 'sass:dist', 'exec:postcss', 'clean:build',
      compress ? 'compress:' + scssDest + ':' + '<%=builddir%>/' + theme + '/bootstrap.min.css' : 'none']);
  });

  grunt.registerTask('compress', 'compress a generic css with sass', function(fileSrc, fileDst) {
    var files = {}; files[fileDst] = fileSrc;
    grunt.log.writeln('compressing file ' + fileSrc);

    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.style', 'compressed');
    grunt.task.run(['sass:dist']);
  });

  grunt.registerMultiTask('swatch', 'build a theme', function() {
    var t = this.target;
    grunt.task.run('build:'+t);
  });

  grunt.registerTask('swatch', 'build a theme from scss ', function (theme) {
    var t = theme;
    if (!t) {
      for (t in grunt.config('swatch')) {
        grunt.task.run('build:' + t);
      }
    } else {
      grunt.task.run('build:' + t);
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    var path = require('path');
    var theme = path.dirname(filepath);
    grunt.config('buildtheme', theme);
  });

  grunt.registerTask('postcss', 'exec:postcss');

  grunt.registerTask('server', 'connect:keepalive');

  grunt.registerTask('default', ['connect:base', 'watch']);
};
