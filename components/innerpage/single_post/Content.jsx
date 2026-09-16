

function Content({ blog }) {
  return (
    <section className="tc-post-content-style1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="info">
              <div className="breadcromb wow fadeInUp slow" data-wow-delay="0.2s">
                <a href="/">Home</a>
                <span className="icon">/</span>
                <a href="/blogs">{blog.category || "Blog"}</a>
                <span className="icon">/</span>
                <a href="#">{blog.title}</a>
              </div>

              <div
                className="mb-70 wow fadeInUp slow"
                data-wow-delay="0.2s"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;