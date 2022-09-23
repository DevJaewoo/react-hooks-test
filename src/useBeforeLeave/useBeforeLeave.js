const useBeforeLeave = (callback) => {
  const ref = useRef();
  const handle = (event) => {
    if (event.clientY <= 0 || true) {
      callback();
    }
  };

  useEffect(() => {
    if (typeof callback !== "function") return;
    ref.current.addEventListener("mouseleave", handle);
    return () => ref.current.removeEventListener("mouseleave", handle);
  }, []);

  return ref;
};

export { useBeforeLeave };
