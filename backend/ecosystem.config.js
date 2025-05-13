require('dotenv').config();

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF } = process.env;

module.exports = {
  apps: [{
    name: 'mesto-project',
    script: "dist/app.js",
    autorestart: true,
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:aErema/nodejs-mesto-project.git',
      path: DEPLOY_PATH,
      'pre-deploy-local': `scp ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'pwd && npm i && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
