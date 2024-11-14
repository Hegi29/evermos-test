'use client';

import { CATEGORIES } from '@/constants';
import styles from '@/styles/CategoryList.module.scss';
import { CategoryListProps } from '@/types';

const CategoryList = ({ onCategoryChange }: CategoryListProps) => {
    const handleCategoryClick = (category: string) => {
        onCategoryChange(category === 'all categories' ? '' : category);
    };

    return (
        <div className={styles.categoryList}>
            <div className={styles.categoryContainer}>
                {CATEGORIES.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={`${styles.categoryBox} ${styles[`categoryColor${index + 1}`]}`}
                        aria-label={`Filter products by ${category}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
