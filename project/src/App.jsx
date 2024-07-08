import {useState, useRef} from "react";
function Item(props){
  return(
    <li> {props.name} {props.price}</li>
  );
}

function Addform(props){
  const nameRef=useRef();
  const priceRef=useRef();

  return(
    <form
    onSubmit={e=>{
      e.preventDefault();

      props.add(
        nameRef.current.value,
        priceRef.current.value,
      );
      nameRef.current.value="";
      priceRef.current.value="";
    }}
    >
      <input type="text" placeholder="Name" ref={nameRef}/><br/>
      <input type="text" placeholder="Price" ref={priceRef}/><br/>
      <button type="submit">Add</button>
    </form>
  );
}


export default function App(){
  const[data,setData]=useState([
    {id:1,name:"Ko",price:0.99},
    {id:2,name:"Phyo",price:70},
  ]);

  const add=(name,price)=>{
    const id= data.length+1;

    setData([
      ...data,
      {id,name,price}
    ]);
  }


  return(
    <>
    <h1>Hello From Vite</h1>
    <ul>
    {data.map(i=>(
      <Item key={i.id} name={i.name} price={i.price}/>
    ))}
    </ul>
    <Addform add={add}/>
    </>
  );
}