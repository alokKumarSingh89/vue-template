<template>
  <v-app id="inspire" :class="user?'':'front'">

    <v-navigation-drawer
      clipped
      v-model="drawer"
      app
      width="200"
      v-if="auth"
    >
      <v-list dense>
        <template v-for="item in menuItems">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              :to="item.link"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- :clipped-left="$vuetify.breakpoint.lgAndUp" -->
    <v-toolbar
      color="blue darken-3"
      dark
      app
      v-if="user"
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <router-link to="/" style="cursor: pointer" class="hidden-sm-and-down" tag="span">
          App Template
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- dashboard buttons start -->
      <v-tooltip bottom v-for="item in adminItems" :key="item.name" v-if="user && user.role == '1'">
        <v-btn icon slot="activator" :to="item.link" v-if="auth == item.auth" >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.text }}</span>
      </v-tooltip>
      <v-tooltip bottom v-for="item in dashItems" :key="item.name" >
        <v-btn icon slot="activator" :to="item.link" v-if="auth == item.auth" >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.text }}</span>
      </v-tooltip>
      <span v-if="user">{{user.email}}</span>
      <v-btn color="primary" dark v-if="auth" @click="signOut()">Logout</v-btn>
    </v-toolbar>

      <v-container fluid class="mt-5">
        <v-layout>
          <v-flex sm2 hidden-md-and-down>
          </v-flex>
          <v-flex sm12 lg11>
            <main>
              <router-view class="mt-5" v-if="!loading"></router-view>
              <v-progress-circular indeterminate color="primary" style="margin-top: 10em;margin-left: 48em;" v-if="loading">
              </v-progress-circular>
            </main>
          </v-flex>
        </v-layout>
      </v-container>
    <v-spacer></v-spacer>

    <v-footer app class="blue darken-3 pa-3 " dark v-if="user">
      <v-layout justify-center row wrap>
        <div>
          &copy; <strong>App Template</strong> {{ new Date().getFullYear() }}  |

          <span>  Team Login    </span>

        </div>
      </v-layout>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.state.loading
    },
    user () {
      return this.$store.state.userStore.user
    },
    auth () {
      let user = this.$store.state.userStore.user
      return !!user
    }
  },
  data: () => ({
    dialog: false,
    drawer: false,
    menuItems: [
      { icon: 'contacts', text: 'Intro', name: 'intro', link: '/intro' },
      { icon: 'content_copy', text: 'Page 1', name: 'page1', link: '/page1' },
      { icon: 'content_copy', text: 'Page 2', name: 'page2', link: '/page2' },
      { icon: 'content_copy', text: 'Page 3', name: 'page3', link: '/page3' },
      { icon: 'content_copy', text: 'Page 4', name: 'page4', link: '/page4' },
      { icon: 'content_copy', text: 'Page 5', name: 'page5', link: '/page5' }
    ],
    dashItems: [
      { icon: 'person', text: 'Profile', name: 'profile', link: '/profile', auth: true },
      { icon: 'notifications', text: 'Alerts', name: 'alerts', link: '/alerts', auth: true },
      { icon: 'settings', text: 'Settings', name: 'settings', link: '/settings', auth: true },
      { icon: 'chat_bubble', text: 'Messages', name: 'messages', link: '/messages', auth: true },
      { icon: 'help', text: 'Help', name: 'help', link: '/help', auth: true }
    ],
    adminItems: [
      {icon: 'supervisor_account', text: 'Admin', name: 'admin', link: '/admin', auth: true}
    ]
  }),
  props: {
    source: String
  },
  methods: {
    signOut () {
      this.$store.dispatch('signOut')
    }
  }
}
</script>

<style scoped>

  .front {
    background-size: cover;
    background-image: url("../src/assets/bg-image.jpeg");
  }
</style>
