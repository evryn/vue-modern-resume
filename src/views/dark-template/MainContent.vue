<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <main-content-section
        title="Who am I?"
      >
        I'm a developer born in Iran and founder of <a href="http://delix.ir">Delix.ir</a>, <a href="https://bytegate.ir">Bytegate.ir</a> and <a href="http://bobet.ir">Bobet.ir</a> and co-founder of <a href="https://smo.li">Smo.li</a>.<br>
        Interested and skilled in different topics of Information Technology such as programming, web development, and computer and network security.
      </main-content-section>
      <main-content-section
        v-if="educations"
        title="Education"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md3>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md9>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </main-content-section>
      <main-content-section
        v-if="skills"
        title="Skills and Expertize"
      >
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </main-content-section>
      <timeline />
    </v-card-text>
  </v-card>
</template>

<script>
import MainContentSection from '@/views/dark-template/MainContentSection'
import Timeline from '@/views/dark-template/Timeline'
export default {
  name      : 'MainContent',
  components: { Timeline, MainContentSection },
  data      : () => ({
    educations: [
      {
        from       : '2015',
        to         : '2019',
        title      : 'Bachelor\'s degree, Information Technology',
        location   : 'Seraj University',
        description: 'Became a member of University Academic Association of Computer Science',
      },
    ],
    skills: [
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        value: 95,
      },
      {
        title: 'JavaScript',
        icon : 'mdi-language-javascript',
        value: 80,
      },
      {
        title: 'Laravel Framework',
        icon : 'mdi-laravel',
        value: 90,
      },
      {
        title: 'VueJS Framework',
        icon : 'mdi-vuejs',
        value: 90,
      },
      { divider: true },
      {
        title: 'Ubuntu Server',
        icon : 'mdi-ubuntu',
        value: 70,
      },
      {
        title: 'CentOS Server',
        icon : 'mdi-linux',
        value: 47,
      },
      {
        title: 'Web Application Security',
        icon : 'mdi-shield-lock',
        value: 80,
      },
      {
        title: 'Test Driven Development',
        icon : 'mdi-test-tube',
        value: 26,
      },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon : 'mdi-truck-fast',
        value: 35,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 67,
      },
      { divider: true },
      {
        title: 'Hardware Development',
        icon : 'mdi-chip',
        value: 29,
      },
      {
        title: 'C/C++',
        icon : 'mdi-language-cpp',
        value: 38,
      },
      { divider: true },
      {
        title: 'Content Marketing (+340 done)',
        icon : 'mdi-text',
        value: 96,
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
