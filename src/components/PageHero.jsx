export default function PageHero({ eyebrow, title, titleAccent, subtitle, image, children }) {
  return (
    <section className="page-hero" aria-label={typeof title === 'string' ? title : eyebrow}>
      <div className="page-hero__bg">
        {image && <img src={image} alt="" aria-hidden="true" />}
        <div className="page-hero__overlay" />
      </div>
      <div className="page-hero__content">
        {eyebrow && <div className="page-hero__eyebrow">{eyebrow}</div>}
        <h1 className="page-hero__title display">
          {title}{' '}
          {titleAccent && <em>{titleAccent}</em>}
        </h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
