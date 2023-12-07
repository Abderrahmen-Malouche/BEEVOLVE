const express = require('express');
const router = express.Router();
const { getAllVideos,addVideo} = require('../controllers/videoControllers.js');
// const multer = require('multer');
// const storage = multer.diskStorage(
//     {
//         destination: 'upload/',
//         filename: function ( req, file, cb ) {
//             cb( null, file.originalname);
//         }
//     }
// );
// const upload = multer( { storage: storage } )
router.get('/', getAllVideos);
router.post('/', addVideo);

module.exports= router;