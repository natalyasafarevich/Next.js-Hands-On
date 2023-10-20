import { GoogleButton } from "@/componets/GoogleButton";
import SignForm from "@/componets/SigninForm";

export default async function Signin() {
return (
  <div>
    <h1>Sign in</h1>
    <GoogleButton/>
    <br />
    <SignForm/>
  </div>
)
}
