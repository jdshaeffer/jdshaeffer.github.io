import Head from 'next/head';
// import Graphic from '../components/Graphic';

// this component is v1 of jdshaeffer.com
import Windows95SinglePage from '../components/Windows95SinglePage';

const index = () => {
	return (
		<>
			<Head>
				<title>j.d. shaeffer</title>
			</Head>
			<h1 style={{margin: '1%'}}>this site is a bit under construction, thanks for your patience!</h1>
			<Windows95SinglePage />
		</>
	);
}

export default index;
