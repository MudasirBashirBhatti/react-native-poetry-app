import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../utilities/colors';
import IconWithText from '../(lite)/IconWithText';
import CopyIcon from '../../assets/icons/CopyIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import ShareIcon from '../../assets/icons/ShareIcon';
import PoetryTextWithAuthor from '../(lite)/PoetryTextWithAuthor';
import Clipboard from '@react-native-clipboard/clipboard';

const Poetry = ({ poetryTextArr, poet }) => {
    const [copiedText, setcopiedText] = useState('');

    const copyToClipboard = async () => {
        const textToCopy = poetryTextArr.join('\n');
        Clipboard.setString(textToCopy);
        const text = await Clipboard.getString();
        setcopiedText(text);
        Alert.alert(`سٹیٹس کاپی ہو گیا ہے ✔️`)
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.poetryWrapper}>
                <PoetryTextWithAuthor poetryTextArr={poetryTextArr} poet={poet} />
            </View>
            <View style={styles.actionsWrapper}>
                <IconWithText icon={<CopyIcon fill={colors.secondryClr} />} text={'Copy'} onPress={copyToClipboard} />
                <IconWithText icon={<CopyIcon fill={'green'} />} text={'Whatsapp'} />
                <IconWithText icon={<HeartIcon fill={colors.alert} />} text={'Favourite'} />
                <IconWithText icon={<ShareIcon fill={colors.secondryClr} />} text={'Share'} />
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
