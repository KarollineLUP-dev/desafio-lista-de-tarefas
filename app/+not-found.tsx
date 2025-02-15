import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not Found" }} />
            <View style={styles.container}>
                <Link href={"/tabs/home"} style={styles.button}>
                    Go back to Home Screen!
                </Link>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23453e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 24,
        textDecorationLine: 'underline',
        color: '#000000',
    },
});