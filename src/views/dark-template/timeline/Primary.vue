<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
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
            :icon="item.icon || ''"
            :class="{transparent: item.transparent}"
            large
          >
            <template
              v-if="item.iconImage"
              v-slot:icon
            >
              <v-avatar>
                <img
                  :src="publicPath(item.iconImage)"
                >
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                v-if="$vuetify.breakpoint.smAndUp"
                md1
                sm2
                align-self-center
              >
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex
                md11
                sm10
                xs12
              >
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex
                        :md7="!!item.image"
                        :md12="!item.image"
                        xs12
                      >
                        <div class="mr-1">
                          <span
                            v-if="item.text"
                            class="pre"
                          >{{ item.text }}</span>
                          <!-- eslint-disable vue/no-v-html -->
                          <div
                            v-else-if="item.html"
                            v-html="item.html"
                          />
                          <!-- eslint-enable vue/no-v-html -->
                        </div>
                      </v-flex>
                      <v-flex
                        v-if="item.image"
                        md5
                        xs12
                      >
                        <div
                          class="mt-2"
                        >
                          <v-carousel
                            v-if="Array.isArray(item.image)"
                            :show-arrows="false"
                            :height="325"
                          >
                            <v-carousel-item
                              v-for="(citem,ci) in item.image"
                              :key="ci"
                              :src="publicPath(citem)"
                            />
                          </v-carousel>
                          <v-img
                            v-else
                            :max-height="item.imageHeight ? item.imageHeight : ''"
                            :src="publicPath(item.image)"
                          />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'Timeline',
  components: { ContentSection },
  data      : () => ({
    detailed: true,
    items   : [
      {
        detailed   : true,
        transparent: true,
        year       : '1996',
        title      : 'Born on Dec 7, 1996',
        html       : 'With a chance of %0.00000000000512.<br>I\'m completely aware of value of the life!',
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
        title      : 'Started an7.mahblog.com',
        html       : `
                <p>
                    I'm still emotional about this one. It was August 9, 2009 that I decided to start blogging so <a target="_blank" href="https://web.archive.org/web/20090819185659/http://an7.mahblog.com/">an7.mahblog.com</a> has just showed up! Years later, Mahblog.com got censored in Iran and my blog disappeared. <a target="_blank" href="https://web.archive.org/web/20120626234739/http://www.an7.mahblog.com/">Last archived page</a> was on June 26, 2012.
                </p>
                <p>
                    Back then, my blog used to get more than 500 visitors/day and its Page Rank has reached to level 2 which was actually great! Rest In Peace an7 ...
                </p>
                <p>
                    During 2009 - 2011, many other blogs has been created too. For example:
                    <ul>
                        <li>
                            <a href="https://web.archive.org/web/20100926063748/http://bro2gifs.mihanblog.com/post/5">bro2gifs.mihanblog.com</a> - we were receiving banner designing orders there!
                        </li>
                        <li>
                            <a href="https://web.archive.org/web/20101203082548/http://kdabs.mihanblog.com/">kdabs.mihanblog.com</a> - we were publishing audio books there
                        </li>
                        <li>
                            <a href="http://web.archive.org/web/20100909150338/http://best1shops.mihanblog.com/">best1shops.mihanblog.com</a> - it was our first online shop and we got our first income from there. The feeling of that moment was awesome!
                        </li>
                        <li>
                            And many other blogs I can't really remember!
                        </li>
                    </ul>
                </p>
        `,
        image      : 'img/timeline/an7.mahblog.com.png',
        imageHeight: 200,
        icon       : 'mdi-web',
      },
      {
        detailed   : true,
        year       : '2009',
        transparent: true,
        title      : 'Created Almas-Khor Game',
        html       : 'A simple (yet almost unbeatable!) game made with Game Maker. It\'s still available for <a target="_blank" href="https://download.tebyan.net/2687/%D8%A8%D8%A7%D8%B2%DB%8C-%D8%A7%D9%84%D9%85%D8%A7%D8%B3-%D8%AE%D9%88%D8%B1">download here</a>!<br>The reason this game is pretty important for me is that it was my first published program!',
        image      : 'img/timeline/almas-khor.jpg',
        iconImage  : 'img/timeline/almas-khor-icon.png',
      },
      {
        detailed   : true,
        year       : '2011',
        transparent: true,
        title      : 'Fished Mobsters!',
        html       : `
          <p>
            Oh shouldn't I include this one?! whatever ...<br>
            It was 2011 and I'd been addicted to a game called Street Mobsters. On its IR server, which is still available on <a target="_blank" href="https://web.archive.org/web/20111005204247/https://mobgangs.com/">mobgangs.com</a>, I decided to perform a phishing attack and harvest credentials of in-game wealthy people.
          </p>
          <p>
            I hosted a page similar to this one and published it inside the game via various mediums. To be honest, I didn't expect any result but about 40 people had given me their username and passwords! among them, I selected wealthiest ones and ... you know rest of the story just add a Robin Hood at the end!
          </p>
          <p>
            This was the moment I realized how it is easy to actually get misused especially on the net.
          </p>
        `,
        image    : 'img/timeline/street-mobsters.jpg',
        iconImage: 'img/timeline/street-mobsters-icon.png',
      },
      {
        detailed   : true,
        year       : '2012',
        transparent: true,
        title      : 'Created a Botnet',
        html       : `
                <p>
                    A VB6-based (yes you read it correctly! Visual Basic 6) botnet with dynamic C&Cs on Blogfa.com and many zombies. Just kidding, there were 3 infected PCs only!
                </p>
                <p>
                    It was initially created to perform fraud clicks on one of PPC ads on one of my old blogs. It was designed in a way that the advertiser would not be able to detect the fraud easily.
                </p>
                `,
        icon: 'mdi-desktop-classic',
      },
      {
        year : '2013',
        title: 'Founded Bytegate.ir',
        html : `
                    <p>
                        Current status: <span class="green--text accent-4">Active</span>,
                        Team: <span class="">1-5 person(s) (variable)</span>
                    </p>
                    <p>
                        The main goal of <a target="_blank" href="https://bytegate.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=bytegate">Bytegate.ir</a> is to extend IT-related articles in Persian web with pretty easy-to-understand and picture-driven articles.
                    </p>
                    <p>
                        The reason I founded Bytegate.ir was because of a dispute about computer stuffs back in school. Soon, I realized that I know NOTHING about computers! Bytegate.ir is the place I've started learning amazing things.
                    </p>
                    <p>
                        Currently there are 600+ articles on the website which helps 4000+ people each day. It's been helping 4 people to cover small part of their expenses.
                   </p>`,
        image    : 'img/timeline/bytegate.ir.jpg',
        iconImage: 'img/timeline/bytegate.ir-icon.png',
      },
      {
        detailed   : true,
        year       : '2014-15',
        transparent: true,
        title      : 'Created a Captcha Solving Farm',
        /* eslint-disable no-useless-escape */
        html       : `
                <p>
                    I was inspired by a blog post about captcha solving techniques and made my own captcha solving farm and built some basic APIs for <span style="background-color: #d1d1d1;">/(bad)?/g</span> guys to use it.
                </p>
                <p>
                    It was initially created to make me millionaire (!) however, it was never even published since I couldn't find a way to receive money from outside of Iran. It was a stupid attempt in fact! 🤦‍♂️
                </p>
                `,
        /* eslint-enable no-useless-escape */
        icon: 'mdi-worker',
      },
      {
        year       : '2015',
        transparent: true,
        title      : 'Created WifiShield',
        html       : `
          <p>
              Current status: <span class="red--text darken-3">Failed</span>,
              Team: <span class="">1</span>
          </p>
          <p>
            WifiShield supposed to be a network security application to find vulnerabilities in Wi-Fi networks and fix them by manipulating through their actual configuration user interface.          </p>
          <p>
            It was basically a web crawler which is designed to go to default gateway (192.168.1.1 or whatever it was configured) page and interact with its user interfec following predefined action sets.
          </p>
          <p>
            <span class="red--text darken-3">Failing Reason</span>:
             The main problem with this application was that, I wasn't able to gather all possible firmware/emulators of devices of even a single brand. And of course, every version of a specific models may come in a different firmware version and thus different UI. I've only defined action sets for my own access points and left it as is.
          </p>
        `,
        image    : 'img/timeline/wifi-shield.png',
        iconImage: 'img/timeline/wifi-shield-icon.png',
      },
      {
        year : '2016',
        title: 'Founded Bobet.ir',
        html : `
          <p>
              Current status: <span class="orange--text lighten-1">Taking last breaths</span>,
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
              Current status: <span class="red--text darken-3">Failed</span>,
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
             Well, I was alone and couldn't handle its development since I'd been working on other projects too.<br />
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
              Current status: <span class="green--text accent-4">Active</span>,
              Team: <span class="">1</span>
          </p>
          <p>
            <a target="_blank" href="http://delix.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=delix">Delix.ir</a> is an online image text extractor (OCR) and PDF to Word converter which is built to support Persian language especially. The service also provides APIs to implement its OCR engines into customers' own applications.
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
        detailed   : true,
        transparent: true,
        year       : '2018',
        title      : 'A Turning Point',
        html       : `
          <p>
          It looks like that 2018 is missing from my CV isn't it? <strong>NOT AT ALL!</strong>
          </p>
          <p>
          This awesome year was a turning point in my life. I found out the reason why my businesses are not growing; what I'm doing wrong; what I've supposed to do and plenty of other thoughts.
          </p>
          <p>
          Technically, I got familiar with and tried to be best (not yet of course!) at the following technologies:
          <ul>
          <li>git</li>
          <li>Laravel</li>
          <li>Vue.js</li>
          <li>Arduino</li>
          <li>Ubuntu</li>
          <li>TTD and CI/CD</li>
          <li>Development best practices</li>
          <li>And more ...</li>
          </ul>
          </p>
          <p>
          So please don't underestimate this card by its height in pixels. It's worth a lot to me.
          </p>

        `,
        icon: 'mdi-cake-variant',
      },
      {
        year : '2019',
        title: 'Open Sourced Telegram Web Bridge',
        html : `
          <p>
              Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/telegram-web-bridge">AmirrezaNasiri/telegram-web-bridge</a>
          </p>
          <p>
            Telegram Web Bridge is a bidirectional, web-based, proxy-like application which can act as a middleman for Telegram Bot API requests (from your actual application to Telegram) and Webhooks (from Telegram to your actual application).
          </p>
          <p>
            It was initially developed because of Telegram censorship in Iran and the need for it in a storage management software we've built. I decided to publish the codes so anyone with the same problem will be able to handle it.
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
            Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/usb-keystroke-injector">AmirrezaNasiri/usb-keystroke-injector</a>
          </p>
          <p>
            An Arduino-based keyboard emulator which injects (i.e. types) a sequence of letters received via Bluetooth protocol or read from predefined SD card payloads. Demo GIF is available on the GitHub page.
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
              Current status: <span class="green--text accent-4">Active</span>,
              Team: <span class="">2</span>
          </p>
          <p>
            <a target="_blank" href="https://smo.li/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=smoli">Smoli</a> is a URL shortener and link tracking platform that also allows you to add eye-catching and branded call-to-actions to any page on the web. See a demo of Forbes campaign on Business News Daily: <a target="_blank" href="http://smo.li/+demo-forbes">smo.li/+demo-forbes</a>.
          </p>
          <p>
            The service has been founded by <a target="_blank" href="https://www.linkedin.com/in/saeidhabibpour/">Saeid Habibpour</a> (CEO) and me (CTO). Currently, the MVP is ready and we're researching the market.
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
              Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/vue-modern-resume">AmirrezaNasiri/vue-modern-resume</a>
          </p>
          <p>
            A Vue.js-based and powered-by-Vuetify (material UI kit) resume template which you're seeing right now!
          </p>
        `,
        image: 'img/timeline/vue-modern-resume.png',
        icon : 'mdi-github-circle',
      },
      {
        year : '2019',
        title: 'Published Vue Registrar Package',
        html : `
          <p>
              Current status: <span class="light-blue--text lighten-3">Published</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/vue-registrar">AmirrezaNasiri/vue-registrar</a>
          </p>
          <p>
            A Vue.js package that makes developers' code a lot cleaner and much more understandable. It's consisted of two features that:
            <ul>
                <li>Registers all your common and frequently used components globally and ends the need for importing them manually;</li>
                <li>Assembles all your vuex modules in a nested manner.</li>
            </ul>
          </p>
        `,
        image    : 'img/timeline/vue-registrar-demo.png',
        iconImage: 'img/timeline/vue-registrar-logo.png',
      },
      {
        year : 'So far ...',
        title: 'Written 340+ Unique Articles!',
        html : `I'm the guy who loves teaching! So far, I've written 340+ unique articles which most of them are computer-related. You can access them here:
                    <ul><li><a target="_blank" href="https://bytegate.ir/author/amirrezanasiri/">My posts on Bytegate.ir</a> (260+ Computer-related)</li><li><a target="_blank" href="http://bobet.ir/author/amirrezanasiri/">My posts on Bobet.ir</a> (80+ translations)</li></ul>`,
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
