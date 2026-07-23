import React from "react";

const CaseCard = ({ item }) => {
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
            <a className="tags-highlight">{item.location}</a>
            {/* <a>{item.rera_id}</a>
            <a>{item.configurations}</a> */}

            {/* null, undefined, "" (aur trim() wale version me " ") → render nahi hoga. */}
            {item.rera_id?.trim() && <a>{item.rera_id}</a>}
            {item.configurations?.trim() && <a>{item.configurations}</a>}
          </div>

          <h3 className="title fsz-35 mb-20 text-capitalize">
            {item.status === "ongoing" ? (
              <a href={`/projects/${item.slug}`} className="hover-orange1">
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </h3>

          <div className="text color-666">
            {item.excerpt}
            <br />
            {/* {item.possession?.trim() && (
              <span className="fw-semibold text-dark">
                <b>Possession:</b> {item.possession}
              </span>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseCard;
