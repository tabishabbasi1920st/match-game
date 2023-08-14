/* eslint-disable */
import {Component} from 'react'
import './index.css'

class Tabs extends Component {
  onClickTab = () => {
    const PressedTabId = this.props.eachObj.tabId
    this.props.onClickDifferentTabs(PressedTabId)
  }

  render() {
    const {eachObj, isActive} = this.props
    const {displayText} = eachObj

    const activeTabClass = isActive ? 'active-tab-class' : ''

    return (
      <p onClick={this.onClickTab} className={`tab ${activeTabClass}`}>
        {displayText}
      </p>
    )
  }
}

export default Tabs
