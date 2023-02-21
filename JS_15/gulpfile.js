'use strict'
const {galp, src, task,series,dest, parallel} = require("gulp");
const combine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const clean = require("gulp-clean");
const sass = require('gulp-sass')(require('sass'));
const injectPartials = require('gulp-inject-partials');
const imagemin = require("gulp-imagemin");


const sorces = {
    base_path: "src",
    component: "components",    
}

const distanation = {
    base_path: "app",
    templates: "temp",
    style: "style",
    images: "img",
    js: "scripts"
}

const component = `${sorces.base_path}/${sorces.component}`;
const app_temp = `${distanation.base_path}/${distanation.templates}`;
const app_js = `${distanation.base_path}/${distanation.js}`;
const app_style = `${distanation.base_path}/${distanation.style}`;
const app_img = `${distanation.base_path}/${distanation.images}`;




task('styles', () => {     
        return src([`${sorces.base_path}/scss/main.scss`, `${component}/**/*.scss`])
            .pipe(sass().on('error', sass.logError))
            .pipe(dest(`${app_temp}/`));
});

task('styles_combaine', () => {
    return src([`${app_temp}/**/*.css`])
         .pipe(combine())
         .pipe(concat('style.css'))
         .pipe(dest(`${app_style}/`));
});

task('import_js', function() {
    return src([`${component}/**/*.js`,`${sorces.base_path}/main.js`])
          .pipe(concat('scripts.js'))
          .pipe(dest(`${app_js}`));
  });

 task('html', function () {
    return src(`${sorces.base_path}/index.html`)
             .pipe(injectPartials())
             .pipe(dest(`${distanation.base_path}`));
  });

task('cleare', () => {
    return src(`${distanation.base_path}/*`, { allowEmpty: true })
        .pipe(clean());
});

task('cleare_temp', () => {
    return src(`${app_temp}`, { allowEmpty: true })
        .pipe(clean());
});

task('images', () => {
    return src(`${component}/**/img/*`)
    .pipe(imagemin())
    .pipe(dest(`${app_img}/`));
});

task('set_styles', series(['styles', 'styles_combaine']));
task('js', series(['import_js','images']));
task('index_html', series(['html']));
task('build-planets', series('cleare', parallel('set_styles','js','index_html'),'cleare_temp'));