const useNetwork = (callback) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handler = () => {
    if (typeof callback === "function") {
      callback(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("offline", handler);
      window.removeEventListener("online", handler);
    };
  }, []);

  return status;
};

export { useNetwork };
