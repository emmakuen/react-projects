import { ReactComponent as CaretUp } from "./svg/caret-up.svg";
import styles from "./Accordion.module.css";
const AccordionItem = () => {
  return (
    <li className={styles.accordionItem}>
      <span className={styles.itemNumber}>01</span>
      <div className={styles.itemContent}>
        <h4 className={styles.title}>Lorem, ipsum dolor sit amet?</h4>
        <div className={styles.textbox}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            nesciunt hic impedit velit dolores, consectetur minus laborum
            deserunt architecto rerum, maiores error vero sequi dolorem.
          </p>
          <ul className={styles.textList}>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam!
            </li>
          </ul>
        </div>
      </div>
      <CaretUp className={styles.caret} />
    </li>
  );
};

export default AccordionItem;
