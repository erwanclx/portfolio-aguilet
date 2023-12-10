export default function Section(props: any) {
    return (
        <section id={props.id} style={{height: '100dvh'}} className={'relative w-full px-4 md:py-12 md:px-24 lg:py-20 lg:px-32 ' + props.className}>
            {props.children}
        </section>
    )
}