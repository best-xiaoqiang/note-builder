<template>
  <div class="catalog-wrapper">
    <div class="input-wrap">
      <el-input v-model="input" placeholder="请输入内容" @change="onChange"></el-input>
    </div>
    <el-table
      v-if="res.length"
      :data="res"
      stripe
      @row-click="linkTap"
      style="width: 100%">
      <el-table-column
        prop="title"
        :label="kw">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { map } from '../data/index'
import util from '../assets/js/util'

export default {
  data () {
    return {
      input: '',
      kw: '',
      res: []
    }
  },
  mounted(){
    document.title = '搜索'
  },
  methods: {
    linkTap({title}){
      util.linkTap(this, title)
    },
    onChange(kw){
      this.kw = kw
      this.search(kw)
    },
    search(kw){
      document.title = kw
      let res = []
      for (const key of map.keys()) {
        if(key.indexOf(kw) > -1){
          res.push({title: key})
        }
      }
      this.res = res
    }
  }
}
</script>

<style scoped lang="scss">
.catalog-wrapper{
  background: #fff;
  min-height: 100%;
  .input-wrap{
    padding: 0.1rem;
  }
}
</style>
