import NewsTape from "../pages/newsTape/NewsTape";
import NotFound from "../pages/notFound/NotFound";

export const userRoutes = [
    {
        path: "/",
        element: <NewsTape />,
        exact: true
    },
    {
        path: "*",
        element: <NotFound />
    },
]

export const adminRoutes = [
    {
        path: "/",
        element: <NewsTape />,
        exact: true
    },
    {
        path: "*",
        element: <NotFound />
    },
]