import { StyleSheet} from 'react-native';
import settings      from '../../config/settings'
import colors        from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        display         : 'flex',
        flex            : 1,
        alignItems      : 'center',
        justifyContent  : 'space-between',
        backgroundColor      : "#FDFDFD"
    },
    body: {
        height      : '100%',
        width       : '100%'
    },
    footer: {
        alignItems  : 'center',
        display     : 'flex',
        width       : '100%',
        marginBottom: 10
    },
    header: {
        justifyContent: 'center',
        alignItems  : 'center',
        display     : 'flex',
        width       : '100%'
    },
    headerText: {
        color       : colors.blueFaceBook,
    },
    text: {
        textAlign: 'center'
    },
    faceButton: {
        height: 20,
        width : settings.dimensions.deviceWidth * 0.8 - 15
    },
    button: {
        height: 50,
        width : '80%'
    },
    buttonText: {
        color: 'white'
    },
    mainContent: {
        margin: 10,
    },
    backgroundImage: {
        flex        : 1,
        position    : 'absolute',
        resizeMode  : 'stretch', // or 'cover',
        height      : '100%',
        width       : '100%'
    }
})


module.exports = styles;
