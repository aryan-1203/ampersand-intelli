import React, { useState, useEffect } from 'react';

const VideoAnimation = ({ onAnimationEnd }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  

  const handleVideoEnd = () => {
    setIsPlaying(false);
    onAnimationEnd();
  };

  return (
    <div style={{ display: isPlaying ? 'block' : 'none', width: '100vw', height: '100vh', overflow: 'hidden', zIndex: 9999 }}>
      <video
        src="image/loading.mp4" 
        autoPlay
        muted
        onEnded={handleVideoEnd}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default VideoAnimation;
