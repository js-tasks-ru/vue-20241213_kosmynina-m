import { computed, defineComponent } from 'vue'
import { WeatherConditionIcons } from './../weather.service.ts'
import WeatherAlert from './WeatherAlert.js'
import WeatherHeader from './WeatherHeader.js'
import WeatherConditions from './WeatherConditions.js'
import WeatherDetails from './WeatherDetails.js'
import PanelCard from './PanelCard.js'
export default defineComponent({
  name: 'WeatherCard',

  components:{
    WeatherAlert,
    WeatherHeader,
    WeatherConditions,
    WeatherDetails,
    PanelCard
  },

  props:{

    data:{
        type:Array,
        required:true
    },

    icons:{
        type:Object,
        default:WeatherConditionIcons
    }

  },

  setup(props){
    const isNight = computed(()=>props.data.current.dt<props.data.current.sunrise || props.data.current.dt>props.data.current.sunset)
    const temperatute = computed(()=>(props.data.current.temp-273.15).toFixed(1))
    const pressure = computed(()=>(Math.round(props.data.current.pressure*0.75)))
    
    return{
      isNight,
      temperatute,
      pressure
    }
  },

  template: `
        <PanelCard :dark="isNight">
          <WeatherAlert v-if="data.alert">
            {{ data.alert.sender_name }}: {{ data.alert.description }}
          </WeatherAlert>
          <WeatherHeader :city="data.geographic_name" :time="data.current.dt"/>
          <WeatherConditions :title="data.current.weather.description" :icon="icons[data.current.weather.id]" :temp="temperatute"/>
          <WeatherDetails :pressure="pressure" :humidity="data.current.humidity" :clouds="data.current.clouds" :speed="data.current.wind_speed"/>
        </PanelCard>
  `,
})
