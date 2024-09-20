
let products: Product[] = [
    {
        "id": 1001,
        "name": "Banana",
        "price": 0.59,
        "ratings": [
            {
                "userid": "u0001",
                "rating": 4.5
            },
            {
                "userid": "u0005",
                "rating": 3.8
            },
            {
                "userid": "u0003",
                "rating": 4
            }
        ]
    },
    {
        "id": 1006,
        "name": "Apple",
        "price": 2.29,
        "ratings": [
            {
                "userid": "u2002",
                "rating": 3.6
            },
            {
                "userid": "u0001",
                "rating": 4.6
            }
        ]
    },
    {
        "id": 1003,
        "name": "Orange",
        "price": 1.58,
        "ratings": [
            {
                "userid": "u0003",
                "rating": 5
            },
            {
                "userid": "u0009",
                "rating": 2.8
            },
            {
                "userid": "u0004",
                "rating": 4.7
            }
        ]
    }
];

interface Rating {
    userid: string;
    rating: number;
}

export default class Product {

    constructor(public id: number, public name: string, public price: number, public ratings: Rating[]) {

    }

    static saveRating(productId: number, newRating: Rating) {
        const product = products.find(p => p.id === productId);

        if (product) {
            const index = product.ratings.findIndex(r => r.userid === newRating.userid);
            if (index > -1) {
                product.ratings[index] = newRating;
            } else {
                product.ratings.push(newRating);
            }
            return product;
        } else {
            throw new Error(`Product doesn't exist with ID: ${productId}`);
        }
    }

    static getAverageRatings(productId: number) {
        const product = products.find(p => p.id === productId);

        if (product) {
            return product.ratings.reduce((accu, current, index, array) => accu + current.rating / array.length, 0);
        } else {
            throw new Error(`Product doesn't exist with ID: ${productId}`);
        }
    }

    static getRatedProductsByUserId(query: { userid?: string }) {
        const { userid } = query;
        if (userid) {
            return products.filter(p => p.ratings.some(r => r.userid === userid))
                .map(({id, name}) => ({id, name}));
        } else {
            throw new Error('Please provide User ID');
        }
    }
}
