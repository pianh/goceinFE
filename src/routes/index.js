//Layouts

// Pages
import Product from '~/pages/Admin/Product';
import ProductType from '~/pages/Admin/ProductType';
import Home from '~/pages/Home';

// Layouts

// Pages

const publicRoutes = [{ path: '/', component: Home }];

const adminRoutes = [
    { path: '/admin/product', component: Product },
    { path: '/admin/product-type', component: ProductType },
];

export { publicRoutes, adminRoutes };
