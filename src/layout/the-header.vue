<template>
    <header class="the-header position-relative">
        <v-container class="d-flex flex-md-column flex-lg-row align-center justify-space-between py-4">
            <router-link :to="{ name: 'home' }">
                <icon-template name="logo" class="the-header__logo" />
            </router-link>
            <div class="d-flex mt-md-6 mt-lg-0 align-center">
                <menu-mobile />
                <v-btn class="the-header__consult consult-btn d-none d-md-block h-auto py-3 px-6 color-white">Консультация</v-btn>
            </div>
        </v-container>
    </header>
</template>

<script>
import IconTemplate from '@/components/elements/icon-template.vue'
import MenuMobile from '@/components/elements/menu-mobile.vue'

export default {
    name: 'the-header',
    components: {
        IconTemplate,
        MenuMobile
    }
}
</script>

<style lang="scss" scoped>
.the-header {
    background-color: $black;

    &__logo {
        width: 137px;
        height: 72px;
    }

    &__consult {
        background-color: $green;
        border-radius: 4px;
    }
}
</style>