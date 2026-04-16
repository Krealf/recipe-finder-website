import styles from "./ReadyToCookSection.module.scss"
import RouterLink from "@/components/atoms/RouterLink/index.jsx";

const ReadyToCookSection = (props) => {
  return (
    <section className={`${styles.action || ""}`}>
      <div className={`container`}>
        <div className={`${styles.action__inner}`}>
          <div className={`${styles.action__text}`}>
            <h2 className={`${styles.action__title}`}>Ready to cook smarter?</h2>
            <div className={`${styles.action__description}`}>
              <p>Hit the button, pick a recipe, and get dinner on the table — fast.</p>
            </div>
          </div>
          <RouterLink
            to="/recipe-finder-website/recipes"
            className={`${styles.hero__link}`}
          >
            Browse recipes
          </RouterLink>
        </div>
      </div>
    </section>
  );
};

export default ReadyToCookSection;