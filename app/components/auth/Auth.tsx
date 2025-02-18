import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Auth() {
  const router = useRouter();

  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId:
      "218926543090-q5esk5vtpvqgb2n2658vsu1bar7bhnu9.apps.googleusercontent.com",
  });

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices();
          await GoogleSignin.signIn();

          await GoogleSignin.hasPlayServices();
          const response = await GoogleSignin.signIn();

          if (isSuccessResponse(response)) {
            const user = response.data;
            const userData = {
              name: user.user.name || "Usuário desconhecido",
              email: user.user.email || "Sem e-mail",
              photo: user.user.photo || null,
            };

            await AsyncStorage.setItem("@user", JSON.stringify(userData));
            router.replace("/tabs/home");
          } else {
            console.warn("O login foi cancelado pelo usuário.");
          }
        } catch (error: any) {
          if (isErrorWithCode(error)) {
            switch (error.code) {
              case statusCodes.SIGN_IN_CANCELLED:
                console.warn("Usuário cancelou o login.");
                break;
              case statusCodes.IN_PROGRESS:
                console.warn("Operação de login já está em andamento.");
                break;
              case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                console.error(
                  "Serviços do Google Play não disponíveis ou desatualizados."
                );
                break;
              default:
                console.error("Erro durante o login:", error.message);
            }
          } else {
            console.error("Erro inesperado:", error);
          }
        }
      }}
    />
  );
}
