import { PrimaryButton, SecondaryButton } from "../button/button"

export default function Label(props: any) {
    return (
        <>
            {props.secondary ? (
            <button className="w-fit py-3 px-7 text-white bg-sky-950 font-bold relative transition duration-300">
                {props.children}
            </button>
            ) : (
            <PrimaryButton className=" w-full">
                {props.children}
            </PrimaryButton>)}

            <div className="w-1 h-full overflow-hidden bg-blue-500 ml-8"></div>
        </>
    )
}