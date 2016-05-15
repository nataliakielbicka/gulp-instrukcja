var gulp = require('gulp');  //gulp lokalnie
var browserSync = require('browser-sync').create(); //automatyczne odświeżanie przeglądarki
var sass = require('gulp-sass'); //automatyczny kompilator sassów
var rename = require('gulp-rename'); //zmienia nazwę pliku (u nas css/main.css na css/main.min.css)

//zadanie związane z kompilacją stylów
gulp.task('sass', function () {
	return gulp.src('src/sass/*.scss') //ścieżka do katalogu z głównym plikiem sass
		.pipe(sass().on('error', sass.logError)) //jeśli w pliku sass mamy jakiś błąd, to w konsoli polecą błędy i style się nie skompilują, a tym samym gulp nie będzie działać, dopóki tego nie poprawimy :)
		.pipe(sass({
			outputStyle: 'compressed' //minifikacja pliku css
		}))
		.pipe(rename({
			suffix: '.min' //zmiana nazwy pliku css
		}))
		.pipe(gulp.dest('src/css/')) //ścieżka do folderu zawierającego skompilowane cssy
		.pipe(browserSync.stream()); //automatyczne odświeżanie przeglądarki
});

//serwer + "oglądanie" plików scss/html
gulp.task('serve', ['sass'], function () {
	browserSync.init({
		server: "./src"
	});

	gulp.watch('src/sass/**/*.scss', ['sass']); //pliki sass
	gulp.watch("src/index.html").on('change', browserSync.reload); //jeśli plik index.html zostanie zmieniony, to przeglądarka sama się odświeży
});

gulp.task('default', ['serve']); //przy uruchamianiu komendy gulp, automatycznie uruchamia się zadanie domyślne, sass oraz browser-sync