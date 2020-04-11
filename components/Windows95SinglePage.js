import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import Hidden from '@material-ui/core/Hidden';

import { Images } from '../components/Images';
import { CustomWindow } from '../components/CustomWindow';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const Windows95SinglePage = () => {
  return (
    <>
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
            {/* this mobile is no good right now - TODO FIX THIS LOL */}
						{/* mobile */}
						<CustomWindow size={400} />
					</Hidden>
				</div>
			</ThemeProvider>
			<Images />
    </>
  );
}

export default Windows95SinglePage;
