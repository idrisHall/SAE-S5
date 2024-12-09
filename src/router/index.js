import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/Home", component: () => import("../views/Home.vue") },
        { path: "/register", component: () => import("../views/Register.vue") },
        { path: "/login", component: () => import("../views/Login.vue") },
        {path: "/collaboration", component: () => import("../views/GameOnline.vue"),
            meta: {
                requiresAuth : true
            }
        },
        {path: "/affrontement", component: () => import("../views/GameOnlineAffrontement.vue"),
            meta: {
                requiresAuth : true
            }
        },
        {
            path: "/game", component: () => import("../views/Game.vue"),
            meta: {
                requiresAuth: true
            }
        },

    ],
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user)
            },
            reject
        )
    })
}


router.beforeEach(async (to, from, next) => {
    const currentUser = await getCurrentUser();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (currentUser) {
            next();
        } else {
            alert("You don't have access!");
            next("/");
        }
    } else if ((to.path === "/login" || to.path === "/register") && currentUser) {
        next("/game");
    } else {
        next();
    }
});

export default router;
