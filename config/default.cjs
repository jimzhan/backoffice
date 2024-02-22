module.exports = {
  debug: true,
  host: '0.0.0.0',
  port: 8000,
  db: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      database: 'postgres',
      password: 'postgres'
    },
    pool: {
      min: 5,
      max: 10
    },
    migrations: {
      directory: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    }
  }
}