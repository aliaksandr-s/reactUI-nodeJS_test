## To run the project
1. Run the server (npm install, npm start) it will start on port 3000
2. Run the client (npm install, npm start) it will start on port 3001 and 3002

## To test notifications 
Make a `POST` request to `http://localhost:3001/customers`

Send data as `raw` in `JSON` format

Data format example:
```json
{
  "reference": "11041-67789",
  "name": "Jane Doe",
  "mortgageType": "Remo",
  "vulnerability": "Risk"
}
```

## To run tests
npm run test