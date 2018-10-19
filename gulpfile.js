global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    postcss: require('gulp-postcss'),
    autoprefixer: require('autoprefixer'),
    reporter: require('postcss-reporter'),
    stylelint: require('stylelint'),
    syntax_scss: require('postcss-scss'),
    htmlhint: require("gulp-htmlhint"),
    del: require('del'),
    fs: require('fs'),
    webpack: require('webpack'),
    webpackStream: require('webpack-stream'),
    browserSync: require('browser-sync').create(),
    ftpupload: require('vinyl-ftp'),
    log: require('fancy-log'),
    gp: require('gulp-load-plugins')()
};


$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'styles:dev', 
        //'libsstyles:copy',
        'pug', 
        //'libsJS',
        'js:dev',
        //'js:copy',
        'svg', 
        'img:dev', 
        'fonts',
        'svg:copy',
        'data:copy',
    )
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'styles:build', 
        //'libsstyles:copy',
        'pug', 
        //'libsJS',
        'js:build',
        //'js:copy',
        'svg', 
        'img:build', 
        'fonts',
        'svg:copy',
        'data:copy'
    ),
    'ftp:upload'
));

// $.gulp.task('dev', $.gulp.series(
//     'clean',
//     $.gulp.parallel('styles:dev', 'libsstyles:copy', 'pug', 'libsJS:dev', 'js:copy', 'svg', 'img:dev', 'fonts','svg:copy','data:copy')));

// $.gulp.task('build', $.gulp.series(
//     'clean',
//     $.gulp.parallel('styles:build', 'libsstyles:copy', 'pug', 'libsJS:build', 'js:copy', 'svg', 'img:build', 'fonts','svg:copy','data:copy')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));