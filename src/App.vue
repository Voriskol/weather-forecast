<script setup>
import WeatherSummary from './components/WeatherSummary.vue'
import TheHighlights from './components/TheHighlights.vue'
import TheCoords from './components/TheCoords.vue'
import TheHumidity from './components/TheHumidity.vue'
import { API_KEY, BASE_URL } from '@/constants/index.js'
import { ref, onMounted, computed } from 'vue'

const city = ref('Cherepovets')
const weatherInfo = ref(null)
const isError = computed(() => weatherInfo.value?.cod != '200')

async function getWeather() {
  await fetch(`${BASE_URL}?q=${city.value}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => (weatherInfo.value = data))
}

onMounted(getWeather)
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section :class="['section', 'section-left', { 'section-error': isError }]">
              <div class="info">
                <div class="city-inner">
                  <input @keyup.enter="getWeather" v-model="city" type="text" class="search" />
                </div>
                <WeatherSummary v-if="!isError" :weather-info="weatherInfo" />
                <div v-else class="error">
                  <div class="error-title">Ooops! Something went wrong</div>
                  <div v-if="weatherInfo?.message" class="error-text">
                    {{ weatherInfo?.message }}
                  </div>
                </div>
              </div>
            </section>
            <section class="section section-right">
              <TheHighlights v-if="!isError" :weather-info="weatherInfo" />
            </section>
          </div>
          <div v-if="!isError" class="sections">
            <section class="section-bottom">
              <TheCoords :coord="weatherInfo.coord" />
            </section>
            <section class="section-bottom">
              <TheHumidity :humidity="weatherInfo.main.humidity" />
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/main.sass'

.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  padding: 20px 0
  background-color: #59585d

.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section-left
  width: 30%
  padding-right: 10px

  &.section-error
    min-width: 235px
    width: auto
    padding-right: 0

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.section-right
  width: 70%
  padding-left: 10px

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('@/assets/img/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('@/assets/img/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  padding: 16px
  font-family: 'Inter', Arial, sans-serif
  color: white
  background-color: rgba(0, 0, 0, 0.75)
  border-radius: 16px
  border: none
  outline: none
  cursor: pointer

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%
</style>
