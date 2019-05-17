import  generalThings  from "../generalthings"
import  homepage  from "../homepage"
import  person  from "../person"
import  shopPingCart  from "../shoppingcart"
import   sort  from "../sort"

const routes = [
  {path:"/generalThings",component:generalThings},
  {path:"/homepage",component:homepage},
  {path:"/person",component:person},
  {path:"/shopPingCart",component:shopPingCart},
  {path:"/sort",component:sort},
  {path:"",redirect:"/homepage"}
]
export default routes
