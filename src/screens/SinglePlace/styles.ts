import { StyleSheet } from "react-native"
import fonts from "../../theme/fonts";
import colors from '../../theme/colors'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 4/3,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    locationText: {
        color: colors.colors.inactive,
        marginLeft: 5,
        fontSize: fonts.size.md
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