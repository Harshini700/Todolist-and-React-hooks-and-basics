import React,{useState} from 'react'
const Mycomponent2 = () => {
    const[name,setName]=useState("guest");
    const[quantity,setQuantity]=useState();
    const[comment,setComment]=useState();
    const[payment,setPayment]=useState();
    const[shipping,setShipping]=useState();
    const handlename=(event)=>{
        setName(event.target.value);
    }
    
    const handlequantity=(event)=>{
        setQuantity(event.target.value);
    }
    
    const commentChange=(event)=>{
        setComment(event.target.value);
    }
    const selectpayment=(event)=>{
        setPayment(event.target.value);
    }
    const changeShipping=(event)=>{
        setShipping(event.target.value);
    }

  return (
    <div>
      <input value={name} onChange={handlename}/>
      <p>Name:{name}</p>
      <input value={quantity} onChange={handlequantity} type="number"/> {/*for handling numbers*/}
      <p>Quantity:{quantity}</p>
      <textarea value={comment} onChange={commentChange} placeholder={"Enter Comment here"}/> {/*onChange={commentChange}-callback functions*/}
      <p>Comment:{comment}</p>
      <select value={payment} onChange={selectpayment}>
        <option value="">Select an option</option>
        <option value="visa">visa</option>
        <option value="Master card">Master Card</option>
      </select>
      <p>Payment:{payment}</p>
      <label> {/* text description with form */}
        <input type="radio" value="Pick up"
               checked={shipping === "pick up"}
               onChange={changeShipping}
        />
        pick up
      </label><br/>
      <label>
      <input type="radio" value="Delivery"
               checked={shipping === "Delivery"}
               onChange={changeShipping}
        />
        Delivery
      </label>
      <p>Shipping:{shipping}</p>
    </div>
  )
}

export default Mycomponent2
