module.exports = function(grunt) {
    // do grunt stuff here
    grunt.registerTask('watch', ['watch']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                options: {
                    seperator: ';'
                },
                src: [
                    'javascript/*.js'
                ],
                dest: 'js/main.js'
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'js/main.js': ['js/main.js']
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        criticalcss: {
            options: {
                url: 'http://council.squiz',
                width: 320,
                height: 542,
                outputfile: 'css/critical.css',
                filename: 'css/screen.css'
            }
        },
        penthouse: {
            testTask: {
                outfile: '.tmp/out.css',
                css: 'css/screen.css',
                url: 'http://council.squiz',
                width: 1300,
                height: 900
            },
        },
        watch: {
            html: {
                files: ['*.html'],
                options: {
                    livereload: true,
                }
            },
            js: {
                files: ['javascript/*.js'],
                tasks: ['concat:js', 'uglify:js'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['sass/*.scss'],
                tasks: ['compass', 'criticalcss'],
                options: {
                    livereload: true,
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-penthouse');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('test', ['penthouse']);
    grunt.registerTask('default', ['watch', 'test']);
    grunt.registerTask('ccss', ['criticalcss']);
};