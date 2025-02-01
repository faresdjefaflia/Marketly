const pool = require('./src/config/db');

pool.getConnection()
  .then(conn => {
    console.log('✅ Database Connected Successfully!');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Database Connection Failed:', err.message);
  });
