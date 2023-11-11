import axios from "axios";
import {useState,useEffect} from 'react'
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


export default async function axiosCourses() {
        try {
            const response = await axios.get<Course[]>("http://localhost:8080/course/getCourses");
            return response.data;
        } catch (err) {
            if (err instanceof Error) console.log(err.message)
            return []
        }
    // try {
    //     const res = await fetch("/todos")

    //     const todos: Todo[] = await res.json()

    //     return todos
    // } catch (err) {
    //     if (err instanceof Error) console.log(err.message)
    //     return []
    // }
}