import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Window, WindowHeader, WindowContent, Toolbar, Button, Bar, Hourglass } from "react95";

import { ContactButton } from '../components/ContactButton';
import resume from '../resume.pdf';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const index = () => {
	const [content, setContent] = useState(
		<>
			<p>oh hey.</p>
			<p>i'm j.d.</p>
			<p>glad you're here.</p>
			<p>stay as long as you like.</p>
		</>
	);
	return (
		<>
			<Head>
				<title>j.d. shaeffer</title>
			</Head>
			<ResetStyles />
			<ThemeProvider theme={themes.default}>
				<div style={{position: 'absolute', left: '50%', top: '45%', transform: 'translate(-50%, 50%)'}}>
					<p>gotcha haha</p>
				</div>
				<div style={{position: 'absolute', left: '50%', top: '25%', transform: 'translate(-50%, 50%)'}}>
					<Window style={{width: 500}}>
						<WindowHeader style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
							<span>j.d.'s website</span>
							<Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square onClick={(event) => {
								// close the window
								event.target.parentElement.parentElement.parentElement.style = 'display: none';
							}}>
								<span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
							</Button>
						</WindowHeader>
						<Toolbar>
							<Bar />
							<Button variant='menu' size='sm'>
								portfolio
							</Button>
							<Button variant='menu' size='sm' onClick={() => {
								setContent(
									<>
										<p>i do full stack web dev in the form of sick javascript apps.</p>
										{/* <Link href='/pdf'>
											<a><Hourglass /></a>
										</Link> */}
										<a href={resume}><Hourglass /></a>
										<p>^^^ click to peek my resume</p>
									</>
								)
							}}>
								about
							</Button>
							<ContactButton />
						</Toolbar>
						<WindowContent>
							{content}
						</WindowContent>
					</Window>
				</div>
			</ThemeProvider>
		</>
	);
}

export default index;
