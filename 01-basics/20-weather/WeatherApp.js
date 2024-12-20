import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',
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
        <li v-for="place in WeatherData" class="weather-card" :class="{'weather-card--night': (place.current.dt<place.current.sunrise || place.current.dt>place.current.sunset)}">
          <div v-if="place.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ place.alert.sender_name }}: {{ place.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ place.geographic_name }}
            </h2>
            <div class="weather-card__time">
            {{ place.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="place.current.weather.description">{{ WeatherConditionIcons[place.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ (place.current.temp-273.15).toFixed(1) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ Math.round(place.current.pressure*0.75) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ place.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ place.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ place.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
