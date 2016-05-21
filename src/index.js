import React from 'react';
import ReactDom from 'react-dom';
import style from './style.css';
import iscroll from 'iscroll'
import cx from 'classnames'

class Iscroll extends React.Component {
  static defaultProps = {
    handlebar: true,
    barClass: style.handlebar
  }
  static propTypes = {
    handlebar: React.PropTypes.bool,
    barClass: React.PropTypes.string,
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
    let opts = {
      handlebar: this.props.handlebar,
      barClass: this.props.barClass
    }
    let is = this.iscroll = iscroll(el, opts)
    var props = this.props
    ;['start', 'scroll', 'release', 'scrollend'].forEach(function (name) {
      let fn = props['on' + name[0].toUpperCase() + name.slice(1)]
      if (fn) {
        is.on(name, fn)
      }
    })
  }
  componentWillReceiveProps() {
    this.iscroll.refresh()
  }
  componentWillUnmount() {
    this.iscroll.unbind()
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
