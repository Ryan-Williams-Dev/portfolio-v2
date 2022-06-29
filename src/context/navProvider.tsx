import { useState, createContext } from 'react';

interface navContextinterface {
	setActiveNavLinkId: () => void,

}

export const NavContext = createContext<navContextinterface | null>(null);

const NavProvider = ({ children }: any) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};