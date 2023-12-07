import React from 'react';
import { useState, useEffect} from 'react';
import Video from "./video";
export default function VideosPage() {
    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/videos')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error('Error fetching Videos:', error));
    }, []);
    
    return (
        <div class="videos">
            <div class="special-heading">Our best Videos </div>
            <div class="container">
            {videos.map(video => (
                <Video
                key={video.id}
                link={video.link}
                coach={video.coach}
                title={video.title}
                game={video.game}
               />
            ))}

            </div>
        </div>
    )
}