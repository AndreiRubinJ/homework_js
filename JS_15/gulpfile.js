'use strict'
const {galp, src, task,series,dest, parallel} = require("gulp");
const combine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const clean = require("gulp-clean");
const sass = require('gulp-sass')(require('sass'));
const injectPartials = require('gulp-inject-partials');
const imagemin = require("gulp-imagemin");


task('styles', () => {     
        return src(['src/scss/main.scss', 'src/components/**/*.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(dest('app/temp/'));
});

task('styles_combaine', () => {
    return src(['app/temp/**/*.css'])
         .pipe(combine())
         .pipe(concat('style.css'))
         .pipe(dest('app/style/'));
});

task('import_js', function() {
    return src(['src/components/**/*.js','src/main.js'])
          .pipe(concat('scripts.js'))
          .pipe(dest('app/scripts'));
  });

 task('html', function () {
    return src('src/index.html')
             .pipe(injectPartials())
             .pipe(dest('app'));
  });

task('cleare', () => {
    return src("app/*", { allowEmpty: true })
        .pipe(clean());
});

task('cleare_temp', () => {
    return src("app/temp", { allowEmpty: true })
        .pipe(clean());
});

task('images', () => {
    return src("src/components/**/img/*")
    .pipe(imagemin())
    .pipe(dest("app/img/"));
});

task('set_styles', series(['styles', 'styles_combaine']));
task('js', series(['import_js','images']));
task('index_html', series(['html']));
task('build-planets', series('cleare', parallel('set_styles','js','index_html'),'cleare_temp'));