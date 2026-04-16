import styles from "./Menu.module.scss"

import {NavLink} from "react-router";

const Menu = (props) => {
  const {
    items = [],
    isActive = false,
    onClose
  } = props

  const renderItem = (item) => {
    if (item.visibleMobile) {
      return (
        <NavLink
          to={item.to}
          end={item.end || false}
          className={`${styles.menu__link} ${styles.menu__linkLast} visible-mobile`}
        >
          {item.label}
        </NavLink>
      );
    }

    return <NavLink
      to={item.to}
      end={item.end || false}
      className={({isActive}) =>
        (`${styles.menu__link} ${isActive ? styles.menu__linkActive : ""}`)
      }
    >
      {item.label}
    </NavLink>
  }

  return (
    <>
      <div
        className={`${styles.menuDesktop || ""} ${isActive ? styles.menuActive : ""}`}
      >
        <nav className={`${styles.menu__nav}`}>
          <ul className={`${styles.menu__list}`}>
            {items.map((item, index) => (<li
                key={index}
                className={`${styles.menu__item || ""}`}
              >
                {renderItem(item)}
              </li>
            ))
            }
          </ul>
        </nav>
      </div>
      <div
        className={`${styles.menuMobile || ""} ${isActive ? styles.menuActive : ""}`}
      >
        <nav className={`${styles.menu__nav}`}>
          <ul className={`${styles.menu__list}`}>
            {items.map((item, index) => (<li
                onClick={() => {
                  onClose(false)}}
                key={index}
                className={`${styles.menu__item || ""}`}
              >
                {renderItem(item)}
              </li>
            ))
            }
          </ul>
        </nav>
      </div>
    </>
  )
};

export default Menu;