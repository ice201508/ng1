module.exports = function(){
	var config = {
		css_source: [
			'node_modules/bootstrap-sass/assets/stylesheets/**/*',
			'node_modules/flat-ui/css/flat-ui.css',
			'node_modules/font-awesome/css/font-awesome.css'
		],
		font: [
			'node_modules/bootstrap-sass/assets/fonts/**/*',
			'node_modules/flat-ui/fonts/**/*',
			'node_modules/font-awesome/fonts/*'
		],
		lib: [
			'node_modules/angular/angular.min.js',
			'node_modules/angular-animate/angular-animate.min.js',
			'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
			'node_modules/angular-ui-router/release/angular-ui-router.min.js',
			'node_modules/jquery/dist/jquery.min.js',
		]
	}

	return config;
}
