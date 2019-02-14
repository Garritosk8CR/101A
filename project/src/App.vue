<template>
    <div id="material-kit">
        <div :class="{'nav-open': NavbarStore.showNavbar}">
            <router-view name="header" />
            <div>
                <router-view />
            </div>
            <router-view name="footer" />
        </div>
    </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
export default {
  components: {
    Header,
    Navigation
  },
  data: () => ({
  }),
  props: {
    source: String
  },
  methods: {

  }
}
</script>
