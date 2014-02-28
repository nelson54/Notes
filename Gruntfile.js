module.exports = function(grunt) {

    grunt.initConfig({
      markdown: {
        all: {
          files: [
            {
              expand: true,
              src: 'notes/*.md',
              dest: 'build/public/',
              ext: '.html'
            }
          ],
          options : {
            template: 'build/template/index.jst',
            markdownOptions: {
              gfm: true,
              breaks: true,
              highlight: function (code) {
                  return require('highlight.js').highlightAuto(code).value;
              },
              codeLines: {
                before: '<span>',
                after: '</span>'
              }
            }
          }
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            hostname: '*',
            base: 'build/public/'
          }
        }
      },
      watch: {
        scripts: {
          files: 'notes*//*.md',
          tasks: ['markdown'],
          options: {
            debounceDelay: 250,
            livereload: true
          }
        }
      },
      markdownpdf: {
        options: {
            cssPath : "build/public/css/build.css"
        },
        files:{
              src: 'notes/*.md',
              dest: 'build/public/notes'
        }
      },
      concat: {
        dist : {
            src:['build/public/css/normalize.css', 'build/public/css/bootstrap.css', 'build/public/css/main.css', 'build/public/css/github-highlight.css'],
            dest: 'build/public/css/build.css'
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-markdown-pdf');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['concat', 'markdown', 'markdownpdf', 'connect', 'watch']);

};
