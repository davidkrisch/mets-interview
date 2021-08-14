# Mets Interview

Hello!

This is my attempt at the Mets' Technical Assessment for Software Engineers.

The application assumes the data set is in the base directory of the project 
and is called `stats.csv`.

Run the application by installing dependencies:
```
npm install
```
and then running the app:
```
DEBUG=mets-interview:* npm start
```

### GET /players/:playerId

The application has a single REST endpoint to fetch a single player by their player_id.

```
curl -v http://localhost:3000/players/446334
```

### Running the test suite

```
npm test
```