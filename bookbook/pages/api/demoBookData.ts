const results = [
  {
    Author: "Gabriel Garcia Marquez",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/51p+yiLxdfS._AC_SX60_CR,204,203,200_.jpg",
    Title: "One Hundred Years of Solitude"
  },
  {
    Author: "Arundhati Roy",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/515cVugM6DL._SX317_BO1,204,203,200_.jpg",
    Title: "The God of Small Things"
  },
  {
    Author: "Salman Rushdie",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/51tTwf4pERS._AC_SX60_CR,204,203,200_.jpg",
    Title: "Midnight's Children"
  },
  {
    Author: "Haruki Murakami",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/31FUL9MO+0L._BO1,204,203,200_.jpg",
    Title: "The Wind-Up Bird Chronicle"
  },
  {
    Author: "Kurt Vonnegut",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/41Rb55Ct28L._AC_SX60_CR,204,203,200_.jpg",
    Title: "Slaughterhouse-Five"
  },
  {
    Author: "Neil Gaiman",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/51DYpzOxQqL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "Good Omens"
  },
  {
    Author: "Octavia E. Butler",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/41aTuGJucQL._AC_SX60_CR,204,203,200_.jpg",
    Title: "Parable of the Sower"
  },
  {
    Author: "Jeff Noon",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/415GdOPnOwL._SX265_BO1,204,203,200_.jpg",
    Title: "Vurt"
  },
  {
    Author: "Orson Scott Card",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/51mFjc1H1xS._SX329_BO1,204,203,200_.jpg",
    Title: "Ender's Game"
  },
  {
    Author: "Frank Herbert",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/41LmPEurOOL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "Dune"
  }
]

export default (req, res) => {
  return res.status(200).send(results)
}