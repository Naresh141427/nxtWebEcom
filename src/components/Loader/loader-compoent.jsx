import { ThreeDots } from "react-loader-spinner"

import { LoadingContainer } from "./loader-styles"

const Loader = () => {
    return (
        <LoadingContainer>
            <ThreeDots color="blue" />
        </LoadingContainer>
    )
}

export default Loader