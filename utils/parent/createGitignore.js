const { fs, writeFile } = require('../nodeUtils');

module.exports = async (name, spinner) => {
  console.log(`----------------------------------------`);
  spinner.start();
  console.log(`[ createGitignore ] : ${name}/.gitignore`);
  try {
    const gitignore = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/backend/node_modules
/frontend/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/backend/build
/frontend/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*`;
    await writeFile(`${name}/.gitignore`, gitignore);
    const isValid = fs.existsSync(`${name}/.gitignore`);
    console.log(`----------------------------------------`);
    isValid
      ? spinner.succeed(` [ createGitignore ] : SUCCESS`)
      : spinner.fail(` [ createGitignore ] : ERROR`);
    return { message: isValid };
  } catch (e) {
    throw new Error(`@[ createGitignore ] : ${name}/.gitignore`);
    return { message: e };
  }
};
