import { getGoogleReviews } from "@/services/google-reviews";
import StarRating from "@/utils/ratings";

async function Testimonials() {
  const result = await getGoogleReviews("ChIJjVHtravD5zsRwgcbPE3yxQo");
  const reviews = result.success && result.data ? result.data.reviews : [];

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
                  {reviews.map((item) => (
                    <div className="swiper-slide" key={item.name}>
                      <div className="clients-card">
                        {/* fsz-45 fw-600 */}
                        <div className="text fsz-20 fw-600 lh-2 js-splittext-lines">
                          “{item.text?.text ?? ""}”
                        </div>

                        <div className="author">
                          <div className="au-inf">
                            <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                              {item.authorAttribution.displayName}
                            </h6>

                            <StarRating rating={item.rating} />
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
