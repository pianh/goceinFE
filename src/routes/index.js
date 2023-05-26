//Layouts

// Pages
import Home from '~/pages/Home';
import Room from '~/pages/Room';
import Lamp from '~/pages/Lamp';

const publicRoutes = [
    // K can dang nhap
    { path: '/', component: Home },
    { path: '/room', component: Room },
    { path: '/lamp', component: Lamp },
];

const privateRoutes = [
    //Can dang nhap
];

export { publicRoutes, privateRoutes };
