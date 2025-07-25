<template>
  <div class="container">
    <h1>Dry Dock Management</h1>
    <div v-for="dock in docks" :key="dock.id" class="card">
      <h2>{{ dock.dock_no }}</h2>
      <p><strong>Description:</strong> {{ dock.description }}</p>
      <p><strong>Company:</strong> {{ dock.company }}</p>
      <p><strong>Budget:</strong> ${{ dock.budget }}</p>
    </div>
  </div>
</template>

<script setup>
const { data: docks } = await useFetch('http://localhost:5000/api/drydocks');
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.card {
  background: #f2f2f2;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 6px;
}
</style>
