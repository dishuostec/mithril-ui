const path = require('path');
const cwd = process.cwd();

const config = {
  includePaths: [],
};

const imports = [];


if (process.env.MMU_LOAD_CONFIG_PATH) {
  imports.push('config');
  config.includePaths.push(path.resolve(cwd, process.env.MMU_LOAD_CONFIG_PATH));
}

if (process.env.MMU_PLATFORM) {
  imports.push(process.env.MMU_PLATFORM);
  config.includePaths.push(path.resolve(__dirname, 'lib', 'platform'));
}

if (imports.length) {
  config.data = imports.map(file => `@import "${file}";`).join('');
}

module.exports = config;
