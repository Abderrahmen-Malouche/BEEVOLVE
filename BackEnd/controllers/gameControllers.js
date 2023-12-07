const Game = require('../models/game');
const getAllGames = async (req, res) => {
    try {
        const games = await Game.find({})
        res.json(games)
    } catch (e) {
        console.log(e)
    }
};
const addGame = async (req, res) => {
    try {
        const nGame = new Game({
            name: req.body.name,
            numberOfCoaches: req.body.numberOfCoaches
        });
        if (req.file) {

            nGame.image = req.file.path;
        }
        const newGame = await nGame.save();
        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllGames,
    addGame
};