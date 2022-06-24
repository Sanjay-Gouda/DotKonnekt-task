import {
  EmailShareButton,
  FacebookShareButton,
  OKShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  PocketShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export const SocialMediaLinks = [
  {
    id: 1,
    name: "watsapp",
    icon: <WhatsappIcon size={42} round={true} />,
    component: WhatsappShareButton,
  },

  {
    id: 2,
    name: "Facebook",
    icon: <FacebookIcon size={42} round={true} />,
    component: FacebookShareButton,
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <LinkedinIcon size={42} round={true} />,
    component: LinkedinShareButton,
  },
  {
    id: 4,
    name: "Instapaper",
    icon: <InstapaperIcon size={42} round={true} />,
    component: InstapaperShareButton,
  },
  {
    id: 5,
    name: "Twitter",
    icon: <TwitterIcon size={42} round={true} />,
    component: TwitterShareButton,
  },
  {
    id: 6,
    name: "Email",
    icon: <EmailIcon size={42} round={true} />,
    component: EmailShareButton,
  },
  {
    id: 7,
    name: "Ok",
    icon: <OKIcon size={42} round={true} />,
    component: OKShareButton,
  },
  {
    id: 8,
    name: "Pintrest",
    icon: <PinterestIcon size={42} round={true} />,
    component: PinterestShareButton,
  },
  {
    id: 9,
    name: "Ok",
    icon: <TelegramIcon size={42} round={true} />,
    component: TelegramShareButton,
  },
  {
    id: 10,
    name: "Ok",
    icon: <PocketIcon size={42} round={true} />,
    component: PocketShareButton,
  },
];
