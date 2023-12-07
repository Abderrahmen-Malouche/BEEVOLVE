const Video = require('../models/video');
const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find({})
        res.json(videos)
    } catch (e) {
        console.log(e)
    }
};
const addVideo = async (req, res) => {
    try {
        const nVideo = new Video({
            link: req.body.link,
            coach: req.body.coach,
            game: req.body.game,
            title:req.body.title
        });
        const newVideo = await nVideo.save();
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllVideos,
    addVideo
};