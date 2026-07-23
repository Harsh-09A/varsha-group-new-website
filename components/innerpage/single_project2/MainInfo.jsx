

function MainInfo({data}) {
  return (
    <section className="tc-main-info-style2">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-4">
            <h4 className="fsz-45 fw-bold js-splittext-lines">
              Architectural Excellence, Designed for the Discerning Few
            </h4>
            {/* <a
              href="#"
              className="butn hover-bg-orange1 text-capitalize bg-white rounded-pill mt-90"
            >
              <span>
                Contact Now <i className="fal fa-arrow-up-right ms-2"></i>
              </span>
            </a> */}
          </div>
          <div className="col-lg-6 offset-lg-2 mt-5 mt-lg-0">
            <h6
              className="fsz-24 fw-500 mt-4 mt-lg-0 wow fadeInUp slow"
              data-wow-delay="0.2s"
            >
             {data.description}
            </h6>

            <ul className="lh-6 mt-70 wow fadeInUp slow" data-wow-delay="0.6s">
              <li className="fsz-18">
                <span className="color-666"> Location: </span> {data.location}
              </li>
              <li className="fsz-18">
                <span className="color-666"> RERA ID: </span> {data.rera_id}
              </li>
              <li className="fsz-18">
                <span className="color-666"> Configurations: </span> {data.configurations}
              </li>
              <li className="fsz-18 text-capitalize">
                <span className="color-666"> Status: </span> {data.status}
              </li>
              <li className="fsz-18 text-capitalize">
                <span className="color-666"> Possession: </span> {data.possession}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="imgs">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="lg-img wow zoomIn slow" data-wow-delay="0.2s">
                <img
                  src="/innerpages/assets/img/s_project2/about1.jpg"
                  alt=""
                  className="img-cover"
                  data-speed="1.5"
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="lg-img wow zoomIn slow" data-wow-delay="0.4s">
                <img
                  src="/innerpages/assets/img/s_project2/about2.jpg"
                  alt=""
                  className="img-cover"
                  data-speed="1.5"
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="lg-img wow zoomIn slow" data-wow-delay="0.4s">
                <img
                  src="/innerpages/assets/img/s_project2/about2.jpg"
                  alt=""
                  className="img-cover"
                  data-speed="1.5"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default MainInfo;
