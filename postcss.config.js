<<<<<<< HEAD
// postcss.config.js

// connect plugins to the file
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  // connect plugins to PostCSS
  plugins: [
    // connect autoprefixer
    autoprefixer,
    // pass an object with options upon connecting cssnano:
    cssnano({ preset: "default" }) // set default minification settings
  ]
=======
// postcss.config.js

// connect plugins to the file
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  // connect plugins to PostCSS
  plugins: [
    // connect autoprefixer
    autoprefixer,
    // pass an object with options upon connecting cssnano:
    cssnano({ preset: "default" }) // set default minification settings
  ]
>>>>>>> ea984ad238e30bf56f0c406746ad103a00c5546c
};