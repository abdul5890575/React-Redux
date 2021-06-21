import React from 'react'
import { connect } from 'react-redux'

// make fuction component for connect so other example (we can do either or)

const songDetail = (props)=>{
  return <div>Song detail</div>
}

const mapStateToProps = (state) =>{
    return {song : state.selectedSong}
}

export default connect(mapStateToProps)(songDetail);