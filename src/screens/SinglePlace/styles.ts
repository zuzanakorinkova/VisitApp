import { StyleSheet } from "react-native"
import fonts from "../../theme/fonts";
import colors from '../../theme/colors'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 4/2,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    headerWrapper: {
        marginTop: 10,
        padding: 10,
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
   },
    title: {
        fontSize: fonts.size.xxlg,
    },
    ratingcard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff20',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 25,
    },
    rating: {
        fontSize: fonts.size.md,
        marginLeft: 5,
        fontWeight: fonts.weight.semibold,
    },
    iconContainer: {
        backgroundColor: colors.colors.textOpacity,
        padding: 10,
        position: 'absolute',
        top: 30,
        left: 10,
        borderRadius: 50
    }
})

export default styles;