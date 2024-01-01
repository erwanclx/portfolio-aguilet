export default function Title(props: any) {
    switch (props.type) {
        case 'h1':
            return (
                <h1 className={'text-4xl md:text-7xl font-extrabold ' + props.className}>
                    {props.children}
                </h1>
            )
        case 'h2':
            return (
                <h2 className={'text-3xl lg:text-4xl font-medium ' + props.className}>
                    {props.children}
                </h2>
            )
        case 'h3':
            return (
                <h3 className={'text-2xl md:text-4xl font-medium ' + props.className}>
                    {props.children}
                </h3>
            )
        case 'h4':
            return (
                <h4 className={'text-xl lg:text-3xl font-medium ' + props.className}>
                    {props.children}
                </h4>
            )
        case 'h5':
            return (
                <h5 className={'text-lg md:text-2xl font-medium ' + props.className}>
                    {props.children}
                </h5>
            )
        case 'h6':
            return (
                <h6 className={'text-base md:text-xl font-medium ' + props.className}>
                    {props.children}
                </h6>
            )
        case 'p':
            return (
                <p className={'text-base md:text-xl font-medium ' + props.className}>
                    {props.children}
                </p>
            )
        default:
            return (
                <p className={'text-base md:text-xl font-medium ' + props.className}>
                    {props.children}
                </p>
            )
    }
}