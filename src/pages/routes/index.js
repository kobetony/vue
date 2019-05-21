import  generalThings  from "../generalthings/generalthings"
import  homepage  from "../homepage/homepage"
import  person  from "../person/person"
import  shopPingCart  from "../shoppingcart/shoppingcart"
import   sort  from "../sort/sort"
import search from "../../components/search/searchtext/searchtext"
import     peron   from "../person/EmailLogin/EmailLogin"


const routes = [
  {path:"/generalThings",component:generalThings},
  {path:"/homepage",component:homepage},
  {path:"/person",component:person},
  {path:"/shopPingCart",component:shopPingCart},
  {path:"/sort",component:sort},
  {path:"/search",component:search},
  {path:"",redirect:"/homepage"}
]
export default routes
