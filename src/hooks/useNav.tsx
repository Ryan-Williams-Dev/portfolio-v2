import { useRef, useContext, useEffect } from 'react';
import { useOnScreen } from './useOnScreen';
import { NavContext } from '../context/navProvider' ;

export const useNav = (navLinkId: string) => {
	const ref = useRef() as React.MutableRefObject<HTMLImageElement>;;

	const { setActiveNavLinkId } = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};