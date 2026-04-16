import styles from "./RouterLink.module.scss"

import {Link} from "react-router"

const RouterLink = (props) => {
  const {
    className = "",
    children,
    onClick,
    to,
  } = props;

  return (
    <Link
      className={`${styles.RouterLink} ${className}`}
      onClick={onClick}
      to={to}
    >
      {children}
    </Link>
  )
}

export default RouterLink