<template>
  <main>
    <header class="header">
      <slot name="header"> </slot>
    </header>
    <section class="main-container">
      <slot name="left-side"> </slot>
      <slot name="main-content"> </slot>
    </section>
  </main>
</template>

<script>
export default {
  name: 'home-base',
};
</script>

<style>
.main-container {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 3fr;
}
</style>
