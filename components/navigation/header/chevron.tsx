function ChevronBottom() {
    return (
        <svg id="ChevronBottom" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    )
}

function ChevronTop() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
    )
}

function ChevronRight() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )
}

function ChevronLeft() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    )
}

export {ChevronBottom, ChevronTop, ChevronRight, ChevronLeft}