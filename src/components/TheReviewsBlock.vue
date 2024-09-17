<template>
  <div class="slider-container">
    <h2><span class="highlight">Отзывы участников</span> о Лидерской программе</h2>
    <swiper :slides-per-view="1.2" :space-between="20" centered-slides>
      <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
        <div class="slide-content">
          <img :src="testimonial.image" alt="Profile Image" class="profile-image" />
          <h3>{{ testimonial.name }}</h3>
          <p class="position">{{ testimonial.position }}</p>
          <p>{{ testimonial.feedback }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: "TheReviewsBlock",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      testimonials: [
        {
          name: 'Юнусов Раиль',
          position: 'Ведущий специалист ОАиТС',
          image: 'src/assets/reviews_slide-1.png', // Replace with actual image path
          feedback: 'По результатам 5 дней на программе 100 лидеров, я приобрел кучу новых знакомств, познакомился ближе с компанией, прошел более 10 собеседований и получил возможность самому выбрать интересный отдел в компании.'
        },
        {
          name: 'Юнусов Раиль',
          position: 'Ведущий специалист ОАиТС',
          image: 'src/assets/reviews_slide-1.png', // Replace with actual image path
          feedback: 'По результатам 5 дней на программе 100 лидеров, я приобрел кучу новых знакомств, познакомился ближе с компанией, прошел более 10 собеседований и получил возможность самому выбрать интересный отдел в компании.'
        },
        {
          name: 'Юнусов Раиль',
          position: 'Ведущий специалист ОАиТС',
          image: 'src/assets/reviews_slide-1.png', // Replace with actual image path
          feedback: 'По результатам 5 дней на программе 100 лидеров, я приобрел кучу новых знакомств, познакомился ближе с компанией, прошел более 10 собеседований и получил возможность самому выбрать интересный отдел в компании.'
        },
        {
          name: 'Юнусов Раиль',
          position: 'Ведущий специалист ОАиТС',
          image: 'src/assets/reviews_slide-1.png', // Replace with actual image path
          feedback: 'По результатам 5 дней на программе 100 лидеров, я приобрел кучу новых знакомств, познакомился ближе с компанией, прошел более 10 собеседований и получил возможность самому выбрать интересный отдел в компании.'
        },
        // Add more testimonials as needed
      ]
    };
  }
};
</script>

<style scoped>
.slider-container {
  //background-color: #003366;
  //padding: 20px;
  border-radius: 40px;
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
  background-color: white;
  color: #333;
  border-radius: 40px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
  margin-right: 10px;
}

h3 {
  margin: 0;
  font-size: 18px;
}

.position {
  color: #ff3366;
  font-size: 14px;
  margin: 5px 0;
}

p {
  clear: both;
  margin-top: 10px;
}
</style>
