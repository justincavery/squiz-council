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
                outfile: '.tmp/critical.css',
                css: 'css/screen.css',
                url: 'http://council.squiz',
                width: 1300,
                height: 900
            },
        },
        cssmin: {
            files: [{
                expand: true,
                cwd: '.tmp/',
                src: '*.css',
                dest: 'css/',
                ext: '.min.css'
            }]
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'svg',
                    src: ['*.svg'],
                    dest: 'css/svg-source'
                }]
            }
        },
        imageoptim: {
            mytask: {
                src: ['images', 'css']
            }
        },
        grunticon: {
            foo: {
                files: [{
                    expand: true,
                    cwd: 'css/svg-source',
                    src: ['*.svg', '*.png'],
                    dest: "css/svg"
                }],
                options: {

                }
            }
        },
        pagespeed: {
            options: {
                nokey: true,
                url: "http://developers.google.com"
            },
            prod: {
                options: {
                    url: "http://responsivedesign.is",
                    locale: "en_GB",
                    strategy: "mobile",
                    threshold: 80
                }
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
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('critical', ['penthouse', 'cssmin']);
    grunt.registerTask('default', ['watch', 'critical']);
    grunt.registerTask('ccss', ['criticalcss', 'pagespeed']);
    grunt.registerTask('imageopt', ['grunticon', 'svgmin', 'imageoptim']);
};