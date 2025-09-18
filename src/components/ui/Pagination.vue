<script setup>
const props = defineProps({
  meta: {
    type: Object,
    required: true,
  },
  serverOptions: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:serverOptions'])

function setPage(page) {
  if (page >= 1 && page <= props.meta.last_page) {
    emit('update:serverOptions', { ...props.serverOptions, page })
  }
}
</script>

<template>
  <nav id="Pagination">
    <ul class="flex items-center gap-3">
      <!-- Prev -->
      <li class="group">
        <a @click="setPage(props.meta.current_page - 1)"
           :class="{ 'cursor-not-allowed': props.meta.current_page === 1}"
           class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green transition-setup">
          <img src="@/assets/images/icons/arrow-left-dark-green.svg"
               class="flex size-6 shrink-0 group-hover:hidden" alt="icon">
          <img src="@/assets/images/icons/arrow-left-foreshadow.svg"
               class="hidden size-6 shrink-0 group-hover:flex" alt="icon">
        </a>
      </li>

      <!-- Pages -->
      <li v-for="page in props.meta.last_page" :key="page" class="group"
          :class="{ 'active' : page === props.meta.current_page }">
        <a @click="setPage(page)"
           class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup">
          <span class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup">
            {{ page }}
          </span>            
        </a>
      </li>

      <!-- Next -->
      <li class="group">
        <a @click="setPage(props.meta.current_page + 1)"
           :class="{ 'cursor-not-allowed': props.meta.current_page === props.meta.last_page }"
           class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green transition-setup">
          <img src="@/assets/images/icons/arrow-left-dark-green.svg"
               class="flex size-6 shrink-0 rotate-180 group-hover:hidden" alt="icon">
          <img src="@/assets/images/icons/arrow-left-foreshadow.svg"
               class="hidden size-6 shrink-0 rotate-180 group-hover:flex" alt="icon">
        </a>
      </li>
    </ul>
  </nav>
</template>