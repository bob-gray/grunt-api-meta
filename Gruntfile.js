"use strict";

module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				strict: true,
				curly: true,
				eqeqeq: true,
				forin: true,
				immed: true,
				latedef: "nofunc",
				newcap: true,
				noarg: true,
				node: true,
				noempty: true,
				nonew: true,
				plusplus: true,
				quotmark: true,
				undef: true,
				validthis: true,
				maxparams: 3,
				maxdepth: 2,
				maxstatements: 5,
				maxcomplexity: 5
			},
			all: {
				src: [
					"Gruntfile.js",
					"tasks/*.js"
				]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");

	grunt.registerTask("default", ["jshint"]);
};