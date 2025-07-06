<template>
  <section class="hero-section">
    <div class="overlay">
      <h1>Stitching together moments<br>under the moonlight.</h1>
      <p>Your Gateway to Culinary Bliss</p>
      <a href="#" class="cta-btn">Explore Menu</a>
    </div>
  </section>

 <MenuHighlights />


</template>
<script setup>
import MenuHighlights from './MenuHighlights.vue'
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  width: auto;
  background: url('/src/assets/images/home-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  animation: heroPan 3s ease-in-out;
}

@keyframes heroPan {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}
.overlay {
  background: rgba(0,0,0,0.3);
  padding: 2rem 3rem;
  border-radius: 12px;
  text-align: center;
  color: #fff;
  animation: fadeIn 3s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.cta-btn {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-size: 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.cta-btn:hover {
  background: #fff;
  color: #333;
}
</style>
