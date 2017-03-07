// See http://brunch.io for documentation.
exports.files = {
  npm: {
      styles: {
          "bulma": ['css/bulma.css'],
          "font-awesome": ['css/font-awesome.css']
      }
  },
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest', 'react']}
};

exports.hot = true;
