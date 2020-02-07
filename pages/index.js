import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Window, WindowHeader, WindowContent, Toolbar, Button, Bar } from "react95";

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
			<ThemeProvider theme={themes.default}>
				<div style={{position: 'absolute', left: '50%', top: '30%', transform: 'translate(-50%, 50%)'}}>
					<Window style={{width: 400}}>
						<WindowHeader style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
							<span>j.d.'s website</span>
							<Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
								<span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
							</Button>
						</WindowHeader>
						<Toolbar>
							<Bar />
							<Button variant='menu' size='sm'>
								Portfolio
							</Button>
							<Button variant='menu' size='sm'>
								About
							</Button>
							<Button variant='menu' size='sm'>
								Contact
							</Button>
						</Toolbar>
						<WindowContent>
							<ul>
								<li>something here</li>
								<li>something here</li>
								<li>something here</li>
								<li>something here</li>
							</ul>
						</WindowContent>
					</Window>
				</div>
			</ThemeProvider>
		</>
	)
}

export default index;
