const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Lodaing</div>;
    };

    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <iframe src={videoUrl} width="820" height="500" className="mb-4" title={ video.snippet.title } />
            <h4>{ video.snippet.title }</h4>
            <p>{ video.snippet.description }</p>
        </div>
    );
}

export default VideoDetail;