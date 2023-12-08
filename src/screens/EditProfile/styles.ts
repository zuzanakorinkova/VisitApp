import { StyleSheet} from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts';


const styles = StyleSheet.create({
    form: {
        paddingTop: 30,
    },
      inputField: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      label: {
        color: colors.colors.text,
        width: 75
      },
      inputContainer: {
        flex: 1,
        margin: 12
      },
      textInput: {
        backgroundColor: colors.colors.primaryButton,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        borderColor: colors.colors.border,
        color: colors.colors.text
      },
      submitBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },
      submit: {
        color: colors.colors.text,
        marginRight: 10,
        fontSize: fonts.size.lg
      },
      titleContainer: {
        paddingTop: 20,
      },
    screenTitle: {
        color: colors.colors.text,
        fontSize: fonts.size.xlg,
        textAlign: 'center',
     
    }
})


export default styles