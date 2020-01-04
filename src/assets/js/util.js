import { map } from '../../data/index'
var util = {}


util.linkTap = function(context, title){
  var item = map.get(title)
  if(!item) return
  var content = item.content
  if(content){
    if(typeof content === 'string'){
      context.$router.push({
        path: '\article',
        query: {
          title
        }
      })
    }else if(typeof content === 'object'){
      context.$router.push({
        path: '\catalog',
        query: {
          title
        }
      })
    }
  }
}

export default util