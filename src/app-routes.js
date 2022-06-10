import { withNavigationWatcher } from './contexts/navigation';
import {
    Home,
    Detail,
} from './pages/index';

const routes = [
    // {
    //     path: '/',
    //     element: <Home />
    // },
    // {
    //     path: '/detail',
    //     element: <Detail />
    // },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/detail',
        element: <Detail />
    },
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element)
    };
});
