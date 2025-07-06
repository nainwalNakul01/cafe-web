<template>
  <nav class="navbar">
    <div class="logo">Moonstitch Café</div>
    <ul>
      <li class="nav-item"><router-link to="/">Home</router-link></li>
      <li class="nav-item"><router-link to="/section/AboutSection">About Us</router-link></li>
      <li class="nav-item"><router-link to="/section/Menus">Menus</router-link></li>
      <li class="nav-item"><router-link to="/section/Reservation">Reservations</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: #7a5c3e;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
}
.logo {
  font-weight: bold;
  font-size: 1.3rem;
  color: #fff;
}
.navbar ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  white-space: nowrap;
}
.nav-item a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.2s;
}
.nav-item a:hover {
  color: #e0c9a6;
  text-decoration: underline;
}
</style>
