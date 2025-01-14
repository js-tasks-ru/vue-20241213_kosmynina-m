import { defineComponent } from 'vue'


export default defineComponent({
  name: 'WeatherConditions',

  props:{

    title:{
        type:String,
    },

    temp:{
        type:String,
        required:true
    },

    icon:{
        type:String,
    },

  },

  template: `
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="title">{{ icon }}</div>
            <div class="weather-conditions__temp">{{ temp }} °C</div>
          </div>
  `,
})
