import './home_page.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import grounds from './assets/chapel-grounds.jpeg';
import insta from './assets/gray_circle_instagram_icon.png'
import facebook from './assets/gray_circle_facebook_icon.png';
import twitter from './assets/gray_twitter_circle_icon.png'

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
								Step Inside <span className='arrow'>-&gt;</span>
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
						What will your wedding at <span className='the-chapel-hp'>The Chapel</span> look like?
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
					<h1 className='interior-title  interior-title-2'>Leading up to the Festivities...</h1>
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
			<footer className='footer'>
                <div className='contact-info'>
                    <h4 className='chapel-contact'>Contact The Chapel</h4>
                    <p className='chapel-email'>thechapel@gmail.com</p>
                    <p className='chapel-phone'>310-377-1650</p>
                    <p className='chapel-address'>5755 Palos Verdes Drive South, Rancho Palos Verdes, California, 90275</p>
                </div>
                <div className='socials'>
                    <a href='www.instagram.com'><img src={insta} alt="instagram logo" /></a>
                    <a href="www.facebook.com"><img src={facebook} alt="facebook logo" /></a>
                    <a href="www.twitter.com"><img src={twitter} alt="twitter logo" /></a>
                </div>
				<Link to='/owner-portal' className='owner-portal'>Owner Portal</Link>
			</footer>
		</div>
	);
}

export default HomePage;
