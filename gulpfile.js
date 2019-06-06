/**
 *
 * BOOTSTRAP_SASS frontend build 2019
 *
 * @see - this for Gulp 4.x (@latest June 2019), which uses different syntax from 3.x branch
 *
 * @modernfidelity
 *
 * @type {Gulp}
 */

'use strict';

const sourceCSS = "./src/client/app/sass";

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");

sass.compiler = require('node-sass');

// SASS (+css) tasks
function compileSass(){
    return gulp.src(sourceCSS + '/app.scss')
    // return gulp.src('stylesheets/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
        .pipe(rename('build.css'))
        .pipe(gulp.dest('build/assets/css/'));

}

gulp.task('default', gulp.series(compileSass));
