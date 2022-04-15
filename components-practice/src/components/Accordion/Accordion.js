import { useState } from "react";
import { data } from "../../data/accordionData";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul className={styles.accordion}>
      <AccordionItem />
    </ul>
  );
};

export default Accordion;
