import { useState } from "react";
import Email from "./Email";
import ForgotPassword from "./ForgotPassword";
import Otp from "./Otp";
import Password from "./Password";
const Login = () => {
  const [page, setPage] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newpass, setNewpass] = useState();
  const [pass, setPass] = useState("123456");
  const otp = "1234";
  return (
    <>
      {page === "email" && (
        <Email
          setPage={setPage}
          setEmail={setEmail}
          email={email}
          pass={pass}
          phone={phone}
          setPhone={setPhone}
        />
      )}
      {page === "password" && (
        <Password setPage={setPage} email={email} pass={pass} />
      )}
      {page === "otp" && <Otp setPage={setPage} otp={otp} phone={phone} />}
      {page === "forgot" && (
        <ForgotPassword
          setPage={setPage}
          newpass={newpass}
          setNewpass={setNewpass}
          setPass={setPass}
          otp={otp}
        />
      )}
    </>
  );
};

export default Login;
