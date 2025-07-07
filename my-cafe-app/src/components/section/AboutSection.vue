<template>
  <Navbar />
  <section class="about-section">
    <div class="about-container">
      <!-- Main About Section -->
      <div class="main-about">
        <h1>About Moonstitch Café</h1>
        <p class="intro-text">
          Welcome to Moonstitch Café, where every cup tells a story.
          We blend tradition and innovation to create a cozy space for coffee lovers and foodies alike.
        </p>
      </div>

      <!-- Owner Section -->
      <div class="team-card">
        <img src="/src/assets/images/owner.jpg" alt="Cafe Owner Nakul" class="team-img" />
        <div class="team-info">
          <h2>Nakul - Cafe Owner</h2>
          <p>With over 10 years of experience in the hospitality industry, Nakul brings his passion for creating memorable dining experiences to Moonstitch Café. His vision is to create a warm, welcoming space where every guest feels like family.</p>
        </div>
      </div>

      <!-- Chef Section -->
      <div class="team-card reverse">
        <img src="/src/assets/images/chef.jpg" alt="Head Chef" class="team-img" />
        <div class="team-info">
          <h2>Our Head Chef</h2>
          <p>Our talented head chef brings creativity and expertise to every dish. With a focus on fresh, locally-sourced ingredients, we create delicious meals that satisfy both traditional and modern palates.</p>
        </div>
      </div>

      <!-- Management Staff -->
      <div class="team-card">
        <img src="/src/assets/images/staff.jpg" alt="Management Staff" class="team-img" />
        <div class="team-info">
          <h2>Management Team</h2>
          <p>Our dedicated management team ensures smooth operations and exceptional service. From front-of-house to kitchen coordination, every detail is carefully managed to provide you with the best experience.</p>
        </div>
      </div>

      <!-- What We Offer -->
      <div class="offers-section">
        <h2>What We Offer</h2>
        <div class="offers-grid">
          <div class="offer-item">
            <h3>Specialty Coffee</h3>
            <p>Artisanal coffee brewed to perfection using premium beans from around the world.</p>
          </div>
          <div class="offer-item">
            <h3>Fresh Pastries</h3>
            <p>Handmade pastries and baked goods prepared fresh daily in our kitchen.</p>
          </div>
          <div class="offer-item">
            <h3>Brunch Menu</h3>
            <p>Delicious brunch options featuring both sweet and savory dishes.</p>
          </div>
          <div class="offer-item">
            <h3>Cozy Atmosphere</h3>
            <p>A warm, inviting space perfect for meetings, dates, or quiet moments.</p>
          </div>
        </div>
      </div>

      <!-- Location Section -->
      <div class="location-section">
        <h2>Visit Us</h2>
        <div class="location-info">
          <div class="address">
            <h3>Location</h3>
            <p>123 Moonlight Avenue<br>Downtown District<br>City, State 12345</p>
          </div>
          <div class="hours">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 7:00 AM - 8:00 PM<br>
               Saturday - Sunday: 8:00 AM - 9:00 PM</p>
          </div>
          <div class="contact">
            <h3>Contact</h3>
            <p>Phone: (123) 456-7890<br>
               Email: hello@moonstitchcafe.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from '../Navbar.vue'
</script>

<style scoped>
.about-section {
  background: #f5f5f5;
  padding: 2rem 0;
  min-height: 100vh;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.main-about {
  text-align: center;
  margin-bottom: 3rem;
}

.main-about h1 {
  font-size: 2.5rem;
  color: #7a5c3e;
  margin-bottom: 1rem;
}

.intro-text {
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.team-card {
  display: flex;
  align-items: center;
  gap: 3rem;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  opacity: 0;
  transform: translateX(-100px);
  animation: slideInLeft 0.8s ease-out forwards;
}

.team-card.reverse {
  flex-direction: row-reverse;
  opacity: 0;
  transform: translateX(100px);
  animation: slideInRight 0.8s ease-out forwards;
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Add staggered animation delays for multiple cards */
.team-card:nth-child(2) {
  animation-delay: 0.2s;
}

.team-card:nth-child(3) {
  animation-delay: 0.4s;
}

.team-card:nth-child(4) {
  animation-delay: 0.6s;
}

.team-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #e0c9a6;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

.team-info h2 {
  color: #7a5c3e;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.team-info p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

.offers-section {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.offers-section h2 {
  text-align: center;
  color: #7a5c3e;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.offer-item {
  text-align: center;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.offer-item:hover {
  transform: translateY(-5px);
}

.offer-item h3 {
  color: #7a5c3e;
  margin-bottom: 1rem;
}

.offer-item p {
  color: #666;
  line-height: 1.5;
}

.location-section {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.location-section h2 {
  text-align: center;
  color: #7a5c3e;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.location-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.address, .hours, .contact {
  text-align: center;
}

.address h3, .hours h3, .contact h3 {
  color: #7a5c3e;
  margin-bottom: 1rem;
}

.address p, .hours p, .contact p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .team-card, .team-card.reverse {
    flex-direction: column;
    text-align: center;
  }
  
  .team-img {
    width: 150px;
    height: 150px;
  }
  
  .offers-grid {
    grid-template-columns: 1fr;
  }
  
  .location-info {
    grid-template-columns: 1fr;
  }
}
</style>
