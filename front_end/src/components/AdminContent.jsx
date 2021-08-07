import React,{useEffect,useState} from "react";
import QueryCard from "./queryCard";
import axios from "axios";
import moment from "moment";
function AdminContent(){
    const [queries,setQueries]=useState([]);
    useEffect(()=>{
        databaseContent();
        
    })
    function databaseContent(){
        axios.get("http://localhost:3001/api/query")
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
                const time= moment(Query.date)
                const date= time.format("DD/MM/YYYY")
        return <QueryCard key={Query.index} name={Query.name} email={Query.email} contact={Query.contact} course={Query.course} date={date}/>
      })}
        </div>
    )
}
export default AdminContent;