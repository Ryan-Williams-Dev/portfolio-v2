import { useState, createContext, ReactNode } from "react";

type NavContextProps = {
  children: ReactNode;
};

interface NavGetterAndSetter {
  activeNavLinkId: string | undefined;
  setActiveNavLinkId: React.Dispatch<React.SetStateAction<string>>;
}

export const NavContext = createContext<NavGetterAndSetter>({
  activeNavLinkId: "homeContainer",
  setActiveNavLinkId: () => {},
});

export const NavProvider = ({ children }: NavContextProps) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};
