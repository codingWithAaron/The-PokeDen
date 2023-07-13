import GenerationOne from "./GenerationOne";
import GenerationTwo from "./GenerationTwo";
import GenerationThree from "./GenerationThree";
import GenerationFour from "./GenerationFour";
import GenerationFive from "./GenerationFive";
import GenerationSix from "./GenerationSix";
import GenerationSeven from "./GenerationSeven";
import GenerationEight from "./GenerationEight";

function Generations(){
    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <h1>Generations</h1>
            </div>
            <GenerationOne />
            <GenerationTwo />
            <GenerationThree />
            <GenerationFour />
            <GenerationFive />
            <GenerationSix />
            <GenerationSeven />
            <GenerationEight />
        </>
    )
}

export default Generations