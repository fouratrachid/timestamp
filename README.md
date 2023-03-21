# Timestamp Microservice

This is a timestamp microservice built using `Express` in `Node.js`. It provides the current timestamp in both Unix and UTC formats, as well as the timestamp for a given date in the same formats.

## Usage

To get the current timestamp:

GET /api/


To get the timestamp for a specific date, provide the date as a parameter in the format `YYYY-MM-DD` or as a Unix timestamp:

GET /api/:time


If the provided date is invalid, an error message will be returned.

## Example Usage

GET https://your-app-url.com/api/1616336752097


## Example Response

```json
{
  "unix": 1616336752097,
  "utc": "Tue, 23 Mar 2021 14:25:52 GMT"
}

## Installation
Clone the repository: git clone https://github.com/your-username/timestamp-microservice.git
Install the dependencies: npm install
Start the server: npm start
## Dependencies
Express: ^4.17.1
## Credits
This project was created by your Fourat Rachid as part of the FreeCodeCamp curriculum.
