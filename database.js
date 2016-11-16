const pgp = require('pg-promise')()
const db = pgp({database: 'todo'})



const create = {
  todo: (title, note, complete) => {
    db.one(
    `INSERT INTO
    todo (title, note, complete)
    VALUES
    ( $1, $2, $3 )
    RETURNING id`, [title, note, complete]
    )
  },
  list: (name) => {
    db.one(
    `INSERT INTO
      list (name)
      VALUES
      ( $1 )
      RETURNING id`, [name]
      )
    },
  user: (name) => {
    db.one(
    `INSERT INTO
      user (name)
      VALUES
      ( $1 )
      RETURNING id`, [name]
      )
    },
}

const list = {
  all: all => db.any( `SELECT * FROM list order by id asc` ),
  getNameByID: id => db.one(`SELECT name FROM list WHERE id=$1`, [id]),
  forTodos: ids => db.any( `SELECT * FROM list JOIN todo_list ON todo_list.list_id=list_id WHERE todo_list.todo_id IN ($1:csv)`, [ids]),
  delete: id => db.none( `DELETE FROM list WHERE id=$1`, [id]),

}

const todo = {
  all: all => db.any( `SELECT * FROM todo order by id asc` ),
  getTitleByID: id => db.one(`SELECT title FROM todo WHERE id=$1`, [id]),
  forLists: ids => db.any( `SELECT * FROM todo JOIN todo_list ON todo_list.todo_id=todo_id WHERE todo_list.list_id IN ($1:csv)`, [ids]),
  delete: id => db.none( `DELETE FROM todo WHERE id=$1`, [id]),
}

const todoList = {
  create: (todo_id, list_id) => db.one( 'INSERT INTO todo_list ( todo_id, list_id ) VALUES ( $1, $2 ) RETURNING todo_id', [ todo_id, list_id ] ),
  all: all => db.any( 'SELECT * FROM todo_list' )
}

module.exports = {
  create, db
};
