import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({track}) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text">
                        <span className="mb-2 d-block">
                            <span className="text-bold"><i className="fas fa-play"></i> Track</span> :
                            &nbsp;{track.track_name}
                        </span>
                        <span className="mb-2 d-block">
                            <span className="text-bold"><i className="fas fa-compact-disc"></i> Album</span> :
                            &nbsp;{track.album_name}
                        </span>
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Track;