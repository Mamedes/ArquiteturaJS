const db = require('../../config/db');
module.exports = {
  all(callback) {
    db.query(`SELECT * FROM book`, function (err, result) {
      if (err) throw ` Database Error ${err}`;
      callback(result.rows);
    });
  },
  create(data, callback) {
    const query = `
       INSERT INTO book (
          titulo,
          autor,
          editora,
          area
          ) VALUES ($1, $2, $3, $4)
        RETURNING ID
    `;
    const values = [data.titulo, data.autor, data.editora, data.area];
    db.query(query, values, function (err, results) {
      if (err) throw `Database ${err}`;
      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(`SELECT * FROM book WHERE id = $1`, [id], function (err, results) {
      if (err) throw ` Database Error ${err}`;
      callback(results.rows[0]);
    });
  },
};
