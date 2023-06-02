import stars from "../images/testimonials/stars.webp";
import autor1 from "../images/testimonials/autor1.webp";
import autor2 from "../images/testimonials/autor2.webp";
import autor3 from "../images/testimonials/autor3.webp";
import review from "../images/testimonials/reviews.svg";
import review2 from "../images/testimonials/reviews2.svg";
import review3 from "../images/testimonials/reviews3.svg";

const testimonialsData = {
  title: "Our customers love Woorise",
  review: [
    { id: 1, img: review },
    { id: 2, img: review2 },
    { id: 3, img: review3 },
  ],
  cards: [
    {
      id: 1,
      stars: stars,
      quote:
        "We needed a platform to run contests at live events and online. Woorise helped us to create beautiful and highly engagement contests. The learning curve is pretty short and the support team is very responsive, knowledgeable and truly eager to help your contest succeed.",
      img: autor1,
      author: "Marianna Dellaporta",
      title: "Social Media Manager at Kopparberg",
    },
    {
      id: 2,
      stars: stars,
      quote:
        "I love the ease with which you can set up a contest or a survey and get others to share your links, sign up for your newsletter, promote your product or virtually anything you want. Every Woorise campaign draws many more visitors to my site than ever before.",
      img: autor2,
      author: "Nikolaos Sitsanis",
      title: "CEO at Speakt",
    },
    {
      id: 3,
      stars: stars,
      quote:
        "Woorise helped us to increase engagement and get more social media followers on Facebook, Instagram and YouTube running viral giveaways and contests. I tried a lot of contests tools and apps but Woorise has been excellent as a growth tool for my business.",
      img: autor3,
      author: "Efi Kritikaki",
      title: "Oriflame Director",
    },
  ],
};

export default testimonialsData;
