import clientSectionData from "../../assets/data/clientSectionData";
import styles from "./clientsSection.module.css";

function ClientsSection() {
  return (
    <section className={styles.clientsSection}>
      {clientSectionData.map((item) => {
        return (
          <div className={styles.clientsSectionInner} key={item.id}>
            <img src={item.url} alt={item.alt} />
          </div>
        );
      })}
    </section>
  );
}

export default ClientsSection;
