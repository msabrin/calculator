import { useContext } from "react"
import { CalcContext } from "./CalcContext"
import { Textfit } from "react-textfit";

const Screen = () => {
    const { calc } = useContext(CalcContext);

    return (
        <Textfit className="screen" max={80} mode="single" >{calc.num ? calc.num : calc.res}</Textfit>
    )
}

export default Screen