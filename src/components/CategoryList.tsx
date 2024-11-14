import styles from '../styles/CategoryList.module.scss';

// ganti jadi get dari API
const categories = [
    "All Categories",
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing"
];

const CategoryList = () => {
    return (
        <div className={styles.categoryList}>
            <div className={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <div key={index} className={`${styles.categoryBox} ${styles[`categoryColor${index + 1}`]}`}>
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
