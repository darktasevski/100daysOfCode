
var gulp 		= require('gulp'),
	watch 		= require('gulp-watch'),
	browserSync = require('browser-sync').create();


gulp.task('watch', function(){

	browserSync.init({
		server: {
			baseDir: 'app',
            index: "app.html"
		}
	})

	watch('./app/app.html', function(){
		browserSync.reload();
	});
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});
	gulp.task('cssInject', ['styles'], function(){
		return gulp.src('./app/temp/styles/app.css')
			.pipe(browserSync.stream());
	})
	
})