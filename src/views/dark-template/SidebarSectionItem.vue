<template>
  <v-layout>
    <v-flex
      v-if="hasIcon"
      xs2
    >
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-flex>
    <v-flex
      :xs10="hasIcon"
      :xs12="!hasIcon"
    >
      <div>
        {{ item.name }}
      </div>
      <p class="grey--text">
        {{ item.text }}
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name    : 'SidebarSectionItem',
  props   : { item: { type: Object, default: () => {} } },
  computed: {
    hasIcon () {
      return !!this.item.icon
    },
  },
}
</script>

<style scoped>
</style>
