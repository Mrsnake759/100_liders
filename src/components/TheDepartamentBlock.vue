<template>
  <div class="departaments flex flex-col xl:hidden">
    <h2 class="departaments-title text-2xl md:text-5xl"><span class="departaments-title-span">24 отдела</span> <br>для трудоустройства</h2>
    <p class="mt-8">Программа "100 Лидеров" это уникальная возможность найти свое призвание и встать в ряды с одними из лучших специалистов нашей великой страны!</p>
    <p class="mt-3">Ознакомьтесь со всеми нашими отделами подробнее в ВКонтакте!</p>
    <div class="departaments-arrow"><icon-departament-arrow /></div>
    <button class="mt-3 bg-brand-2 w-80 rounded-3xl departaments-button">Перейти в ВК</button>
  </div>
  <div class="departments-container hidden xl:block">
    <h2 class="departments-container-title"><span class="highlight">24 отдела</span> для трудоустройства</h2>
    <div class="departments-grid">
      <div
        v-for="(department, index) in departments"
        :key="index"
        class="department-item"
        @click="openModal(department)"
      >
        {{ department.name }}
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>{{ selectedDepartment.name }}</h3>
        <p>{{ selectedDepartment.description }}</p>
        <button class="rounded-3xl" @click="closeModal">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import IconDepartamentArrow from "@/components/icons/IconDepartamentArrow.vue";
export default {
  name: "TheDepartamentBlock",
  components: {
    IconDepartamentArrow
  },
  data() {
    return {
      departments: [
        { name: 'Аппарат генерального директора', description: 'Описание для аппарата генерального директора' },
        { name: 'Департамент арендного бизнеса', description: 'Описание для департамента арендного бизнеса' },
        { name: 'Департамент сервисного обслуживания', description: 'Описание для департамента сервисного обслуживания' },
        { name: 'Коммерческий отдел', description: 'Описание для коммерческого отдела' },
        { name: 'Служба стратегического развития', description: 'Описание для службы стратегического развития' },
        { name: 'Управление по взаимодействию по СНГ', description: 'Описание для управления по взаимодействию по СНГ' },
        { name: 'Сектор собственной безопасности', description: 'Описание для сектора собственной безопасности' },
        { name: 'Управление по привлечению инвестиций', description: 'Описание для управления по привлечению инвестиций' },
        { name: 'Управление HR', description: 'Описание для управления HR' },
        { name: 'Управление бухгалтерского и налогового учета', description: 'Описание для управления бухгалтерского и налогового учета' },
        { name: 'Управление взаимодействия с резидентами', description: 'Описание для управления взаимодействия с резидентами' },
        { name: 'Отдел организации складских площадей', description: 'Описание для отдела организации складских площадей' },
        { name: 'Производственное подразделение', description: 'Описание для производственного подразделения' },
        { name: 'Маркетинг и PR', description: 'Описание для маркетинга и PR' },
        { name: 'Служба администрирования образовательного кластера', description: 'Описание для службы администрирования образовательного кластера' },
        { name: 'Служба администрирования арендного жилья', description: 'Описание для службы администрирования арендного жилья' },
        { name: 'Управление экономики', description: 'Описание для управления экономики' },
        { name: 'Служба безопасности и пропускного режима', description: 'Описание для службы безопасности и пропускного режима' },
        { name: 'Управление группы проектов', description: 'Описание для управления группы проектов' },
        { name: 'Строительство', description: 'Описание для строительства' },
        { name: 'Управление цифровой трансформации', description: 'Описание для управления цифровой трансформации' },
        { name: 'Управление эксплуатации и энергетики', description: 'Описание для управления эксплуатации и энергетики' },
        { name: 'Юридическая служба', description: 'Описание для юридической службы' },
        { name: 'Служба развития новых площадок', description: 'Описание для службы развития новых площадок' },
        { name: 'Управление финансами', description: 'Описание для управления финансами' }
      ],
      showModal: false,
      selectedDepartment: null,
    };
  },
  methods: {
    openModal(department) {
      this.selectedDepartment = department;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedDepartment = null;
    },
  },
};
</script>

<style scoped lang="scss">
.departaments {
  &-title {
    font-family: "Muller-bold", serif;

    &-span {
      color: #00ADEF;
    }
  }

  &-arrow {
    align-self: center;
  }

  &-button {
    align-self: center;
    padding: 10px;
    font-size: 18px;
  }
}
.departments-container {
  //background-color: #003366;
  color: white;
  //padding: 40px;
  //border-radius: 10px;
  //max-width: 900px;
  margin: auto;
  text-align: center;
}

.departments-container-title {
  text-align: start;
  margin-bottom: 30px;
  font-size: 42px;
}

.highlight {
  color: #00bfff;
}

.departments-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.department-item {
  background-color: #0055aa;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  text-align: center;
  flex: 0 1 auto;
  cursor: pointer;
  transition: background-color 0.3s;
}

.department-item:hover {
  background-color: #0077cc;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0055aa;
  color: white;
  border: none;
  //border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0077cc;
}
</style>
