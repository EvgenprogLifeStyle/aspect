export const copy_pages = () => {
	return app.gulp.src(app.path.src.pages)
		.pipe(app.gulp.dest(app.path.build.pages))
}