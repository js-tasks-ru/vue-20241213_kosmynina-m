import { defineComponent } from 'vue'


export default defineComponent({
  name: 'WeatherHeader',

  props:{

    city:{
        type:String,
        required:true
    },

    time:{
        type:String,
    }

  },

  template: `
          <div>
            <h2 class="weather-card__name">
              {{ city }}
            </h2>
            <div class="weather-card__time">
            {{ time }}
            </div>
          </div>
  `,
})
