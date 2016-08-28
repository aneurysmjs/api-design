'use strict';

import 'babel-register';

import gulp     from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
import serve    from 'browser-sync';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import yargs    from 'yargs';

let reload = () => serve.reload();
let root = 'src';
let build = 'build';

// helper method for resolving paths
let resolveToClient = glob => {
   glob = glob || '';
   return path.join(root, 'amin', glob); // src/{glob}
};

let resolveToComponents = glob => {
   glob = glob || '';
   return path.join(root, 'components', glob); // src/components/{glob}
};

// map of all paths
let paths = {
   js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
   styl: resolveToClient('**/*.styl'), // stylesheets
   html: [
      resolveToClient('**/*.html'),
      path.join(root, 'index.html')
   ],
   entry: path.join(root, 'client/support-app.js'),
   output: root,
   blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', () => {
   return gulp.src(paths.entry)
      .pipe(webpack(require('./webpack.dev.js')))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(build));
});

gulp.task('serve', () => {
   serve({
      port: process.env.PORT || 1989,
      open: false,
      server: { baseDir: root }
   });
});

gulp.task('watch', () => {
   let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
   gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('component', () => {

   let cap = val => val.charAt(0).toUpperCase() + val.slice(1);

   let camelToDashCase = val => val.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

   let name = yargs.argv.name,
       parentPath = yargs.argv.parent || '',
       destPath = path.join(resolveToComponents(), parentPath, camelToDashCase(name));

   return gulp.src(paths.blankTemplates)
      .pipe(template({
         name: name,
         upCaseName: cap(name),
         dashCaseName: camelToDashCase(name)
      }))
      .pipe(rename((path) => {
         path.basename = path.basename.replace('temp', camelToDashCase(name));
      }))
      .pipe(gulp.dest(destPath));
});

gulp.task('default', (done) => {
   sync('webpack', 'serve', 'watch', done);
});