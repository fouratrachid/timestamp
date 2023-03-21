## Timestamp Microservice

This is a timestamp microservice built using `Express` in `Node.js`. It provides the current timestamp in both Unix and UTC formats, as well as the timestamp for a given date in the same formats.

## Documentation

To get the current timestamp:

GET /api/

To get the timestamp for a specific date, provide the date as a parameter in the format `YYYY-MM-DD` or as a Unix timestamp:

GET /api/:time

## Example Usage

GET https://your-app-url.com/api/1616336752097

### Example Response

```json
{
  "unix": 1616336752097,
  "utc": "Tue, 23 Mar 2021 14:25:52 GMT"
}
```

## Run Locally

Clone the repository:

```
  git clone https://github.com/fouratrachid/timestamp-microservice.git
```

Install dependencies

```bash
  npm install express
```

Go to the project directory

```bash
  cd timestamp-microservice
```

Start the server

```bash
  npm run start
```

## Author

- This project was created by [@Fourat Rachid](https://github.com/fouratrachid) as part of the [@freeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice) curriculum.
