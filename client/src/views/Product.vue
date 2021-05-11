<template>
  <div id="product" class="my-10">
    <v-hover v-slot:default="{ hover }">
      <v-carousel
        interval="5000"
        :cycle="hover ? false : true"
        hide-delimiter-background
        show-arrows-on-hover
        height="800"
      >
        <div class="text-center font-weight-thin text-h4 py-5">
          Featured Products
        </div>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img
            :src="item.ProductPhoto"
            style="max-width: 100%; max-height: 100%;"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-hover>
    <h1 class="text-center font-weight-thin py-10">Latest Product</h1>

    <v-row dense class="ma-4">
      <v-col
        lg="3"
        md="4"
        cols="6"
        v-for="item in items"
        :key="item.ProductName"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-card v-on="on" v-bind="attrs">
              <div class="ma-auto" id="image-fit">
                <v-img
                  :src="item.ProductPhoto"
                  style="max-width: 100%; max-height: 100%;"
                >
                </v-img>
              </div>

              <v-card-title>{{ item.ProductName }}</v-card-title>
              <v-card-subtitle class="text-truncate">{{
                item.ProductDescription
              }}</v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="#1565c0" @click="addToCart(item)"
                  >Add to Cart
                  <v-icon>mdi-cart-arrow-down</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <div class="text-h5">{{ item.ProductName }}</div>
          <div>{{ item.ProductDescription }}</div>
        </v-tooltip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        ProductID: 1,
        ProductName: "Product A",
        ProductDescription: "SDGALSASDLGKASL;DKGALSDKLZXVLX",
        ProductPhoto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      },
      {
        ProductID: 2,
        ProductName: "Product B",
        ProductDescription: "ZXCBZXCBXCB;DKGALSDKLZXVLX",
        ProductPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHWyoPzo4xEoJIe-RFLpe_0aFtz0avVJNHg&usqp=CAU",
      },
      {
        ProductID: 3,
        ProductName: "Product C",
        ProductDescription: "QWRSHSADHASDH;DKGALSDKLZXVLX",
        ProductPhoto:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
      {
        ProductID: 4,
        ProductName: "Product D",
        ProductDescription: "ZXCBADS24234G;DKGALSDKLZXVLX",
        ProductPhoto:
          "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      },
      {
        ProductID: 5,
        ProductName: "Product E",
        ProductDescription: "AHSDH347437;DKGALSDKLZXVLX",
        ProductPhoto:
          "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
      },
      {
        ProductID: 6,
        ProductName: "Product F",
        ProductDescription: "KADFJ34634;DKGALSDKLZXVLX",
        ProductPhoto:
          "data:image/jpeg;base64,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",
      },
      {
        ProductID: 7,
        ProductName: "Product G",
        ProductDescription: "ZXCBVCBE46;DKGALSDKLZXVLX",
        ProductPhoto:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEA8QEBIVFRAVDw8QEBAQDxIVDw8PFRUWFhUVFRUYHiggGBolHRUVITEhJSkrLi4uFx8/ODMsNygtLi0BCgoKDg0OFRAQGCsdFR0rKystLS0tKystLSstKzctLS0rLSstLSstMC0rLS0tNzcrKy0tNy0tKys3LSstKysrLf/AABEIAL4BCQMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAACAwQAAQUGBwj/xAA+EAACAQIDBgIHBgUDBQEAAAAAAQIDEQQSIQUTMVFhkRRBIlNxgZOh0QYVMlKx8CNCYpLhQ3LBNHSCorMW/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwUEBv/EACMRAQEAAgIBBAMBAQAAAAAAAAABERICEwMEIUFRFDFhcWL/2gAMAwEAAhEDEQA/AOIoDI0zUB8Dk2vopxgVTDVMZAakTsvWJ92EqZQohKCFsNE6pBKiUxpjYwFuekSRw4awpYohqIt6ekRrCBrCFsYDIwDejSIVhXyCWGfI6EYDYwHtRpHOVB8hsKLOhGmGqQ9hqhjSGxpFsaQyNMMlhFGkPhTKY0hipjyE8aYxQHqmEqY05IUAlAeoBqBWE2kKmGqY9QCUCpE2kKmGqY9QCUCsIvIhUwt2PUAlAqRF5J1A3kKVA3kHhN5JshmQpymZCi2fI4UEOjh0Www3QdHD9DmdjqzxII4ZBrDF6w4aw4bn1uesN1DWGfM6Cw4awwbjRBGg+YcaLOgsMGsMGxaoY0hkaZdHDDI4ceSwhjAZGBaqC6Bblc13Qy9ksaY2NMpjQX7YxUByJtiVUxkYFCohbuxUibyhMYjIxGxphqmVIm8i1ANQDVMNQKkReRaiEojFEJRLkReRagGoBqISRWEXkBQCUA0gkisJvICiGohJGysItCohKJuwSQ8JtCkFY2bQ5E2hsZlDMHgsvmVPHLzTHwxsXzRx6WKX5deSaGxxPOL9zPBfTT6daeqv27Ua65hxrI4qxST0i7c76jljV+WXyJ/Gqvyo7CmhmY46x6/LL5DqWMi/Nr2/UOin+Rxrpb3r8gXiH0J0r8NfYbyjniRfKbvpc/0M3kuYCRtJlzxs75AJB6gYjFQpr037EtZP3HOrbdX8kPfJ2+SNZ47fhly8sny7VOo0OjWvxXvTPLLbNa9/RtyyftldPb8tL049bSaK6aj8ji9Bbk/kLdIlwe2KU3Z3g/LNwfv+pd4qmuNSH96FpYfZL8jozlHg9ORX4r+n5kVDG0pvLGab5c/ZcqSHqWx0cUuT7oN4zlHuxDSWr4ebfBEstp0F/qR913+iHOCLyjq0cSnx0fddyhL2HGwuPpT/AAzXsej7Mtg9NHp7dCtU7LbLy195pyfImSHQqvzDUthqp0DVToDmMuVhN5GqSDSEphJjwnY1mIXmNXHhOxyCsIQV2PBbGmC1J8zedjwWX5/ji/6fmOo46z4Nc2pX+REkGn0HqN67tDGt6Jxl7VqUeOUVeaS63t8jzd3zt7DMtxaRXdXoqW2qLdrSS5uKt8mdGFSm9VJe88dGmWYevOKsnpyC+MTzX5eqpyhwUl3sMaUdXK3v1POU8W3b0teTSsXRxHOPZk9au50pbTa0is3WXAmq4+rL+bKuUVb/ACI368os2qy5MqcIm+S35KdO7u9XzfE2qRSpR5/JmOpFf4RWEXkSqRvdD41IPz7ooVEMFlEqQW7LNwZuR4LZLGB08PtarFWbUv8Acte6EKiEqQXjkTnZ+msZjJ1PxPT8sdI/5Jt2VbszIOcSvLKZUxlNyjrGTT6Nr9Bygb3Y9U7K8PtmrHSVpL+pWfdFK2+/Vr+7/By8hmQNIOyuzR+0H5qb/wDGSf6jan2jjb0acr/1NJfK5wVE3lH1wu2uh9/Vs1/Rt+XLp34lsftHzp69J+fY4SRtIrrie2u1L7QyvpTVusm2Ow+31/qQa6w1XvTOCjaQdcLtr12F2hTqNqMteTVn7uZVmPEpDI1JLhJ+5tC6h3PZZjeY8lSxdSPCcvZdtdmUfelX83/rH6B1Ud8fKt2byFKpm1SZDXKdUhkaRVTojFRHgJVTN7ssVENUAwWUSpFVKpJcdUOjQGRoBgZbotP29R6pCtyU0pNf5HgtgbkzcFcWn0HKkGCtc5UBkabL1RC3BWC2QwTTunqW0qqfFW/Q3uDN0GpbHRgnwC3Qjdm8oalubujW7Bi2uDC3j/aHqndmQzIZvH0N73oVqV5hcAcg1VF5ozOv2h6pvMrIacB2ZczG0PCLzJyG8oy6/aBzdCtU3mHKbSCzI3Fpj1RebVjLB5TMo9U3mEwKxrKVqnd49URkKBZGkOjCx48OplFHDjo0ClMOLXmh4GU6w4caBbTivIaoBgsoFQDVIvjTC3CHgrXPVANUS5UA1RHhNqDcmt2zoKiEqQ8Jtc+CkuDKqdV+a7D90EqY8J2DGS5GSXQYqaDVMeCvJMo9DeVFSpG90PCbyRuKMyIs3KNbgeEXkidNmt2y3cszIVhF5IXTZrdl+7MdIeE2oMhm7LnSM3Q8JtQOIMrl8qQqVMqRF5VHc0yvdgukVhneVTqq15m3iJftDXSFyplaxnfJQ+Jl07GvFPoZuzW7K1Z9tc6pUjFXk0l1ZFV2pBfhTftVkebjtFzd5v0ubHQrJ8GjwYdy83ZW13peCv56sqjtanyl2X1ODCouncYh4Tu9BR2pTfm0721WnctpzzK8Xdc0zyqQ6hWlF3i2vYx6l2PVRnLmU06t+JxKG1vzRXWz/wCCme1IJKyb+Vh6jd2YxGKJwKW3LPWGn+7X9C+jt2k/xKS15XDUuyOmoGWN4fEwmvRknfv2GuCDA2JSN5RqQWUeC2IVM3uxygEkPCckxixseodjLhhOzFFG8iMU+gxSQ8FkvIZkG2RjaQYLJMqfQW10Kd9E05RfBlJqST6CnJlc3ETJrmVGXKl7zmjG0Y6YtxKwzvOisgcvsMyGnTKwi8hbvowJUV17Gt30+ZqdN+d+48M7y/gZUlzB3UfzCptLzFbz92NNa898kfI41A1V5EkZjFUOfh2t1UKpRSrtefzOfGY2Mx4LsdiljXZeb6/UrpYmL6PkcCFUphUXv/UclK85XoIyHweh5+nj5R89OpZh9prS+n6F4Z9jqhIm33mjN/zRWE3yLIz19+ntK6W0akXdTfseq4W8zkxxAxTHqntego7eqLik/db9Do4TbcJaTWXqndfoeQUw1WXPsPSDvsfQqVSMleMk10YV1zS954KltBx/DJ9bOw6O1Zc7+0XWr8ni9vnjxuu6FVMXTX81+i1PILabNfefQc8aL6mPTz2lFfyvjzQmptTg1FJdXqzzU9pMD7w5lzxsuXqp9vU09rQ/mTT7orpYiEvwyT6J69jxcsQnwfzFPFW4PX5j6ss76zH7e6kxUpHm9l7cy+hU1hrZ+cfqjvQqxklKLumrpoV4WftXH1HHnMyjdRi5VQakhWYqcU3yGqq1wYM8S+nYCTE1Kg5xZ8vLj5O3r53GQxHU57kKlOxejG+ow7icuPzAqzbOItoNcP1H0tqX/E+8Q6qU9ZwvtlTVpiLlDxNNr8SfysTb+mVJfpnz5cfix8ZubuKzG2zmZd7BykMjMmTCjIrJWKcwcaj4EykGmNnYrVS6t2MUyeMhimVKzvF0cLi2la/svwKaeLd/+DjxY1VS5WfKV1/GMKGLZyqdUbGZcsZWcnTeJfThyBdTqRKYWcuMuUtV7zqEqr5ke8N7xlZRrV6xLD39zmqoEqoZK8au3htVCNVdDN4Vsz61ynyN77mRKqFvB7J0VqoNpYqUWnGTVrPRvyIM5mceRo9BHbtTzcX7Y8ezCp7bl/Mk10umecVQZGqL2F3+3qYbbh5qXdOxktpw0trzPL3Mzsr2K3lfl6ujj6b46a8ipUKdThUj7FJXPFqswvF24tB7f4JL+rMvbx2LG18137UST2fG9sy/uR5VbSXnL9Tf3jT5rswl/wCk8vHL7TxvSvB282Dk6foedjt6KWjfssH/APoYc5diuyfbK+n5/HCvnSYSYpMYjjx9bYJBJgXCTGmwaYSkLTN3KTg5TCUhCYVx5TeJymMVQmUjdx5ReKtTDhWI1MNSHKi8FqqhqsRKYSqFzkzvjXKqFnIVUDUytkXxqs5reE28NKoGw0VqoGqxHmCz9R7FeCzem94R5wlMeyOtYqoWchdY0qw9y6l+cJVEQusBKuPcuq101iBc8Uc2WIFOoK+RXH066pinzFOuS5zM5G7WeKRRKoC5kzmZmFsvRQpGb1k9zebqGx6OObQp1kvP5oB4j2HjzHS0qxGyHf8AU2q/Vdw2g6quzGXJI4lc13N+JXTuPaJ66rubTJfErmu4LxC5ruG0LrqxzXMxVkROqua7ozermu4bjrW75GpV+RJvI813NOoua7oNz64q375hRxDIt4ua7ozermu6DYdf8X+JYfiuhz1WXNd0Fvo/mXdD3TfFPpesTzQ1VL8GctVo813QUa6XCS7ordN8LpKob3pDHGR82u6GLER5ruVOUZ3xX6V75hKsR79c13NLELmu4bl1fxc6hrOyOOJXm13QTrrmu49i67PhQ6gLn1J3VXNdwXUXNd0LZU8anODvBO8XNdzFVXNdwyND85jkJ3q5ruZv4813DI0/huczOT71c13M3q5ruGVaH5jMwnermu5m8XNdwyWr9XbAwVJ4TCN04X8NQ13cfVx6HQ8BS9VD4cfoT/Z7/o8J/wBrQ/8AnE6B43UTeApeqh8OP0M8DS9VD4cfoUmAE/gaXqofDj9DPA0vVQ+HH6FBgBN4Cl6qn8OP0N+Apeqh8OP0KDACfwNL1VP4cfoa8DS9VT+HH6FJgBxMTjsJCUU407OpOnKW7jlhKMJTd3b+l+y2puvjcHBwTjBucnGKhRUuCqO7suH8Ka9qG1thUpupKTm3PPf0kklOEoOyS5Ter14a6IGl9nqUZKac7qalH01aKvVeVK34f49Tr6XHRWAXSx+ClCM7UknTjUtKklJRdrXVuOq06o3LG4NOCywtKU4ZlRWSMoRcpZpWsrWfvT5M3R+zlGLuszeWmm3lzS3eXI3LLfRQiuNrLhfUZW2FSm55nN5pylJZkk1KMoSjZLg1J68eGugAjEY/BxhKajTlaMpZVTjmstHe69H32KpvCqMJuNLLOWWD3cXner9Gy10Td+SvwEP7O0nvM0pvexca95J+IXBZ1a2i00tpxuP+6IZaUVKaVN/wrSV4RaacE7axyu2t+CtZq4AiWOwK4ujxt+CPTXhw1WvDUqpU8PJQcY0mppuHoQvJLjZWvp5k9H7PUYu/ptqEaavP8NKLi4QWnBZVbz1d2y/DYSFOMYxXBzcW9ZJzk5S19rAOVXxtCMK01hXJUqjp1EqVGMk1CM00qko3TU42tq+QvE7Uw1OWSeHyyzwhGM4UIZ8+8yyTnJK38KejaenDVHQjsqOacpSnLNXhXcZOOXeQiox0UVolGGnOCfO63sSLjWi6tVxqylKom6d5KScZRcst8tnbjokrWsAQ/e+F/jqOHcnRlJVFGlSdlFzUpPX0Ut3LSVm9LJ3Vy+9MM3OMMPnlGo6ajCFBynKKk5WjmvGyhL8ajfyvce/s5S4RnUisyaSlFxilOVRRtKLTjmm5a38uSG19hwnPeSnU3trQqKUVOnF5k4xsrWeeXG74cLKwEk9p4WzcaObWChajCO9UqcqicHOytljJ3duGlzqUMNRnGM404OMoxlF7uOsWrryJZ7BpSjUhLNKlONKDotQ3ahT/AAxXo3tbTjwZ1UAI8DS9VD4cfoZ4Gl6qHw4/QoMAJ/A0vVQ+HH6GeBpeqh8OP0KDACfwNL1UPhx+hngaXqofDj9CgwAn8DS9VD4cfoZ4Gl6qHw4/QoMAJ/A0vVQ+HH6GeBpeqh8OP0KDAD//2Q==",
      },
    ],
  }),
  created() {},
  methods: {
    addToCart(value) {
      this.ADD_CART_ITEM(value);
    },
  },
  computed: {},
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
#image-fit {
  display: flex;
  justify-content: center;
  height: 400px; /* or other desired height */
  overflow: hidden;
}

/* img {
  flex: none; 
} */
/* .parallax {
  height: auto !important;
  width: 100% !important;
  padding: 45% 0 0;
} */
</style>
