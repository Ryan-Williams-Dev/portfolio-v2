const navClickHandler = (navLinkId: string, scrollToId: string, setActiveNavLinkId: Function) => {
  setActiveNavLinkId(navLinkId);
  document.getElementById(scrollToId)?.scrollIntoView({
    behavior: 'smooth',
  });
};

export default navClickHandler