import Sink from "./Sink"
import Oven from "./Oven"

const Kitchen = (props) => {
  return ( 
    <div>
      <h4>Kitchen</h4>
      <Sink key="sink"/>
      <Oven key="oven"/>
    </div>
   );
}
 
export default Kitchen;