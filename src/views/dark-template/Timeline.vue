<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <main-content-section
        id="timeline"
        :title="detailed ? 'My Life in a Nutshell' : 'My Experiences'"
      >
        <template slot="actions">
          <div>
            <v-switch
              v-model="detailed"
              :label="detailed ? 'Detailed' : 'Summary'"
            />
          </div>
        </template>

        <v-timeline
          dense
        >
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon ? item.icon : ''"
            :class="{transparent: item.transparent}"
            large
          >
            <!-- TODO: Cleanup :icon and similar -->
            <template
              v-if="item.iconImage"
              v-slot:icon
            >
              <v-avatar>
                <img
                  :src="item.iconImage"
                >
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                md1
                xs3
                align-self-center
              >
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex
                md11
                xs9
              >
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <h3>{{ item.title }}</h3>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex
                        md7
                        xs12
                      >
                        <span
                          v-if="item.text"
                          class="pre"
                        >{{ item.text }}</span>
                        <div
                          v-else-if="item.html"
                          v-html="item.html"
                        />
                      </v-flex>
                      <v-flex
                        md5
                        xs12
                      >
                        <v-img
                          :max-height="item.imageHeight ? item.imageHeight : ''"
                          class="mt-2"
                          :src="item.image"
                        />
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </main-content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import MainContentSection from '@/views/dark-template/MainContentSection'
export default {
  name      : 'Timeline',
  components: { MainContentSection },
  data      : () => ({
    detailed: true,
    items   : [
      {
        detailed   : true,
        transparent: true,
        year       : '1996',
        title      : 'Born on Dec 7, 1996',
        html       : 'With a chance of %0.00000000000512\nI\'m completely aware of life value!',
        icon       : 'mdi-cake-variant',
      },
      {
        detailed   : true,
        transparent: true,
        year       : '2003',
        title      : 'Touched a Mouse',
        html       : 'ME: "Woooow!"<br><i>... Of course got slapped later!</i>',
        icon       : 'mdi-mouse-variant',
      },
      {
        detailed   : true,
        year       : '2009',
        transparent: true,
        title      : 'Created Almas-Khor Game',
        html       : 'A simple (yet almost unbeatable!) game made with Game Maker. It\'s still available for <a target="_blank" href="https://download.tebyan.net/2687/%D8%A8%D8%A7%D8%B2%DB%8C-%D8%A7%D9%84%D9%85%D8%A7%D8%B3-%D8%AE%D9%88%D8%B1">download here</a>!<br>The reason this game is pretty important for me is that it was my first published program!',
        image      : 'img/timeline/almas-khor.png',
        imageHeight: 200,
        iconImage  : 'img/timeline/almas-khor-icon.png',
      },
      {
        year : '2013',
        title: 'Founded Bytegate.ir',
        html : `
                    <p>
                        Current Status: <span class="green--text accent-4">Active</span>,
                        Team: <span class="">1-5 person(s) (variable)</span>
                    </p>
                    <p>
                        The main goal of <a target="_blank" href="https://bytegate.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=bytegate">Bytegate.ir</a> is to extend IT-related articles in Persian web with pretty easy-to-understand and picture-driven articles.
                    </p>
                    <p>
                        The reason I founded Bytegate.ir was because of a dispute about computer stuffs back in school. Soon, I realized that I know NOTHING about computers! Bytegate.ir is the place I started learning amazing things.
                    </p>
                    <p>
                        Currently there are 600+ articles on the website which helps 4000+ people each day. It's been helping 4 people to cover small part of their expenses.
                   </p>`,
        image    : 'img/timeline/bytegate.ir.jpg',
        iconImage: 'img/timeline/bytegate.ir-icon.png',
      },
      {
        year : '2016',
        title: 'Founded Bobet.ir',
        html : `
          <p>
              Current Status: <span class="orange--text lighten-1">Taking last breaths</span>,
              Team: <span class="">1-6 person(s) (variable)</span>
          </p>
          <p>
              The purpose of <a target="_blank" href="http://bobet.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=bobet">Bobet.ir</a> is to let people learn English and Turkish languages in a different way by listening to musics with their lyrics, Persian translations and pronunciations of the actual lyric in Persian letters. The website reached 9000 visits/day. More than 270+ musics with contents are published there.
          </p>
          <p>
              The reason behind founding Bobet.ir was pretty simple: testing Google SEO patterns related to musics. But suddenly, it grew up so fast we decided to pivot and work on it as a real project.
          </p>
          <p>
            <span class="orange--text lighten-1">Failing Reason</span>:
             A year later, it got censored in Iran (since women voice in musics are illegal here!) and the stats dropped suddenly. Before then, it had helped 5 people to cover some pieces of their expenses and had helped <a target="_blank" href="https://mahak-charity.org/main/index.php/fa/">Mahak Charity</a> to receive some donations by promoting it.
          </p>
        `,
        image    : 'img/timeline/bobet.ir.jpg',
        iconImage: 'img/timeline/bobet.ir-icon.png',
      },
      {
        year       : '2017',
        transparent: true,
        title      : 'Founded Telepad',
        html       : `
          <p>
              Current Status: <span class="red--text darken-3">Failed</span>,
              Team: <span class="">1</span>
          </p>
          <p>
            <a target="_blank" href="http://t.me/Telepad_Bot">Telepad</a> was a Telegram assistant bot which helped channel owners to manage their posts easily by scheduling posts, instant editing, ready-to-be-published post suggestions and administrators' role management.
          </p>
          <p>
            The reason behind founding it was personal usage. It was initially created to make Bobet.ir publishing process easier but I decided to let others use it too.
          </p>
          <p>
            <span class="red--text darken-3">Failing Reason</span>:
             Well, I was alone and couldn't handle its development since I'd been working on other projects.<br />
             Starting from there, slowly, I understood the actual value of having a team and focusing on a specific business.
          </p>
        `,
        image    : 'img/timeline/telepad.png',
        iconImage: 'img/timeline/telepad-icon.png',
      },
      {
        year : '2017',
        title: 'Founded Delix.ir',
        html : `
          <p>
              Current Status: <span class="green--text accent-4">Active</span>,
              Team: <span class="">1</span>
          </p>
          <p>
            <a target="_blank" href="http://delix.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=delix">Delix.ir</a> is an online image text extractor (OCR) and PDF to Word converter which is built to support Persian language especially. The service provides APIs to implement its OCR engines into customers' own applications.
          </p>
          <p>
            The reason I founded Delix.ir (<u>D</u>ocument <u>ELIXIR</u>) was because back in school, I found out that there is an unsolved need for this kind of services especially needed by teachers. However, it wasn't developed since 2017.
          </p>
          <p>
            Currently, 3330+ people are using the service. It's still under development and we're going to change the strategy to support B2B market soon.
          </p>
        `,
        image    : 'img/timeline/delix.ir.png',
        iconImage: 'img/timeline/delix.ir-icon.png',
      },
      {
        year : '2019',
        title: 'Open Sourced Telegram Web Bridge',
        html : `
          <p>
              Current Status: <span class="light-blue--text lighten-3">Open Sourced</span> and available on my <a target="_blank" href="https://github.com/AmirrezaNasiri/telegram-web-bridge">my GitHub</a>
          </p>
          <p>
            Telegram Web Bridge is a two-way, web-based, proxy-like application which can act as a middleman for Telegram Bot API requests (from your real application to Telegram) and Webhooks (from Telegram to your real application).
          </p>
          <p>
            It was initially developed because of Telegram censorship in Iran and the need for it in a storage management software built with C#. I decided to publish the codes so anyone with the same problem will be able to handle it.
          </p>
        `,
        image: 'img/timeline/telegram-web-bridge.png',
        icon : 'mdi-github-circle',
      },
      {
        year : '2019',
        title: 'Open Sourced USB Keystroke Injector',
        html : `
          <p>
              Current Status: <span class="light-blue--text lighten-3">Open Sourced</span> and available on my <a target="_blank" href="https://github.com/AmirrezaNasiri/usb-keystroke-injector">my GitHub</a>
          </p>
          <p>
            An Arduino-based keyboard emulator which injects (types) a sequence of letters sent via Bluetooth protocol or from predefined SD card payloads. Demo GIF is available on the GitHub page.
          </p>
          <p>
            It was initially a university project, made at 2018 but I decided to extend it a little bit and publish it on my GitHub.
          </p>
        `,
        image: 'img/timeline/usb-keystroke-injector.png',
        icon : 'mdi-github-circle',
      },
      {
        year : '2019',
        title: 'Co-Founded Smo.li',
        html : `
          <p>
              Current Status: <span class="green--text accent-4">Active</span>,
              Team: <span class="">2</span>
          </p>
          <p>
            <a target="_blank" href="https://smo.li/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=smoli">Smoli</a> is a URL shortener and link tracking platform that also allows you to add eye-catching and branded call-to-actions to any page on the web. See a demo of Forbes campaign on Business News Daily: <a target="_blank" href="http://smo.li/+demo-forbes">smo.li/+demo-forbes</a>.
          </p>
          <p>
            The service was founded by <a target="_blank" href="https://www.linkedin.com/in/saeidhabibpour/">Saeid Habibpour</a> (CEO) and me (CTO). Currently, the MVP is ready and we're researching the market.
          </p>
        `,
        image    : 'img/timeline/smo.li.png',
        iconImage: 'img/timeline/smo.li-icon.png',
      },
      {
        year : '2019',
        title: 'Open Sourced This Resume',
        html : `
          <p>
              Current Status: <span class="light-blue--text lighten-3">Open Sourced</span> and available on my <a target="_blank" href="https://github.com/AmirrezaNasiri/vue-modern-resume">my GitHub</a>
          </p>
          <p>
            A VueJS-based and powered-by-Vuetify (material UI kit) resume template which you're seeing right now!
          </p>
        `,
        image: 'img/timeline/vue-modern-resume.png',
        icon : 'mdi-github-circle',
      },
      {
        year : 'So far ...',
        title: 'Written 340+ Unique Articles!',
        html : `I'm the guy who loves teaching! So far, I've written 340+ unique articles which most of the are computer-related. You can access them here:
                    <ul><li><a target="_blank" href="https://bytegate.ir/author/amirrezanasiri/">My posts on Bytegate.ir</a> (Computer-related)</li><li><a target="_blank" href="http://bobet.ir/author/amirrezanasiri/">My posts on Bobet.ir</a> (Translations)</li></ul>`,
        icon: 'mdi-fountain-pen-tip',
      },
    ],
  }),
  computed: {
    orderedItems () {
      const items = [...this.items].reverse()
      if (this.detailed)
        return items
      return items.filter((item) => {
        return !item.detailed
      })
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent{
  opacity: 0.6;
}
</style>
