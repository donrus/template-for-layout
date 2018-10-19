module.exports = function() {
	$.gulp.task('data:copy', function() {
	        return $.gulp.src(['./data/imports/*.*'])
	            .pipe($.gulp.dest('./build/data/'))
	            .pipe($.browserSync.reload({
	                stream: true
	            }));
	    });
};	