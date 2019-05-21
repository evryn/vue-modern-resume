<template>
  <div>
    <div class="title">
      {{ title }}
    </div>
    <slot v-if="$slots.default" />
    <sidebar-section-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import SidebarSectionItem from '@/views/dark-template/SidebarSectionItem'
export default {
  name      : 'SidebarSection',
  components: { SidebarSectionItem },
  props     : {
    title: { type: String, default: 'Section' },
    items: { type: Array, default: () => {} },
  },
}
</script>

<style scoped>
.title {
    border-bottom: 2px #bfbfbf solid;
}
</style>
