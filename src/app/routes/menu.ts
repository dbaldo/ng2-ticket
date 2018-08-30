
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const Material = {
    text: "COP MDU",
    link: "/material",
    icon: "fa fa-shield-alt",
    submenu: [
        {
            text: "Tickets",
            link: "/material/lists"
        }
    ],
    "alert": "new",
    "label": "badge badge-primary"
};

const headingMain = {
    text: 'Menu Principal',
    heading: true
};

export const menu = [
    headingMain,
    Home,
    Material
];
