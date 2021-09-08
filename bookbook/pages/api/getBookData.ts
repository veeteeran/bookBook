import executeQuery from '../../util/db'

export default async (req, res) => {
  try {
    const results = await executeQuery({
      query: 'SELECT Title, Author, ImageLarge FROM Books WHERE ISBN in (0553579606, 0553275739, 0425163393, 042516098, 0375703063, 0316184152, 0449907597, 1885071213, 1569661057, 1558531025)',
      values: []
    })
      .catch(err => console.log(err))
    return res.status(200).send(results)
  } catch (error) {
    console.log(error);
  }
}