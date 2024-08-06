import styles from "../../styles/scss/pages/test.module.scss";
import Image from "next/image";

import sutryk from "../../assets/images/sutryk.jpg";

const page = () => {
  return (
    <div className={styles.layout}>
      <Image src={sutryk} alt="sutryk" fill style={{ objectFit: "cover" }} />;
    </div>
  );
};

export default page;
