import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.colors.black
    },
    camera: {
        width:'100%',
        aspectRatio: 3/4,
    },
    buttonsContainer: {
        // position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        width: '100%',  
        position: 'absolute',
    },
    circle: {
        width: 75,
        aspectRatio: 1,
        borderRadius: 75,
        backgroundColor: colors.colors.text
    },
  
    headerText: {
        color: colors.colors.text,
        fontSize: fonts.size.xlg,
        textAlign: 'center',
        position: 'absolute',
        width: '100%',  
    }
})

export default styles