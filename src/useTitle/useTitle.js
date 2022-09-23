const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    document.querySelector("title").innerText = title;
    console.log(title);
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};

export { useTitle };
