import { defineComponent } from 'vue'
import WeatherAlert from './WeatherAlert.js'
import WeatherHeader from './WeatherHeader.js'
import WeatherConditions from './WeatherConditions.js'
import WeatherDetails from './WeatherDetails.js'
export default defineComponent({
  name: 'WeatherCard',

  components:{
    WeatherAlert,
    WeatherHeader,
    WeatherConditions,
    WeatherDetails
  },

  props:{

    data:{
        type:Array,
        required:true
    },

    icons:{
        type:Object
    }

  },

  template: `
        <li v-for="place in data" class="weather-card" :class="{'weather-card--night': (place.current.dt<place.current.sunrise || place.current.dt>place.current.sunset)}">
          <WeatherAlert v-if="place.alert" :name="place.alert.sender_name" :description="place.alert.description"/>
          <WeatherHeader :city="place.geographic_name" :time="place.current.dt"/>
          <WeatherConditions :title="place.current.weather.description" :icon="icons[place.current.weather.id]" :temp="(place.current.temp-273.15).toFixed(1)"/>
          <WeatherDetails :pressure="Math.round(place.current.pressure*0.75)" :humidity="place.current.humidity" :clouds="place.current.clouds" :speed="place.current.wind_speed"/>
        </li>
  `,
})
