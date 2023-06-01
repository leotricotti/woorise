import arrows from "../images/box-section-two/image1.webp";
import mobile from "../images/box-section-two/image2.webp";
import wordPress from "../images/box-section-two/image3.webp";
import language from "../images/box-section-two/image4.webp";
import map from "../images/box-section-two/image5.webp";
import envelope from "../images/box-section-two/image6.webp";
import lock from "../images/box-section-two/image7.webp";
import network from "../images/box-section-two/image8.webp";

const boxSectionData = {
  heading: {
    id: 1,
    title: "Powerful features for creating beautiful campaigns",
    text: "Powerful features for creating beautiful campaigns",
  },
  cards: [
    {
      id: 1,
      url: arrows,
      alt: "Box Section logo icon",
      title: "Drag & Drop Interface",
      text: "You can easily customize any element of the campaign including form fields and social actions from a drag and drop interface without a developer.",
    },
    {
      id: 2,
      url: mobile,
      alt: "Box Section logo icon",
      title: "Mobile Responsive",
      text: "Rest assured that all of our website, landing pages and Woorise dashboard are designed to be mobile-responsive, so you can view and edit them easily on any device.",
    },
    {
      id: 3,
      url: wordPress,
      alt: "Box Section logo icon",
      title: "Publish Anywhere",
      text: "No Limits. Embed Woorise campaigns on your website, as a pop up, in a full screen, in chat, exit intent, in email, on Facebook page or on your subdomain.",
    },
    {
      id: 4,
      url: language,
      alt: "Box Section logo icon",
      title: "Any Language",
      text: "Woorise supports all languages including RTL languages. You can easily create your campaign in your preferred language or in your targeted audience language.",
    },
    {
      id: 5,
      url: map,
      alt: "Box Section logo icon",
      title: "Multi-Page Forms",
      text: "Easily collect additional information from your prospect by turning complex forms into multiple steps. Reduce friction points and get users to engage with your brand.",
    },
    {
      id: 6,
      url: envelope,
      alt: "Box Section logo icon",
      title: "Email Notifications",
      text: "Automatically send email notifications when a form is submitted. Use conditional logic and merge tags to send personalized notifications based on user choices. ",
    },
    {
      id: 7,
      url: lock,
      alt: "Box Section logo icon",
      title: "Privacy & GDPR",
      text: "Woorise takes data privacy very seriously. We have implemented a number of tools and security measures to protect data and ensure compliance with GDPR.",
    },
    {
      id: 8,
      url: network,
      alt: "Box Section logo icon",
      title: "Workspaces",
      text: "Create multiple workspaces (Sites) within the same Woorise account. A completely separate workspace for each brand or client to keep data from each site separate from one another.",
      linkText: "See all Features",
      linkUrl: "https://woorise.com/features",
    },
  ],
};

export default boxSectionData;
