"use client";


import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CripsChat =()=>{
    useEffect(()=>{
        Crisp.configure("cb039233-dc77-4324-bb2f-fa7332278d7d");
    },[]);
    return null;
}