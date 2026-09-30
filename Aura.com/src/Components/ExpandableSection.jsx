// src/Components/ExpandableSection.jsx
import React, { useEffect, useState } from 'react';
import './ExpandableSection.css';

const ExpandableSection = ({ title, content, defaultExpand }) => {
  // Open by default so customers (and Google) see every feature straight away.
  // Visitors can still click "Hide" to close a section.
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (defaultExpand) {
      setExpanded(true);
    }
  }, [defaultExpand]);

  return (
    <div className="expandable-section">
      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? '➖ Hide' : '➕ Expand'}
      </button>
      <h2 className="expand-title">{title}</h2>
      {expanded && <div className="expand-content">{content}</div>}
    </div>
  );
};

export default ExpandableSection;
