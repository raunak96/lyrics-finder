import React, { useContext,useEffect, Fragment } from "react";
import { GlobalContext } from "../../contexts/ContextProvider";
import axios from "axios";
import Spinner from "../Spinner";
import Track from "./Track";

const Tracks = () => {
    const {track,setTrack,heading,setHeading } = useContext(GlobalContext);
    const {trackList,isLoading}= track;

    useEffect(() => {
        setHeading("Top 20 Viral Tracks");
        const fetchTracks = async () => {
            try {
                let response = await axios.get(
                    `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
                );
                setTrack({trackList:response.data.message.body.track_list,isLoading:false})
            } catch (error) {
                console.log(error.response);
            }
            
        };
        fetchTracks();
    }, [setHeading,setTrack]);
    
    return isLoading? (<Spinner />):(
        <Fragment>
            <h3 className="text-center mb-4">
                {heading}
            </h3>
            <div className="row">
            {
                trackList.map(({track})=>(
                    <Track key={track.track_id} track={track}/>
                ))
            }
            </div>
        </Fragment>
    )
};

export default Tracks;
