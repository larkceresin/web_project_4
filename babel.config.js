<<<<<<< HEAD
const presets = [
  ['@babel/env', { // preset you want to use
    targets: { // browser versions in which we want our code supported
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },

    // use polyfills for the browsers specified in the above targets option
        // Babel uses polyfills from the core-js library
    useBuiltIns: "entry"
  }]
];

=======
const presets = [
  ['@babel/env', { // preset you want to use
    targets: { // browser versions in which we want our code supported
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },

    // use polyfills for the browsers specified in the above targets option
        // Babel uses polyfills from the core-js library
    useBuiltIns: "entry"
  }]
];

>>>>>>> ea984ad238e30bf56f0c406746ad103a00c5546c
module.exports = { presets };