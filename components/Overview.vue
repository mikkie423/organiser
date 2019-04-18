<template>
  <div class="grid">
    <div class="planner">planner</div>
    <div class="almanac">almanac</div>
    <div class="notifications">all of the notifications</div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'planner almanac'
    'notifications notifications';
}
.notifications {
  grid-area: notifications;
}
</style>
