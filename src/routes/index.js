//Layouts

// Pages
import DashBoard from '~/pages/Admin/DashBoard';
import Product from '~/pages/Admin/Product';
import ProductType from '~/pages/Admin/ProductType';
import Type from '~/pages/Admin/Type/Type';
import Home from '~/pages/Home';

// Layouts

// Pages

const publicRoutes = [{ path: '/', component: Home }];

const adminRoutes = [
    { path: '/admin/product', component: Product },
    { path: '/admin/product-type', component: ProductType },
    { path: '/admin/dashboard', component: DashBoard },
    { path: '/admin/type', component: Type },
];

export { publicRoutes, adminRoutes };
