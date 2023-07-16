<template>
  <v-data-table :headers="headers" :items="items" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Usuarios</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <create-user :reloadData="initialize" />
      </v-toolbar>
    </template>
  </v-data-table>
</template>
<script>
import Vue from 'vue'
import CreateUser from '@/components/general/CreateUser.vue'
export default {
  components:{CreateUser},
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "nombre"
      },
      { text: "Rut", value: "rut" },
      { text: "Dirección", value: "address" },
      { text: "Contraseña", value: "password" },
      { text: "Correo", value: "correo" },
      { text: "N° Contacto", value: "n_contacto" },
      // { text: "Actions", value: "actions", sortable: false }
    ],
    items: [],
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
  },

  methods:{
    async initialize(){
      await Vue.axios.get('http://localhost:3000/users').then((response) => {
        this.items=response.data
      })
    }
  }
};
</script>