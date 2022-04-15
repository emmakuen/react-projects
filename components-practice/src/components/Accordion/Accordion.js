import { useState } from "react";
import { data } from "../../data/accordionData";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [activeId, setActiveId] = useState(1);
  const handleClick = (id) => {
    setActiveId(id);
  };
  return (
    <ul className={styles.accordion}>
      <AccordionItem activeId={activeId} handleClick={handleClick} id={2} />
    </ul>
  );
};

export default Accordion;
