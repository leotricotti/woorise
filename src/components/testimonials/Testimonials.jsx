import PropTypes from "prop-types";
import styles from "./testimonial.module.css";

Testimonials.propTypes = {
  data: PropTypes.array,
};

function Testimonials({ data }) {
  return data.map((item) => {
    <section className={styles.testimonialsContainer}>
      <img src={item.stars} alt="Opinion value" />
      <p className={styles.quote}>{item.quote}</p>
      <div className={styles.autorContainer}>
        <img src={item.img} alt="Autor avatar" />
        <span className={styles.autorName}>{item.autor}</span>
        <span className={styles.title}>{item.title}</span>
      </div>
    </section>;
  });
}

export default Testimonials;
