import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Spinner from "../Spinner";
import Moment from "react-moment";

const Lyrics = () => {
    const [lyrics, setLyrics] = useState({});
    const [track, setTrack] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchLyrics = async () => {
            try {
                let response = await axios.get(
                    `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
                );
                setLyrics(response.data.message.body.lyrics);
                let response2 = await axios.get(
                    `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
                );
                setTrack(response2.data.message.body.track);
                setLoading(false);
            } catch (error) {
                console.log(error.response);
            }
        };
        fetchLyrics();
    }, [id]);

    return loading ? (
        <Spinner />
    ) : (
        <Fragment>
            <Link to="/" className="btn btn-sm btn-dark mb-4">
                Go Back
            </Link>
            <div className="card">
                <h5 className="card-header">
                    {track.track_name} by&nbsp;
                    <span className="text-secondary">{track.artist_name}</span>
                </h5>
                <div className="card-body">
                    <p className="card-text">{lyrics.lyrics_body}</p>
                </div>
                <ul className="list-group list-group-flush mt-3">
                    <li className="list-group-item">
                        <strong>Album Name</strong> : {track.album_name}
                    </li>
                    <li className="list-group-item">
                        <strong>Track Rating</strong> : {track.track_rating}/100
                    </li>
                    <li className="list-group-item">
                        <strong>Song Genre</strong> :
                        {track.primary_genres.music_genre_list.length ===0 ? 
                            "NO GENRE AVAILABLE" 
                        : 
                        track.primary_genres.music_genre_list.map((genre_list,index)=>(<span key={index}>&nbsp;{genre_list.music_genre.music_genre_name}&nbsp;|</span>))}
                    </li>
                    <li className="list-group-item">
                        <strong>Explicit Words</strong> : {track.explicit === 0 ? "No" : "Yes"}
                    </li>
                    <li className="list-group-item">
                        <strong>Release Date</strong> : <Moment format="DD-MM-YYYY">{track.updated_time}</Moment>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Lyrics;
