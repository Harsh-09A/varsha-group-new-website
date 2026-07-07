import Image from "next/image";
import { Playfair_Display, Jost } from "next/font/google";
import styles from "./TeamSection.module.css";

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
    name: "Amir Al Rashid",
    role: "Managing Director",
    bio: "Twenty years shaping skylines across the Gulf. Amir leads acquisition and vision for every masterplan, from first sketch to skyline.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    index: "02",
    name: "Layla Haddad",
    role: "Head of Design",
    bio: "Architect by training, storyteller by instinct. Layla translates ambition into form — every façade, lobby and interior begins on her desk.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    index: "03",
    name: "Karim Boutros",
    role: "Head of Sales",
    bio: "Karim builds the relationships that turn plans into portfolios, guiding investors through every stage of ownership with quiet precision.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
];

// Server component — no "use client" needed, all interactivity is CSS-only (:hover).
export default function TeamSection() {
  return (
    <section className={`${styles.teamSection} ${playfair.variable} ${jost.variable}`}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>Leadership</div>
        <h2 className={styles.sectionTitle}>
          The people behind every <em>address</em>
        </h2>
        <p className={styles.sectionSub}>
          Three disciplines, one standard. Meet the principals who carry
          every development from first concept to final handover.
        </p>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <article className={styles.memberCard} key={member.index}>
              <div className={styles.memberPhoto}>
                <span className={`${styles.frameCorner} ${styles.fcTl}`} />
                <span className={`${styles.frameCorner} ${styles.fcBr}`} />
                <span className={styles.memberIndex}>{member.index}</span>
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
                  <a href="#" aria-label={`${member.name} on LinkedIn`}>
                    in
                  </a>
                  <a href="#" aria-label={`Email ${member.name}`}>
                    @
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
