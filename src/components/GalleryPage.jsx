import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./GalleryPage.css";
import {app,storage,db} from '../firebase';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {doc, setDoc, collection, getDocs} from "firebase/firestore";
import GalleryDisplay from "./GalleryDisplay";



const GalleryPage = () => {







const handleUpload = async (e) =>{
    e.preventDefault();
    console.log("clicked on upload");

    const title = e.target[0].value;
    const file = e.target[1].files[0];

    try{
        const date = new Date().getTime();
        const storageRef = ref(storage, `${title + date}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log('File available at', downloadURL);
            await setDoc(doc(db, "imagegallery",title), {
                title,
                photoURL: downloadURL,
              });
          });
        }
      );

      
   



     
    }catch (err) {
        alert('Error uploading image');
      }
    

    
}






    return(
        <div className="main">
             <h1>Photos Galley</h1>
             <div className="contents">
        
           <div className="addImage">
            <form onSubmit={handleUpload}>
            <input type="text" placeholder="untitled" />
            <input type="file"/>
            <button type="submit">Upload</button>
            </form>
           
        </div>
     </div>
      
      <GalleryDisplay />

        </div>

    
       
     
    )
}

export default GalleryPage;
