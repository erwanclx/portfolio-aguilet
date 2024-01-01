import Link from "next/link"
import Title from "../text/title"
import Star from "./star"

export default function ReviewCard(props: {
    name: string,
    date: string,
    content: string,
    title: string
}) {
    return (
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
        
            w-full rounded-3xl
            flex flex-col gap-8
            p-12

            ">
           <div className="flex flex-col gap-1">
                <p className='text-blue-500'>
                {props.name}
                </p>
                <div className="flex justify-between">
                <p className="
                lg:text-xl
                " >
                    {props.date}
                </p>
                    <div className="flex flex-col justify-center" >
                        <div className="flex">
                        {[...Array(5)].map((star, index) => ( 
                            <Star key={index} fill='currentColor'/>
                        ))}
                        </div>
                    </div>
                </div>
           </div>

            <p className="lg:text-lg
            overflow-scroll">
                {props.content}
            </p>

            <p className="mt-auto">
                {/* <span className="text-blue-500 lg:text-base">Projet: </span> */}
                <p className="lg:text-base">{props.title}</p>
            </p>
        </div>
    )
}