// `/api/hello.js`
export default function foo(req, res) {
  res.statusCode = 200;
  res.json({ message: 'It works' });
}