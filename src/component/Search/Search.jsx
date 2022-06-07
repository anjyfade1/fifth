import search from '../../assets/img/search.svg';
import classes from './Search.module.css';

function Search(props) {

  return (

     
    <form className={classes.form}>
        <input  
            placeholder='Search'   
            type='text' 
        />
        <img src={search} alt="" />
    </form>

)

}


export default Search