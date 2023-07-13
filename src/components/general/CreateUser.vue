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
                  <v-text-field :rules="fieldRules" label="Nombre" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" label="Dirección" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" label="Correo" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="fieldRules" label="Teléfono" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field :rules="passwordRules" label="Contraseña" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cerrar</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Ingresar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,

      valid: false,
      fieldRules: [v => !!v || "Name is required"],
      passwordRules: [
        v => !!v || 'E-mail is required',
      ],
    };
  }
};
</script>