import { StyleSheet } from "react-native"
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
    },
    image: {
       height: 60,
       width: 60,
       borderRadius: 50,
    },
    category: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    name: {
        marginTop: 10,
        fontWeight: fonts.weight.semibold,
        textAlign: 'center',
        fontSize: fonts.size.sm,
    },
})

export default styles