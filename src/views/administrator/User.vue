<template>
  <template-administrator>
    <div slot="container">
      <table-users />
    </div>
  </template-administrator>
</template>

<script>
import Vue from "vue";
import TemplateAdministrator from "@/templates/TemplateAdministrator";
import TableUsers from '@/components/general/TableUsers'

export default Vue.extend({
  name:'Home',
  components:{TemplateAdministrator, TableUsers}
});
</script>