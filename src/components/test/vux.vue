<template>
  <div>
    <group>
      <cell title="vue" value="cool"></cell>
    </group>
    <flexbox style="height:40px;">
    <flexbox-item><div class="flex-demo">1</div></flexbox-item>
    <flexbox-item><div class="flex-demo">2</div></flexbox-item>
</flexbox>
<number-roller :number="number" :width="6"></number-roller>
  </div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import flexbox from 'vux/src/components/flexbox'
import NumberRoller from 'vux/src/components/number-roller'

export default {
  components: {
    Group,
    Cell,
    flexbox,
    NumberRoller
  },
  ready () {
    setInterval(() => {
      this.number = 100000 + Math.round(Math.random() * 899999)
    }, 3000)
  },
  data () {
    return {
      number: 123765
    }
  }
}
</script>

<style lang="sass">
@import '~vux/dist/vux.css';
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  margin-bottom: 8px;
  border-radius: 4px;
}
</style>