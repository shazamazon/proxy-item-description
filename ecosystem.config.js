module.exports = {
  apps: [{
    name: 'proxy-item-description',
    script: 'server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-58-218-116.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/FEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/shazamazon/proxy-item-description.git',
      path: '/home/ubuntu/proxy-item-description',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}