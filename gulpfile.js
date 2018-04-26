
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    // concatCss    = require('gulp-concat-css'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    spritesmith  = require('gulp.spritesmith');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	   .pipe(sass())
	   .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	   .pipe(gulp.dest('app/css'))
	   .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
	return gulp.src(['app/libs/jquery/dist/jquery.min.js',
	                 'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
	                 'app/libs/owl-carousel/owl.carousel.min.js',
	                 // 'app/libs/bootstrap-4.0.0-alpha.6/dist/js/bootstrap.min.js',
	                 ])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
});

gulp.task('cssnano', ['sass'], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

// gulp.task('font-awesome', function() {
// 	return gulp.src('app/libs/font-awesome/css/fonts/*{ttf,woff,woff2,svg,eot}')
// 	    .pipe(gulp.dest('app/fonts/fontAwesome')) 
// });

gulp.task('browser-sync', function() {
	browserSync({
		// proxy: "www",
		server:{
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('app/img/icon/*.png').pipe(spritesmith({
    imgName: 'sprite-map.png',
    cssName: 'sprite-map.sass'
  }));
  return spriteData.pipe(gulp.dest('app/img/sprites/'));
});

gulp.task('watch', ['browser-sync', 'scripts', 'cssnano'/*,'font-awesome'*/], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/modules/**/*.sass', ['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('clean', function() {

	return del.sync('dist');
});

gulp.task('clear-cache', function() {
	
	return cache.clearAll();
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'))
});



gulp.task('build', ['clean', 'img','sass', 'scripts'],  function() {

	var buildCss = gulp.src([
		'app/css/main.css', 
		'app/css/libs.min.css'
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src(['app/js/**/*'])
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});