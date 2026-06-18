import React from "react";

const CaseCard = ({item}) => {
  return (
    <>
      <div className="case-card">
        <div className="img">
          <img
            src={item.featured_image}
            alt={item.title}
            className="img-cover"
          />
        </div>

        <div className="info">
          <div className="tags mb-30">
            <a>{item.location}</a>
          </div>

          <h3 className="title fsz-35 mb-20">
            {item.status === "ongoing" ? (
              <a href={`/projects/${item.slug}`} className="hover-orange1">
                {item.title}
              </a>
            ) : (
              <span>{item.title}</span>
            )}
          </h3>

          <div className="text color-666">{item.excerpt}</div>
        </div>
      </div>
    </>
  );
};

export default CaseCard;
