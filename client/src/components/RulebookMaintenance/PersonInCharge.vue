<template>
  <v-container fluid pl-0 pr-0 pb-0>
    <v-data-table :headers="headers" :items="items" :search="search" dense>
      <template v-slot:top>
        <v-toolbar elevation="0">
          <v-text-field
            v-model="search"
            label="Search"
            append-icon="mdi-magnify"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="mx-2"
                dark
                color="#1565c0"
                @click="addDialog()"
              >
                ADD
                <v-icon dark> mdi-plus-circle-outline </v-icon>
              </v-btn>
            </template>
            <span>ADD </span>
          </v-tooltip>
        </v-toolbar>
      </template>

      <template v-slot:item.DeletedDate="{ item }">
        <v-icon v-if="!item.DeletedDate" color="green">mdi-check</v-icon>

        <v-tooltip bottom v-else>
          <template v-slot:activator="{ on }">
            <v-icon color="red" v-on="on">mdi-close</v-icon>
          </template>

          <span>{{ item.DeletedDate }}</span>
        </v-tooltip>
      </template>

      <template v-slot:item.action="{ item }">
        <v-btn
          @click="editDialog(item.PersonInChargeID)"
          icon
          small
          color="blue"
        >
          <v-icon>mdi-content-save-edit</v-icon>
        </v-btn>
        <v-btn
          color="red"
          icon
          small
          dark
          @click="deleteRecord(item.PersonInChargeID)"
          v-if="!item.DeletedDate"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn
          color="green"
          icon
          small
          dark
          @click="restoreRecord(item.PersonInChargeID)"
          v-else
        >
          <v-icon>mdi-recycle</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="600" persistent>
      <v-card>
        <v-toolbar dense flat color="#1565c0" dark>
          <v-toolbar-title>
            {{ saveToggle }}
          </v-toolbar-title>
          <v-spacer />
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-toolbar>
        <v-row no-gutters dense class="mt-3 pa-2">
          <v-col cols="12">
            <v-text-field
              v-model="editItems.PersonInCharge"
              label="Person In-Charge"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-layout class="ma-1 pa-1" dense>
          <v-spacer></v-spacer>
          <v-btn
            style="color:white"
            color="#1565c0"
            @click="saveRecord()"
            :disabled="loading"
            ><v-icon>mdi-content-save-move</v-icon> Save</v-btn
          >
        </v-layout>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      tabModel: 1,
      loading: false,
      search: "",
      headers: [
        { text: "Person In-Charge", value: "PersonInCharge" },
        { text: "Created Date", value: "CreatedDate" },
        { text: "Updated Date", value: "UpdatedDate" },
        { text: "Updated By", value: "UpdatedBy" },
        { text: "Status", value: "DeletedDate" },
        { text: "", value: "action" },
      ],
      items: [],
      dialog: false,
      editItems: [],
      saveToggle: "",
    };
  },

  created() {
    this.getRecord();
  },

  mounted() {},

  methods: {
    getRecord() {
      let url = `${this.api}get/PersonInCharge`;
      axios.get(url).then((res) => {
        this.items = res.data;
      });
    },

    addDialog() {
      this.saveToggle = "ADD";
      this.dialog = true;
      this.editItems = { PersonInCharge: "" };
    },

    editDialog(index) {
      const newIndex = index - 1;
      this.saveToggle = "UPDATE";
      this.dialog = true;
      this.editItems = { ...this.items[newIndex] };
    },

    deleteRecord(index) {
      let url = `${this.api}delete/PersonInCharge/${index}/${this.updatedBy}`;
      axios.post(url).then(() => {
        this.getRecord();
      });
    },

    restoreRecord(index) {
      let url = `${this.api}restore/PersonInCharge/${index}/${this.updatedBy}`;
      axios.post(url).then(() => {
        this.getRecord();
      });
    },

    saveRecord() {
      if (!this.editItems.PersonInCharge) {
        Swal.fire({
          width: 500,
          position: "center",
          icon: "error",
          title: "Please input Person In-Charge !",
          showConfirmButton: false,
          timer: 800,
        });
        return;
      }

      const checkExistItems = this.items.map((rec) => {
        return rec.PersonInCharge;
      });

      if (checkExistItems.includes(this.editItems.PersonInCharge)) {
        Swal.fire({
          width:500,
          position: "center",
          icon: "error",
          title: "Person In-Charge already exist !",
          showConfirmButton: false,
          timer: 800,
        });
        return;
      }

      this.editItems.UpdatedBy = this.updatedBy;
      if (this.saveToggle == "ADD") {
        this.loading = true;
        let url = `${this.api}add/PersonInCharge`;
        axios.post(url, this.editItems).then(() => {
          this.loading = false;
          this.dialog = false;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success !",
            showConfirmButton: false,
            timer: 800,
          });
          this.getRecord();
        });
      } else {
        this.loading = true;
        let url = `${this.api}update/PersonInCharge`;
        axios.post(url, this.editItems).then(() => {
          this.loading = false;
          this.dialog = false;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success !",
            showConfirmButton: false,
            timer: 800,
          });
          this.getRecord();
        });
      }
    },
  },
};
</script>
