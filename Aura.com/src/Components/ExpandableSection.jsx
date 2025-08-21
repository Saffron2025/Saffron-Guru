// src/Components/ExpandableSection.jsx
import React, { useEffect, useState } from 'react';
import './ExpandableSection.css';

const ExpandableSection = ({ title, content, defaultExpand }) => {
  const [expanded, setExpanded] = useState(false);

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
