import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherCard from './components/WeatherCard.js'

export default defineComponent({
  name: 'WeatherApp',

  components:{
    WeatherCard
  },

  setup () {
    const WeatherData=getWeatherData()
    return{
      WeatherData,
      WeatherConditionIcons
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <WeatherCard :data="WeatherData" :icons="WeatherConditionIcons"/>
      </ul>
    </div>
  `,
})
