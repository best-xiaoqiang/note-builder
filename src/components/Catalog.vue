<template>
  <div class="catalog-wrapper">
    <el-table
      :data="menus"
      stripe
      @row-click="linkTap"
      style="width: 100%">
      <el-table-column
        prop="title"
        :label="title">
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
      title: '',
      menus: []
    }
  },
  watch:{
    '$route'(to, from){
      this.title = to.query.title
      this.initMenus(this.title)
    }
  },
  mounted(){
    this.title = this.$route.query.title || '目录'
    this.initMenus(this.title)
  },
  methods: {
    linkTap({title}){
      util.linkTap(this, title)
    },
    initMenus(title){
      document.title = title
      this.menus = map.get(title).content.map(item => ({title: item}))
    }
  }
}
</script>

<style scoped lang="scss">
.catalog-wrapper{
  background: #fff;
  min-height: 100%;
}
</style>
