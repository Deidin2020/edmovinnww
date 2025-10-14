module.exports = {
    apps : [
        {
            name   : "edmovinninninninninninninn Website",
            cwd : "./",
            args: "start",
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: 'npm',
            env_production: {
                SERVER_PORT: 3005,
                NODE_ENV: "production"
            }
        }
    ]
}
