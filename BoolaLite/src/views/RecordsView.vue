<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import RecordList from '@/components/RecordList.vue';
    import { useRecordsStore } from '@/stores/records';
    const RecordsStore = useRecordsStore();
    
</script>

<template>
    <div class="Records-container">
        <h1>Rekordok</h1>        
        <RecordList/>
    </div>
</template>

<style scoped>
.Records-container{
    width: 500px;
    height: 550px;
    background-color: var(--sec-background);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-250px) translateY(-275px);
    border-radius: 10px;
    padding: 5px;
}

.search-container{
    padding-left: 30px;
}
</style>
