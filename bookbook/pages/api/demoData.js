const mockData = ['0002005018', '0887841740', '1552041778', '1567407781', '1879384493']
export default (req, res) => {
  const randomNumber = Math.floor((Math.random() * 7) + 1)
  const { title, rating } = req.query
  console.log('Title: ', title)
  console.log('Rating: ', rating)

  if (randomNumber < mockData.length)
    return res.status(200).json({ userId: '278855', isbn: mockData[randomNumber] })

  return res.status(200).json({})
}