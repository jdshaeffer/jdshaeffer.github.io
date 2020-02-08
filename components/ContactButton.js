import { useState, useEffect, useRef } from 'react';
import { List, ListItem, Button } from 'react95';

export const ContactButton = () => {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open); 
	}

	const handleClose = () => {
		setOpen(false);
	}

	// closes the list if you click outside of it
	const useOutside = (ref) => {
		const handleOutsideClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				handleClose();
			}
		}

		useEffect(() => {
			document.addEventListener('mousedown', handleOutsideClick);
			return () => {
				document.removeEventListener('mousedown', handleOutsideClick);
			};
		})
	}

	const wrapperRef = useRef(null);
	useOutside(wrapperRef);

	return (
		<div ref={wrapperRef}>
			<div style={{position: 'relative', display: 'inline-block', alignSelf: 'left'}}>
				{ open && (
				<List
					style={{zIndex: '9999'}} 
					horizontalAlign="left" 
					verticalAlign="bottom" 
					open={open} 
					onClick={handleClose}
				>
					<ListItem size="sm" onClick={() => window.open('https://twitter.com/jdshaeff')}>Twitter</ListItem>
					<ListItem size="sm" onClick={() => window.open('https://github.com/jdshaeffer')}>GitHub</ListItem>
					<ListItem size="sm" disabled>shaefferjd@gmail.com</ListItem>
					<ListItem size="sm" disabled>480.296.4934</ListItem>
				</List>
				)}
				<Button variant='menu' size='sm' onClick={handleClick}>
					contact
				</Button>
			</div>
		</div>
	);
}
