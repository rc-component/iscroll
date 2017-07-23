import PropTypes from 'prop-types'
import React from 'react'
import ReactDom from 'react-dom'
import iscroll from 'iscroll'
import cx from 'classnames'

class Iscroll extends React.Component {
  static defaultProps = {
    handlebar: true,
    barClass: 'iscroll-handlebar',
    overflow: 80
  }
  static propTypes = {
    handlebar: PropTypes.bool,
    barClass: PropTypes.string,
    overflow: PropTypes.number,
    onScroll: PropTypes.func,
    onStart: PropTypes.func,
    onRelease: PropTypes.func,
    onScrollend: PropTypes.func
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let el = ReactDom.findDOMNode(this)
    var props = this.props
    let opts = {
      handlebar: props.handlebar,
      barClass: props.barClass,
      max: props.overflow
    }
    let is = this.iscroll = iscroll(el, opts)
    ;['start', 'scroll', 'release', 'scrollend'].forEach(function (name) {
      let fn = props['on' + name[0].toUpperCase() + name.slice(1)]
      if (fn) {
        is.on(name, fn)
      }
    })
  }
  componentDidUpdate() {
    if (this.iscroll) this.iscroll.refresh()
  }
  componentWillUnmount() {
    if (this.iscroll) this.iscroll.unbind()
  }
  render() {
    return (
      <div className={cx('scrollable', this.props.className)} style={this.props.style}>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Iscroll
