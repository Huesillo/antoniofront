<template>
  <section>
    <v-btn color="primary" dark @click.stop="dialog = true">Crear Usuario</v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">Datos de ingreso</v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" label="Nombre" required v-model="data.nombre"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" label="Dirección" required v-model="data.address"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" label="Correo" required v-model="data.correo"></v-text-field>
                </v-col>  
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" label="Teléfono" required v-model="data.n_contacto"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="passwordRules" label="Contraseña" type="password" required v-model="data.password"></v-text-field>
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
  props:{
    reloadData:{
      required:true
    }
  },
  data() {
    return {
      dialog: false,
      data:{},
      valid: false,
      fieldRules: [v => !!v || "Name is required"],
      passwordRules: [
        v => !!v || 'E-mail is required',
      ],
    };
  },
  methods:{
    async save() {
      await Vue.axios
        .post("http://localhost:3000/users", { ...this.data,perfil:1})
        .then(async (response) => {
          await this.reloadData()
        });
    },
  }
};
</script>