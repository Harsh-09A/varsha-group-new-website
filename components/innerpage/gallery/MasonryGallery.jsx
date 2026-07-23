import Image from "next/image";
import styles from "./MasonryGallery.module.css";
import galleryImages from "./galleryData";

// Server component — no client JS needed, masonry is done with pure CSS
// (column-count / break-inside), so it stays fast and works with any
// number of images from the array below.

export default function MasonryGallery() {
  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          {/* <span className={styles.subtitle}>Our Work</span> */}
          {/* <h2 className={styles.title}>Project Gallery</h2> */}
          <h2 className="fsz-45 fw-500 text-center mb-30">
            Our
            <span className="sub-font fst-italic color-orange1 fw-400 ps-2">
              Happy customers
            </span>
          </h2>
          <p className={styles.description}>
            Real stories, genuine experiences, and lasting relationships built on trust.
          </p>
        </div>

        <div className={styles.masonryGrid}>
          {galleryImages.map((image, index) => (
            <div key={image.id} className={styles.masonryItem}>
              <div className={styles.imageWrap}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={800}
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1400px) 33vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                  priority={index < 4}
                />
                <div className={styles.overlay}>
                  {/* <div className={styles.overlayContent}>
                    {image.category && (
                      <span className={styles.category}>
                        {image.category}
                      </span>
                    )}
                    <p className={styles.caption}>{image.alt}</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
