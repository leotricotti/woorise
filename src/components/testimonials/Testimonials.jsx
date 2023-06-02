import PropsTypes from "prop-types";
import styles from "./testimonials.module.css";

Testimonials.propTypes = {
  data: PropsTypes.object,
};

function Testimonials({ data }) {
  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>{data.title}</h2>
        {data.cards.map((item) => (
          <div className={styles.testimonial} key={item.id}>
            <img
              src={item.stars}
              alt="Opinion value"
              className={styles.stars}
            />
            <p className={styles.quote}>{item.quote}</p>
            <div className={styles.authorContainer}>
              <img
                src={item.img}
                alt="Author avatar"
                className={styles.avatar}
              />
              <span className={styles.name}>{item.author}</span>
              <span className={styles.authorTitle}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.review}>
        {data.review.map((item) => (
          <div className={styles.reviewContainer} key={item.id}>
            <img src={item.img} alt="Reviewer logo" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
