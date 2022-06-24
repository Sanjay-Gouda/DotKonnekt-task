import { useState, useEffect, useContext } from "react";
import "./AddSocialLink.css";
import { SocialMediaLinks } from "../../socialMediaLinks";
import { LinkContext } from "../../Context/LinkContext";

export const AddSocialLink = () => {
  

  const data = useContext(LinkContext);

  const { linkOperation, handleLinkOperations } = data;

  const collectLinks = (id) => {
    const collectLink = SocialMediaLinks.filter((links) => {
      if (id === links.id) {
        return links;
      }
    });
    handleLinkOperations([...linkOperation, ...collectLink]);
  };

  return (
    <>
      <div className="container">
        {SocialMediaLinks.map((items) => {
          return (
            <div
              key={items.id}
             className="icons"
            >
              {items.icon}
              <button
                style={{marginTop: '10px'}}
                onClick={() => {
                  collectLinks(items.id);
                }}
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
