/* eslint-disable */
import {Component} from 'react'
import './index.css'

class Thumbnail extends Component {
  onClickThumbnail = () => {
    const thumbnailId = this.props.eachObj.id
    this.props.onClickDifferentThumbnails(thumbnailId)
  }

  render() {
    const {eachObj} = this.props
    const {thumbnailUrl} = eachObj

    return (
      <div className="thumbnail-box">
        <button onClick={this.onClickThumbnail}>
          <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
        </button>
      </div>
    )
  }
}

export default Thumbnail
