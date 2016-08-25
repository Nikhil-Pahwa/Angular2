// Livereload browser page using Connect Middleware
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
});
module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt 
    grunt.initConfig({

        // grunt-contrib-connect will serve the files of the project
        // on specified port and hostname
        connect: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    // Prevents Grunt to close just after the task (starting the server) completes
                    // This will be removed later as `watch` will take care of that
                    //  keepalive: true,
                    middleware: function(connect, options) {

                        return [

                            // Livereload browser page using Connect Middleware
                            lrSnippet,

                            // Serve the project folder
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },

        // Cleaning the old files and building new files
        clean: {
            build: ['app/js/', 'production'],
            unusedProd: ['production/components/home/*.js', 'production/components/login/*.js', 'app/js']
        },

        // grunt-open will open your browser at the project's URL
        open: {
            dev: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>'
            },
            production: {
                path: 'http://localhost:<%= connect.all.options.port%>/production/index.html'
            }
        },
        
        // Look for change in sass files
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: 'app/assets/sass/**/*.scss',
                tasks: ['compass:server']
            }
        },

        compass: {
            options: {
                sassDir: 'app/assets/sass/',
                cssDir: 'app/assets/css/'
            },
            server: {
                options: {
                    config: 'config.rb',
                    debugInfo: false
                }
            }
        },
                
        // Copy module to copy the files during processes
        copy: {
            build: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'production/app',
                    src: [
                        'assets/**',
                        'components/**',
                        'fonts/**',
                        'json/**',                        
                        'js/**',
                        'css/**',
                        'app.js',
                    ]
                }, {
                    expand: true,
                    src: ['website/**'],
                    dest: 'production'
                }, {
                    expand: true,
                    src: ['website.html'],
                    dest: 'production'
                }]
            },
        },

        // Uglify task info. Compress the js files.
        uglify: {
            options: {
                mangle: true,
                preserveComments: 'some'
            },
            my_target: {
                files: {
                    'app/js/library.min.js': ['node_modules/jquery/dist/jquery.js'
                    ],
                    'app/js/main.min.js': ['app/app.js',
                        'app/config.js'     
                    ],

                }
            }
        }
    });

    // Creates the `default` task for development
    grunt.registerTask('default', [
        'open:dev',
        'connect',
   //     'compass',
        'watch'               
    ]);

    // Creates the `deployment` task for production
    grunt.registerTask('production', [
        'clean:build',
        'uglify',
        'includes',
        'copy',
        'clean:unusedProd',
        'open:production',
        'connect'       
    ]);

};