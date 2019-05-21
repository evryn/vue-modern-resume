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
        :options="section"
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
          title: 'INFO',
          items: [
            {
              name: 'Name',
              icon: 'person',
              text: 'Amirreza Nasiri',
            },
            {
              name: 'Address',
              icon: 'place',
              text: 'No 26, Shahid Gohari Alley, South Sajjadieh Quarter, Azadi St., Tabriz, IRAN',
            },
            {
              name: 'Phone Number',
              icon: 'phone',
              text: '+98 935 7316 793',
            },
            {
              name: 'Website',
              icon: 'web_asset',
              text: 'amirreza.in',
            },
            {
              name: 'Email',
              icon: 'email',
              text: 'hi@amirreza.in',
            },
            {
              name: 'Birth Date',
              icon: 'cake',
              text: 'Dec 7, 1996',
            },
          ],
        },
        {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/AmirrezaNasiri',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'linkedin.com/in/amirreza-nasiri',
            },
            {
              icon: 'mdi-twitter',
              text: 'twitter.com/Amirreza_Nasiri',
            },
            {
              icon: 'mdi-instagram',
              text: 'instagram.com/amirreza.n96',
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
