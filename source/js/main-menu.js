      var navMain = document.querySelector('.main-nav');
      var navToggle = document.querySelector('.main-nav__toggle');
      var gulp = require("gulp");
      var rename = require("gulp-rename");
      var svgstore = require("gulp-svgstore");

      navMain.classList.remove('main-nav--nojs');

      gulp.task("sprite", function () {
        return gulp.src("source/img/icon-*.svg")
          .pipe(svgstore({
            inLineSvg: true
          }))
          .pipe(rename("sprite.svg"))
          .pipe(gulp.dest("source/img"));
      })

      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
        }
      });
