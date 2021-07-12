import React,{useEffect,useState} from "react";
import QueryCard from "./queryCard";
import axios from "axios";
function AdminContent(){
    const [queries,setQueries]=useState([]);
    useEffect(()=>{
        databaseContent();
        
    })
    function databaseContent(){
        axios.get("http://localhost:3001/query")
        .then((response)=>{
            const data=response.data;
            setQueries(data);
            
            // console.log(response.data[0]);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
   
    return (
        <div className="admin-body">
            {queries.map(Query=>{
        return <QueryCard key={Query.index} name={Query.name} email={Query.email} contact={Query.contact} course={Query.course} />
      })}
        </div>
    )
}
export default AdminContent;