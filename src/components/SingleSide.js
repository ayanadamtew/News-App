import React from "react";

const SingleSide = ({ item }) => {
  // Dynamic border color for source name
  const dynamicStyle = (source) => {
    if (source.toLowerCase().includes("bbc")) return { borderLeft: "5px solid #ff5252" };
    if (source.toLowerCase().includes("cnn")) return { borderLeft: "5px solid #2962ff" };
    return { borderLeft: "5px solid #9e9e9e" }; // Grey fallback
  };

  // Hover style
  const hoverStyle = {
    transition: "background-color 0.3s, box-shadow 0.3s",
  };

  // Mouse enter event to apply hover effect
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#f5f5f5";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  };

  // Mouse leave event to remove hover effect
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div>
      <div className="divider"></div>
      <a href={item.url} target="_blank" rel="noreferrer">
        <div
          className="section"
          style={{ ...dynamicStyle(item.source.name), ...hoverStyle }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h5>{item.source.name}</h5>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default SingleSide;
