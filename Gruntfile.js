module.exports = function (grunt) {
  const sass = require('node-sass');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
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
      cerulean:{},
      cosmo:{},
      cyborg:{},
      darkly:{},
      flatly:{},
      journal:{},
      litera:{},
      lumen:{},
      lux:{},
      materia:{},
      minty:{},
      pulse:{},
      sandstone:{},
      simplex:{},
      sketchy:{},
      slate:{},
      solar:{},
      spacelab:{},
      superhero:{},
      united:{},
      yeti:{}
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
          {expand: true, cwd: 'node_modules/bootstrap', src: ['dist/**'], dest: 'docs/_vendor/bootstrap/'},
          {expand: true, cwd: 'node_modules/popper.js', src: ['dist/**'], dest: 'docs/_vendor/popper.js/'}
        ]
      },
      css: {
        files: [
          {expand: true, cwd: 'dist', src: ['**/*.css', '**/*.scss'], dest: 'docs/4/'},
        ]
      }
    },
    exec: {
      postcss: {
        command: 'npm run postcss'
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
    theme = theme === undefined ? grunt.config('buildtheme') : theme;
    compress = compress === undefined ? true : compress;

    var isValidTheme = grunt.file.exists('dist/' + theme, '_variables.scss') && grunt.file.exists('dist/' + theme, '_bootswatch.scss');

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
    concatSrc = 'build/scss/build.scss';
    concatDest = 'dist/' + theme + '/build.scss';
    scssSrc = 'dist/' + theme + '/build.scss';
    scssDest = '<%=builddir%>/' + theme + '/bootstrap.css';

    dist = {src: concatSrc, dest: concatDest};
    grunt.config('concat.dist', dist);
    files = {};
    files[scssDest] = scssSrc;
    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.implementation', sass);
    grunt.config('sass.dist.options.outputStyle', 'expanded');
 
    grunt.task.run(['concat', 'sass:dist', 'postcss', 'clean:build',
      compress ? 'compress:' + scssDest + ':' + '<%=builddir%>/' + theme + '/bootstrap.min.css' : 'none',
      'copy:css']);
  });

  grunt.registerTask('compress', 'compress a generic css with sass', function(fileSrc, fileDst) {
    var files = {}; files[fileDst] = fileSrc;
    grunt.log.writeln('compressing file ' + fileSrc);

    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.implementation', sass);
    grunt.config('sass.dist.options.outputStyle', 'compressed');
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
    var theme = path.basename(path.dirname(filepath));
    console.log(theme);
    grunt.config('buildtheme', theme);
  });

  grunt.registerTask('vendor', 'copy:vendor');

  grunt.registerTask('postcss', 'exec:postcss');

  grunt.registerTask('server', 'connect:keepalive');

  grunt.registerTask('default', ['connect:base', 'watch']);
};
