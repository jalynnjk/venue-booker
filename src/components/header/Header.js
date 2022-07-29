import React from 'react';
import {Link} from 'react-router-dom'

function Header(props) {
    return (
			<nav>
				<ul>
					<li>
						<Link to='/booking-request'>Make a Booking Request</Link>
					</li>
				</ul>
			</nav>
		);
}

export default Header;