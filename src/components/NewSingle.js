import React from "react";

const NewSingle = ({ item }) => {
  // Fallback image
  const imageUrl =
    item.urlToImage || "https://via.placeholder.com/400x250?text=No+Image";

  // Dynamic border or shadow color based on source
  const dynamicBorderColor = (source) => {
    if (source.toLowerCase().includes("bbc")) return "#ff5252"; // red
    if (source.toLowerCase().includes("cnn")) return "#2962ff"; // blue
    if (source.toLowerCase().includes("reuters")) return "#00c853"; // green
    return "#9e9e9e"; // grey fallback
  };

  const cardStyle = {
    border: `2px solid ${dynamicBorderColor(item.source.name)}`,
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.03)";
    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div className="col s12 m6 l4">
      <div
        className="card medium"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-image">
          <img src={imageUrl} alt={item.title} />
          <span className="card-title">{item.source.name}</span>
        </div>
        <div className="card-content">
          <p
            style={{
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.title}
          </p>
          <p
            style={{
              color: "#616161",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.description}
          </p>
        </div>
        <div className="card-action">
          <a href={item.url} target="_blank" rel="noreferrer">
            Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewSingle;
