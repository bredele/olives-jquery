 module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-compass');

  /* do clean, meta, jshint, lint, csslint, etc */
  grunt.initConfig({
    server : {
      port: 8888,
      base: './'
    },
    compass: {
      dist: {}
    },
    lint : {
      files : ['src/js/core/*.js'],
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
      },
      globals: {
        require: true,
        define: true
      }
    },
    watch : {
      test : {
        files : ['<config:lint.files>'],
        //        tasks : ['lint', 'test']
        tasks : ['test']
      }
    }
  });

  grunt.registerTask("launch", "server watch");
  grunt.registerTask("test", "jstd");

  grunt.loadTasks("./tools/grunt");

};
