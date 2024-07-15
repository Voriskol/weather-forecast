<script setup>
import { capitalize } from '@/utils'
const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true
  }
})

const currentDate = new Date().toLocaleDateString('en-EN', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})
</script>

<template>
  <div v-if="weatherInfo.weather" class="summary">
    <div
      :style="`background-image: url('/src/assets/img/weather-main/${props.weatherInfo?.weather[0].description}.png')`"
      class="pic-main"
    ></div>
    <div class="weather">
      <div class="temp">{{ props.weatherInfo?.main?.temp.toFixed(0) }}°C</div>
      <div class="weather-desc text-block">
        {{ capitalize(props.weatherInfo?.weather[0].description) }}
      </div>
    </div>
    <div class="city text-block">
      {{ props.weatherInfo?.name }}, {{ props.weatherInfo?.sys?.country }}
    </div>
    <div class="date text-block">{{ currentDate }}</div>
  </div>

  <div v-else class="summary">
    <div>No data</div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/main.sass'
.pic-main
  width: 60px
  height: 60px
  margin: 20px 0 12px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: contain

.city
  font-size: 24px

.weather
  margin: 0 0 20px
  padding: 20px 0
  border-bottom: 1px solid rgba(255, 255, 255, 0.4)

.temp
  padding-bottom: 8px
  font-size: 32px

.text-block
  position: relative
  padding-left: 24px
  padding-bottom: 8px
  font-size: 14px

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 20px
    height: 20px
    margin-right: 6px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain

.weather-desc

  &::before
    background-image: url('@/assets/img/weather.svg')

.city

  &::before
    background-image: url('@/assets/img/location.svg')

.date

  &::before
    left: 2px
    width: 15px
    height: 15px
    background-image: url('@/assets/img/calendar.svg')
</style>
