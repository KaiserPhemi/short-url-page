// styles
import styles from "./campaign.module.css";

// bottom campaign block
const Campaign = () => {
  return (
    <div className={styles.campaign}>
      <p className={styles.caption}>Boost your links today</p>
      <button className={styles.cta_btn}>Get started</button>
    </div>
  );
};

export default Campaign;
