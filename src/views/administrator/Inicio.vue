<template>
  <template-administrator>
    <div slot="container">
      <v-row >
        <v-col cols="12" offset="5">
          <v-img :width="100" src="/icono.jpg"></v-img>
        </v-col>
        <v-col class="d-flex child-flex" cols="4">
          <v-img :width="100" src="/banner_1.jpg"></v-img>
        </v-col>
        <v-col class="d-flex child-flex" cols="4">
          <v-img :width="100" src="/banner_2.jpg"></v-img>
        </v-col>
        <v-col class="d-flex child-flex" cols="4">
          <v-img :width="100" src="/banner_3.jpg"></v-img>
        </v-col>
        <v-col class="d-flex child-flex" cols="12">
          <div style="display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;">
            <span>
              <h4>MONA INFLABLE DISFRACES</h4>
              Los corporeos mas divertidos en Punta Arenas estan aquí.<br>
              Cotiza tu evento infantil, adultos, o arriendo si es lo que necesitas.<br> 
              Tenemos la mejor opción para ti.
            </span>
          <request />
          </div>
        </v-col>
      </v-row>
    </div>
  </template-administrator>
</template>
<script>
import TemplateAdministrator from "@/templates/TemplateAdministrator";
import Request from '@/components/general/Request'

import Vue from "vue";
export default Vue.extend({
  name: "Home",
  components: { TemplateAdministrator, Request }
});
</script>
<style scoped>
.v-application .d-flex {
    display: flex !important;
    height: 35em;
}
</style>