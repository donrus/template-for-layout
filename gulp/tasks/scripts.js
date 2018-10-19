module.exports = function() {
    let webpackconfig = require('../../webpack.config.js');

    $.gulp.task('lint', function()  {
        return $.gulp.src(['./dev/js/**/*.js', '!./dev/js/libs/**/*.js'])
            .pipe($.eslint(require('../../eslint.config.js')))
            .pipe($.eslint.format())
            .pipe($.eslint.failAfterError());
    });

    $.gulp.task('js:dev', function () {
        return $.gulp.src('./dev/js/main.js')
            .pipe($.webpackStream(webpackconfig))
            .pipe($.gulp.dest('./build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', function () {
        return $.gulp.src('./dev/js/main.js')
            .pipe($.webpackStream(webpackconfig))
            .pipe($.gulp.dest('./build/js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gp.rename({ suffix: '.min' }))
            .pipe($.gulp.dest('./build/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    // $.gulp.task('js:copy', function() {
    //     return $.gulp.src(['./dev/js/libs/three-92.min.js'])
    //         .pipe($.gulp.dest('./build/js/'))
    //         .pipe($.browserSync.reload({
    //             stream: true
    //         }));
    // });
};
