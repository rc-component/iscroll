import React from 'react';
import ReactDom from 'react-dom';
import style from './style.css';
import iscroll from 'iscroll'
import cx from 'classnames'

class Iscroll extends React.Component {
  static defaultProps = {
    handlebar: true,
    barClass: style.handlebar,
    overflow: 80
  }
  static propTypes = {
    handlebar: React.PropTypes.bool,
    barClass: React.PropTypes.string,
    overflow: React.PropTypes.number,
    onScroll: React.PropTypes.func,
    onStart: React.PropTypes.func,
    onRelease: React.PropTypes.func,
    onScrollend: React.PropTypes.func
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
  componentWillReceiveProps() {
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
