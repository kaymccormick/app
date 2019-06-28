module.exports = function (grunt) {
    // Project configuration.
    const webpackConfig = require('./webpack.config.js');
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
      default : {
        tsconfig: './tsconfig.json'
      }
        },
          watch: {
            src: {
                files: ['**/*.ts?'],
                tasks: ['ts', 'browserify'],
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: [],
            },
          },
	browserify: {
	    classModel: {
		src: ['lib/entry/classModel.js'],
		dest: 'dist/classModelBundle.js',
	    },
	    entityView: {
		src: ['lib/entry/entityView.js'],
		dest: 'dist/entityViewBundle.js',
	    },
	},
	webpack: {
	    myConfig: webpackConfig,
	},
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks('grunt-eslint');
    // Default task(s).
    grunt.registerTask('default', ['ts', 'webpack']);

    let changedFiles = Object.create(null);
    const onChange = grunt.util._.debounce(() => {
        const x = {};
        Object.keys(changedFiles).forEach((f) => {
            x[f.replace(/^(\.\/)?src\//, 'lib/')] = f;
        });
        console.log(x);
        grunt.config('babel.watch.files', x);
        changedFiles = Object.create(null);
}, 200);
grunt.event.on('watch', (action, filepath) => {
  changedFiles[filepath] = action;
  onChange();
});
};
