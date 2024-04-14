<script setup>
  import NewRecordView from './views/NewRecordView.vue';
  import RecordsView from './views/RecordsView.vue';
</script>

<template>
  <div class="outer-grid">
    <div class="inner-asd">
      <NewRecordView/>
    </div>
    <div class="inner-asd">
      <RecordsView/>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined");

@media screen and (min-width: 1200px) {
  .outer-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;
    margin: 0;
    height: 100lvh;
  }
}

@media screen and (max-width: 1199px) {
  .outer-grid{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr, 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 30px;
    margin: 0;
    box-sizing: border-box;
  }
}

.inner-asd{
  margin: 0;
}
</style>