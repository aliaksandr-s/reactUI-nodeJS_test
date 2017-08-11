# Create Questions Sequence
If for some answers on question next question != current question + 1 then

Open file sequence.json in src folder

Add objects with "question" (id for question in DB) number and "next" array to main array

Add objects with array of "answers" (id "answers" for current question) 
and "question" (id for next "question")  to "next" array 

For example:
[
  {
    "question": 1,
    "next": [
      {
        "answers": [2],
        "question": 3
      }
    ]
  }, {
    "question": 2,
    "next": [
      {
        "answers": [1, 3],
        "question": 4
      }
    ]
  }
]

## Setup
`npm install`
Create file test.json in src/config the same test.json.example 
with connection string to MongoDB

## Start Command
`npm test` for tesing
`npm start` for run server at localhost:3000