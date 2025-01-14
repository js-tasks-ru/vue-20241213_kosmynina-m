import { defineComponent } from 'vue'


export default defineComponent({
  name: 'WeatherDetails',

  props:{

    pressure:{
        type:String,
    },

    humidity:{
        type:String,
    },

    clouds:{
        type:String,
    },

    speed:{
        type:String,
    },

  },

  template: `
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ pressure }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ speed }}</div>
            </div>
          </div>
  `,
})
