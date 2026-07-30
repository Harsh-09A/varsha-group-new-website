import { getFormattedGoogleReviews } from "@/services/google-reviews";
import StarRating from "@/utils/ratings";

const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

async function Testimonials() {
  const reviews = await getFormattedGoogleReviews(GOOGLE_PLACE_ID);

  return (
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-4 pb-2">
              <img
                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="fsz-14 fw-600 text-uppercase">
                Google Reviews
              </span>
            </div>

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
                    <div className="swiper-slide " key={item.id}>
                      <div className="clients-card px-5">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <img
                            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                            alt="Google review"
                            width={18}
                            height={18}
                          />
                          <span className="fsz-12 text-muted">
                            {item.relativeTime}
                          </span>
                        </div>

                        <div className="text fsz-20 fw-600 lh-2 js-splittext-lines">
                          “{item.quote}”
                        </div>

                        <div className="author">
                          <div className="au-inf">
                            <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                              {item.name}
                            </h6>

                            <StarRating rating={item.stars} />
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

            <div className="mt-4 text-center text-lg-start">
              <a
                href={`https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                // className="btn btn-outline-dark d-inline-flex align-items-center gap-2"
                className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1 gap-2"
              >
                <img
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  alt="Google"
                  width={18}
                  height={18}
                  className=""
                />
                <span className="px-2 text-capitalize fs-6">View all Google reviews of Varsha Group</span>
              </a>
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
