import { StyleSheet } from 'react-native'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        color: colors.colors.text,
        paddingVertical: 10,
    },
    username: {
        color: colors.colors.text,
        fontSize: fonts.size.md,
    },
    userHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        color: colors.colors.text,
        fontSize: fonts.size.xlg,

    },
    bio: {
        color: colors.colors.text,
        paddingVertical: 10,
        marginBottom: 10
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    nofLikes: {
        color: colors.colors.text, 
        marginLeft: 5, 
        fontWeight: fonts.weight.semibold, 
        opacity: 0.5
    },
    buttons: {
        flexDirection: 'row',
    }
})


export default styles;