import React from 'react';

function Map() {
  return (
    <section className="tc-map-style1">
      <div className="map-card wow zoomIn slow" data-wow-delay="0.2s">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.195266330213!2d73.03442642497565!3d19.011115382180193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3abaded518d%3A0xac5f24d3c1b07c2!2sVARSHA%20GROUP!5e0!3m2!1sen!2sin!4v1780653265282!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
