import ErrorModal from "./ErrorModal"
import SuccessModal from "./SuccessModal"

export const modalHandle = (text, visible, isSuccess, onPress) => {
    if (isSuccess == 1) {
        return (
            <SuccessModal
                isVisible={visible}
                onPress={() => {
                    onPress()
                }}
            />
        )
    }
    else if (isSuccess == 2) {
        return (
            <ErrorModal
                text={text}
                isVisible={visible}
                onPress={() => {
                    onPress()
                }}
            />
        )
    }
}