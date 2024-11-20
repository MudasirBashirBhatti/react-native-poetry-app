import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContentCompoent from '../Components/ContentCompoent'
import { colors } from '../utilities/colors'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const PrivacyPolicy = () => {
    return (
        <View style={styles.mainContainer}>
            <ContentCompoent contentComponent={
                <ScrollView showsVerticalScrollIndicator={false} style={styles.innerContainer}>
                    <View>
                        <Text style={styles.mainHeading}>Privacy Policy for Urdu Poetry | Rooh-e-byan</Text>
                        <Text style={styles.mainText}>Welcome to Urdu Poetry | Rooh-e-byan. Your privacy is important to us. This Privacy Policy explains how we handle your information when you use our app.</Text>
                    </View>
                    <View>
                        <Text style={styles.subHeading}>Information Collection</Text>
                        <Text style={styles.subText}>We want to assure you that our app (Urdu Poetry | Rooh-e-byan) does not collect, store, or share any personal information from users. We do not track your activity or usage patterns within the app.</Text>
                    </View>
                    <View>
                        <Text style={styles.subHeading}>Use of Poetry</Text>
                        <Text style={styles.subText}>In our app, we showcase poetry from various poets, giving credit by mentioning the author's name. If you are the owner of any poetry included in our app and have concerns, please feel free to contact us.</Text>
                    </View>
                    <View>
                        <Text style={styles.subHeading}>Changes to This Privacy Policy</Text>
                        <Text style={styles.subText}>We may update our Privacy Policy occasionally. Any changes will be posted in this section of the app. We encourage you to review this Privacy Policy periodically for any updates.</Text>
                    </View>
                    <View>
                        <Text style={styles.subHeading}>Contact Us</Text>
                        <Text style={styles.subText}>If you have any questions or concerns about this Privacy Policy, or if you have an issue regarding the poetry used, please contact us at:{'\n \n'}
                            for.all64@gmail.com

                        </Text>
                    </View>

                </ScrollView>
            } />
        </View>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primaryClr,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {

    },
    mainHeading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.secondryClr,
        marginBottom: 16
    },
    mainText: {
        color: colors.secondryClr,
        fontSize: 17,
        marginBottom: 20
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondryClr,
        marginBottom: 4
    },
    subText: {
        color: colors.secondryClr,
        marginBottom: 20
    }
})