 module.exports = function (grunt) {


  grunt.initConfig({
    server : {
      port: 8888,
      base: './'
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
