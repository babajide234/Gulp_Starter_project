const { on } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile SCSS into CSS

function style(){
    //1. scss file location\
    return gulp.src('./scss/**/*.scss')
    //2. pass file through sass compiler
    .pipe(sass().on('error',sass.logError))
    //3. where to save the compiled css
    .pipe(gulp.dest('./css'))
    //4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
} 

exports.style = style;
exports.watch = watch;