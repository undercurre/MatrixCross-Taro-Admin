<template>
    <view class="text-white" style="background-color: red">
        <Counter />
    </view>
    <view class="w-20px h-20px bg-red"></view>
    <view class="flex justify-center mb-4">
    <view class="inline-block" @click="toggleDark()">
      <view v-if="_isDark" class="i-carbon-moon" />
      <view v-else class="i-carbon-sun" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import './index.scss';
import Counter from '../../components/Counter.vue';

const _isDark = ref(false)

function toggleDark() {
  _isDark.value = !_isDark.value
}
</script>
