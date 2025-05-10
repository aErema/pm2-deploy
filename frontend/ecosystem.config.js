require('dotenv').config();

const { PORT, JWT_SECRET, DB_HOST, DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH,DEPLOY_REF} = process.env;
console.log('123', `${DEPLOY_REF}`);

module.exports = {
  apps: [{
    name: 'mesto-frontend',
    script: "dist/app.js",
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:aErema/nodejs-mesto-frontend.git',
      path: DEPLOY_PATH,
      'pre-deploy-local': `pwd && scp ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'npm i && npm run build && cp -r ./build/* /home/gorskaya/mesto-frontend',
    },
  },
}
