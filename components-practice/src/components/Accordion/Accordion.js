import { useState } from "react";
import { data } from "../../data/accordionData";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);
  const renderItems = () => {
    return data.map((item) => (
      <AccordionItem
        key={item.id}
        activeId={activeId}
        setActiveId={setActiveId}
        {...item}
      />
    ));
  };

  return <ul className={styles.accordion}>{renderItems()}</ul>;
};

export default Accordion;
