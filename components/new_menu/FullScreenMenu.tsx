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
  /** Any item can carry a submenu — if present, it renders on the right panel on hover/focus. */
  submenu?: SubmenuGroup[];
}

const primaryLinks: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about" },
  {
    key: "projects",
    label: "Projects",
    href: "#",
    submenu: [
      {
        heading: "All",
        items: [
          { label: "All Projects", href: "/projects" },
        ],
      },
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
  { key: "contact", label: "Contact Us", href: "/contact" },
];

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const pathname = usePathname();
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Only set while the pointer/focus is actually over an item that has a submenu.
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  // Entrance animation for logo + left nav only.
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    // document.documentElement.style.overflowX = "hidden";

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
      // document.documentElement.style.overflow = "";
      if (tl) tl.kill();
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setHoveredKey(null);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Item whose submenu contains the page currently being viewed (persistent, not hover-based).
  const activeParent = primaryLinks.find(
    (item) => item.submenu?.some((group) => group.items.some((sub) => sub.href === pathname))
  );

  // What shows on the right: hover wins; otherwise fall back to the active-page's parent, if any.
  const displayKey = hoveredKey ?? activeParent?.key ?? null;
  const displayItem = primaryLinks.find((item) => item.key === displayKey);
  const showPanel = !!displayItem?.submenu;

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.submenu && item.href === "#") {
      // No own page (e.g. Buyer's Guide) — click just reveals its panel (touch fallback).
      e.preventDefault();
      setHoveredKey(item.key);
      return;
    }
    onClose();
  };

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} aria-hidden={!isOpen}>
      <button type="button" className={styles.closeBtn} aria-label="Close menu" onClick={onClose}>
        <span></span>
        <span></span>
      </button>

      <div ref={logoRef} className={styles.logoWrap}>
        <img src="/home1/assets/img/logo-2.png" alt="Logo" />
      </div>

      <div
        className={styles.body}
        onMouseLeave={() => setHoveredKey(null)}
      >
        <ul className={styles.primaryNav}>
          {primaryLinks.map((item, idx) => {
            const isChildActive = item.submenu?.some((group) =>
              group.items.some((sub) => sub.href === pathname)
            );
            const isSelfActive = item.href !== "#" && pathname === item.href;
            const isHovered = hoveredKey === item.key;
            const isActive = isHovered || isSelfActive || isChildActive;

            return (
              <li
                key={item.key}
                ref={(el) => (navItemsRef.current[idx] = el)}
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

        <div className={styles.divider} />
        <div className={styles.projectCol} key={displayItem?.key ?? "empty"}>
          {showPanel &&
            displayItem!.submenu!.map((group, gi) => (
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
        </div>
      </div>
    </div>
  );
}
