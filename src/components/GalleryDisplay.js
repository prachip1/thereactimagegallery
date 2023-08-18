import React, { useState, useEffect } from "react";

import "./GalleryPage.css";
import {db} from '../firebase';
import {doc,collection, getDocs, deleteDoc} from "firebase/firestore";



const GalleryDisplay = () => {

    const [dataValue, setdataValue] = useState([]);

    const displayData = async () =>{
      await getDocs(collection(db, "imagegallery"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setdataValue(newData);                
                console.log(newData);
            })
        
        
    }

    const deleteThis = async (i) =>{
     
    const ii = i;
    const res= dataValue[ii].title;
     await deleteDoc(doc(db,"imagegallery",res));
    }
    

    useEffect(() => {

        displayData();
       
}, [])

    return(
        <div className="displaymain">
         {
            dataValue?.map((datas,i) =>(
                
                    <div className="displayclass" key={i}>
                        <h4>{datas.title}</h4>
                        <img src={datas.photoURL} />
                        <div>
                        <button className="btn" onClick={()=> deleteThis(i)}>Delete This</button>
                        </div>  
                        
                    </div>
            
            ))
         }
        </div>
    )




}

export default GalleryDisplay;