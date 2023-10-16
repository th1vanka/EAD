import React from 'react'
import styles from "./switch.module.css"

function Switch({id,active,onSwitch}) {
    const [isActive, setActive] = React.useState(active);
    // React.useEffect(() => {
    //     setActive(active);
    // })
    
    const switchHandler = () => {
        setActive(!isActive);
        onSwitch(id);
    };
    
  return (
    <div
      className={styles["container"]}
      id={isActive ? styles.active : styles.inactive}
      onClick={switchHandler}
    >
      {isActive ? (
        <div className={styles["switch-right"]} />
        ) : (
        <div className={styles["switch-left"]} />
      )}
    </div>
  );
}

export default Switch