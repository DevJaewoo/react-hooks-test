const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") return;
    const { current } = element;
    current.style.transition = `opacity ${duration}s ease-in-out`;
    current.style.transitionDelay = `${delay}s`;
    current.style.opacity = 1;
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export { useFadeIn };
