<template>
  <div class="slider-container">
    <h2 class="departaments-title text-2xl"><span class="highlight">Истории</span>  успеха</h2>
    <p>Пройди заочный этап и получи шанс попасть в команду лучших</p>
    <swiper :slides-per-view="1.2" :space-between="20" centered-slides>
      <swiper-slide v-for="(story, index) in stories" :key="index">
        <div class="slide-content">
          <img :src="story.image" alt="Profile Image" class="profile-image" />
          <div class="age-badge">{{ story.age }} год</div>
          <h3 class="mt-5 text-xl bold">{{ story.name }}</h3>
          <p class="position">{{ story.position }}</p>
          <p>{{ story.description }}</p>
<!--          <a href="#" class="more-link">Подробнее</a>-->
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: "TheSuccessBlock",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      stories: [
        {
          name: 'Зарипов Денис',
          position: 'Руководитель группы проектов отдела Управления HR',
          image: 'src/assets/success_slide-1.png', // Replace with actual image path
          age: 31,
          description: 'Вставить согласованные фото руководителей в прямоугольнике с закруглёнными краями (в общей стилистике сайта) и добавить'
        },
        {
          name: 'Зарипов Денис',
          position: 'Руководитель группы проектов отдела Управления HR',
          image: 'src/assets/success_slide-1.png', // Replace with actual image path
          age: 31,
          description: 'Вставить согласованные фото руководителей в прямоугольнике с закруглёнными краями (в общей стилистике сайта) и добавить'
        },
        {
          name: 'Зарипов Денис',
          position: 'Руководитель группы проектов отдела Управления HR',
          image: 'src/assets/success_slide-1.png', // Replace with actual image path
          age: 31,
          description: 'Вставить согласованные фото руководителей в прямоугольнике с закруглёнными краями (в общей стилистике сайта) и добавить'
        },
        {
          name: 'Зарипов Денис',
          position: 'Руководитель группы проектов отдела Управления HR',
          image: 'src/assets/success_slide-1.png', // Replace with actual image path
          age: 31,
          description: 'Вставить согласованные фото руководителей в прямоугольнике с закруглёнными краями (в общей стилистике сайта) и добавить'
        },
        // Add more stories as needed
      ]
    };
  }
};
</script>

<style scoped>
.slider-container {
  //padding: 20px;
  border-radius: 10px;
  color: white;
  max-width: 400px;
  margin: auto;
  text-align: start;
}

h2 {
  margin-bottom: 10px;
}

.highlight {
  color: #00bfff;
}

p {
  margin-bottom: 20px;
}

.slide-content {
  margin-top: 30px;
  text-align: start;
  background-color: #2C3C98;
  color: white;
  border-radius: 40px;
  padding: 40px 30px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.age-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  text-align: center;
  font-size: 18px;
  position: absolute;
  top: 200px;
  right: 10px;
  background-color: #ff3366;
  color: white;
  border-radius: 50%;
  padding: 10px;
  line-height: normal;
}

.position {
  font-weight: bold;
  margin: 10px 0;
}

.more-link {
  color: #00bfff;
  text-decoration: none;
  font-weight: bold;
}
</style>
