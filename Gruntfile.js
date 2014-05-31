"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    },


    clean: {
      tests: ["tmp"]
    },


    "api-meta": {
      default_options: {
        options: {
        },
        files: {
          "tmp/default_options": ["test/fixtures/testing", "test/fixtures/123"]
        }
      },
      custom_options: {
        options: {
          separator: ": ",
          punctuation: " !!!"
        },
        files: {
          "tmp/custom_options": ["test/fixtures/testing", "test/fixtures/123"]
        }
      }
    }

  });

  grunt.loadTasks("tasks");

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint"]);
};
