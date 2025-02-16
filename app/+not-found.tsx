import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Não localizamos" }} />
            <View style={styles.container}>
                <Link href={"/login"} style={styles.button}>
                    Voltar para a tela de Login
                </Link>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00264D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 24,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});