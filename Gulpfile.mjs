import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import cssnano from 'gulp-cssnano';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';

const bs = browserSync.create();

const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/',
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/',
  },
  images: {
    src: 'src/images/*',
    dest: 'dist/images/',
  },
};

const sassCompiler = gulpSass(sass);

export function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(bs.stream());
}

export function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(bs.stream());
}

export function images() {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

function watchFiles() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
  gulp.watch('./*.html').on('change', bs.reload);
  gulp.watch('./src/js/**/*.js', gulp.series('scripts'));
}

export function serve() {
  bs.init({
    server: {
      baseDir: './',
      index: 'index.html',
    },
    watch: true,
  });
  watchFiles();
}

export const watch = gulp.series(serve);

const build = gulp.series(gulp.parallel(styles, scripts, images), serve);

gulp.task('build', gulp.series(gulp.parallel(styles, scripts, images)));
export default build;
