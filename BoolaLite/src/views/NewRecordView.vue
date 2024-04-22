<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import { useRecordsStore } from '@/stores/records';    
    const RecordsStore = useRecordsStore();

    const hostname = "http://localhost:3000"
    const categories = ref([]);
    const currencies = ref([]);

    onMounted(() => {
        axios.get(`${hostname}/Resources`)
            .then(r => categories.value = r.data.Categories)
        axios.get(`${hostname}/Resources`)
            .then(r => currencies.value = r.data.Currencies)
        
    })



</script>

<template>
    <div class="newRecord-container">
        <h1>Új rekord</h1>
        <div class="form-container">
            <div class="form">
                <h3>Rekord fajtája</h3>
                <div class="radioButtons-container">
                    <input type="radio" name="radio1" id="radioExpense" value="Kiadás" v-model="RecordsStore.newRecord.type">
                    <label for="radioExpense">Kiadás</label>
                    <input type="radio" name="radio1" id="radioIncome" value="Bevétel" v-model="RecordsStore.newRecord.type">
                    <label for="radioIncome">Bevétel</label>
                </div>
            </div>
            <div class="form">
                <h3>Kezdeményezett</h3>
                <input type="text" v-model="RecordsStore.newRecord.payee" class="payeeInput" placeholder="Kérem töltse ki!">
            </div>
            <div class="form">
                <h3>Összeg</h3>
                <input type="number" min="1" v-model="RecordsStore.newRecord.amount" class="amountInput" placeholder="Kérem töltse ki!">
                <select v-model="RecordsStore.newRecord.currency" class="currencySelect">
                    <option disabled selected value="">Kérem válasszon!</option>
                    <option v-for="currency in currencies" :value="currency">{{ currency }}</option>
                </select>
            </div>
            <div class="form">
                <h3>Kategória</h3>
                <select v-model="RecordsStore.newRecord.category" class="categorySelect">
                    <option disabled value="">Kérem válasszon!</option>
                    <option v-for="category in categories" :value="category">{{ category }}</option>
                </select>
            </div>
            <div class="buttons-container">
                <button @click="RecordsStore.addRecord()" :class="`${RecordsStore.isUpdateModeOn && 'hideButton'}`">Hozzáadás</button>
                <button @click="RecordsStore.updateRecord()" :class="`${!RecordsStore.isUpdateModeOn && 'hideButton'}`">Módosítás</button>
                <button @click="RecordsStore.deleteFormContent()">Adatok törlése</button>
                <button @click="RecordsStore.turnOffUpdateMode()" :class="`${!RecordsStore.isUpdateModeOn && 'hideButton'}`">Vissza</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.newRecord-container{
    width: 400px;
    height: 550px;
    background-color: var(--sec-background);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-200px) translateY(-275px);
    border-radius: 10px;
    padding: 5px;
}

.form-container{
    margin: auto;
}

.radioButtons-container{
    background-color: var(--main-background);
    width: fit-content;
    border: 2px solid var(--text-color);
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    width: 200px;
    text-align: center;
    margin: 5px;
}

.radioButtons-container > label{
    position: relative;
    top: -35%;
}

.radioButtons-container > input[type="radio"]{
    position: relative;
    top: -5%;
    accent-color: var(--sec-background);
}

.radioButtons-container > *{
    padding: 0px;
    margin: 0px;
    margin-right: 15px;
}

.categorySelect, .payeeInput, .amountInput{
    width: 200px;
}

.hideButton{
    height: 0px;
    width: 0px;
    overflow: hidden;
    border: 0px solid var(--text-color);
    transition: all ease-out .1s;
    margin: 0px;
    padding: 0px;
}

.buttons-container{
    margin-top: 20px;
    margin-left: 0px;
}
</style>
