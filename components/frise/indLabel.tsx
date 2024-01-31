import { PrimaryButton } from "../button/button"

export default function IndLabel(props: any) {
    return (
        <>
            <PrimaryButton>
                {props.children}
            </PrimaryButton>
        </>
    )
}