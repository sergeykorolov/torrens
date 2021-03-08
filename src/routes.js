import {CONTACTS_ROUTE, GALLERY_ROUTE, HOME_ROUTE, MUSIC_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";
import Music from "./pages/Music";
import Shop from "./pages/Shop";

export const routes = [
    {
        path: HOME_ROUTE,
        component: Home
    },
    {
        path: GALLERY_ROUTE,
        component: Gallery
    },
    {
        path: CONTACTS_ROUTE,
        component: Contacts
    },
    {
        path: MUSIC_ROUTE,
        component: Music
    },
    {
        path: SHOP_ROUTE,
        component: Shop
    },
];