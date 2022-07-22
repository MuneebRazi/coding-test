module.exports = {
  test: {
    client: 'pg',
    connection: {
      port: process.env.DB_PORT || 5432,
      host: process.env.DB_HOST || 'test-db',
      database: process.env.DATABASE || 'test',
      user: process.env.USER || 'root',
      password: process.env.DB_PASSWORD || 'toor',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations:{
      directory: 'migrations',
    }
  },
};
