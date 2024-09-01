<template>
    <nav class="menu-mobile">
      <div class="d-flex flex-column align-end">
            <v-btn @click="toggleMenu" class="menu-mobile__btn d-md-none">
              <icon-template name="burger" class="menu-mobile__btn-icon" />
            </v-btn>

            <div 
              class="menu-mobile__container w-100 h-100 h-md-auto d-md-block"
              :class="{'d-block': showMenu, 'd-none': !showMenu}"
            >
              <ul v-if="items && items.length" class="d-md-flex flex-column flex-md-row justify-md-center w-100 mt-3 mt-md-0">
                <li v-for="item in items" :key="item.name" class="menu-mobile__links header-link ma-4">
                  <router-link :to="{ name: item.name }" class="menu-mobile__links-link nav-links color-white">{{ item.title }}</router-link>
                </li>
              </ul>
            </div>
      </div>
    </nav>
</template>

<script>
import IconTemplate from '@/components/elements/icon-template.vue'

export default {
    name: 'menu-mobile',
    components: {
      IconTemplate
    },
    data() {
      return {
        items: [
          {name: 'home', title: 'Главная'},
          {name: 'home', title: 'Про гида'},
          {name: 'home', title: 'Программа тура'},
          {name: 'home', title: 'Стоимость'},
          {name: 'home', title: 'Блог'},
          {name: 'home', title: 'Контакты'}
        ],
        showMenu: false
      }
    },
    methods: {
        toggleMenu() {
          this.showMenu = !this.showMenu;
        }
    }
  }
</script>

<style scoped lang="scss">
.menu-mobile {
  &__btn {
    background-color: transparent;
    box-shadow: none;

    &:hover {
      .menu-mobile__btn-icon {
        fill: $grey !important;
      }
    }

    &-icon {
      transition: 0.2s;
      fill: $white;
      width: 30px;
      height: 30px;
    }
  }

  &__links {
    list-style-type: none;
    
    &-link {
      white-space: nowrap;
      transition: 0.2s;

      &:hover {
        color: $grey;
      }
    }
  }

  &__container {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transition: opacity 0.2s, transform 0.2s;
    padding-top: 110px;
    min-height: 100vh;
    background-color: $green;

    @include up($sm) {
      background-color: transparent;
      padding-top: 0;
      min-height: auto;
      position: relative;
    }
  }
}
</style>