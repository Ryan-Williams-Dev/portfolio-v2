import { Button } from "@chakra-ui/react";

export default function NavLink({ navLinkId, scrollToId, activeNavLinkId, setActiveNavLinkId }: any) {
	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId)?.scrollIntoView({
			behavior: 'smooth',
		});
	};
	
	return (
		<Button
      variant='link'
		 	id={navLinkId} 
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''} 
		 	onClick={handleClick}
		>
			{navLinkId}
		</Button>
	);
};