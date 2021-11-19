let mix = require('laravel-mix');

mix.setPublicPath('dist');

mix.sass('src/sass/root-consent.scss', 'dist/css/root-consent.css');

mix.js('src/js/root-consent.js', 'dist/js/root-consent.js');
mix.js('src/js/jquery.root-consent.js', 'dist/js/jquery.root-consent.js');

mix.js('src/js/plugins/example.js', 'dist/js/plugins/example.js');
mix.js('src/js/plugins/hubspot.js', 'dist/js/plugins/hubspot.js');
mix.js('src/js/plugins/hotjar.js', 'dist/js/plugins/hotjar.js');
mix.js('src/js/plugins/google-analytics.js', 'dist/js/plugins/google-analytics.js');
mix.js('src/js/plugins/google-tag-manager.js', 'dist/js/plugins/google-tag-manager.js');
mix.js('src/js/plugins/facebook-sdk.js', 'dist/js/plugins/facebook-sdk.js');
mix.js('src/js/plugins/twitter-widget.js', 'dist/js/plugins/twitter-widget.js');
mix.js('src/js/plugins/linkedin-plugin.js', 'dist/js/plugins/linkedin-plugin.js');
mix.js('src/js/plugins/DGM.js', 'dist/js/plugins/DGM.js');
mix.js([
    'src/js/plugins/google-analytics.js',
    'src/js/plugins/google-tag-manager.js',
    'src/js/plugins/facebook-sdk.js',
    'src/js/plugins/twitter-widget.js',
    'src/js/plugins/linkedin-plugin.js',
    'src/js/plugins/DGM.js'
], 'dist/js/plugins/root-consent-plugins.js');

mix.webpackConfig({
    output: {
        libraryTarget: 'umd'
    }
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
//
// mix.js('src/app.js', 'dist/')
//    .sass('src/app.scss', 'dist/');

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.ts(src, output); <-- Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
