import { PrimaryButton } from "../button/button"

export default function Intersec(props: any) {
    return (
        <>
        <PrimaryButton className="bg-blue-500 w-fit p-8 text-white font-bold w-full">
            {props.children}
        </PrimaryButton>
        <div className="w-1 h-full bg-blue-500 ml-8"></div>
        <div className="w-full h-1 bg-blue-500 ml-8 absolute top-2/3"></div>
        </>
    )
}