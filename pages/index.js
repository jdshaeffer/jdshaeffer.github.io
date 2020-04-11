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
			<div style={{position: 'absolute', left: '50%', top: '45%', transform: 'translate(-50%, 50%)'}}>
				<p>gotcha haha</p>
			</div>
			<ThemeProvider theme={themes.default}>
				<div>
					<Hidden xsDown>
						{/* desktop */}
						<CustomWindow size={600} />
					</Hidden>
					<Hidden smUp>
						{/* mobile */}
						<CustomWindow size={400} />
					</Hidden>
				</div>
			</ThemeProvider>
			<Images />
		</>
	);
}

export default index;
