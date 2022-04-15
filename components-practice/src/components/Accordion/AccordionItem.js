import { ReactComponent as CaretUp } from "./svg/caret-up.svg";
import { ReactComponent as CaretDown } from "./svg/caret-down.svg";
import { makeTwoDigits } from "../../utils/numbers";
import styles from "./Accordion.module.css";
const AccordionItem = (props) => {
  const { activeId, id, setActiveId, title, text, details } = props;
  const isActive = activeId === id;
  const accordionStyles = isActive
    ? styles.accordionItemActive
    : styles.accordionItemInactive;
  const onClick = () => {
    if (id === activeId) setActiveId(null);
    else setActiveId(id);
  };

  return (
    <li className={accordionStyles} onClick={onClick}>
      <span className={styles.itemNumber}>{makeTwoDigits(id)}</span>
      <h4 className={styles.title}>{title}</h4>
      {isActive ? (
        <CaretUp className={styles.caretActive} />
      ) : (
        <CaretDown className={styles.caretInactive} />
      )}
      <div className={styles.textbox}>
        <p className={styles.text}>{text}</p>
        <ul className={styles.details}>
          {details &&
            details.map((detail) => <li key={detail.id}>{detail.text}</li>)}
        </ul>
      </div>
    </li>
  );
};

export default AccordionItem;
