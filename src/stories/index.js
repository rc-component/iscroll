import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Iscroll from '../index';
require('../../style.css')

const boxStyles = {
  height: 400,
  position: 'relative'
}

const innerStyles = {
  height: 2000,
  backgroundColor: 'lightgreen'
}

function log(name) {
  return function () {
    let args = [name]
    for (let item of arguments) {
      args.push(String(item))
    }
    console.log(args.join(' '))
  }
}

storiesOf('Iscroll', module)
  .add('Basic', () => {
    return (
      <Iscroll style={boxStyles}>
        <div style={innerStyles}></div>
      </Iscroll>
    )
  })
  .add('event', () => {
    return (
      <Iscroll
        style={boxStyles}
        onStart={log('start')}
        onScroll={log('scroll')}
        onRelease={log('release')}
        onScrollend={log('scrollend')}>
        <div style={innerStyles}></div>
      </Iscroll>
    )
  })
