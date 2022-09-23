const useScroll = () => {
  const [scroll, setScroll] = useState({ y: 0, x: 0 });

  const handler = () => {
    setScroll({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return scroll;
};

export { useScroll };
