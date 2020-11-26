import React, { useContext } from "react"
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { LinearGradient } from "expo-linear-gradient"
import AppButton from "../components/AppButton"
import AppText from "../components/AppText"
import Header from "../components/Header"
import colors from "../config/colors"
import UserContext from "../context/userContext"
import AppTextInput from "../components/AppTextInput"
import Screen from "../components/Screen"
import { ScrollView } from "react-native-gesture-handler"

const SignInScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext)

  return (
    <Screen>
      <Header title="SongPact" noIcon />
      <KeyboardAvoidingView behavior="padding" style={styles.body}>
        <View style={styles.welcomeMessage}>
          <AppText style={styles.welcome} color={colors.white}>
            Welcome Message
          </AppText>
          <AppText style={styles.message} color={colors.white}>
            Laborum nostrud proident sit elit qui occaecat proident sunt ut.
            Lorem proident velit culpa non nostrud enim non. Est adipisicing
            laboris mollit fugiat esse et. Nostrud amet qui eiusmod sit commodo
            voluptate quis cillum ipsum qui Lorem sint laborum. Enim quis
            excepteur fugiat quis laborum sunt consequat aliqua aute cillum
            laborum deserunt cillum reprehenderit. Eu dolore nulla nostrud velit
            in aliqua cupidatat ea. Ad do culpa culpa excepteur qui magna sunt
            veniam consectetur qui qui qui.
          </AppText>
        </View>
        <View style={styles.signIn}>
          <View style={styles.inputs}>
            <AppTextInput placeholder="Email" />
            <AppTextInput placeholder="Password" />
          </View>
        </View>
        <AppButton
          style={styles.loginButton}
          title="Login"
          color={colors.confirm}
          onPress={() => setUser(true)}
        />
        <View style={styles.signUp}>
          <AppText>Don't have an account?</AppText>
          <View style={styles.signUpButton}>
            <AppButton
              title="Sign Up"
              color={colors.white}
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  welcomeMessage: {
    marginTop: "10%",
    flex: 1,
    width: "80%",
  },
  welcome: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: "5%",
  },
  message: {
    textAlign: "justify",
  },
  signIn: {
    flex: 0.2,
    width: "100%",
    marginTop: 20,
    marginVertical: "30%",
    alignItems: "center",
  },
  inputs: {
    width: "80%",
    marginVertical: 5,
  },
  loginButton: {
    width: "100%",
    position: "absolute",
    bottom: "20%",
  },
  signUp: {
    flex: 0.2,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: "10%",
  },
  signUpButton: {
    width: "20%",
    marginLeft: "10%",
  },
})