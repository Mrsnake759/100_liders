<template>
  <div class="slider-container">
    <h2>Что <span class="highlight">ждет тебя</span> на Лидерской программе</h2>
    <swiper :slides-per-view="1.2" :space-between="20" centered-slides>
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="slide-content">
          <div class="flex flex-col">
            <img :src="item.image" alt="Slide Image" class="slide-image" />
            <img :src="item.image2" alt="Slide Image" class="slide-image mt-5" />
          </div>
          <div class="overlay">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: "TheAwaitsBlock",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      items: [
        {
          image: 'src/assets/awaits_slide-1.png', // Replace with actual image path
          image2: 'src/assets/awaits_slide-2.png',
          description: 'Экскурсия по территории особой экономической зоны и объектам компании'
        },
        {
          image: 'src/assets/awaits_slide-2.png', // Replace with actual image path
          description: 'Знакомство с топ-менеджерами компании'
        },
        // Add more items as needed
      ]
    };
  }
};
</script>

<style scoped>
.slider-container {
  //background-color: #003366;
  padding: 20px;
  //border-radius: 10px;
  color: white;
  max-width: 400px;
  margin: auto;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.highlight {
  color: #00bfff;
}

.slide-content {
  position: relative;
  //border-radius: 10px;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  //border-radius: 10px;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  //background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  text-align: left;
  //border-radius: 0 0 10px 10px;
}
</style>
