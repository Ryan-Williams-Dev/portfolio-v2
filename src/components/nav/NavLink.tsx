import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { NavContext } from "../../context/navProvider";
import navClickHandler from "../../helpers/navClickHandler";

type NavLinkType = {
	navLinkId: string,
	scrollToId: string
}

export default function NavLink({navLinkId, scrollToId}: NavLinkType) {

	const {activeNavLinkId, setActiveNavLinkId} =  useContext(NavContext)

	const isCurrentPage = activeNavLinkId === navLinkId
	
	return (
		<Button
      variant='link'
		 	id={navLinkId} 
		 	onClick={() => navClickHandler (navLinkId, scrollToId, setActiveNavLinkId)}
			color={isCurrentPage ? 'teal.200' : 'inherit'}
			transitionDelay='0.25s'
		>
			{navLinkId}
		</Button>
	);
};