<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-content">
        <div class="logo-section">
          <router-link class="logo" to="/">
            <img src="../assets/LogoFooter.svg" alt="" />
          </router-link>
          <p class="description">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>

        <nav class="footer-nav">
          <div class="nav-column">
            <h2 class="nav-title">Services</h2>
            <ul class="nav-list">
              <li><a href="#" class="nav-link">Bonus program</a></li>
              <li><a href="#" class="nav-link">Gift cards</a></li>
              <li><a href="#" class="nav-link">Credit and payment</a></li>
              <li><a href="#" class="nav-link">Service contracts</a></li>
              <li><a href="#" class="nav-link">Non-cash account</a></li>
              <li><a href="#" class="nav-link">Payment</a></li>
            </ul>
          </div>
          <div class="nav-column">
            <h2 class="nav-title">Assistance to the buyer</h2>
            <ul class="nav-list">
              <li><a href="#" class="nav-link">Find an order</a></li>
              <li><a href="#" class="nav-link">Terms of delivery</a></li>
              <li><a href="#" class="nav-link">Exchange and return of goods</a></li>
              <li><a href="#" class="nav-link">Guarantee</a></li>
              <li><a href="#" class="nav-link">Frequently asked questions</a></li>
              <li><a href="#" class="nav-link">Terms of use of the site</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="social-icons">
        <a href="#" class="social-link" aria-label="Twitter">
          <img class="social-logo" src="../assets/Twitter.svg" alt="Twitter" />
        </a>
        <a href="#" class="social-link" aria-label="Facebook">
          <img class="social-logo" src="../assets/Facebook.svg" alt="Facebook" />
        </a>
        <a href="#" class="social-link" aria-label="TikTok">
          <img class="social-logo" src="../assets/tiktok.svg" alt="TikTok" />
        </a>
        <a href="#" class="social-link" aria-label="Instagram">
          <img class="social-logo" src="../assets/Instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterStore",
});
</script>

<style scoped>
.footer {
  background-color: #000;
}

.footer-inner {
  padding: 104px 0;
  max-width: 1120px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
}
@media (max-width: 1200px) {
  .footer-inner {
    padding: 80px 20px;
  }
}
@media (max-width: 991px) {
  .footer-inner {
    padding: 80px 0;
    max-width: 311px;
    text-align: center;
  }
  .footer-content {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .footer-inner {
    padding: 40px 0;
  }
}
.logo-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 384px;
}
.description {
  color: #cfcfcf;
  font-size: 14px;
  font-style: italic;
  line-height: 170.5%;
  margin: 0;
}

@media (max-width: 640px) {
  .logo-section {
    width: 100%;
  }
  .logo {
    margin: 0 auto;
  }
  .description{
    font: 13px Inter, sans-serif;
    line-height: 24px;
  }
}
.footer-nav {
  display: flex;
  justify-content: space-between;
  width: 623px;
  gap: 32px;
}
.nav-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 50%;
}
.nav-title {
  color: #fff;
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 8px;
  font-weight: normal;
}
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.nav-link {
  color: #cfcfcf;
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 14px;
  line-height: 29px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.nav-link:hover {
  color: #fff;
}

@media (max-width: 991px) {
  .footer-nav {
    width: 100%;
    flex-direction: column;
    gap: 40px;
  }
  .nav-column {
    width: 100%;
  }
}
.social-icons {
  display: flex;
  margin-top: 24px;
  width: 173px;
  justify-content: space-around;
  gap: 27px;
}
.social-link {
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.social-link:hover {
  opacity: 0.8;
}
.social-logo {
  width: 16px;
  height: 16px;
}

@media (max-width: 640px) {
  .social-icons {
    margin: 30px auto 0;
  }
  .social-logo {
    width: 24px;
    height: 24px;
  }
}
</style>
