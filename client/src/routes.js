import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    AUTHOR_ROUTE,
    BREED_INFO_ROUTE,
    BREEDS_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SAVED_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Author from "./pages/Author";
import Saved from "./pages/Saved";
import Breeds from "./pages/Breeds";
import BreedInfo from "./pages/BreedInfo";
import Landing from "./pages/Landing";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: AUTHOR_ROUTE,
        Component: Author
    },
    {
        path: SAVED_ROUTE,
        Component: Saved
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Landing
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BREEDS_ROUTE,
        Component: Breeds
    },
    {
        path: BREED_INFO_ROUTE,
        Component: BreedInfo
    }

]