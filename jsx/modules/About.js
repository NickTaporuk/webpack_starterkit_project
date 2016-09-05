import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
				About
				<ul role="nav">
					<li><Link to="/">Go home</Link></li>
				</ul>
			</div>
  }
})