import { StyleSheet } from "react-native"
import fonts from "../../theme/fonts";
import colors from '../../theme/colors'

const styles = StyleSheet.create({

    iconContainer: {
        backgroundColor: colors.colors.textOpacity,
        padding: 10,
        position: 'absolute',
        top: 10,
        left: 10,
        borderRadius: 50
    }
})

export default styles;