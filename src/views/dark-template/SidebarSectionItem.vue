<template>
  <v-layout>
    <v-flex
      v-if="hasIcon"
      xs1
    >
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-flex>
    <v-flex
      :xs11="hasIcon"
      :xs12="!hasIcon"
    >
      <strong>
        {{ item.name }}
      </strong>
      <p>
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
