import { useContext } from "react";
import { LinkContext } from "../../Context/LinkContext";
import '../AddSocialLink/AddSocialLink.css'

export const RemoveLinks = () => {
  const data = useContext(LinkContext);
  const { linkOperation, handleLinkOperations } = data;

  const handleRemove = (id) => {
    const filterLinks = linkOperation.filter((links) => {
      return links.id !== id;
    });

    handleLinkOperations([...filterLinks]);
  };

  return (
    <>
        <h3>Added icons</h3>
      <div className="container">
        {linkOperation.map((items) => {
          console.log(items);
          return (
            <div className="icons" key={items.id}>
              {items.icon}

              <button
               style={{marginTop: '10px'}}
                onClick={() => {
                  handleRemove(items.id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
