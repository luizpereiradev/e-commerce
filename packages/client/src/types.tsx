export type product = {
    thumbnail: string;
    title: string;
    price: number;
    id: string;
    pictures: {
        url: string;
    }[];
    description: {
        plain_text: string;
    };
    attributes: {
        name: string;
        value_name: string;
    }[];
    category: string;
}