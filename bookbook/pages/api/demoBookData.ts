const results = [
  {
    Author: "Gabriel Garcia Marquez",
    ImageLarge: "https://www.amazon.com/Hundred-Solitude-Gabriel-Garcia-Marquez/dp/0060531045/ref=sr_1_4?crid=2IUKZUB32LLOY&dchild=1&keywords=one+hundred+years+of+solitude&qid=1631731877&sprefix=ONe+Hundre%2Caps%2C397&sr=8-4",
    Title: "One Hundred Years of Solitude"
  },
  {
    Author: "Arundhati Roy",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/515cVugM6DL._SX317_BO1,204,203,200_.jpg",
    Title: "The God of Small Things"
  },
  {
    Author: "Salman Rushdie",
    ImageLarge: "https://www.amazon.com/Midnights-Children-Modern-Library-Novels/dp/0812976533/ref=sr_1_1?dchild=1&keywords=Midnight%27s+Children&qid=1631731919&sr=8-1",
    Title: "Midnight's Children"
  },
  {
    Author: "Haruki Murakami",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/31FUL9MO+0L._BO1,204,203,200_.jpg",
    Title: "The Wind-Up Bird Chronicle"
  },
  {
    Author: "Kurt Vonnegut",
    ImageLarge: "https://www.amazon.com/Slaughterhouse-Five-Novel-Modern-Library-Novels/dp/0385333846/ref=sr_1_1?crid=32AGC9QWI2EFT&dchild=1&keywords=slaughterhouse+five&qid=1631732013&sprefix=Slau%2Caps%2C203&sr=8-1",
    Title: "Slaughterhouse-Five"
  },
  {
    Author: "Neil Gaiman",
    ImageLarge: "https://images-na.ssl-images-amazon.com/images/I/51DYpzOxQqL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    Title: "Good Omens"
  },
  {
    Author: "Octavia E. Butler",
    ImageLarge: "https://www.amazon.com/Parable-Sower-Octavia-Butler/dp/1538732181/ref=sr_1_1?crid=23MQJ8W46HLE5&dchild=1&keywords=parable+of+the+sower&qid=1631732059&sprefix=Parable+of+%2Caps%2C199&sr=8-1",
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