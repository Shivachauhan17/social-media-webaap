import React from "react";
import {memo} from 'react';
import './css/FeedPost.css'

const FeedPost=({postLink,caption})=>{
    return(
        <div className="feedPost">
            <img src="https://imgs.search.brave.com/XDdHXi660Yn8Y9M9wc55kPosG785pDwV35DP-5y-vr4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/MzE0ODc4Ni9waG90/by9waG90by1vZi1u/ZXdib3JuLWJhYnkt/ZmluZ2Vycy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9b1Mw/RG9QZGtDWndyQVVI/N2ZVRDROMEZrSVRI/QlNPOEYzRDhqaUJl/c1VoVT0"/>
            {/* <h6>{caption}</h6> */}
            <p>hemlo</p>
        </div>

    )
}

export default memo(FeedPost);
