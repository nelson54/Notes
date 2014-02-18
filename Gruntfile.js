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
              codeLines: {
/*                before: '<span>',
                after: '</span>'*/
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
            base: 'build/public/',
            livereload: 35729
          }
        }
      },
      watch: {
        scripts: {
          files: 'notes/*.md',
          tasks: ['markdown'],
          options: {
            debounceDelay: 250,
            livereload: true
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['markdown', 'connect', 'watch']);

};
