import Image from "next/image";
import { Playfair_Display, Jost } from "next/font/google";
import styles from "./TeamSection.module.css";
import { LiaLinkedin } from "react-icons/lia";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

const TEAM = [
  {
    index: "01",
    name: "Mr. Bharat Choudhary",
    role: "Director",
    bio: "Mr. Bharat Choudhary strengthens Varsha Group through innovative planning, quality-driven execution and customer-focused development. His dedication to excellence, thoughtful design, and sustainable growth ensures every project reflects the company’s vision and values.",
    image: "/innerpages/assets/img/about/Bharat-Varsha-Group.png",
    linkedin: "",
    email: "",
  },
  {
    index: "02",
    name: "Shri Mohan Singh Choudhary",
    role: "Founder and Chairman",
    bio: "Shri Mohan Singh Choudhary established Varsha Group with a vision of creating exceptional developments rooted in trust, quality and innovation. His leadership continues to inspire sustainable growth, lasting relationships and communities built to enrich generations.",
    image: "/innerpages/assets/img/about/Mohan-Varsha-Group_final.png",
    linkedin: "",
    email: "",
  },
  {
    index: "03",
    name: "Mr. Sunil Choudhary",
    role: "Managing Director",
    bio: "Mr. Sunil Choudhary leads Varsha Group with a focus on strategic growth, operational excellence and customer satisfaction. His commitment to quality, timely execution and innovation ensures every project delivers lasting value and exceptional experiences.",
    image: "/innerpages/assets/img/about/Sunil-Varsha-Group.png",
    linkedin: "",
    email: "",
  },
];

// Server component — no "use client" needed, all interactivity is CSS-only (:hover).
export default function TeamSection() {
  return (
    <section
      className={`${styles.teamSection} ${playfair.variable} ${jost.variable}`}
    >
      <div className={styles.container}>
        <div className={styles.eyebrow}>Leadership</div>
        <h2 className={styles.sectionTitle}>
          The people behind every <em>address</em>
        </h2>
        <p className={styles.sectionSub}>
          Three disciplines, one standard. Meet the principals who carry every
          development from first concept to final handover.
        </p>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <article className={styles.memberCard} key={member.index}>
              <div className={styles.memberPhoto}>
                <span className={`${styles.frameCorner} ${styles.fcTl}`} />
                <span className={`${styles.frameCorner} ${styles.fcBr}`} />
                {/* <span className={styles.memberIndex}>{member.index}</span> */}
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  className={styles.memberImg}
                />
              </div>

              <div className={styles.memberBody}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberRole}>{member.role}</span>
                <div className={styles.hairline} />
                <p className={styles.memberBio}>{member.bio}</p>

                <div className={styles.memberSocials}>
                  <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={member.email} aria-label={`Email ${member.name}`}>
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
