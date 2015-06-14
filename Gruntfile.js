module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['sass/*.scss'],
      tasks: ['sass', 'clean']
    }, 
    sass: {                              
      dist: {                            
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: "sass",
          src: ['*.scss'],
          dest: 'style',
          ext: '.css'
        }]
      }
    },
    clean: {
      build: {
        src: ["style/*.css.map"]
      }
    },
     uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: [{
          expand: true,
          cwd: 'scripts-build',
          src: '*.js',
          dest: 'scripts'
        }]
      }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};