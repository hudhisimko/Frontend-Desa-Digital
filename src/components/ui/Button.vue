<script setup>
defineProps({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'button'
    },
    loading: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button :type="type"
    class="py=[18px] flex justify-center items-center bg-desaa-dark-green rounded=2x1 font-medium leading=5 text-white"
    :disabled="loading">
    <span v-if="!loading">{{ label }}</span>
    <span v-else>Loading...</span>
    </button>
</template>
