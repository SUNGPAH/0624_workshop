const fs = require('fs');
const path = require('path');

const getMemos = () => {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonDataRead = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonDataRead);
  const memos = data.memos

  return memos
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.log(req.query)

    const memos = getMemos()
    res.status(200).json({ memos: memos });
  } else {
    console.log('here..?')
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
