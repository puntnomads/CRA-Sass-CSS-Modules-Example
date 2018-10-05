import React from "react";

import styles from "./Navigation.module.scss";

const Navigation = ({ links }) => (
  <div className={styles["Navigation"]}>
    <ul>
      {links.map(link => (
        <li key={link.to}>
          <a href={link.to}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
