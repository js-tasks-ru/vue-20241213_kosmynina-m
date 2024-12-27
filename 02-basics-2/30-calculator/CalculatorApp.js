import { defineComponent,ref,computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operand1=ref(0)
    const operand2=ref(0)
    const operator=ref('sum')
    let result= computed(() => {
      if(operator.value=='sum') return operand1.value+operand2.value;
      if(operator.value=='subtract') return operand1.value-operand2.value;
      if(operator.value=='multiply') return operand1.value*operand2.value;
      if(operator.value=='divide') return operand1.value/operand2.value;
      return "error";
    })
    return{
      operand1,
      operand2,
      operator,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="operand1"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" @input="operator='sum'" :checked="operator=='sum'"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" @input="operator='subtract'" :checked="operator=='subtract'"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" @input="operator='multiply'" :checked="operator=='multiply'"/>✖</label>
        <label><input type="radio" name="operator" value="divide" @input="operator='divide'" :checked="operator=='divide'"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="operand2"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
