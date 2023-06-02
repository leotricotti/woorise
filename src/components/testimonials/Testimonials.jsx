import styles from "./testimonials.module.css";

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
    <h1>data</h1>;
  });
}

export default Testimonials;
