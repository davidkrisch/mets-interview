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
STATS_FILE=<filename> DEBUG=mets-interview:* npm start
```
Note: don't forget to replace `<filename>` with the name of the csv. 

### GET /players/:playerId

The application has a single REST endpoint to fetch a single player by their player_id.

```
curl -v http://localhost:3000/players/446334
```

### Running the tests

```
npm test
```