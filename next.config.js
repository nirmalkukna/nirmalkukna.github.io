const path = require('path');

module.exports = {
  output: 'export', // For static export
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true, // Ensures paths end with a slash (good for GitHub Pages)
};
