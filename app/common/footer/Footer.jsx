import styles from './Footer.module.scss'
import {useRouter} from 'next/router'

const navItems = [
    {
        link: '/',
        icon: 'home'
    },
    {
        link: '/explore',
        icon: 'explore'
    },
    {
        link: '/place/tokyo',
        icon: 'place'
    },
    {
        link: '/person',
        icon: 'person'
    },
]

const Footer = () => {

    const {push, pathname} = useRouter()

    return (
        <footer className={styles.footer}>
            <nav>
                {navItems.map((item, index) => 
                    <button  
                        className={pathname === item.link ? styles.active : ''}
                        onClick={() => push(item.link)} 
                        key={index}
                    >
                        <span className='material-icons-outlined'>{item.icon}</span>
                    </button>
                )}
            </nav>
        </footer>
    );
};

export default Footer;