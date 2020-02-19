import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import Hidden from '@material-ui/core/Hidden';

import { Images } from '../components/Images';
import { CustomWindow } from '../components/CustomWindow';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const index = () => {
	return (
		<>
			<Head>
				<title>j.d. shaeffer</title>
			</Head>
			<ResetStyles />
			<Images />
			<ThemeProvider theme={themes.default}>
				<div style={{position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%, 50%)'}}>
					<p>gotcha haha</p>
				</div>
				<div style={{position: 'absolute', left: '50%', top: '25%', transform: 'translate(-50%, 50%)'}}>
					<Hidden xsDown>
						{/* desktop */}
						<CustomWindow size={500} />
					</Hidden>
					<Hidden smUp>
						{/* mobile */}
						<CustomWindow size={300} />
					</Hidden>
				</div>
			</ThemeProvider>
		</>
	);
}

export default index;
