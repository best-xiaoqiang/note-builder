<template>
  <div class="index-wrapper">
    <ul>
      <li v-for="item in items" :key="item.title" @click="go(item)">
        <el-button plain type="primary" :icon="item.icon">{{item.title}}</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [
        {
          title: '',
          path: '/search',
          icon: 'el-icon-search'
        },
        {
          title: '目录',
          path: '/catalog',
          query: {
            title: '目录'
          }
        }
      ]
    }
  },
  methods:{
    go(item){
      let { path, query = {} } = item
      this.$router.push({
        path,
        query
      })
    }
  }
}
</script>

<style scoped lang="scss">
.index-wrapper{
  padding: 0.4rem;
  li{
    text-align: center;
    margin-bottom: 0.1rem;
    .el-button{
      font-size: 0.16rem;
      font-weight: bold;
    }
  }
}
</style>
