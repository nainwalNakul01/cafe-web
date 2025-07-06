<script setup>
import coffeeImg from '/src/assets/images/coffee.jpg'
import pastryImg from '/src/assets/images/pastry.jpg'
import brunchImg from '/src/assets/images/brunch.jpg'
</script>

<template>
  <section class="menu-highlights">
    <h2>Menu Highlights</h2>
    <div class="menu-items">
      <div class="menu-card">
        <img :src="coffeeImg" alt="Signature Coffee" />
        <h3>Signature Coffee</h3>
        <p>Rich, aromatic, and brewed to perfection.</p>
      </div>
      <div class="menu-card">
        <img :src="pastryImg" alt="Fresh Pastries" />
        <h3>Fresh Pastries</h3>
        <p>Handmade daily with the finest ingredients.</p>
      </div>
      <div class="menu-card">
        <img :src="brunchImg" alt="Brunch Specials" />
        <h3>Brunch Specials</h3>
        <p>Delicious options for a perfect start to your day.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-highlights {
  background: #f5f5f5;
  padding: 3rem 0;
  text-align: center;
}
.menu-items {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}
.menu-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem;
  width: 220px;
}
.menu-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease-in-out;
  animation: fadeIn 1s ease-in-out;
}
.menu-card img:hover {
  transform: scale(1.05);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
