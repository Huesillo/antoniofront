<template>
  <section>
    <v-btn color="primary" dark @click.stop="dialog = true">Hacer Solicitud</v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">Datos de ingreso</v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-select v-model="data.requestType" label="Tipo de solicitud"></v-select>
                </v-col>
                <v-col cols="12" md="12">
                  <v-select :items="items" v-model="data.eventType" label="Tipo de evento"></v-select>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" v-model="data.nombre" label="Nombre" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" v-model="data.telefono" label="Telefono" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" v-model="data.direccion" label="Dirección de entrega" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-select v-model="data.corporeo" label="Corpóreo"></v-select>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" v-model="data.pilas" label="Pilas" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" v-model="data.date" label="Fecha /Hora" type="datetime-local" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cerrar</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false" @click.native="save">Ingresar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>
<script>
import Vue from 'vue'

export default {
  data() {
    return {
      dialog: false,
      data:{},
      valid: false,
      fieldRules: [v => !!v || "Name is required"]
    };
  },
  methods:{
    async save(){
      await Vue.axios.post('http://localhost:3000/request',this.data).then((response) => {
        console.log(response.data);
      })
    }
  }
};
</script>