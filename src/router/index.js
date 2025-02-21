
import { onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import {authMobile} from "@/firebaseMobile"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: () => import("../views/Home.vue") },
        { path: "/register", component: () => import("../views/Register.vue") },
        { path: "/login", component: () => import("../views/Login.vue") },
        { path: "/oldwords", component: () => import("../views/OldWords.vue")},
        {path : "/profil", component : () => import("../views/Profil.vue")},
        {path : "/wikitom", component : () => import("../views/Wikitom.vue")},
        {
            path: "/collaboration",
            component: () => import("../views/GameOnline.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/affrontement",
            component: () => import("../views/GameOnlineAffrontement.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/game",
            component: () => import("../views/Game.vue"),
        }
    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            authMobile,
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
    const currentUser = await getCurrentUser();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (currentUser) {
            next();
        } else {
            next("/login");
        }
    } else if ((to.path === "/login" || to.path === "/register") && currentUser) {
        next("/game");
    } else {
        next();
    }
});

export default router;
