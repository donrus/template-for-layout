module.exports = function () {
    $.gulp.task('styles:build', function() {
        return $.gulp.src('./dev/sass/main.scss')
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/css/'))
    });

    $.gulp.task('styles:dev', function() {


        var processors = [
            $.stylelint(require('../../stylelint.config.js')),
            $.reporter({
              clearMessages: true,
              throwError: true
            }),
            $.autoprefixer({
                browsers: [
                    '> 5%',
                    'last 2 versions',
                    'ie > 7'
                ]
            })
        ];
        return $.gulp.src('./dev/sass/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.postcss(processors, {syntax: $.syntax_scss}))
            .pipe($.gp.sass({
                'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Sass',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    // $.gulp.task('libsstyles:copy', function() {
    //     return $.gulp.src(['node_modules/normalize.css/normalize.css'
    //     ])
    //         .pipe($.gp.concat('libs.min.css'))
    //         .pipe($.gulp.dest('./build/css/'));
    // });

};
