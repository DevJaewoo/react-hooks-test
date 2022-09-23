const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") return;

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        console.log("unmount");
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

export { useClick };
