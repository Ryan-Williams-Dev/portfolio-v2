import { useState, createContext, ReactNode } from 'react';

type NavContextProps = {
	children: ReactNode
}

export const NavContext = createContext({});

const NavProvider = ({ children }: NavContextProps) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};