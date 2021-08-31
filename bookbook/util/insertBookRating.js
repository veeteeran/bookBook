const mysql = require('serverless-mysql')({
  // config for local database 
  config: {
    host: '127.0.0.1',
    database: 'bB_database',
    user: 'root',
    password: '2164vsp*'
  }
  // config for Digital Ocean database
  // config: {
  //   host: 'db-mysql-nyc3-94219-do-user-9702990-0.b.db.ondigitalocean.com',
  //   database: 'bB_database',
  //   user: 'doadmin',
  //   password: 'ombjlg3nojkk0667',
  //   port: 25060,
  //   insecureAuth: true // do we need this?
  // }
})

// Main handler function
const insertBookRating = async (title = '', rating = 0, id = null) => {
  // Run your query
  const results = await mysql.query('SELECT ISBN FROM Books WHERE Title=?', title)
  let newId = 0
  if (results.length > 0) {
    if (!id) {
      const lastId = await mysql.query('SELECT ID FROM BookRatings order by id desc limit 1')
      newId = (parseInt(lastId[0].ID) + 1)
    }

    await mysql.query(
      'INSERT INTO BookRatings(ID, ISBN, Rating) VALUES(?, ?, ?)',
      [newId, results[0].ISBN, rating])
      .catch(err => console.log(err))
  }

  // Run clean up function
  await mysql.end()

  // Gracefully terminate the connection
  mysql.quit()

  // What do we return results.length?
  // Give clarification if length is > 0
  // Trigger bookEater if no results found?
  // To be done outside of this function?
  return { results, newId }
}

// export default insertBookRating

const { results, newId } = insertBookRating('Dune', 10)

console.log(results, newId)
