var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

var source = './uncompressed/*.svg';
var output = './compressed/';

var defaultOptions = [
	{ cleanupAttrs: true },
	{ removeDoctype: true },
	{ removeXMLProcInst: true },
	{ removeComments: true },
	{ removeMetadata: true },
	{ removeTitle: true },
	{ removeDesc: true },
	{ removeUselessDefs: true },
	{ removeEditorsNSData: true },
	{ removeEmptyAttrs: true },
	{ removeHiddenElems: true },
	{ removeEmptyText: true },
	{ removeEmptyContainers: true },
	{ removeViewBox: true },
	{ cleanupEnableBackground: true },
	{ minifyStyles: true },
	{ convertStyleToAttrs: true },
	{ convertTransform: true },
	{ removeUnknownsAndDefaults: true },
	{ removeNonInheritableGroupAttrs: true },
	{ removeUselessStrokeAndFill: true },
	{ removeUnusedNS: true },
	{ cleanupIDs: true },
	{ collapseGroups: true },
	{ removeRasterImages: true },
	{ convertShapeToPath: true }
];

gulp.task('svg-normal', function() {

	var optionsNormal = JSON.parse(JSON.stringify(defaultOptions));
	optionsNormal.push({ mergePaths: false });

	return gulp.src(source)
		.pipe(svgmin({
			plugins: optionsNormal
		}))
		.pipe(gulp.dest(output + '/normal'));

});

gulp.task('svg-merge', function() {

	var optionsMerge = JSON.parse(JSON.stringify(defaultOptions));
	optionsMerge.push({ mergePaths: true });

	return gulp.src(source)
		.pipe(svgmin({
			plugins: optionsMerge
		}))
		.pipe(gulp.dest(output + '/merged'));

});

gulp.task('compress', [
	'svg-normal',
	'svg-merge',
]);
