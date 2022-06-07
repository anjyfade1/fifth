import CardList from "./CardList"
import classes from './CardList.module.css';


function Card({products}) {
  
  return (
    <div className={classes.cardList} >
      {products.map(product =>{return <CardList key={product.id} product={product}  /> })}
        
    </div>
  )
}

export default Card