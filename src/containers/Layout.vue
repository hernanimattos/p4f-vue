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
  name: 'home-base'
};
</script>

<style>
.main-container {
  display: grid;
}

@media screen and (min-width: 768px) {
  .main-container {
    grid-template-columns: 1fr 3fr;
  }
}
header {
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
