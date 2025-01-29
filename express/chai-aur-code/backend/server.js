import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// get a list of 5 jokes

app.get('/jokes', async (req, res) => {
    const jokes = [
        {id: 1,
            joke: 'Why don\'t scientists trust atoms? Because they make up everything.'
        },
        {id: 2,
            joke: 'What do you call a fish that lives in a pond? A pond fish.'
        },
        {id: 3,
            joke: 'Why did the scarecrow win an award? Because he was outstanding in his field.'
        },
        {id: 4,
            joke: 'Why don\'t scientists trust atoms? Because they make up everything.'
        },
        {id: 5,
            joke: 'What do you call a fish that lives in a pond? A pond fish.'
        }
    ]
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});