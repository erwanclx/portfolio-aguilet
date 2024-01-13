import { PrimaryButton } from "../button/button";
import { ChevronTop } from "./header/chevron";

export default function ScrollToTop() {

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <PrimaryButton onClick={() => scrollToTop()}>
                <ChevronTop className="text-white"/>
            </PrimaryButton>
        </div>
    );
}