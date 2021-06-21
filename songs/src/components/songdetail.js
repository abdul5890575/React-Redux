import React from 'react'
import { connect } from 'react-redux'

// make fuction component for connect so other example (we can do either or)

const songDetail = ({song})=>{
    if (!song) {
        return  <div>Select a song</div>
     } else {
        return (
            <div>
            <h3> Details for</h3>
            <p>Title: {song.title}
            <br/>
               Duration : {song.duration} 
            </p>
           </div>
        )   
     }
}

const mapStateToProps = (state) =>{
    return {song : state.selectedSong}
}

export default connect(mapStateToProps)(songDetail);