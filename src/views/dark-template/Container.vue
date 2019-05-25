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
              sm12
            >
              <v-layout wrap>
                <v-flex
                  md4
                >
                  <sidebar class="fill-height" />
                </v-flex>
                <v-flex
                  md8
                >
                  <main-content class="fill-height" />
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex md12>
                  <timeline />
                  <endless-timeline />
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
import Timeline from '@/views/dark-template/Timeline'
import LeaderLine from 'leader-line'
import EndlessTimeline from '@/views/dark-template/EndelessTimeline'
export default {
  name      : 'DarkTemplateContainer',
  components: {
    EndlessTimeline,
    Timeline,
    MainContent,
    Sidebar,
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const line = new LeaderLine(
      document.getElementById('to-timeline'),
      document.getElementById('timeline'),
      {
        size      : 2,
        color     : this.$vuetify.theme.primary,
        startLabel: LeaderLine.captionLabel('To The Journey ...'),
        // middleLabel: LeaderLine.pathLabel('This is additional label'),
      }
    )
  },
}
</script>

<style scoped>
#dark-template {
  height: 100%;
  background: url("../img/backgrounds/city.jpg") no-repeat center;
  background-size: cover;
}
</style>
