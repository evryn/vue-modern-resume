<template>
  <v-app id="dark-template">
    <v-fade-transition
      mode="out-in"
      type="animation"
    >
      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-layout
            align-center
            justify-center
          >
            <v-flex
              md10
            >
              <v-layout>
                <v-flex
                  md4
                >
                  <sidebar />
                </v-flex>
                <v-flex md8>
                  <main-content />
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-fade-transition>
  </v-app>
</template>

<script>
import Sidebar from '@/views/dark-template/Sidebar'
import MainContent from '@/views/dark-template/MainContent'
export default {
  name      : 'DarkTemplateContainer',
  components: { MainContent, Sidebar },
}
</script>

<style scoped>
#dark-template {
height: 100%;
background: url("/img/backgrounds/city.jpg") no-repeat center;
background-size: cover;
}
</style>
