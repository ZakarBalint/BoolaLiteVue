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
.outer-grid{
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 0;
  height: 100lvh;
  background-color: var(--main-background);
}

.inner-asd{
  margin: 0;
}
</style>