module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    builddir: '.',
    buildtheme: '',
    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
            ' * Homepage: <%= pkg.homepage %>\n' +
            ' * Copyright 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license %>\n' +
            ' * Based on Bootstrap\n' +
            '*/\n',
    swatch: {
      amelia:{}, cerulean:{}, cosmo:{}, cyborg:{}, darkly:{},
      flatly:{}, journal:{}, lumen:{}, paper:{}, readable:{},
      sandstone:{}, simplex:{}, slate:{}, spacelab:{}, superhero:{},
      united:{}, yeti:{}, custom:{}
    },
    clean: {
      build: {
        src: ['*/build.less', '!global/build.less']
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
    less: {
      dist: {
        options: {
          compress: false
        },
        files: {}
      }
    },
    watch: {
      files: ['*/variables.less', '*/bootswatch.less', '*/index.html'],
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

  grunt.registerTask('build', 'build a regular theme', function(theme, compress) {
    var theme = theme == undefined ? grunt.config('buildtheme') : theme;
    var compress = compress == undefined ? true : compress;

    var isValidTheme = grunt.file.exists(theme, 'variables.less') && grunt.file.exists(theme, 'bootswatch.less');
 
     // cancel the build (without failing) if this directory is not a valid theme
    if (!isValidTheme) {
      return;
    }

    var concatSrc;
    var concatDest;
    var lessDest;
    var lessSrc;
    var files = {};
    var dist = {};
    concatSrc = 'global/build.less';
    concatDest = theme + '/build.less';
    lessDest = '<%=builddir%>/' + theme + '/bootstrap.css';
    lessSrc = [ theme + '/' + 'build.less' ];

    dist = {src: concatSrc, dest: concatDest};
    grunt.config('concat.dist', dist);
    files = {}; files[lessDest] = lessSrc;
    grunt.config('less.dist.files', files);
    grunt.config('less.dist.options.compress', false);

    grunt.task.run(['concat', 'less:dist', 'clean:build',
      compress ? 'compress:'+lessDest+':'+'<%=builddir%>/' + theme + '/bootstrap.min.css':'none']);
  });

  grunt.registerTask('compress', 'compress a generic css', function(fileSrc, fileDst) {
    var files = {}; files[fileDst] = fileSrc;
    grunt.log.writeln('compressing file ' + fileSrc);

    grunt.config('less.dist.files', files);
    grunt.config('less.dist.options.compress', true);
    grunt.task.run(['less:dist']);
  });

  grunt.registerMultiTask('swatch', 'build a theme', function() {
    var t = this.target;
    grunt.task.run('build:'+t);
  });

  grunt.event.on('watch', function(action, filepath) {
    var path = require('path');
    var theme = path.dirname(filepath);
    grunt.config('buildtheme', theme);
  });

  grunt.registerTask('server', 'connect:keepalive')

  grunt.registerTask('default', ['connect:base', 'watch']);
};
