import { useState, createContext } from "react";

export const PageNumberContext = createContext();

const PageContextProvider = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <PageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
      {props.children}
    </PageNumberContext.Provider>
  );
};

export default PageContextProvider;
