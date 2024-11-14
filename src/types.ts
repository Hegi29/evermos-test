export type Product = {
    id: number;
    title: string;
    category: string;
    price: string;
    image: string;
    description: string;
};

export type Params = { id?: string };

export type ListProductsProps = {
    products: Product[];
    title: string;
};

export type BreadcrumbItem = {
    label: string;
    link?: string;
}

export type BreadcrumbProps = {
    items: BreadcrumbItem[];
}