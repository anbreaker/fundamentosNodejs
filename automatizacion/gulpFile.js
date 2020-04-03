// npm init -y
// npm i gulp gulp-server-livereload
// npm run build
// npm run serve
// npm run start --> Para ambas tareas

const gulp = require('gulp');
const server = require('gulp-server-livereload');

// npm run build
gulp.task('build', function(callBack){
    console.log('Construyendo el sitio');
    setTimeout (callBack, 1200);
});

// npm run serve
gulp.task('serve', function(callBack){
    gulp.src('www')
    .pipe(server ({
        livereload: true,
        open: true,
    }));
})

// npm run start --> Para ambas tareas
gulp.task('default', gulp.series('build', 'serve'));