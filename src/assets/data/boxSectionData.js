import gift from "../images/box-section/gift-solid.png";
import brush from "../images/box-section/paintbrush-solid.png";
import list from "../images/box-section/rectangle-list-solid.png";
import star from "../images/box-section/star-solid.png";
import check from "../images/box-section/circle-check-solid.png";
import shoppingCart from "../images/box-section/cart-shopping-solid.png";

const boxSectionData = {
  heading: {
    id: 1,
    title: "Create content your audience can’t ignore",
    text: "A marketing platform that actually helps you build a wide variety of campaigns",
  },
  cards: [
    {
      id: 1,
      url: gift,
      alt: "Box Section logo icon",
      title: "Giveaways & Contests",
      text: "Build powerful giveaways, contests and competitions. Collect entries and inspire your audience to engage with your goals.",
      link: "Giveaways & Contests",
    },
    {
      id: 2,
      url: brush,
      alt: "Box Section logo icon",
      title: "Landing Pages",
      text: "Create beautiful and high-converting landing pages without a developer. Start with an optimized and mobile-responsive template.",
      link: "Landing Pages",
    },
    {
      id: 3,
      url: list,
      alt: "Box Section logo icon",
      title: "Forms",
      text: "Build powerful online forms that you can use to collect data, sign ups, subscribers, do calculations and automate your workflows.",
      link: "Forms",
    },
    {
      id: 4,
      url: star,
      alt: "Box Section logo icon",
      title: "Surveys",
      text: "Create powerful online surveys that simply read your customer’s minds. Gain rich insights & make informed business decisions.",
      link: "Surveys",
    },
    {
      id: 5,
      url: check,
      alt: "Box Section logo icon",
      title: "Quizzes",
      text: "Create stunning & high performing quizzes with a top notch quiz maker. Make quizzes that people love to share and engage your audience.",
      link: "Quizzes",
    },
    {
      id: 6,
      url: shoppingCart,
      alt: "Box Section logo icon",
      title: "Orders & Payments",
      text: "Easily and securely collect payments & subscriptions, create checkout pages, sell products or accept online donations.",
      link: "Orders & Payments",
    },
  ],
};

export default boxSectionData;
