<template>
  <Navbar />
  <section class="about-section">
    <div class="about-content">
      <img src="/src/assets/images/about-cafe.jpg" alt="Cafe Interior" class="about-img" />
      <div>
        <h2>About Us</h2>
        <p>
          Welcome to Moonstitch Café, where every cup tells a story.
          We blend tradition and innovation to create a cozy space for coffee lovers and foodies alike.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from '../Navbar.vue'
</script>

<style scoped>
.about-section {
  background: #fff;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
}
.about-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.about-img {
  width: 300px;
  border-radius: 16px;
  border: 4px solid #e0c9a6;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
}
.about-img:hover {
  transform: scale(1.04);
  box-shadow: 0 16px 48px rgba(0,0,0,0.18);
}
</style>
