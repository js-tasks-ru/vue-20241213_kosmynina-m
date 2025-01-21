import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PanelCard',

  props:{

    dark:{
        type:Boolean,
        default:false
    },
  },

  template: `
        <li class="weather-card" :class="{'weather-card--night': dark}"> 
          <slot/>
        </li>
  `,
})
