import styles from "./SimplicitySection.module.scss"

const SimplicitySection = (props) => {
  const {
    title,
    paragraphs = [],
    subtitle,
    subtitleType = "",
    listItems = [],
    srcImage = "./images/image-home-real-life-large.webp",
    srcAlt,
    srcHeight = 450,
    srcWidth = 635,
    className
  } = props

  return (
    <section className={`l-section ${className}`}>
      <div className={`${styles.simplicity__inner} container`}>
        <div className={`${styles.simplicity__body}`}>
          {subtitle && <p className={`${styles.simplicity__subtitle}`}>
            <span className={`orange-text--` + subtitleType}>{subtitle}</span>
          </p>}
          <h2 className={`${styles.simplicity__title}`}>{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <div key={index} className={`${styles.simplicity__text}`}>
              <p
                dangerouslySetInnerHTML={{__html: paragraph}}
              >
              </p>
            </div>
          ))}
          {listItems?.length > 0 && <ul className={`${styles.simplicity__list}`}>
            {listItems.map((item, index) => (
              <li key={index} className={`${styles.simplicity__item}`}>
                <p>{item}</p>
              </li>
            ))}
          </ul>}
        </div>
        <img
          className={`${styles.simplicity__image}`}
          src={srcImage}
          alt={srcAlt}
          width={srcWidth}
          height={srcHeight}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default SimplicitySection;