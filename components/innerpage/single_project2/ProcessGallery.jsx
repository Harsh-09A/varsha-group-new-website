"use client";

import styles from "./Gallery.module.css";

const galleryItems = [
  {
    id: 1,
    src: "/uploads/project_imgs/common_gallery_02.jpg",
    title: "Site Overview",
    phase: "Phase 1",
  },
  {
    id: 2,
    src: "/uploads/project_imgs/common_gallery_02.jpg",
    title: "Foundation Work",
    phase: "Phase 1",
  },
  {
    id: 3,
    src: "/uploads/project_imgs/common_gallery_02.jpg",
    title: "Structure Progress",
    phase: "Phase 1",
  },
  {
    id: 4,
    src: "/uploads/project_imgs/common_gallery_02.jpg",
    title: "Interior Setup",
    phase: "Phase 2",
  },
  {
    id: 5,
    src: "/uploads/project_imgs/common_gallery_02.jpg",
    title: "Finishing Touches",
    phase: "Phase 2",
  },
  {
    id: 6,
    src: "/uploads/project_imgs/common_gallery_02.jpg",
    title: "Final Handover",
    phase: "Phase 2",
  },
];

export default function ProcessGallery({ data }) {
  return (
    <div className="container py-5">
      <div className="text-center mb-80 pt-3">
        <h2 className="title">Current Project Status</h2>

        <p className="desc">
          Explore the latest construction progress through our project gallery.
        </p>
      </div>

      <div className="row">
        {galleryItems.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-lg-4">
            <div className={styles.galleryItem}>
              <div className={styles.imageWrapper}>
                <span
                  className={`${styles.badge} ${
                    item.phase === "Phase 1"
                      ? styles.badgePhase1
                      : styles.badgePhase2
                  }`}
                >
                  {item.phase}
                </span>
                <img src={item.src} alt={item.title} className={styles.image} />
              </div>
              <p className={styles.caption}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
