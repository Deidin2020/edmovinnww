module.exports = {
    apps : [
        {
            name   : "edmovinn Staging Website",
            cwd : "./",
            args: "start",
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: 'npm',
            env_production: {
                SERVER_PORT: 3001,
                NODE_ENV: "production"
            }
        }
    ]
}
