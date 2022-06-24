import { createContext, useContext, useState } from "react";


export const LinkContext = createContext({
  linkOperation:[],
  handleLinkOperations: () => {},
});



export const SocialLinkProvider = (props) => {
  const [linkOperation, setOperation] = useState([]);

  //setter method
  const handleLinkOperations = (data) => {
    setOperation(data);
  };

  return (
    <LinkContext.Provider value={{ linkOperation, handleLinkOperations }}>
      {props.children}
    </LinkContext.Provider>
  );
};
