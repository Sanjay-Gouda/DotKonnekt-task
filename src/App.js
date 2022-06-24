import "./App.css";
import { AddSocialLink } from "./components/AddSocialLink/Add SocialLinks";
import { RemoveLinks } from "./components/RemoveSocialLinks.js/RemoveSocialLink";
import { SocialLink } from "./components/SocialLinks/SocialLinks";


import { SocialLinkProvider } from "./LinkContext";

function App() {
  return (
    <div className="App">
      <SocialLinkProvider>
          <SocialLink/>
        <AddSocialLink />
        <RemoveLinks />
      </SocialLinkProvider>
    </div>
  );
}

export default App;
