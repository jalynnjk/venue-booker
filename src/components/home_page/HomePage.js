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
				</header>
				<div className='chapel-container'>
					<p className='chapel-desc'>
						The natural sanctuary of Palos Verdes sits nestled in a grove of
						towering redwoods on the shores of the Pacific Ocean. Designed by
						renowned organic architect Lloyd Wright, the stone and glass
						structure gives unique expression to the sacred space that welcomes
						all Wayfarers along life's path.
						<br />
						<span className='chapel-link'>
							<AnchorLink
								href='#chapel-interior'
								className='chapel-interior-link'>
								Step Inside -&gt;
							</AnchorLink>
						</span>
					</p>
					<img
						src={grounds}
						alt='Chapel Grounds'
						className='chapel-grounds-img'
					/>
				</div>
			</section>
			<section id='chapel-interior'>
				<div className='interior-div-1'>
					<h1 className='interior-title'>
						What will your wedding at The Chapel look like?
					</h1>
					<ul>
						<li className='chapel-list'>
							Private use of the grounds from vendors arrival and setup to the
							last goodbye
						</li>
						<li className='chapel-list'>
							Musical accompaniment for the bride provided by our astounding
							chapel trio, as well as Professional DJ services during the
							reception party
						</li>
						<li className='chapel-list'>
							Cocktail hour for the guests on the grounds while the wedding
							party takes pictures before moving to the reception venue
						</li>
						<li className='chapel-list'>
							Catered reception dinner personalized by yourself and crafted by
							world-class Italian chef Mauro Colagreco.
						</li>
						<li className='chapel-list'>
							Dinnerware, glassware, and flatware are all provided for your
							convenience.
						</li>
					</ul>
				</div>
				<div className='interior-div-2'>
					<h1 className='interior-title'>Leading up to the Festivities...</h1>
					<ul>
						<li className='chapel-list-2'>
							Access to The Chapel's in-house wedding planner who will assist
							with everything from design to day-of coordination
						</li>
						<li className='chapel-list-2'>
							Choose from our recommended photographers and videographers who
							are familiar with the grounds and know where to get the best
							photos.
						</li>
						<li className='chapel-list-2'>
							Rehearsal with your officiator within the week leading up to the
							wedding followed by an intimate dinner for the wedding party
						</li>
                        <li className='chapel-list-2'>
                           Available space for between 30 and 150 guests
                        </li>
					</ul>
					<AnchorLink href='#booking-link-section' className='booking-anchor'>
						Save the Date
					</AnchorLink>
				</div>
			</section>
			<section id='booking-link-section'>
				<div className='booking-link-wrapper'>
					<Link to='/booking-portal' className='booking-link'>
						Make your vows at The Chapel
					</Link>
				</div>
			</section>
			<footer>
				<Link to='/owner-portal'>Log-In</Link>
			</footer>
		</div>
	);
}

export default HomePage;
