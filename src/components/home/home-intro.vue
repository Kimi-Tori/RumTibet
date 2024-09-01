<template>
    <section class="home-intro d-flex flex-column align-center justify-end">
        <v-container>
            <h1 class="home-intro__title h1 color-white text-uppercase">Насладись прогулкой в горах с командой единомышленников</h1>
            <form-template class="mt-8 mt-md-11" />
        </v-container>
    </section>
</template>

<script>
import FormTemplate from '@/components/elements/form-template.vue'

export default {
    name: 'home-intro',
    components: {
        FormTemplate
    }
}
</script>

<style lang="scss" scoped>
.home-intro {
    background-image: url('@/assets/intro/intro-img.jpg');
    background-position: center center;
    background-size: cover;
    min-height: 100vh;
    padding-bottom: 82px;

    &__title {
        @include up($sm) {
            max-width: calc(100% - 100px);
        }
    }
}
</style>