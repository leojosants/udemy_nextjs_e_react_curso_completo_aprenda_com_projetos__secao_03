export default function question(req, res) {
  if (req.method === 'GET') {
    get(req, res);
  }
  else {
    res.status(405).send();
  }
};

function get(req, res) {
  const id = req.query.id;

  res.status(200).json(
    {
      id,
      statement: 'What is your favorite color?',
      answers: ['White', 'Red', 'Yellow', 'Green'],
    }
  );
};