const express = require('express');
const router = express.Router();
const { getCoaches,addCoach , getCoachById} = require('../controllers/coachesControllers');
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
router.get('/', getCoaches);
router.post('/',upload.single('image'), addCoach)

module.exports= router;