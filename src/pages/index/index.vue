<template>
    <view class="text-white" style="background-color: red">
        <Counter />
    </view>
</template>

<script>
import './index.scss';
import Counter from '../../components/Counter.vue';

export default {
    name: 'Index',
    components: {
        Counter,
    },
};
</script>
