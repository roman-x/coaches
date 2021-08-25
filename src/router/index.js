import {createRouter, createWebHistory} from "vue-router";
import CoachDetails from "../pages/coaches/CoachDetails";
import CoachesList from "../pages/coaches/CoachesList";
import CoachRegistration from "../pages/coaches/CoachRegistration";
import ContactCoach from "../pages/requests/ContactCoach";
import RequestsReceived from "../pages/requests/RequestsReceived";
import NotFound from "../pages/NotFound";

const routes = [
    {path: "/", redirect: "/coaches"},
    {path: "/coaches", component: CoachesList},
    {
        path: "/coaches/:id",
        props: true,
        component: CoachDetails,
        children: [
            {path: "contact", component: ContactCoach, props: true}
        ]
    },
    {path: "/register", component: CoachRegistration},
    {path: "/requests", component: RequestsReceived},
    {path: "/:notFound(.*)", component: NotFound},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
