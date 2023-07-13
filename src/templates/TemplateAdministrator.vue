<template>
  <v-app>
    <v-navigation-drawer color="#474242" v-model="drawer" dark app>
      <v-list dense>
        <v-list-item-group dark>
          <v-subheader>Inicio</v-subheader>

          <v-list-item v-for="(item, index) in starter" :key="index" :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </v-list-item-group>
      </v-list>
      <!-- <template v-slot:append>
        <div class="pa-2">
          <close-session></close-session>
        </div>
      </template>-->
    </v-navigation-drawer>
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = drawer == true ? false : true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text font-weight-bold">
        <v-icon dark>fa-feather-alt</v-icon>PROYECTO Toño
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text">
        <login />
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-container fluid>
          <slot name="container"></slot>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Login from "../components/general/Login.vue";
export default {
  components: {
    Login
  },
  data: () => ({
    drawer: true,
    starter: [
      {
        text: "Inicio",
        icon: "fas fa-home",
        to: { name: "administratorHome" }
      },
      {
        text: "Usuarios",
        icon: "fas fa-users",
        to: { name: "userHome" }
      }
    ]
  })
};
</script>
