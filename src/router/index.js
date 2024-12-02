import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/Home" },
        { path: "/Home", component: () => import("../views/Home.vue") },
        { path: "/register", component: () => import("../views/Register.vue") },
        { path: "/login", component: () => import("../views/Login.vue") },
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
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();

        } else {
            alert("you don't have access !");
            next("/");
        }
    }else{
        next();
    }
})

export default router;
