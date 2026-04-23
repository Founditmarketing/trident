import PageHero from "../components/PageHero";
import { useReveal } from "../hooks";

const EFFECTIVE_DATE = "April 23, 2026";

const SECTIONS = [
  {
    title: "Introduction",
    content: `Trident Dermatology ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our website tridentderm.com (the "Site"). By accessing or using our Site, you agree to the terms of this Privacy Policy.`
  },
  {
    title: "HIPAA Compliance",
    content: `As a healthcare provider, Trident Dermatology complies with the Health Insurance Portability and Accountability Act (HIPAA) and all applicable federal and state regulations regarding the privacy and security of Protected Health Information (PHI). Our Notice of Privacy Practices, which describes how we may use and disclose your PHI for treatment, payment, and healthcare operations, is available at our office and upon request.`,
    note: "This website does not collect, store, or process Protected Health Information (PHI). Medical records, treatment data, and clinical information are managed exclusively through our HIPAA-compliant Electronic Medical Records (EMR) system."
  },
  {
    title: "Information We Collect",
    subsections: [
      {
        subtitle: "Information You Provide",
        items: [
          "Name, email address, and phone number when you contact us via our website",
          "Appointment request details submitted through contact forms",
          "Any other information you voluntarily provide through the Site"
        ]
      },
      {
        subtitle: "Automatically Collected Information",
        items: [
          "Browser type and version",
          "Operating system",
          "IP address and general location data",
          "Pages visited, time spent, and navigation patterns",
          "Referring website or search terms used to find our Site"
        ]
      }
    ]
  },
  {
    title: "How We Use Your Information",
    items: [
      "Respond to inquiries and appointment requests",
      "Improve our website's functionality and user experience",
      "Send administrative communications related to your inquiry",
      "Comply with legal obligations and protect our legal rights",
      "Analyze website traffic and usage patterns to improve our services"
    ]
  },
  {
    title: "Cookies & Tracking Technologies",
    content: `Our Site may use cookies, web beacons, and similar technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you interact with our Site. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of the Site.`,
    subsections: [
      {
        subtitle: "Types of Cookies We Use",
        items: [
          "Essential cookies — required for basic Site functionality",
          "Analytics cookies — help us understand Site usage (e.g., Google Analytics)",
          "Preference cookies — remember your settings and choices"
        ]
      }
    ]
  },
  {
    title: "Third-Party Services",
    content: `Our Site may contain links to third-party websites and services, including but not limited to:`,
    items: [
      "Patient Portal (EMA) — for secure access to medical records and online services",
      "Online Bill Pay — for convenient payment processing",
      "Google Maps — to help you locate our office",
      "Social media platforms (Facebook, Instagram)"
    ],
    note: "These third-party services have their own privacy policies and data practices. We are not responsible for the privacy practices of external websites. We encourage you to review their policies before providing any personal information."
  },
  {
    title: "Data Security",
    content: `We implement commercially reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
  },
  {
    title: "Your Rights",
    items: [
      "Request access to the personal information we hold about you",
      "Request correction of inaccurate personal information",
      "Request deletion of your personal information (subject to legal obligations)",
      "Opt out of marketing communications at any time",
      "File a complaint with the appropriate regulatory authority"
    ],
    content_after: "To exercise any of these rights, please contact us using the information provided below."
  },
  {
    title: "Children's Privacy",
    content: `Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately so we can delete such information.`
  },
  {
    title: "Changes to This Policy",
    content: `We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to the Site with a revised "Effective Date." Your continued use of the Site after any modifications constitutes your acceptance of the updated Privacy Policy.`
  },
  {
    title: "Contact Us",
    content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:`,
    contact: true
  }
];

export default function Privacy() {
  const [contentRef, contentVis] = useReveal();

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        titleAccent="Policy"
        subtitle="Your privacy is important to us. This policy describes how we collect, use, and protect your information."
        image="/images/contact-building.png"
      />

      <section
        ref={contentRef}
        style={{
          padding: "var(--section-pad) var(--side-pad)",
          maxWidth: 880,
          margin: "0 auto",
          opacity: contentVis ? 1 : 0.01,
          transform: contentVis ? "none" : "translateY(30px)",
          transition: "all 1s cubic-bezier(.16,1,.3,1)"
        }}
      >
        {/* Effective Date */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 20px", borderRadius: 40, background: "var(--card-bg)", border: "1px solid var(--card-border)", backdropFilter: "blur(12px)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--stone)" }}>Effective Date: {EFFECTIVE_DATE}</span>
          </div>
        </div>

        {/* Policy Sections */}
        {SECTIONS.map((section, i) => (
          <div key={i} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: i < SECTIONS.length - 1 ? "1px solid rgba(184,149,106,.06)" : "none" }}>
            {/* Section Number + Title */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 300, color: "rgba(184,149,106,.2)", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,3vw,28px)", fontWeight: 400, color: "var(--teal)" }}>
                {section.title}
              </h2>
            </div>

            {/* Main Content */}
            {section.content && (
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, marginBottom: section.items || section.subsections || section.note || section.contact ? 20 : 0 }}>
                {section.content}
              </p>
            )}

            {/* Note Callout */}
            {section.note && (
              <div style={{ padding: "20px 24px", borderRadius: 12, background: "rgba(23,54,58,.03)", borderLeft: "3px solid var(--gold)", marginBottom: section.items || section.subsections ? 20 : 0, marginTop: 16 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: "var(--stone)", fontWeight: 400, fontStyle: "italic" }}>
                    {section.note}
                  </p>
                </div>
              </div>
            )}

            {/* Bullet List */}
            {section.items && (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "10px 0", borderBottom: j < section.items.length - 1 ? "1px solid rgba(184,149,106,.04)" : "none" }}>
                    <svg width="6" height="6" viewBox="0 0 6 6" style={{ flexShrink: 0, marginTop: 7 }}>
                      <rect width="6" height="6" rx="1" fill="var(--gold)" transform="rotate(45 3 3)" />
                    </svg>
                    <span style={{ fontSize: 14, lineHeight: 1.7, color: "var(--stone)", fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Content After Items */}
            {section.content_after && (
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, marginTop: 20 }}>
                {section.content_after}
              </p>
            )}

            {/* Subsections */}
            {section.subsections && section.subsections.map((sub, k) => (
              <div key={k} style={{ marginTop: 20 }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: "var(--teal)", marginBottom: 14 }}>
                  {sub.subtitle}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {sub.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "8px 0" }}>
                      <svg width="6" height="6" viewBox="0 0 6 6" style={{ flexShrink: 0, marginTop: 7 }}>
                        <rect width="6" height="6" rx="1" fill="var(--gold)" transform="rotate(45 3 3)" />
                      </svg>
                      <span style={{ fontSize: 14, lineHeight: 1.7, color: "var(--stone)", fontWeight: 300 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Block */}
            {section.contact && (
              <div style={{ marginTop: 20, padding: "32px", borderRadius: 16, background: "var(--card-bg)", border: "1px solid var(--card-border)", backdropFilter: "blur(16px)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 10 }}>Office</div>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--stone)", fontWeight: 300 }}>
                      Trident Dermatology<br />
                      9295 Medical Plaza Dr, Suite A<br />
                      North Charleston, SC 29406
                    </p>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 10 }}>Phone</div>
                    <a href="tel:8437973960" style={{ fontSize: 14, color: "var(--teal)", fontWeight: 500, textDecoration: "none" }}>(843) 797-3960</a>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 10 }}>Hours</div>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--stone)", fontWeight: 300 }}>
                      Monday – Friday<br />7:30 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
