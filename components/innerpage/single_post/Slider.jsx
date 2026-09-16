import { getImageUrl } from "@/lib/image-url";


function Slider({ blog }) {
  return (
    <section className="tc-main-img-style1 header">
      <div className="main-img">
        <img
          src={
            getImageUrl(blog.coverImage) ||
            "/placeholder-image.png"
          }
          alt={blog.title}
          className="img-cover"
          data-speed="1.25"
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="info">
            <div className="date fsz-12 text-uppercase mb-30">
              <a href="#">{blog.category || "General"}</a>
              <span className="circle icon-3 bg-white rounded-circle mx-3"></span>
              <a href="#">
                {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </a>
            </div>
            <h2 className="title">
              <a href="#" className="hover-orange1">
                {blog.title}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
