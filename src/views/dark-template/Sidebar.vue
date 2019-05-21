<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <sidebar-section
        v-for="(section, i) in sections"
        :key="i"
        :title="section.title"
        :items="section.items"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/Avatar'
import SidebarSection from '@/views/dark-template/SidebarSection'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: [
        {
          title: 'INFO2',
          items: [
            {
              name: 'Name',
              icon: 'aaa',
              text: 'Amirreza Nasiri',
            },
            {
              name: 'Address',
              icon: 'aaa',
              text: 'No 26, Shahid Gohari Alley, South Sajjadieh Quarter, Azadi St., Tabriz, IRAN',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
