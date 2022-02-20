import Index from "@/components/pages/index";
import WhishList from "@/components/pages/user/wishlist/index";
import ProductDetail from "@/components/pages/product_detail/_id";

export const routes = [
    {
        path: '/',
        name: "index",
        component: Index
    },
    {
        path: '/user/wishlist',
        name: "user-wishlist",
        component: WhishList
    },
    {
        path: '/product_detail/:id?',
        name: "product_detail-id",
        component: ProductDetail
    }
];
