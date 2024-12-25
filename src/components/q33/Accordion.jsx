import React, { useState } from "react";

const Accordion = ({ sections }) => {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index}>
          <button
            className="accordion-button"
            onClick={() => toggleSection(index)}
          >
            {section.title}
          </button>
          {openSectionIndex === index && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
