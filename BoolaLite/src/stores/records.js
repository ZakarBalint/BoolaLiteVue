import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const hostname = "http://localhost:3000";

export const useRecordsStore = defineStore('records', () => {
    const records = ref([]);

    const newRecord = ref({
        type: "",
        payee: "",
        category: "",
        amount: "",
        currency: "",
    })

    const isUpdateModeOn = ref(false);
    const currentUpdateRecordId = ref("");

    function getRecords() {
        axios.get(`${hostname}/Records`)
            .then(r => records.value = r.data)
    }

    function deleteRecord(id) {
        axios.delete(`${hostname}/Records/${id}`)
            .then(r => {getRecords()});
            
        alert("Sikeres törlés!");
    }

    function addRecord() {
        if(checkIsFormFilled())
        {
            axios.post(`${hostname}/Records`, newRecord.value)
                .then(r => {getRecords()});

            deleteFormContent();
            alert("Sikeres hozzáadás!");
        }
        else{
            alert("Minden mezőt ki kell tölteni!");
        }
        
    }

    function updateRecord() {
        if(checkIsFormFilled())
        {
            axios.put(`${hostname}/Records/${currentUpdateRecordId.value}`, newRecord.value)
                .then(r => {getRecords()});
            
            deleteFormContent();
            turnOffUpdateMode();
            alert("Sikeres módosítás!");
        }
        else{
            alert("Minden mezőt ki kell tölteni!");
        }
    }

    function startRecordUpdate(record){        
        newRecord.value.type = record.type;
        newRecord.value.payee = record.payee;
        newRecord.value.category = record.category;
        newRecord.value.amount = record.amount;
        newRecord.value.currency = record.currency;

        currentUpdateRecordId.value = record.id;
        isUpdateModeOn.value = true;
    }

    function deleteFormContent(){
        newRecord.value.type = "";
        newRecord.value.payee = "";
        newRecord.value.category = "";
        newRecord.value.amount = "";
        newRecord.value.currency = "";
    }

    function checkIsFormFilled(){
        if(
            newRecord.value.type.trim() == "" ||
            newRecord.value.payee.trim() == "" ||
            newRecord.value.category.trim() == "" ||
            newRecord.value.amount == "" ||
            newRecord.value.currency.trim() == ""
        ){
            return false;
        }
        else{
            return true;
        }

    }

    function turnOffUpdateMode(){
        isUpdateModeOn.value = false;
    }

    getRecords();
    
    return{
        records,
        newRecord,
        isUpdateModeOn,
        getRecords,
        deleteRecord,
        addRecord,
        updateRecord,
        deleteFormContent,
        startRecordUpdate,
        turnOffUpdateMode,
    }
})