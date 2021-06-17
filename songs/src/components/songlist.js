import React from 'react'
import { connect } from 'react-redux'

class SongList extends React.Component {
    render() {
        return <div>SongList</div>
    }
}

//when calling function within function connect example
export default connect()(SongList)