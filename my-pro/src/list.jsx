import React from 'react'
import './index.css'
import PropTypes from 'prop-types';
function List(props){

    {/*const fruits=["apple","banana","coconut","pineapple"];*/}
    {/*Array of strings to object each object has  name property and calorie in given ex */}
    {/*if two object contains same name we want to use id */}
    //const fruits=[{id:1,name:"apple",calories:35},
        //{id:2,name:"banana",calories:36},
        //{id:3,name:"coconut",calories:37},
        //{id:4,name:"pineapple",calories:38}]

    //fruits.sort((a,b)=>a.name.localeCompare(b.name)); //alphabetical
    //fruits.sort((a,b)=>b.name.localeCompare(a.name)); //reverse alphabetical
    //fruits.sort((a,b)=>a.calories-b.calories); //numeric
    //fruits.sort((a,b)=>b.calories-a.calories); //reverse numeric

    //const localfruits=fruits.filter(fruit=>fruit.calories>35);

     //filtering obj with certain criteria
    
    const category=props.category;
    const itemList=props.items;
    const listitems=itemList.map(item=><li key={item.id}>
        {item.name}:&nbsp;
        <b>{item.calories}</b></li>)

    
    return(<>
      <h3 className='list-category'>{category}</h3>
      <ol className='list-items'>{listitems}</ol>
    </>
    );
     
    //const listitems=localfruits.map(localfruit=><li keys={localfruit.id}>
        //{localfruit.name}:&nbsp;
        //<b>{localfruit.calories}</b></li>)
    //return(<ol>{listitems}</ol>);
}
List.propTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,name:PropTypes.string,calories:PropTypes.number
    })),

}
List.defaultProps={
    category:"category",
    items:[],
}

export default List