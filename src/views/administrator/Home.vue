<template>
  <template-administrator>
    <div slot="container">
      <table-request />
    </div>
  </template-administrator>
</template>
<script>
import TemplateAdministrator from "@/templates/TemplateAdministrator";

import TableRequest from '@/components/general/TableRequest'
import Vue from "vue";
export default Vue.extend({
  name:'Home',
  components: { TemplateAdministrator,TableRequest },
});
</script>