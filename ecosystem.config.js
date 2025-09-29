module.exports = {
  apps: [
    {
      name: 'gamblinglawsuit',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/gambling',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-7NRXBXD9SY'
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true
    }
  ]
};
