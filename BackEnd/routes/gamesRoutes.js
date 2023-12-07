const express = require('express');
const router = express.Router();
const { getAllGames,addGame} = require('../controllers/gameControllers.js');
const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: 'upload/',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);
const upload = multer( { storage: storage } )
router.get('/', getAllGames);
router.post('/',upload.single('image'), addGame);

module.exports= router;