<template>
  <v-container fluid fill-height>
    <v-row class="justify-center align-center mb-16">
      <v-card class="elevation-8" height="450" width="400">
        <v-img
          style="width: 150px;
  height: 150px;
  "
          src="../../public/img/fb.png"
        />

        <v-card-text>
          <v-form>
            <v-text-field
              tabindex="1"
              autofocus
              prepend-icon="mdi-account"
              name="login"
              label="Username"
              type="text"
              v-model="username"
              color="blue-grey darken-1"
            ></v-text-field>

            <v-text-field
              tabindex="2"
              @keyup.enter="login()"
              id="password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              name="password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              color="blue-grey darken-1"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            tabindex="3"
            rounded
            color="#455A64"
            @click.prevent="login()"
            dark
            block
          >
            <v-icon>mdi-login</v-icon>Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
// import { mapState, mapMutations } from "vuex";
// import Swal from "sweetalert2";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    login() {
      const userInformation = {
        employeeCode: "35339",
        full_name: "Charles Kenneth C. Labit",
        Age: 22,
      };
      this.ADD_INFO(userInformation);
      this.$router.push("/");
    },
  },
};
</script>
<style>

</style>
