"use client"

import Image from 'next/image'
import Footer from './components/footer/Footer'
import Nav from './components/navbar/Nav'
import Search from './components/body/Search'
import axios from 'axios'
import { useState, useEffect } from 'react'
type Course =
    {
        id: number,
        name: string,
        image: string,
        description: string,
        level: string,
        language: string,
        price: number,
        coupon: number,
        instructorName: string,
    }

export default function Home() {
    const [courses, setCourses] = useState<Course[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(8);
    const getCourses = async () => {
        try {
            const response = await axios.get<Course[]>("http://localhost:8080/course/getCourses");
            setCourses(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCourses();
    }, []
    )
  return (
    <>
      <Nav />
      <Search  courses={courses}/>
      <Footer />
    </>

  )
}
