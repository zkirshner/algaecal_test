/*
GULPFILE

Gulp tasks not currently in use are commented out.
*/

// load Gulp package from node_modules folder:
var gulp = require("gulp");

// load Gulp concatenation, renaming, and uglification:
//var concat = require("gulp-concat");  
//var rename = require("gulp-rename");  
//var uglify = require("gulp-uglify"); 

// load the gulp-sass plugin:
var sass = require("gulp-sass");

// JS script paths:
//var jsFiles = "js/**/*.js";
//var jsDest = "js/min";

// Sass to CSS conversion:
gulp.task("sass", function() {
	return gulp.src("scss/style.scss")
    	.pipe(sass()) // convert Sass to CSS via gulp-sass
    	.pipe(gulp.dest("css"));
});

// concatenate scripts:
//gulp.task("scripts", function() {  
//    return gulp.src(jsFiles)
//        .pipe(concat("scripts.js"))
//        .pipe(gulp.dest(jsDest))
//        .pipe(rename('scripts.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest(jsDest));
//});

// pipe fonts to dist folder:
//gulp.task('fonts', function() {
//    return gulp.src('app/fonts/**/*')
//        .pipe(gulp.dest('dist/fonts'));
//});

// Gulp watcher for all gul tasks (Sass compiling, JS concatenating / renaming / uglification):
gulp.task("watch", function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
  //gulp.watch("app/js/**/*.js", ["scripts"]); 
});
