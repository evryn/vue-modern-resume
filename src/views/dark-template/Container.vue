<template>
  <v-app id="dark-template">
    <v-fade-transition
      mode="out-in"
      type="animation"
    >
      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-layout
            align-center
            justify-center
          >
            <v-flex
              xs12
              sm8
              md4
            >
              asdasd fas f
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-fade-transition>
  </v-app>
</template>

<script>
export default { name: 'DarkTemplateContainer' }
</script>

<style scoped>
#dark-template {
height: 100%;
background: url("/img/backgrounds/city.jpg") no-repeat center;
background-size: cover;
}
</style>
