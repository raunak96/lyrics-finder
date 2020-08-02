import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { GlobalContext } from "../contexts/ContextProvider";

const Search = () => {
    const [trackTitle, setTrackTitle] = useState("");
    const {setHeading,setTrack}= useContext(GlobalContext);

    const findTrack=async (e)=>{
        e.preventDefault();
        
        try {
            let response = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?
                q_track=${trackTitle}&page_size=20&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
            );
            setHeading("Search Results");
            setTrack({trackList:response.data.message.body.track_list,isLoading:false});
            setTrackTitle("");
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search For a Song
            </h1>
            <p className="lead text-center">Get the lyrics for any Song</p>
            <form onSubmit={findTrack}>
                <div className="form-group">
                    <input
                        type="search"
                        className="form-control form-control-lg"
                        placeholder="Song Title..."
                        value={trackTitle}
                        name="trackTitle"
                        onChange={(e) => setTrackTitle(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block mb-4">Get Track Lyrics</button>
            </form>
        </div>
    );
};

export default Search;
