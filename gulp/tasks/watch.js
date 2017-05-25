var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');

gulp.task('watch', function(){
	
	//initialize browserSync location
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	//autorefresh when html is saved
	watch('./app/index.html',function(){
		browserSync.reload();
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});
	
	//Watch JavaScript file
	watch('./app/assets/scripts/**/*.js', function(){
		//start JS refresh
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'],function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(browserSync.stream());
});

//JavaScript refresh task
gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});