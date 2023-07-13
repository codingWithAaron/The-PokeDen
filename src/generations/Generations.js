import GenerationOne from "./GenerationOne";
import GenerationTwo from "./GenerationTwo";
import GenerationThree from "./GenerationThree";
import GenerationFour from "./GenerationFour";
import GenerationFive from "./GenerationFive";

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
        </>
    )
}

export default Generations