<script setup>
</script>

<template>
  <section class="container about">
    <!-- Hero / Intro -->
    <div class="grid cols-2 hero">
      <div class="copy">
        <h1>About FifteenSun</h1>
        <p class="lead">
          I'm Wyatt, aka <strong>FifteenSun</strong>. I stream games and host charity events to support
          <em>Arkansas Children's Hospital</em> through the Extra Life program. Community and kindness drive everything I do.
        </p>
        <p>
          On this site you'll find my latest streams, photos from events, and ways to get involved. Whether you're here
          to hang out on Twitch or to donate — thank you for being part of the journey!
        </p>
        <div class="actions">
          <router-link class="btn btn-primary" :to="{ hash: '#about-extralife' }">About ExtraLife</router-link>
          <router-link class="btn btn-secondary" :to="{ hash: '#progress' }">2026 Progress</router-link>
        </div>
      </div>
      <img class="hero-image" src="/assets/logos/fifteensun-extralife.png" alt="FifteenSun logo with Extra Life branding" />
    </div>

    <!-- About Extra Life (moved from ExtraLife page) -->
    <div class="about-extralife" id="about-extralife">
      <div class="copy">
        <h2>About Extra Life</h2>
        <p class="lead">
          Extra Life unites thousands of gamers to play games and raise funds for local Children's Miracle Network
          Hospitals. I'm proud to support <strong>Arkansas Children's Hospital</strong>.
        </p>
        <p>
          Your donation goes directly to help kids get the care they need. Every bit of support helps our team reach new
          milestones and make a real difference.
        </p>
        <div class="actions">
          <a class="btn btn-primary" href="https://www.extra-life.org/participant/FifteenSun" target="_blank" rel="noopener noreferrer">Donate!</a>
        </div>
      </div>
      <img class="hero-image" src="/assets/logos/extralife.png" alt="Extra Life" />
    </div>

    <!-- Extra Life Journey -->
    <div class="extra-life">
      <h2>Extra Life Journey</h2>
      <p class="lead">
        I'm entering my <strong>third year</strong> in Extra Life and have been deemed <strong>team captain</strong> for the first time.
        My <strong>2026 goal</strong> is to raise <strong>$4,000</strong> for Arkansas Children's Hospital.
      </p>
      <ul class="stats">
        <li><strong>Year 1:</strong> Raised <strong>$2,119</strong> of a <strong>$2,000</strong> goal.</li>
        <li><strong>Year 2:</strong> Raised <strong>$3,749.69</strong> of a <strong>$3,500</strong> goal — we absolutely <strong>CRUSHED</strong> it!</li>
        <li><strong>Year 3:</strong> Working toward a <strong>$4,000</strong> goal! LIVE progress tracker below!</li>
      </ul>
      <div class="embed" id="progress">
        <iframe
          src="https://extralife-helper.breadweb.net/?pid=565898&v=-1&t=4&y=1&m=1&pd=1&n=1&e=1&yt=3&c5=1d4c6c&c4=fdaf03&c1=fdaf03&c3=eef0ef&st=1767247200000&f=1&d=1&vo=100&l=en&k=0&b=1&o=1&tid=&c2=1d4c6c&i=1&a=1&p=0"
          title="Extra Life 2026 Progress"
          width="100%"
          height="520"
          loading="lazy"
          style="border:0; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.12);"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { padding-block: 40px; }
.about-extralife { display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: 'copy image'; align-items: center; gap: 28px; margin-top: 24px; scroll-margin-top: 80px; }
.about-extralife .copy { grid-area: copy; }
.about-extralife .hero-image { grid-area: image; width: 100%; height: 560px; object-fit: contain; }

/* Hero grid with areas so we can reorder on mobile */
.hero { display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: 'copy image'; align-items: center; gap: 28px; }
.copy { grid-area: copy; }
.hero-image { grid-area: image; width: 100%; height: 560px; object-fit: contain; }

h1 { font-size: clamp(2.4rem, 3.6vw, 3.2rem); line-height: 1.15; margin: 0 0 16px; }
h2 { font-size: clamp(2rem, 2.8vw, 2.4rem); line-height: 1.2; margin: 40px 0 12px; }

.lead { font-size: 1.25rem; line-height: 1.8; }
p { font-size: 1.125rem; line-height: 1.9; }

.actions { margin-top: 12px; }
.btn { font-size: 1.0625rem; padding: 12px 18px; }
.btn + .btn { margin-left: 12px; }

.stats { margin: 12px 0 24px; padding: 0; list-style: none; }
.stats li { font-size: 1.125rem; margin-bottom: 8px; }

.embed { margin-top: 16px; scroll-margin-top: 80px; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; grid-template-areas: 'image' 'copy'; }
  .hero-image { height: 420px; margin-top: 0; }
  .about-extralife { grid-template-columns: 1fr; grid-template-areas: 'image' 'copy'; }
  .about-extralife .hero-image { height: 420px; }
}
</style>