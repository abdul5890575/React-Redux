import React from 'react'
import { connect } from 'react-redux'

class SongList extends React.Component {
    render() {
        console.log(this.props)
        return <div>SongList</div>
    }
}

//pulling data from store
//will be passed to class above as this.props => { songs: state.songs }
const mapStateToProps = (state)=> {
    //console.log(state)
  return { songs: state.songs }
}

//when calling function within function connect example
export default connect(mapStateToProps)(SongList)