<script setup></script>

<template>
    <v-app>
        <v-app-bar>
            <!-- Logo or Title -->
            <v-app-bar-title>My store</v-app-bar-title>
            <!-- Spacer to push items to the right -->
            <v-spacer />

            <!-- Profile Avatar -->
            <v-menu>
                <template #activator="{ props }">
                    <v-avatar v-bind="props" size="36">
                        <img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt="User"
                        />
                    </v-avatar>
                </template>
                <v-list>
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
        </v-app-bar>
        <router-view />
    </v-app>
</template>
