// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./FullScreenMenu.module.css";

declare global {
  interface Window {
    gsap: any;
  }
}

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SubmenuLink {
  label: string;
  href: string;
}

interface SubmenuGroup {
  heading?: string;
  items: SubmenuLink[];
}

interface NavItem {
  key: string;
  label: string;
  href: string;
  /** Any item can carry a submenu — if present, it renders on the right panel (desktop) or drills down (mobile). */
  submenu?: SubmenuGroup[];
}

const primaryLinks: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about" },
  {
    key: "projects",
    label: "Projects",
    href: "/projects",
    submenu: [
      {
        heading: "Ongoing",
        items: [
          { label: "Balaji Sapphire", href: "/projects/balaji-sapphire" },
          { label: "Balaji Vista", href: "/projects/balaji-vista" },
          { label: "Balaji Park", href: "/projects/balaji-park" },
          { label: "Balaji Skyline", href: "/projects/balaji-skyline" },
        ],
      },
      {
        heading: "Upcoming",
        items: [{ label: "Airoli New Landmark", href: "/projects/airoli-new-landmark" }],
      },
    ],
  },
  {
    key: "buyersGuide",
    label: "Buyer's Guide",
    href: "#",
    submenu: [
      {
        items: [
          { label: "GST", href: "/gst" },
          { label: "Stamp Duty & Registration", href: "/stamp-duty" },
          { label: "Loans", href: "/loan" },
          { label: "PMAY", href: "/pmay" },
          { label: "NRI Corner", href: "/nri" },
          { label: "Loan Calculator", href: "/loan-calculator" },
        ],
      },
    ],
  },
  { key: "blog", label: "Blog", href: "/blogs" },
  { key: "career", label: "Career", href: "/career" },
  { key: "gallery", label: "Gallery", href: "/gallery" },
  { key: "channelPartner", label: "Channel Partner", href: "/channel-partner" },
  { key: "contact", label: "Contact Us", href: "/contact" },
];

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const pathname = usePathname();
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Set on hover (desktop) or tap (mobile) — item whose submenu should be shown/drilled into.
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  // Entrance animation for logo + left nav only.
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let tl: any;
    let attempts = 0;
    let cancelled = false;

    const runAnimation = () => {
      if (cancelled) return;
      const gsap = typeof window !== "undefined" ? window.gsap : null;

      if (!gsap) {
        if (attempts < 20) {
          attempts += 1;
          setTimeout(runAnimation, 50);
        }
        return;
      }

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(logoRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.5 }).fromTo(
        navItemsRef.current,
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.45, stagger: 0.06 },
        "-=0.25"
      );
    };

    runAnimation();

    return () => {
      cancelled = true;
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (tl) tl.kill();
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setHoveredKey(null);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // First Escape closes a drilled-in submenu, second closes the whole menu.
        if (hoveredKey) setHoveredKey(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, hoveredKey]);

  // Item whose submenu contains the page currently being viewed (persistent, not hover-based).
  const activeParent = primaryLinks.find((item) =>
    item.submenu?.some((group) => group.items.some((sub) => sub.href === pathname))
  );

  // Desktop panel: hover wins; otherwise fall back to the active-page's parent, if any.
  const desktopKey = hoveredKey ?? activeParent?.key ?? null;
  const desktopItem = primaryLinks.find((item) => item.key === desktopKey);
  const showDesktopPanel = !!desktopItem?.submenu;

  // Mobile drill: only the explicitly tapped item, no silent fallback.
  const mobileItem = primaryLinks.find((item) => item.key === hoveredKey);
  const mobileDrilled = !!mobileItem?.submenu;

  const handleBodyMouseLeave = () => {
    // Ignore synthetic mouseleave from touch devices — only real hover-capable pointers reset.
    if (typeof window !== "undefined" && window.matchMedia?.("(hover: hover)").matches) {
      setHoveredKey(null);
    }
  };

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.submenu) {
      // Any item with a submenu reveals it on click/tap instead of navigating immediately.
      e.preventDefault();
      setHoveredKey(item.key);
      return;
    }
    onClose();
  };

  const renderGroups = (item: NavItem) => (
    <>
      {item.href !== "#" && (
        <a href={item.href} className={styles.viewAllLink} onClick={onClose}>
          View All {item.label} →
        </a>
      )}
      {item.submenu!.map((group, gi) => (
        <div key={group.heading ?? gi}>
          {group.heading && <p className={styles.groupHeading}>{group.heading}</p>}
          {group.items.map((sub) => (
            <a
              key={sub.href}
              href={sub.href}
              className={`${styles.projectLink} ${pathname === sub.href ? styles.activeSub : ""}`}
              onClick={onClose}
            >
              {sub.label}
            </a>
          ))}
        </div>
      ))}
    </>
  );

  const renderNavList = (refCapture: boolean) => (
    <ul className={styles.primaryNav}>
      {primaryLinks.map((item, idx) => {
        const isChildActive = item.submenu?.some((group) => group.items.some((sub) => sub.href === pathname));
        const isSelfActive = item.href !== "#" && pathname === item.href;
        const isHovered = hoveredKey === item.key;
        const isActive = isHovered || isSelfActive || isChildActive;

        return (
          <li
            key={item.key}
            ref={refCapture ? (el) => (navItemsRef.current[idx] = el) : undefined}
            onMouseEnter={() => item.submenu && setHoveredKey(item.key)}
            onFocus={() => item.submenu && setHoveredKey(item.key)}
          >
            <a
              href={item.href}
              className={`${styles.primaryLink} ${isActive ? styles.active : ""}`}
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} aria-hidden={!isOpen}>
      <button type="button" className={styles.closeBtn} aria-label="Close menu" onClick={onClose}>
        <span></span>
        <span></span>
      </button>

      <div ref={logoRef} className={styles.logoWrap}>
        <img src="/varsha/logo/varsha-new-logo.jpeg" alt="Logo" />
      </div>

      {/* ===== Desktop layout: side-by-side, divider always visible, hover reveals panel ===== */}
      <div className={styles.body} onMouseLeave={handleBodyMouseLeave}>
        {renderNavList(true)}

        <div className={styles.divider} />
        <div className={styles.projectCol} key={desktopItem?.key ?? "empty"}>
          {showDesktopPanel && renderGroups(desktopItem!)}
        </div>
      </div>

      {/* ===== Mobile layout: drill-down slide, main list <-> submenu ===== */}
      <div className={styles.mobileTrack}>
        <div className={`${styles.slidePane} ${mobileDrilled ? styles.slideOut : ""}`}>
          {renderNavList(false)}
        </div>

        <div className={`${styles.slidePane} ${styles.subPane} ${mobileDrilled ? styles.slideIn : ""}`}>
          <button type="button" className={styles.backBtn} onClick={() => setHoveredKey(null)}>
            ‹ Back
          </button>
          {mobileItem?.submenu && (
            <>
              <p className={styles.subPaneTitle}>{mobileItem.label}</p>
              {renderGroups(mobileItem)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
