import Video from './Video';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return <Video video={video} onVideoSelect={ onVideoSelect } key={video.id.videoId} />
    });

    return (
        <div>
            { renderedVideos }
        </div>
    );
};

export default VideoList;