// See http://brunch.io for documentation.
exports.files = {
    npm: {
        styles: {
            "bulma": ['css/bulma.css'],
            "font-awesome": ['css/font-awesome.css']
        }
    },
    javascripts: {
        joinTo: {
            'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
            'app.js': /^app/
        }
    },
    stylesheets: {
        joinTo: 'app.css'
    }
};

exports.plugins = {
    babel: {
        presets: ['latest', 'react']
    },
    gzip: {
        paths: {
            javascript: '/',
            stylesheet: '/',
        },
        removeOriginalFiles: false,
        renameGzipFilesToOriginalFiles: false,
    }
};

exports.hot = true;
