module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: './build',
            index: "index.html"
        });
    });

    $.gulp.task('ftp:upload', function() {
        var conn = $.ftpupload.create({
            host: '91.240.86.30',
            user: 'digital',
            password: '0A3i9T1o',
            parallel: 10,
            log: $.log.log
        });
        var globs = ['./build/**/*'];
        return $.gulp.src(globs, {base: 'build/', buffer: false})
            .pipe(conn.dest('www/trianon/digital-easy.ru/frontend'));
    });
};