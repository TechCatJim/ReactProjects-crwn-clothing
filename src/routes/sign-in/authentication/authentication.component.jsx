import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function getRedirectResultFunction() {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   getRedirectResultFunction();
  // }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign in With Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
