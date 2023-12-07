const Coach = require('../models/coach-list');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const getCoaches = async (req, res) => {
    try {
        let query = Coach.find();

        // Filtering
        if (req.query.game) {
            query = query.where('game').equals(req.query.game);
        }
        if (req.query.nationality) {
            query = query.where('nationality').equals(req.query.nationality);
        }
        if (req.query.rank){
            query=query.where('rank').equals(req.query.rank)
        }
        
        if (req.query.sortBy) {
            const sortParam = req.query.sortBy.split(':');
            query = query.sort({ [sortParam[0]]: sortParam[1] === 'desc' ? -1 : 1 });
        }
        const coaches = await query.exec();
        const baseUrl = req.protocol + '://' + req.get('host') + '/'; // Adjust this depending on your server setup

        const coachesWithImageUrls = coaches.map(coach => {
            if (coach.image) {
                // Construct the full URL for the image
                coach.image = baseUrl + coach.image;
            }
            return coach;
        });
        res.json(coachesWithImageUrls);
    } catch (error) {
        res.status(500).send(error);
    }
};
const addCoach = async(req,res)=>{
    try {
        const nCoach = new Coach({
            name: req.body.name,
            nationality: req.body.nationality,
            game:req.body.game,
            rating: req.body.rating,
            rank: req.body.rank,
            strong1:req.body.strong1,
            strong2:req.body.strong2,
            strong3:req.body.strong3,
        });
        if (req.file) {
            
            nCoach.image = req.file.path;
        }
        const newCoach = await nCoach.save();
        res.status(201).json(newCoach);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getCoachById = async (req, res) => {
    try {
        const coach = await Coach.findById(req.params.id);
        if (!coach) {
            return res.status(404).json({ message: "Coach not found" });
        }
        res.json(coach);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    getCoaches,
    addCoach,
    getCoachById
  };