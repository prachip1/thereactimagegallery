import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./GalleryPage.css";
import {app,storage,db} from '../firebase';
import {doc, setDoc, collection, getDocs,getDoc,query, QuerySnapshot} from "firebase/firestore";



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
    

    useEffect(() => {

        displayData();
       
      
       
      
    }, [])

    return(
        <div>
         {
            dataValue?.map((datas,i) =>(
                
                    <div key={i}>
                        <h4>{datas.title}</h4>
                        <img src={datas.photoURL} />
                    </div>
            
            ))
         }
        </div>
    )




}

export default GalleryDisplay;