export default function Star(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill={
                props.fill ? props.fill : "none"
            }
            d="M12 2l3.09 6.38L22 9.27l-4.18 4.07.99 6.12L12 
            17.77 5.19 19.46l.99-6.12L2 9.27l6.91-.89L12 
            2z" />
        </svg>
    )
}