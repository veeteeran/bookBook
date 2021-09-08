import executeQuery from '../../util/db'

export default async (req, res) => {
  try {
    const results = await executeQuery({
      query: 'SELECT ISBN FROM Books WHERE Title=? ORDER BY PublicationYear DESC',
      values: req.query.title,
    })
    let newId = 0
    if (results && results.length > 0) {
      if (!req.query.userId) {
        const lastId = await executeQuery({
          query: 'SELECT ID FROM BookRatings ORDER BY id DESC LIMIT 1',
          values: []
        })
        newId = (parseInt(lastId[0].ID) + 1)
      } else {
        newId = req.query.userId
      }
    }

    await executeQuery(
      {
        query: 'INSERT INTO BookRatings(ID, ISBN, Rating) VALUES(?, ?, ?)',
        values: [newId, results[0].ISBN, req.query.rating]
      })
      .catch(err => console.log(err))
    return res.status(200).json({ userId: newId, isbn: results[0].ISBN })
  } catch (error) {
    console.log(error);
  }
};