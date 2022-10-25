import { FC, useState } from 'react';
import styles from './Search.module.scss'

const Search :FC = () => {
    const [searchPlace, setSearchPlace] = useState('')

    return (
        <div className={styles.search}>
            <span className="material-icons-outlined">search</span>
            <input 
                type="text" 
                onChange={e => setSearchPlace(e.target.value)}
                value={searchPlace}
                placeholder='Search place...'
            />
        </div>
    );
};

export default Search ;