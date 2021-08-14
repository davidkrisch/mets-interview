var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const players = [];
    for (const player of req.playerDataById.values()) {
        players.push(player);
    }
    console.log(players)
    res.render('index.jade', {
        title: "Hitter Stats",
        players: players
    });
});

module.exports = router;
