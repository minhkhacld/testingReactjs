import { Home, Detail } from './index';

const routes = [
    {
        element: <Home />,
        path: "/",
        children: [

        ],
    },
    {
        path: "/detail",
        element: <Detail />,
        children: [

        ],
    },
];


export const navbarRoutes = [
    { path: '/', pathname: "", text: "Home", id: "navbar-home", },
    { path: '/detail', pathname: "detail", text: "Detal", id: "navbar-detail", },
]

export default routes;