export default function Section(props: any) {
    return (
        <section id={props.id} style={{height: '100dvh'}} className={'relative w-full ' + props.className}>
            {props.children}
        </section>
    )
}