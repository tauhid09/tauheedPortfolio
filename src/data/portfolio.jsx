import { Code2, Briefcase, Award } from 'lucide-react';
import portfolio from './images/img-1.png'
import tourist from './images/img-2.png'
import pinterest from './images/img-3.png'
import metaCert from './images/meta-cert.png';
import udemyCert from './images/udemy-cert.png';
import fccCert from './images/fcc-cert.png';

export const projects = [
	{
		title: 'Personal Portfolio',
		description: 'This modern portfolio combines a stunning fluid background with a minimalist layout and bold typography to create a powerful, professional impression.',
		tech: ['ReactJs', 'JavaScript', 'Tailwind CSS'],
		image: portfolio,
		link: 'https://tauheed-portfolio.vercel.app/',
		github: 'https://github.com/tauhid09/tauheedPortfolio' // add github link
	},
	{
		title: 'Tourist Website ',
		description: 'This visually stunning travel website uses beautiful Kashmir imagery to promote clearly priced tour packages, inviting users to connect with experts.',
		tech: ['JavaScript', 'CSS3', 'HTML5' ],
		image: tourist,
		link: 'https://tourist-website-gamma-ten.vercel.app/',
		github: 'https://github.com/tauhid09/Maximtrip' // add github link
	},
	{
		title: 'Pinterest Landing-page Clone website',
		description: 'Pinterests vibrant landing page uses appealing visuals to inspire users to search for ideas and discover their next creative project.',
		tech: ['JavaScript', 'CSS3', 'HTML5'],
		image: pinterest,
		link: 'https://pinterestlandingpage.vercel.app/',
		github: 'https://github.com/tauhid09/Pinterest-Clone-website' // add github link
	}
];

export const certificates = [
	{
		title: 'Deloitte Australia - Technology Job Simulation Forage',
		issuer: 'Forage',
		date: '2025',
		image: metaCert
	},
	{
		title: 'Introduction to Programming Using HTML and CSS',
		issuer: 'Udemy',
		date: '2025',
		image: udemyCert
	},
	{
		title: 'Introduction to loT and Digital Transformation',
		issuer: 'Cisco Networking Academy',
		date: '2023',
		image: fccCert
	}
];
