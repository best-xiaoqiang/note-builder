<template>
  <div class="article-wrapper">
    <span v-for="(item, index) in contentArr" :key="index">
      <a v-if="item.isLink" @click="linkTap(item.text)">{{item.text}}</a>
      <span class="spans" v-else v-html="item.text"></span>
    </span>
  </div>
</template>

<script>
import { map } from '../data/index'
import util from '../assets/js/util'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '',
      content: '',
      keyArr: [],
      contentArr: []
    }   
  },
  watch:{
    '$route'(to, from){
      this.title = to.query.title
      this.initContent(this.title)
    }
  },
  mounted(){
    this.title = this.$route.query.title
    this.initContent(this.title)
  },
  methods: {
    linkTap(title){
      util.linkTap(this, title)
    },
    initContent(title){
      document.title = title
      this.content = map.get(title).content
      let keyArr = []
      for (const key of map.keys()) {
        if(this.content.indexOf(key) > -1){
          keyArr.push(key)
          var str = `","${key}","`
          this.content = this.content.replace(eval(`/${key}/g`), str)
        }
      }
      this.contentArr = eval(`["${this.content}"]`)
      this.contentArr = this.contentArr.map(item => {
        let isLink = keyArr.indexOf(item) > -1 && item !== this.title
        return {
          text: item,
          isLink
        }
      })
    },

  }
}
</script>

<style scoped lang="scss">
.article-wrapper{
  padding: 0.08rem;
  a{
    color: blue;
  }
}

</style>
