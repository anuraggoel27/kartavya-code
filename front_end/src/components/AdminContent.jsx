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
        axios.get("https://kartavya-academy-backend.herokuapp.com/api/query")
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
        <h1 className="query-heading">Queries</h1>
            {queries.map(function(Query,i){
                const time= moment(Query.date)
                const date= time.format("DD/MM/YYYY")
        return <QueryCard class="query-card" key={i} name={Query.name} email={Query.email} contact={Query.contact} course={Query.course} date={date}/>
      })}
        </div>
    )
}
export default AdminContent;