import { FC } from 'react';
import styles from './Filters.module.scss'

const cities = [
    {
        location: 'Japan'
    },
    {
        location: 'England'
    },
    {
        location: 'America'
    },
]

const Filters : FC = () => {
    return (
        <div className={styles.wrapper}>
            {cities.map(city => (
                <button key={city.location}>{city.location}</button>
            ))}
        </div>
    );
};

export default Filters;