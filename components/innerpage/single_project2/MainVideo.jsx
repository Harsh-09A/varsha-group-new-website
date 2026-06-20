import React from 'react';

function MainVideo({data}) {
  return (
    <div className="main-video">
      <video
        className="video"
        width="100%"
        height="100%"
        autoPlay = {true}
        muted={false}
        loop
        controls
      >
        <source
          src={data.video_url}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default MainVideo;
