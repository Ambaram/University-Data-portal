import './App.css';
import React, {useEffect, useState} from "react"
import Search from './Search';

//Fetch the data from the api and extract students array
const fetchProfile = ()=>{
  return fetch("https://api.hatchways.io/assessment/students")
  .then(res=>res.json())
  .then(res=>{
    return res.students
  })
}


export default function App() {
  // initialise props
  const [profile, setProfile]= useState([])
  
  // create profile list
  useEffect(()=>{
    fetchProfile().then(res=>setProfile(res))
  },[])

  return(
    // Render page
    <Search profile={profile} />
  )}


