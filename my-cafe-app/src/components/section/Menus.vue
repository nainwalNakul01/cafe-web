<template>
  <Navbar />
  <section class="menus-section">
    <h1>Our Menu</h1>
    <div class="menus-list">
      <div class="menu-category">
        <h2>Coffee & Beverages</h2>
        <ul>
          <li>Espresso - $3.00</li>
          <li>Cappuccino - $3.50</li>
          <li>Latte - $4.00</li>
          <li>Iced Coffee - $3.50</li>
        </ul>
      </div>
      <div class="menu-category">
        <h2>Pastries</h2>
        <ul>
          <li>Croissant - $2.50</li>
          <li>Chocolate Muffin - $2.75</li>
          <li>Banana Bread - $2.50</li>
        </ul>
      </div>
      <div class="menu-category">
        <h2>Brunch Specials</h2>
        <ul>
          <li>Avocado Toast - $6.00</li>
          <li>Eggs Benedict - $7.50</li>
          <li>Pancake Stack - $5.50</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from '../Navbar.vue'
</script>

<style scoped>
.menus-section {
  padding: 3rem 1rem;
  background: #fff;
  min-height: 80vh;
  text-align: center;
}
.menus-section h1 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #7a5c3e;
}
.menus-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.menu-category {
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem 1rem;
  min-width: 200px;
  max-width: 260px;
}
.menu-category h2 {
  color: #7a5c3e;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
.menu-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-category li {
  padding: 0.4rem 0;
  font-size: 1rem;
  border-bottom: 1px solid #e0c9a6;
}
.menu-category li:last-child {
  border-bottom: none;
}
</style>
