var express = require('express');
var router = express.Router();

/* GET player by id listing. */
router.get('/:playerId', function(req, res, next) {
    const id = req.params['playerId']
    const playerDataById = req['playerDataById']

    if (!playerDataById.has(id)) {
        res.status(404).json({ error: 'Player not found' })
    }

    res.json(playerDataById.get(id));
});

module.exports = router;
