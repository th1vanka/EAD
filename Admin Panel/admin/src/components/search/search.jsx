import React from 'react'
import styles from "./search.module.css"
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className={styles["container"]}>
      <SearchIcon sx={{fontSize:22,color:"var(--primary)"}}/>
      <input type="search" className={styles["search-field"]} placeholder='Search your request here.'/>
    </div>
  );
}

export default Search