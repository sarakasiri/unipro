import React, { useEffect, useRef } from 'react';

import classes from './styles/Video.module.scss';

import videoFile from '../../assets/videos/home.mp4';

const Video = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });
    return (
        <>
            <div className={classes.videoContainer}>
                <video
                    ref={videoRef}
                    src={videoFile}
                ></video>
            </div>
        </>
    );
};

export default Video