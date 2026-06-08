import {
  FaSwimmingPool,
  FaDumbbell,
  FaTree,
  FaShieldAlt,
  FaParking,
  FaConciergeBell,
  FaChild,
  FaSpa,
} from "react-icons/fa";

const amenities = [
  {
    icon: <FaSwimmingPool />,
    title: "Infinity Pool",
    desc: "Relax with breathtaking skyline views from our luxury infinity pool.",
  },
  {
    icon: <FaDumbbell />,
    title: "Fitness Center",
    desc: "State-of-the-art gym equipped with world-class facilities.",
  },
  {
    icon: <FaTree />,
    title: "Landscaped Gardens",
    desc: "Beautiful green spaces designed for leisure and wellness.",
  },
  {
    icon: <FaShieldAlt />,
    title: "24/7 Security",
    desc: "Advanced security systems with round-the-clock monitoring.",
  },
  {
    icon: <FaParking />,
    title: "Valet Parking",
    desc: "Dedicated valet and premium parking facilities.",
  },
  {
    icon: <FaConciergeBell />,
    title: "Concierge Service",
    desc: "Personalized assistance for a seamless luxury lifestyle.",
  },
  {
    icon: <FaChild />,
    title: "Kids Play Area",
    desc: "Safe and engaging recreational spaces designed for children of all ages.",
  },
  {
    icon: <FaSpa />,
    title: "Luxury Spa",
    desc: "Rejuvenate your body and mind with premium wellness and spa experiences.",
  },
];

function Amenities() {
  return (
    <section className="amenities-section py-120">
      <div className="container">
        <div className="text-center mb-80 pt-3">
          

          <h2 className="title">
           Luxury Amenities
          </h2>

          <p className="desc">
            Every detail is crafted to provide exceptional comfort,
            convenience, and sophistication.
          </p>
        </div>

        <div className="row">
          {amenities.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="amenity-card">
                <div className="icon">{item.icon}</div>

                <h5>{item.title}</h5>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;