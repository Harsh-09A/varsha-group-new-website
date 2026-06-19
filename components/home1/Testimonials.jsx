const testimonials = [
  {
    id: 1,
    review:
      "Varsha Balaji Skyline is truly well planned and impressive residential project. The 2 BHK configuration is very spacious and practical with good ventilation and proper vastu compliances and natural light, which instantly gives postive feel the moment you visit. What really made the experience smooth and trustworthy was professional support from the sales team. A Special mention to Ms.Charu Jadhav who handled everything with complete transparency and patience.",
    name: "Nova Nimje",
    location: "Bandra, Mumbai",
  },
  {
    id: 2,
    review:
      "I recently booked a flat with this builder, and my overall experience has been very positive. The entire process—from project explanation to documentation—was handled smoothly and professionally. A special thanks to Charu and Vinit for being extremely supportive, responsive, and transparent throughout the booking process.",
    name: "Swati Pandey",
    location: "Kharghar, Navi Mumbai",
  },
  {
    id: 3,
    review:
      "Balaji Skyline by Varsha Group is the best project in this locality with 100% Vastu Compliance which was our first priority. Good spacious 2BHK with decent size of balcony along with all basis amenities Special Thanks to Ms. Charu Jadhav and her team very co-operative, polite and explained everything in a detailed way. ",
    name: "Durgesh Dodi",
    location: "Panvel, Navi Mumbai",
  },
];



function Testimonials() {
  return (
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6 className="fsz-18 text-uppercase lh-4">
              what clients say <br /> about us
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-quote-right"></i>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="tc-clients-style1">
              <div className="clients-slider1">
                <div className="swiper-wrapper">
                  {testimonials.map((item) => (
                    <div className="swiper-slide" key={item.id}>
                      <div className="clients-card">
                        <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                          “{item.review}”
                        </div>

                        <div className="author">
                          {/* <div className="au-img">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="img-cover"
                            />
                          </div> */}

                          <div className="au-inf">
                            <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                              {item.name}
                            </h6>

                            <p className="text-capitalize fsz-14 color-666">
                              {item.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="slider-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marq-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#"> Trustworthy </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Visionary </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Exceptional </a>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line3.png" alt="" className="c-line" />
    </section>
  );
}

export default Testimonials;
