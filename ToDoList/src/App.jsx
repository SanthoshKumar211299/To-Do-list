import {useEffect,useState} from 'react';
import './App.css'
import Add from './Components/Add';
import Card from './Components/Card';
import Completed from './Components/Completed';
import NotCompleted from './Components/NotCompleted';
import Edit from './Components/Edit';
function App() {
  //creating locally stored data
  const data=[{
    name:"Santhosh",
    description:"complete the todo ",
    status:"Completed"
  }, 
{
  name:"Magesh",
    description:"complete the todo ",
    status:"Not Completed"
},
{
  name:"Stephen",
  description:"complete the todo ",
  status:"Completed"
},
{
  name:"Ranjith",
  description:"complete the todo ",
  status:"Not Completed"
},
{
  name:"Guna",
  description:"complete the todo ",
  status:"Completed"
}
];
//creating states
  const [product,setProduct]=useState(data);
  const [show,setShow]=useState(true);
  const [editID,setEditID]=useState();
  const [filter,setFilter]=useState("All");
  const [completed,setCompleted]=useState(product);
  const [notCompleted,setNotCompleted]=useState(product);
  //used useEffect 
  useEffect(()=>{
      if(filter==="Completed"){
          const completedData=product.filter((value,index)=>value.status==="Completed")
          setCompleted(completedData);
      }
  },[filter==="Completed"]) 
  useEffect(()=>{
      if(filter==="Not Completed"){
          const NotCompletedData=product.filter((value,index)=>value.status==="Not Completed")
          setNotCompleted(NotCompletedData);
      }
  },[filter==="Not Completed"])  
  return (
    <div className='app'>
      <h4 className='title'>My todo</h4>
      {/* using ternary operators for switching between add form and update form */}
      {show===true?
      <Add 
      product={product} 
      setProduct={setProduct}
      />:
      <Edit
      product={product}
      setProduct={setProduct}
      show={show}
      setShow={setShow}
      editID={editID}
      />}   
      {/* filter bar that used to filter completed, not completed and all    */}
      <div className='subject'>
        <div >
               <h5 >My Todos</h5>
        </div>
        <div >
               <h5 className='inline'>Status Filter : </h5>
               <select className='inline'
               onChange={(event)=>setFilter(event.target.value)} >
               <option value="All">All</option>
               <option value="Completed">Completed</option>
               <option value="Not Completed">Not Completed</option>
                </select>
        </div>
      </div> 
      <div className='cardSection'>
        {/* mapping card's based on the selected filter option */}
 { 
        filter=="Not Completed"?
          notCompleted?.map((value,index)=>(
             <NotCompleted key={index}
             name={value.name}
             description={value.description}
             status={value.status}
             index={index}
             product={product} 
             setProduct={setProduct}
             setShow={setShow}
             setEditID={setEditID}
             />
           )):
        filter=="Completed"?
        completed?.map((value,index)=>(
          <Completed key={index}
          name={value.name}
          description={value.description}
          index={index}
          product={product} 
          setProduct={setProduct}
          setShow={setShow}
          setEditID={setEditID}
          />
        ))   
        :
        product?.map((value,index)=>(
          <Card key={index}
          name={value.name}
          description={value.description}
          status={value.status}
          index={index}
          product={product} 
          setProduct={setProduct}
          setShow={setShow}
          setEditID={setEditID}
          />
        ))}
      </div> 
    </div>
  )}

export default App;