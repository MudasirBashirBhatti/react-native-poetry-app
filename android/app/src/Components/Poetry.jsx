import { Alert, StyleSheet, View, Linking } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../utilities/colors';
import IconWithText from './IconWithText';
import CopyIcon from '../assets/icons/CopyIcon';
import PoetryTextWithAuthor from './PoetryTextWithAuthor';
import Clipboard from '@react-native-clipboard/clipboard';
import Share from 'react-native-share';
import WhatsappIcon from '../assets/icons/WhatsappIcon';
import ShareIcon from '../assets/icons/ShareIcon';

const Poetry = ({ poetryTextArr, poet, thirdIcon, thirdIconText, onThirdIconPress, time }) => {
    const [copiedText, setcopiedText] = useState('');

    const copyToClipboard = async () => {
        const textToCopy = poetryTextArr.join('\n');
        Clipboard.setString(textToCopy);
        const text = await Clipboard.getString();
        setcopiedText(text);
        Alert.alert(`سٹیٹس کاپی ہو گیا ہے ✔️`)
    };

    // share with only whatsapp
    const whatsapShare = async () => {
        const message = encodeURIComponent(poetryTextArr.join('\n'));
        const whatsappUrl = `whatsapp://send?text=${message}`;

        try {
            await Linking.openURL(whatsappUrl);
        } catch (error) {
            console.log(`Failed to share: ${error.message}`);
        }
    };

    const shareOthers = async () => {
        const shareOptions = {
            message: poetryTextArr.join('\n')
        }

        try {
            await Share.open(shareOptions)
        } catch (error) {
            console.log(`Failed to share error`)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.poetryWrapper}>
                <PoetryTextWithAuthor time={time} poetryTextArr={poetryTextArr} poet={poet} />
            </View>
            <View style={styles.actionsWrapper}>
                <IconWithText icon={<CopyIcon fill={colors.secondryClr} />} text={'Copy'} onPress={copyToClipboard} />
                <IconWithText icon={<WhatsappIcon />} text={'Whatsapp'} onPress={whatsapShare} />
                <IconWithText icon={thirdIcon} text={thirdIconText} onPress={onThirdIconPress} />
                <IconWithText icon={<ShareIcon fill={colors.secondryClr} />} text={'Share'} onPress={shareOthers} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.primaryClr,
        borderRadius: 12,
        elevation: 3,
        gap: 12
    },
    poetryWrapper: {
        backgroundColor: colors.secondryClr,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 3,
        borderColor: colors.primaryClr,
        borderWidth: 3,
    },
    actionsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default Poetry;
