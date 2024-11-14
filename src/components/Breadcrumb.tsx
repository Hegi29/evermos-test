import Link from 'next/link';

import styles from '@/styles/Breadcrumb.module.scss';
import { BreadcrumbProps } from '@/types';

const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <nav className={styles.breadcrumb}>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={styles.breadcrumbItem}>
                        {item.link ? (
                            <Link href={item.link} className={styles.breadcrumbLink}>
                                {item.label}
                            </Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                        {index < items.length - 1 && <span className={styles.separator}> / </span>}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
