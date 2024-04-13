<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import RecordList from '@/components/RecordList.vue';

    
</script>

<template>
    <div class="Records-container">
        <div class="search-container">
            <input type="text">
        </div>
        <RecordList/>
    </div>
</template>

<style scoped>
.Records-container{
    width: 800px;
    height: 550px;
    background-color: var(--sec-background);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-400px) translateY(-275px);
    border-radius: 10px;
}
</style>
