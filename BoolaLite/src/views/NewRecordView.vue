<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';

    const hostname = "http://localhost:3000"
    const categories = ref([]);
    const currencies = ref([]);

    onMounted(() => {
        axios.get(`${hostname}/asd`)
            .then(r => categories.value = r.data.Categories)
        axios.get(`${hostname}/asd`)
            .then(r => currencies.value = r.data.Currencies)
        
    })

    const newRecord = ref({
        /*
            type: null,
            payee: null,
            category: null,
            amount: null,
            currency: null,
        */
        
        type: null,
        payee: null,
        category: null,
        amount: null,
        currency: null,
    })



    const add = () => {
        console.log(newRecord.value);

        if(newRecord.value == null)
        {
            console.log("asd");
        }

        axios.post(`${hostname}/Records`, newRecord.value);
    }

</script>

<template>
    <div class="newRecord-container">
        <h2>Új rekord</h2>
        <div class="form-container">
            <div class="form">
                <h3>Rekord fajtája</h3>
                <div class="radioButtons-container">
                    <input type="radio" name="radio1" id="radioExpense" value="Kiadás" v-model="newRecord.type">
                    <label for="radioExpense">Kiadás</label>
                    <input type="radio" name="radio1" id="radioIncome" value="Bevétel" v-model="newRecord.type">
                    <label for="radioIncome">Bevétel</label>
                </div>
            </div>
            <div class="form">
                <h3>Kezdeményezett</h3>
                <input type="text" v-model="newRecord.payee">
            </div>
            <div class="form">
                <h3>Menyiség</h3>
                <input type="number" v-model="newRecord.amount">
                <select v-model="newRecord.currency">
                    <option disabled value="">Kérem válasszon!</option>
                    <option v-for="currency in currencies" :value="currency">{{ currency }}</option>
                </select>
            </div>
            <div class="form">
                <h3>Kategória</h3>
                <select v-model="newRecord.category">
                    <option disabled value="">Kérem válasszon!</option>
                    <option v-for="category in categories" :value="category">{{ category }}</option>
                </select>
            </div>
            <div class="buttons-container">
                <button @click="add()">Hozzadas</button>
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
}

.radioButtons-container > *{
    padding: 0px;
    margin: 0px;
    margin-right: 5px;
}
</style>
