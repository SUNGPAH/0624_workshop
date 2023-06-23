const fs = require('fs');
const path = require('path');

const getMemo = (id) => {
  const filePath = path.join(process.cwd(), 'data.json');

  const jsonDataRead = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonDataRead);
  const memo = data.memos.find(memo => memo.id === parseInt(id))

  return memo
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.log(req.query)

    const memo = getMemo(req.query.id)
    res.status(200).json({ memo: memo });
  } else {
    console.log('here..?')
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
