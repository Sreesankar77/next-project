import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, usestate } from "react";
import Loginform from "@/components/form/Loginform";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [count,setCount]=useState(0);
  console.log("count",count);
  const [name,setName]=useState("");
  console.log("hello",name);
  const[password,setPassword]=useState("");
  console.log("password",password)
  const[gmail,setGmail]=useState("");
  console.log("gamil",gmail)
  function handleName(event){
    setName(event.target.value);
    
  }
  function handlePass(event){
      setPassword(event.target.value);
      
  }
  function handleGmail(event) {
    setGmail(event.target.value);
  }
  function handleSubmit() {
    if(password.length<8){
      alert("password is short");
      return;
    }
    else{
      alert("submitted");
    }
  }
  return (
    <>
      <h1>welcome</h1>
      <h4>enter your name</h4>
      <input type="text" onChange={handleName}/>
      <h4>enter your password {password}</h4>
      <input type="password" onChange={handlePass}/>
      <h4>enter your email</h4>
      <input type="text" onChange={handleGmail}/>
      <br/>
      <button onClick={handleSubmit}>SUBMIT</button>
      <Loginform formname={name} formpass={password}/>

    </>

  );
}
