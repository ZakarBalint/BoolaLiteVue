<script setup>
    import { useRecordsStore } from '@/stores/records';
    const RecordsStore = useRecordsStore();
</script>

<template>
    <div class="recordList-container">
        <div class="record-container" v-for="record in RecordsStore.records">
            <h2 :class="[record.type === 'Kiadás' && 'expense-color', record.type === 'Bevétel' && 'income-color']">
                <label v-if="record.type === 'Kiadás'">-</label><label v-else="">+</label>{{ record.amount }} {{ record.currency }}
            </h2>
            <span class="material-symbols-outlined" @click="RecordsStore.startRecordUpdate(record)">edit</span>
            <h3>{{ record.payee }} {{ record.category }}</h3>                        
            <span class="material-symbols-outlined" @click="RecordsStore.deleteRecord(record.id)">delete</span>              
        </div>
    </div>
</template>

<style scoped>
.recordList-container{
    position: fixed;
    overflow: scroll;
    
    height: 420px;
    width: 500px;
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
    padding-left: 30px;
    display: grid;
    grid-template-columns: 8fr 1fr;
    grid-template-rows: repeat(2, 50px);    
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100px;
}

.material-symbols-outlined{
    position: relative;
    top: 20%;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
}

.material-symbols-outlined:hover{
    color: var(--sec-background);
    transition: all ease-out .2s;
}

.example::-webkit-scrollbar {
  display: none;
}

.expense-color, .expense-color > *{
    color: red;
}

.income-color, .income-color > *{
    color: green;
}
</style>