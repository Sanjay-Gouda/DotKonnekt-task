import { useState,useContext } from "react";
import "./SocialLinks.css";
import { SocialMediaLinks } from "../../socialMediaLinks";
import { LinkContext } from "../../LinkContext";

export const SocialLink = () => {

  const data = useContext(LinkContext);
  console.log({data});

  const [socialLinks, setSocialLinks] = useState(SocialMediaLinks);
  const[message,setMessage] = useState("Add Icon before hover on the + icon below");

    const handleLink = (name)=>{
        setMessage(`Link Copied to Share with ${name} `)
    }

      const handleHover =()=>{
        if(data.linkOperation.length === 0){
          alert("Add Social media links to share")
        }
      }

    
  return (
    <>
       <h1>{message}</h1>     
      <div className="fab" onClick={handleHover}>
        <div className="mainop">
        <i class="material-icons fa-solid fa-share-nodes"></i>
       
        </div>

        <div>
          {data.linkOperation.map((items) => {
            return (
              <div key={items.id} onClick={()=>{handleLink(items.name)}}>
                <items.component url={window.location.href}>
                  {items.icon}
                </items.component>
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
};
