import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },
  
  props:{
    count:{
      type:Number,
      required:true
    },

    min:{
      type:Number,
      default:()=>0,
    },

    max:{
      type:Number,
      default:()=>Infinity
    }
  },

  setup(props,{emit}) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    function increment(count){
      emit("update:count",++count)
    }

    function decrement(count){
        emit("update:count",--count)
    }

    return{
      increment,
      decrement
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count===min" @click="decrement(count)">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="count===max" @click="increment(count)">➕</UiButton>
    </div>
  `,
})
