<template>
  <template-administrator>
    <div slot="container">
      <table-request />
      <br>
      <v-spacer></v-spacer>
      <request />
    </div>
  </template-administrator>
</template>
<script>
import TemplateAdministrator from "@/templates/TemplateAdministrator";
import Request from '@/components/general/Request'
import TableRequest from '@/components/general/TableRequest'
import Vue from "vue";
export default Vue.extend({
  name:'Home',
  components: { TemplateAdministrator,Request, TableRequest },
});
</script>