<template>
<section>
  <v-data-table :headers="headers" :items="items" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Solicitudes</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
      </v-toolbar>
    </template>
    <!-- <template v-slot:item.actions="{ item }"> -->
    <template v-slot:item.actions>
      <v-icon small class="mr-2">mdi-pencil</v-icon>
      <v-icon small>mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</section>
</template>
<script>
import Vue from 'vue'

export default {
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
      { text: "Teléfono", value: "telefono" },
      { text: "Dirección", value: "telefono" },
      { text: "Fecha ", value: "date" },
      { text: "Necesita pilas", value: "pilas" },
      { text: "Tipo de solicitud", value: "requestType.nombre" },
      { text: "Tipo de Evento", value: "eventType.nombre" },
      { text: "Corporeo", value: "corporeo.nombre" },
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
      await Vue.axios.get('http://localhost:3000/request').then((response) => {
        this.items=response.data
      })
    }
  }
}
</script>