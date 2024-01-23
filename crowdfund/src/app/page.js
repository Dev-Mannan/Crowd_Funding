'use client'
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Profile from "@/app/Profile/page";
import {BrowswerRouter , Routes , Route , Router,Switch } from 'react-router-dom';
import Navbar from "@/app/Navbar/navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    </>
  )
}
