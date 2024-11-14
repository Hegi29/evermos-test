export type BreadcrumbItem = {
    label: string;
    link?: string;
}

export type BreadcrumbProps = {
    items: BreadcrumbItem[];
}

export type CategoryListProps = {
    onCategoryChange: (category: string) => void;
}

export type Params = { id?: string };

export type Product = {
    id: number;
    title: string;
    category: string;
    price: string;
    image: string;
    description: string;
};

export type ListProductsProps = {
    products: Product[];
    title: string;
};
