"use strict";

module.exports = function (grunt) {

	grunt.registerMultiTask("api-meta", "Generates pretty documentation pages", function () {
		var builder = require("api-meta/src/builder"),
			options = this.options(),
			files = this.files,
			done = this.async();

		buildNext();

		function buildNext () {

			if (files.length) {
				build();

			} else {
				done();
			}
		}

		function build () {
			var file = files.shift();

			options.src = file.src;
			options.output = file.dest;

			builder(options, buildNext);
		}
	});
};