import * as FaIcons from "react-icons/fa";

function Amenities({ data }) {
  const amenities = data.amenities;

  return (
    <section className="amenities-section py-120">
      <div className="container">
        <div className="text-center mb-80 pt-3">
          <h2 className="title">Luxury Amenities</h2>

          <p className="desc">
            Every detail is crafted to provide exceptional comfort, convenience,
            and sophistication.
          </p>
        </div>

        <div className="row">
          {amenities.map((item, index) => {
            const Icon = FaIcons[item.icon] || FaIcons.FaStar;

            return (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="amenity-card">
                  <div className="icon">
                    <Icon />
                  </div>

                  <h5>{item.title}</h5>

                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
