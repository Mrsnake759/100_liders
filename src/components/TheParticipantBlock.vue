<template>
  <div class="program-schedule text-center">
    <h2 class="title text-2xl md:text-5xl md:text-start mb-10">Расписание программ</h2>
<!--    <div class="tabs">-->
<!--      <span>Будущие</span>-->
<!--      <span>Прошедшие</span>-->
<!--    </div>-->
    <swiper :slides-per-view="1.2" :space-between="20" :centered-slides="centeredSlides" :breakpoints="breakpoints">
      <swiper-slide v-for="(program, index) in programs" :key="index" class="slide">
        <div class="program-info">
          <div class="program-header">
            <span class="program-batch">{{ program.batch }}</span>
            <span class="program-title">{{ program.title }}</span>
          </div>
          <div class="program-dates">{{ program.dates }}</div>
          <img :src="program.image" alt="Program Image" class="program-image" />
          <p class="program-description">{{ program.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: "TheParticipantBlock",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      programs: [
        {
          batch: '9 поток',
          title: 'Лидерская программа',
          dates: '22.07 - 26.07',
          image: 'src/assets/slide1.png',
          description: 'Технические решения, которые повлияют на дальнейшую эксплуатацию, и реализация проекта в соответствии с политикой компании.'
        },
        {
          batch: '9 поток',
          title: 'Лидерская программа',
          dates: '22.07 - 26.07',
          image: 'src/assets/slide1.png',
          description: 'Технические решения, которые повлияют на дальнейшую эксплуатацию, и реализация проекта в соответствии с политикой компании.'
        },
        {
          batch: '9 поток',
          title: 'Лидерская программа',
          dates: '22.07 - 26.07',
          image: 'src/assets/slide1.png',
          description: 'Технические решения, которые повлияют на дальнейшую эксплуатацию, и реализация проекта в соответствии с политикой компании.'
        },
        {
          batch: '9 поток',
          title: 'Лидерская программа',
          dates: '22.07 - 26.07',
          image: 'src/assets/slide1.png',
          description: 'Технические решения, которые повлияют на дальнейшую эксплуатацию, и реализация проекта в соответствии с политикой компании.'
        },
        // Add more programs as needed
      ],
      centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: 1.5,
          centeredSlides: false,
        },
        1280: {
          slidesPerView: 2.5,
          centeredSlides: false,
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
.title {
  font-family: "Muller-bold", serif;
}

.program-schedule {
  color: #fff;
  padding: 20px;
}

.tabs {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.tabs span {
  margin: 0 10px;
  cursor: pointer;
  border-bottom: 2px dashed #fff;
}

.slide {
  margin-top: 15px;
  background-color: #fff;
  border-radius: 40px;
  padding: 40px 30px;
  color: #000;
}

.program-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.program-header {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 200px;
  width: 100%;
  margin-bottom: 10px;
}

.program-batch {
  font-weight: bold;
}

.program-title {
  display: block;
}

.program-dates {
  margin: 10px 0;
  font-weight: bold;
}

.program-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.program-description {
  text-align: start;
}
</style>
