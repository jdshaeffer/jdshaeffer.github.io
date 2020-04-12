import Head from 'next/head';

// this component is v1 of jdshaeffer.com
import Windows95SinglePage from '../components/Windows95SinglePage';

const index = () => {
	return (
		<>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap" rel="stylesheet" />
				<title>j.d. shaeffer</title>
			</Head>
			{/* <h1 style={{margin: '1%'}}>this site is a bit under construction, thanks for your patience!</h1>
			<Windows95SinglePage /> */}
			<video autoPlay muted loop>
				<source src='/background.mov' type='video/mp4' />
				dang ya browser doesn't support HTML5 video
			</video>
			<div className='content-parent'>
				<div className='content'>
					<h1>j.d. shaeffer</h1>
				</div>
			</div>
		</>
	);
}

export default index;
