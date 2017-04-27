module.exports = function(){
    var config = {
        css_source: [
            'node_modules/bootstrap-sass/assets/stylesheets/**/*',
            'node_modules/flat-ui/css/flat-ui.css',
            'node_modules/font-awesome/css/font-awesome.css',
            'node_modules/toastr/build/toastr.min.css',
        ],
        font: [
            'node_modules/bootstrap-sass/assets/fonts/**/*',
            'node_modules/flat-ui/fonts/**/*',
            'node_modules/font-awesome/fonts/*'
        ],
        lib: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-local-storage/dist/angular-local-storage.min.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'node_modules/angular-file-upload/dist/angular-file-upload.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/toastr/build/toastr.min.js',
            'node_modules/chart.js/dist/chart.min.js',
            'node_modules/angular-chart.js/dist/angular-chart.min.js',
        ]
    }

    return config;
}
