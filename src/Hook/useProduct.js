import { useEffect } from "react";
import { useState } from "react";

const useProduCt = () => {
const [product, setProduct] = useState([]);

useEffect(() => {
  fetch('https://serene-beyond-86297.herokuapp.com/item')
  .then(res => res.json())
  .then(data => setProduct(data))
},[])

return [product, setProduct];


}
export default useProduCt;