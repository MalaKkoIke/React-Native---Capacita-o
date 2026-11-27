import { View, Image, StyleSheet, Text, ScrollView, Pressable} from 'react-native';
import { InputField } from '../components/InputField';

export function RegisterScreen (){

    return (
        <ScrollView style={viewContainer.container}
        contentContainerStyle={viewContainer.content}
        keyboardShouldPersistTaps="handled">
            <View>
                <Image source={require('../assets/images/money-bag-svgrepo-com.png')}
                style={header.logo}
                resizeMode="contain"
                />
            <Text style={header.h1}>H Finanças</Text>
            </View>
            <View style={forms.container}>
                <InputField
                    label="E-mail"
                    placeholder="Digite seu e-mail aqui..."
                    keyboardType="email-address"
                />
                <InputField
                    label="Senha"
                    placeholder="Digite sua senha aqui..."
                    keyboardType="default"
                    secureTextEntry={true}
                />
                <Pressable style={forms.button}>
                    <Text style={forms.buttonText}>Cadastrar</Text>
                </Pressable>
                <Pressable style={forms.loginLink}>
                    <Text style={forms.loginText}>
                      Já tem conta?{' '}
                    <Text style={forms.loginHighlight}>Faça login</Text>
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const viewContainer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
  },
  content: {
    flexGrow: 1,
    paddingTop: 64,
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
});

const header = StyleSheet.create({
    logo: {
    width: 150,
    height: 150,
  },
    h1: {
    fontSize: 28,
    fontWeight: '700',
    color: '#15803D',
    textAlign: 'center',
    }
});
const forms = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 420,
        marginTop: 40,
    },
    button: {
        width: '100%',
        minHeight: 56,
        backgroundColor: '#15803D',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginTop: 12,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
    loginLink: {
        marginTop: 20,
        paddingVertical: 12,
        alignItems: 'center',
    },
    loginText: {
        fontSize: 16,
        color: '#111827',
        textAlign: 'center',
    },
    loginHighlight: {
        color: '#15803D',
        fontWeight: '600',
        textDecorationLine: 'underline',
},
})