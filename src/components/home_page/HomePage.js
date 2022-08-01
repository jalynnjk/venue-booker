import './home_page.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap';
import { Link } from 'react-router-dom';
import grounds from './assets/chapel-grounds.jpeg';

function HomePage(props) {
	return (
		<div>
			<main className='hp-main'>
				<div className='link-wrapper'>
					<AnchorLink href='#about' className='enter-link'>
						Enter the Chapel
					</AnchorLink>
				</div>
			</main>
			<section id='about'>
				<header className='chapel-header'>
					<h1 className='chapel-title'>The Chapel</h1>
					{/* <Nav className='chapel-nav'>
                        <Link to='/booking-request' className='booking-request-link'>Make a Booking</Link>
                    </Nav> */}
				</header>
				<div className='chapel-container'>
					<p className='chapel-desc'>
						The natural sanctuary of Palos Verdes sits nestled in a grove of
						towering redwoods on the shores of the Pacific Ocean. Designed by
						renowned organic architect Lloyd Wright, the stone and glass
						structure gives unique expression to the sacred space that welcomes
						all Wayfarers along life's path. <br />
						<br />
						<AnchorLink
							href='#chapel-interior'
							className='chapel-interior-link'>
							Step Inside -&gt;
						</AnchorLink>
					</p>
					<img
						src={grounds}
						alt='Chapel Grounds'
						className='chapel-grounds-img'
					/>
				</div>
			</section>
			<section id='chapel-interior'></section>
		</div>
	);
}

export default HomePage;
