<template>
    <v-app>
      <div class="layout-main d-flex flex-column justify-space-between">
        <the-header />
        <main>
          <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
        <the-footer />
      </div>
    </v-app>
</template>

<script>
import TheHeader from "@/layout/the-header.vue";
import TheFooter from "@/layout/the-footer.vue";
  
export default {
    name: "layout-main",
    components: { TheFooter, TheHeader },
};
</script>

<style lang="scss">
.layout-main {
  min-height: 100vh;
}
</style>