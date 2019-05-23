<template>
  <div class="mb-5">
    <div class="title mb-3">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name      : 'MainContentSection',
  components: { },
  props     : { title: { type: String, default: 'Section' } },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
</style>
