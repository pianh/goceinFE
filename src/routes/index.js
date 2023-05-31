//Layouts

// Pages
import Home from '~/pages/Home';
import Lamp from '~/pages/Lamp';

const publicRoutes = [
    // K can dang nhap
    { path: '/', component: Home },
    { path: '/lamp', component: Lamp },
];

const privateRoutes = [
    //Can dang nhap
];

export { publicRoutes, privateRoutes };
