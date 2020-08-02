import React, { createContext } from 'react';
import { useState } from 'react';

export const GlobalContext= createContext({
    track:{trackList:[],isLoading:true},
    heading: "",
    isLoading: true,
    setHeading:()=>{},
    setIsLoading:()=>{}
});

const ContextProvider = ({children}) => {

    const [track, setTrack] = useState({trackList:[],isLoading:true});
    const [heading,setHeading]= useState("Top 20 Tracks");

    return (
        <GlobalContext.Provider value={{track,heading,setTrack,setHeading}}> 
            {children}
        </GlobalContext.Provider>
    );
};

export default ContextProvider;