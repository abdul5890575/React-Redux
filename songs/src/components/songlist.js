import React from 'react'
import { connect } from 'react-redux'
import { SelectSong } from '../actions'

// When we call action creator it runs reducers byitself
class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song)=>{
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button className='ui button primary'
                          onClick={()=>this.props.SelectSong(song)}>
                          Select
                        </button>
                    </div>
                    <div className='content'>
                        {song.title}
                    </div>
                </div>
            );
        })
    }
    
    render() {
        // console.log('ssss', this.props)
        return <div className='ui divided list'>{this.renderList()}</div>
    }
}

//pulling data from store
//will be passed to class above as this.props => { songs: state.songs }
const mapStateToProps = (state)=> {
    console.log(state)
  return { songs: state.songs }
}

//when calling function within function connect example
// need connect to get action creators aswell
// connect passes everyting inside to component as prop
export default connect(mapStateToProps, {SelectSong})(SongList)