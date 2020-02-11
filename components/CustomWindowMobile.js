import { useState } from 'react';
import Link from 'next/link';
import { Window, WindowHeader, WindowContent, Toolbar, Button, Bar, Hourglass } from 'react95';

import { ContactButton } from './ContactButton';

export const CustomWindowMobile = () => {
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
      <Window style={{width: 300}}>
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
          <Button variant='menu' size='sm' onClick={() => {
            setContent(
              <>
                <p>the gear calculator (in development, stay tuned)</p>
                <p>~~~~ </p>
                <Link href='https://github.com/jdshaeffer/dunnet-solver'>
                  <a>dunnet solver (fun python automation for dunnet by ron schnell)</a>
                </Link>
                <p>~~~~ </p>
              </>
            )
          }}>
            projects
          </Button>
          <Button variant='menu' size='sm' onClick={() => {
            setContent(
              <>
                <p>i do full stack web dev in the form of sick javascript apps.</p>
                <Link href='/resume.pdf'>
                  <a><Hourglass /></a>
                </Link>
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
    </>
  );
}
