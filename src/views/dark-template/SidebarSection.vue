<template>
  <div>
    <div class="title mb-3">
      {{ options.title }}
    </div>
    <slot v-if="$slots.default" />
    <sidebar-section-item
      v-for="(item, index) in options.items"
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
  props     : { options: { type: String, default: 'Section' } },
}
</script>

<style scoped>
.title {
    border-bottom: 2px #bfbfbf solid;
  font-weight: 300;
  line-height: 1.5 !important;
  letter-spacing: 0.2em !important;
}
</style>
