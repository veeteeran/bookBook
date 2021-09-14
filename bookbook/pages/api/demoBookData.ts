const results = [
  {
    Author: "Gabriel Garcia Marquez",
    ImageLarge: "http://images.amazon.com/images/P/0060531045.01.LZZZZZZZ.jpg",
    Title: "One Hundred Years of Solitude"
  },
  {
    Author: "Arundhati Roy",
    ImageLarge: "http://images.amazon.com/images/P/0060977493.01.LZZZZZZZ.jpg",
    Title: "The God of Small Things"
  },
  {
    Author: "Salman Rushdie",
    ImageLarge: "http://images.amazon.com/images/P/0140132708.01.LZZZZZZZ.jpg",
    Title: "Midnight's Children"
  },
  {
    Author: "Haruki Murakami",
    ImageLarge: "http://images.amazon.com/images/P/037571894X.01.LZZZZZZZ.jpg",
    Title: "A Wild Sheep Chase"
  },
  {
    Author: "Kurt Vonnegut",
    ImageLarge: "http://images.amazon.com/images/P/0385333846.01.LZZZZZZZ.jpg",
    Title: "Slaughterhouse-Five"
  },
  {
    Author: "Neil Gaiman",
    ImageLarge: "http://images.amazon.com/images/P/0441003257.01.LZZZZZZZ.jpg",
    Title: "Good Omens"
  },
  {
    Author: "Octavia E. Butler",
    ImageLarge: "http://images.amazon.com/images/P/0446675504.01.LZZZZZZZ.jpg",
    Title: "Parable of the Sower"
  },
  {
    Author: "Jeff Noon",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/415GdOPnOwL._SX265_BO1,204,203,200_.jpg",
    Title: "Vurt"
  },
  {
    Author: "Orson Scott Card",
    ImageLarge: "http://images.amazon.com/images/P/0812589041.01.LZZZZZZZ.jpg",
    Title: "Ender's Game"
  },
  {
    Author: "Frank Herbert",
    ImageLarge: "http://images.amazon.com/images/P/044100590X.01.LZZZZZZZ.jpg",
    Title: "Dune"
  }
]

export default async (req, res) => {

  return res.status(200).send(results)
}