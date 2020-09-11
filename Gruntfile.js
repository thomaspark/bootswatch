'use strict';

const path = require('path');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = 'build/';
const DIST_DIR = 'dist/';
const DOCS_DEST = 'docs/4/';
const SWATCHES = [
  'cerulean',
  'cosmo',
  'cyborg',
  'darkly',
  'flatly',
  'journal',
  'litera',
  'lumen',
  'lux',
  'materia',
  'minty',
  'pulse',
  'sandstone',
  'simplex',
  'sketchy',
  'slate',
  'solar',
  'spacelab',
  'superhero',
  'united',
  'yeti'
];
let BUILD_THEME = '';

module.exports = grunt => {
  grunt.loadNpmTasks('@lodder/grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Bootswatch v<%= pkg.version %>\n' +
            ' * Homepage: <%= pkg.homepage %>\n' +
            ' * Copyright 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license %>\n' +
            ' * Based on Bootstrap\n' +
            '*/\n',
    clean: {
      build: {
        src: 'dist/*/build.scss'
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
        files: [{
          expand: true,
          cwd: 'node_modules/font-awesome',
          src: ['css/**', 'fonts/**'],
          dest: 'docs/_vendor/font-awesome/'
        }, {
          expand: true,
          cwd: 'node_modules/jquery',
          src: ['dist/**'],
          dest: 'docs/_vendor/jquery/'
        }, {
          expand: true,
          cwd: 'node_modules/bootstrap',
          src: ['dist/**'],
          dest: 'docs/_vendor/bootstrap/'
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: [
            '**/*.css',
            '**/*.scss'
          ],
          dest: DOCS_DEST
        }]
      }
    },
    sass: {
      options: {
        implementation: sass,
        outputStyle: 'expanded',
        precision: 6
      },
      dist: {
        src: [],
        dest: ''
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
    connect: {
      options: {
        hostname: 'localhost',
        livereload: 35729,
        port: 3000,
        open: true
      },
      base: {
        options: {
          base: 'docs'
        }
      },
      keepalive: {}
    },
    watch: {
      options: {
        livereload: '<%= connect.options.livereload %>',
        nospawn: true
      },
      dev: {
        files: [
          'dist/*/_variables.scss',
          'dist/*/_bootswatch.scss'
        ],
        tasks: 'build'
      }
    }
  });

  grunt.registerTask('build', 'build a regular theme from scss', theme => {
    theme = theme ? theme : BUILD_THEME;

    const THEME_DIR = path.join(DIST_DIR, '/', theme);
    const isValidTheme = grunt.file.exists(path.join(THEME_DIR, '/_variables.scss')) && grunt.file.exists(path.join(THEME_DIR, '/_bootswatch.scss'));

    // cancel the build (without failing) if this directory is not a valid theme
    if (!isValidTheme) {
      grunt.log.writeln(`${theme} does not exist!`);
      return;
    }

    const concatSrc = path.join(BUILD_DIR, '/scss/build.scss');
    const concatDest = path.join(THEME_DIR, '/build.scss');
    const scssSrc = path.join(THEME_DIR, '/build.scss');
    const cssDest = path.join(THEME_DIR, '/bootstrap.css');
    const cssDestMin = path.join(THEME_DIR, '/bootstrap.min.css');

    grunt.config.set('concat.dist', {
      src: concatSrc,
      dest: concatDest
    });
    grunt.config.set('sass.dist', {
      src: scssSrc,
      dest: cssDest
    });
    grunt.config.set('postcss.dist', {
      src: cssDest,
      dest: cssDest
    });
    grunt.config.set('copy.css.files.0.cwd', THEME_DIR);
    grunt.config.set('copy.css.files.0.dest', path.join(DOCS_DEST, theme));
    grunt.config.set('cssmin.dist', {
      src: cssDest,
      dest: cssDestMin
    });

    grunt.task.run([
      'concat',
      'sass:dist',
      'postcss:dist',
      'clean:build',
      'cssmin:dist',
      'copy:css'
    ]);
  });

  grunt.registerMultiTask('swatch', 'build a theme', function () {
    const theme = this.target;
    grunt.task.run(`build:${theme}`);
  });

  grunt.registerTask('swatch', 'build a theme from scss ', theme => {
    theme = theme ? [theme] : SWATCHES;

    theme.forEach(t => {
      grunt.task.run(`build:${t}`);
    });
  });

  grunt.event.on('watch', (action, filepath) => {
    const theme = path.basename(path.dirname(filepath));
    grunt.log.writeln(`${theme} changed...`);
    BUILD_THEME = theme;
  });

  grunt.registerTask('vendor', 'copy:vendor');

  grunt.registerTask('server', 'connect:keepalive');

  grunt.registerTask('default', ['connect:base', 'watch']);
};
