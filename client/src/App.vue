<template>
  <v-app>
    <v-parallax
      class="parallax hidden-sm-and-down"
      src="https://gatoledo.com/proj-codepen/rocket1.png"
    >
    </v-parallax>
    <v-app-bar app dark color="#1565c0" inverted-scroll>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="hidden-md-and-up">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in pageList" :key="i" :to="item.routes">
            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <v-btn
        text
        v-for="item in pageList"
        :key="item.title"
        :to="item.routes"
        class=" mx-auto hidden-sm-and-down"
      >
        <v-icon>
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-menu offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            class="ma-4"
            color="#1565c0"
            :content="computedCartItems.length"
          >
            <v-icon
              v-if="computedCartItems.length > 0"
              v-bind="attrs"
              v-on="on"
            >
              mdi-cart
            </v-icon>
            <v-icon v-else>
              mdi-cart
            </v-icon>
          </v-badge>
        </template>

        <v-card
          style="overflow-y:scroll"
          max-height="500"
          v-if="computedCartItems.length > 0"
        >
          <v-list v-for="(item, i) in computedCartItems" :key="i">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="item.ProductPhoto"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  {{ item.ProductName }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.ProductDescription }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon @click="removeToCart(i)">mdi-delete</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="primary" @click="checkOut">
              <v-icon>
                mdi-check-box-outline
              </v-icon>
               Check Out
            </v-btn>
          </v-card-actions>

          <v-divider></v-divider>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    selected: "",
    pageList: [
      { title: "Home", icon: "mdi-home", routes: "/" },
      { title: "Product", icon: "mdi-basket", routes: "/product" },
    ],
  }),
  created() {},
  methods: {
    removeToCart(value) {
      this.REMOVE_CART_ITEM(value);
    },
    checkOut(){
      this.TRUNCATE_CART_ITEM()
    }
  },
  computed: {
    computedCartItems() {
      return this.cartItems;
    },
  },

  mounted() {},
};
</script>

<style>
.parallax {
  height: auto !important;
  width: 100% !important;
  padding: 65% 0 0;
}
</style>
