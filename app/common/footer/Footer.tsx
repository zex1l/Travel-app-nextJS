import styles from './Footer.module.scss'
import {useRouter} from 'next/router'

type TypeNavItems = {
    link : string
    icon : string
}

const navItems : TypeNavItems[] = [
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
        link: '/profile',
        icon: 'person'
    },
]

const Footer = () => {

    const {push, pathname, query: {slug}} = useRouter()

    
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