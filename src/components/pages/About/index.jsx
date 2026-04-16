import SimplicitySection
  from "@/components/organisms/SimplicitySection/index.jsx";
import styles from "./About.module.scss";
import ReadyToCookSection
  from "@/components/organisms/ReadyToCookSection/index.jsx";

const About = () => {
  return (<>
      <SimplicitySection
        title="Help more people cook nourishing meals, more often."
        subtitle="Our mission"
        subtitleType="full"
        paragraphs={["Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.", "We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps."]}
        srcImage="./images/image-about-our-mission-large.webp"
      />
      <section className={`l-section ${styles.usability || ""}`}>
        <div className={`${styles.usability__inner} container`}>
          <h2 className={`${styles.usability__heading}`}>
            Why we exist
          </h2>
          <ul className={`${styles.usability__list}`}>
            <li className={`${styles.usability__item}`}>
              <h3 className={`${styles.usability__title}`}>
                Cut through the noise.
              </h3>
              <p className={`${styles.usability__description}`}>
                The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.
              </p>
            </li>
            <li className={`${styles.usability__item}`}>
              <h3 className={`${styles.usability__title}`}>
                Empower home kitchens.
              </h3>
              <p className={`${styles.usability__description}`}>
                When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.
              </p>
            </li>
            <li className={`${styles.usability__item}`}>
              <h3 className={`${styles.usability__title}`}>
                Make healthy look good.
              </h3>
              <p className={`${styles.usability__description}`}>
                High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={`l-section ${styles.usability || ""}`}>
        <div className={`${styles.usability__inner} container`}>
          <h2 className={`${styles.usability__heading}`}>
            Our food philosophy
          </h2>
          <ul className={`${styles.usability__list}`}>
            <li className={`${styles.usability__item}`}>
              <h3 className={`${styles.usability__title}`}>
                Whole ingredients first.
              </h3>
              <p className={`${styles.usability__description}`}>
                Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.
              </p>
            </li>
            <li className={`${styles.usability__item}`}>
              <h3 className={`${styles.usability__title}`}>
                Flavor without compromise.
              </h3>
              <p className={`${styles.usability__description}`}>
                Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
              </p>
            </li>
            <li className={`${styles.usability__item}`}>
              <h3 className={`${styles.usability__title}`}>
                Respect for time.
              </h3>
              <p className={`${styles.usability__description}`}>
                Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.
              </p>
            </li>
            <li className={`${styles.usability__item}`}>
              <h3 className={`${styles.usability__title}`}>
                Sustainable choices.
              </h3>
              <p className={`${styles.usability__description}`}>
                Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <SimplicitySection
        title="Beyond the plate"
        paragraphs={["We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:"]}
        srcImage="./images/image-about-beyond-the-plate-large.webp"
        listItems={["Encourage family dinners and social cooking.", "Reduce reliance on single-use packaging and delivery waste.", "Spark curiosity about seasonal produce and local agriculture."]}
      />
      <ReadyToCookSection />
    </>
  );
};

export default About;