import { useState } from "react";
import { useHistory } from "react-router";
import { registerUser } from "../../services/register";
import FormUserRegister from "../../components/FormUserRegister";
import ModalWindow from "../../components/ModalWindow";
import CenterContainer from "../../components/CenterContainer";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
  });
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const [error, setError] = useState("");

  const handleRegisterUser = async (e) => {
    try {
      e.preventDefault();
      const { data } = await registerUser(user);
      if (!data.errors) {
        setOpen(true);
      } else {
        setError(data.errors);
      }
    } catch (error) {
      setError("This username has been used");
    }
  };

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError("");
    console.log(user);
  };

  const handleConfirm = () => {
    setOpen(false);
    history.push("/login");
  };
  return (
    <CenterContainer>
      <FormUserRegister
        onSubmit={handleRegisterUser}
        handleChangeUser={handleChangeUser}
        error={error}
      />
      <ModalWindow
        modalText={"User registered successfully"}
        open={open}
        handleConfirm={handleConfirm}
        type="confirm"
      />
    </CenterContainer>
  );
};

export default Register;
