function Gallery({ data }) {
  return (
    <section className="tc-challenge-style2 pt-5">
      <div className="container text-center">
        <h3 className="fsz-45 text-capitalize mb-10 js-splittext-lines">
          Gallery
        </h3>

        <div
          className="text fsz-24 mb-50 wow fadeInUp slow"
          data-wow-delay="0.2s"
        >
          Explore the stunning visuals that showcase the elegance,
          craftsmanship, and lifestyle of our project.
        </div>
      </div>

      <div className="content float_box_container">
        <div className="challenge-slider">
          <div className="swiper-wrapper">
            {data.gallery?.map((image, index) => (
              <div className="swiper-slide" key={index}>
                <div className="case-card">
                  <a className="img">
                    <img
                      src={image}
                      alt={`${data.title} ${index + 1}`}
                      className="img-cover"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="float-cursor float_box">
          Hold <br /> and Drag
        </div>
      </div>
    </section>
  );
}

export default Gallery;
