# Mets Interview

Hello!

This is my attempt at the Mets' Technical Assessment for Software Engineers.

Run the application by installing dependencies:
```
npm install
```
and then running the app:
```
STATS_FILE=<filename> DEBUG=mets-interview:* npm start
```
Note: don't forget to replace `<filename>` with the path to the csv.

Access the application at http://localhost:3000

### GET /players/:playerId

The application has a single REST endpoint to fetch a single player by their player_id.

```
curl -v http://localhost:3000/players/446334
```

### Running the tests

```
npm test
```