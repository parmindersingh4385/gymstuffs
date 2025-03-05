<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const goToHomePage = () => {
    if (route.path != "/") {
        router.push("/");
    }
};
</script>

<template>
    <v-app>
        <v-app-bar>
            <template v-slot:prepend>
                <v-app-bar-nav-icon class="ms-5"></v-app-bar-nav-icon>
            </template>
            <!-- Logo or Title -->
            <v-app-bar-title @click="goToHomePage">My store</v-app-bar-title>
            <!-- Spacer to push items to the right -->
            <v-spacer />

            <!-- Profile Avatar -->
            <div class="mr-5">
                <v-menu>
                    <template #activator="{ props }">
                        <v-avatar color="surface-variant"  v-bind="props">
                            <img
                                src="https://randomuser.me/api/portraits/men/45.jpg"
                                alt="User"
                            />
                        </v-avatar>
                    </template>
                    <v-list class="border">
                        <v-list-item to="/profile">
                            <v-list-item-title>Profile</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/settings">
                            <v-list-item-title>Settings</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-app-bar>
        <router-view />
    </v-app>
</template>
