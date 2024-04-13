<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const hostname = "http://localhost:3000"
    const records = ref([]);
    onMounted(() => {
        axios.get(`${hostname}/Records`)
            .then(r => records.value = r.data)
    })    
</script>

<template>
    <div class="recordList-container">
        <div class="record-container" v-for="record in records">
            <h2>{{ record.payee }} {{ record.amount }} {{ record.currency }} {{ record.category }}</h2>            
        </div>
    </div>
</template>

<style scoped>
.recordList-container{
    position: fixed;
    overflow: scroll;
    
    height: 450px;
    width: 750px;
    margin: auto;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.record-container{
    background-color: var(--main-background);
    border-radius: 10px;
    border: 2px solid var(--text-color);
    box-sizing: border-box;
    margin: 5px;
}

.example::-webkit-scrollbar {
  display: none;
}
</style>