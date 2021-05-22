const Video = ({video, onVideoSelect}) => {
    return (
        <div className="card mb-3" style={{width: "18rem"}}>
            <img className="card-img-top" src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.title } />
            <div className="card-body">
                <h5 className="card-title">{ video.snippet.title }</h5>
                <p className="card-text">{ video.snippet.description }</p>
                <a onClick={ () => onVideoSelect(video) } className="btn btn-primary">Play</a>
            </div>
        </div>
    );
};

export default Video;