
var initialState = [
    {
        id: 1,
        name: 'Iphone 6 32GB',
        image: 'https://www.xtmobile.vn/vnt_upload/product/03_2018/thumbs/600_ip6_gold_800x800.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 100,
        inventory: 10,
        rating: 2,
    },
    {
        id: 2,
        name: 'Iphone 7 64GB',
        image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-7-like-new-vang-viendidong_1.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 250,
        inventory: 7,
        rating: 4,
    },
    {
        id: 3,
        name: 'Iphone 7 Plus 64GB',
        image: 'https://www.xtmobile.vn/vnt_upload/product/04_2018/thumbs/600_iphone_7_plus_pink_800x800_13.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 300,
        inventory: 9,
        rating: 5,
    },
    {
        id: 4,
        name: 'Iphone 8 Plus 128GB',
        image: 'https://didongviet.vn/pub/media/catalog/product//8/p/8p-min_1.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 450,
        inventory: 12,
        rating: 4,
    },
    {
        id: 5,
        name: 'Iphone X 64GB',
        image: 'https://www.xtmobile.vn/vnt_upload/product/04_2018/thumbs/600_ip_X_white_800x800.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 650,
        inventory: 20,
        rating: 5,
    },
]

const products = (state = initialState, action) => {
    switch(action.type){
        default: 
            return [...state];
    }
}

export default products;