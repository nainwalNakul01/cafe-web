<template>
  <Navbar />
  <section class="reservation-section">
    <h2>Reservations</h2>
    <p>Reserve your table for a special experience at Moonstitch Café.</p>
    <form class="reservation-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email" required />
      <input type="date" required />
      <input type="time" required />
      <button type="submit">Book Now</button>
    </form>
  </section>
</template>

<script setup>
import Navbar from '../Navbar.vue'
</script>

  <style scoped>
.reservation-section {
  background: #fff;
  padding: 3rem 0;
  text-align: center;
}
.reservation-form {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.reservation-form input {
  padding: 0.7rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 250px;
}
.reservation-form button {
  padding: 0.7rem 2rem;
  background: #7a5c3e;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.reservation-form button:hover {
  background: #e0c9a6;
  color: #333;
}
</style>
