<template>
  <v-container fluid pl-0 pr-0 pb-0>
    <v-tabs v-model="tab" background-color="#1565c0" dark>
      <v-tab v-for="(item, i) in tabItems" :key="i">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on"
              ><v-icon>{{ item.icon }}</v-icon
              >{{ item.nameJap }}</span
            >
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
      </v-tab>
    </v-tabs>
    <span v-if="tab == 0">
      <MAILADDRESS></MAILADDRESS>
    </span>
    <span v-if="tab == 1">
      <CLASSIFICATION></CLASSIFICATION>
    </span>
    <span v-if="tab == 2">
      <DEPARTMENTINCHARGE></DEPARTMENTINCHARGE>
    </span>
    <span v-if="tab == 3">
      <PERSONINCHARGE></PERSONINCHARGE>
    </span>
    <span v-if="tab == 4">
      <PRODUCTCATEGORY></PRODUCTCATEGORY>
    </span>
  </v-container>
</template>

<script>
import MAILADDRESS from "../components/RulebookMaintenance/MailAddress.vue";
import CLASSIFICATION from "../components/RulebookMaintenance/Classification";
import DEPARTMENTINCHARGE from "../components/RulebookMaintenance/DepartmentInCharge";
import PERSONINCHARGE from "../components/RulebookMaintenance/PersonInCharge";
import PRODUCTCATEGORY from "../components/RulebookMaintenance/ProductCategory";

export default {
  components: {
    MAILADDRESS,
    CLASSIFICATION,
    DEPARTMENTINCHARGE,
    PERSONINCHARGE,
    PRODUCTCATEGORY,
  },
  data() {
    return {
      tab: 0,
      tabItems: [
        {
          name: "Email Address",
          nameJap: "メールアドレス",
          icon: "mdi-email-outline",
        },
        {
          name: "Classification",
          nameJap: "区分",
          icon: "mdi-format-list-text",
        },
        {
          name: "Department In-Charge",
          nameJap: "担当部署",
          icon: "mdi-office-building-outline",
        },
        {
          name: "Person In-Charge",
          nameJap: "担当者",
          icon: "mdi-account-circle",
        },
        {
          name: "Product Category",
          nameJap: "製品区分",
          icon: "mdi-shape-outline",
        },
      ],
    };
  },

  created() {},

  mounted() {},

  methods: {},
};
</script>
