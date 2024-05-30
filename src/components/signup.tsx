/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-escape */
import { X } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

type SignUpProps = {
  toggleSignIn: boolean;
  setToggleSignIn: (value: boolean) => void;

  toggleSignUp: boolean;
  setToggleSignUp: (value: boolean) => void;
};

const variantBox: Variants = {
  show: {
    opacity: 1,
    bottom: 0,
  },
  hidden: {
    opacity: 0,
    bottom: -300,
  },
};

export function SignUp(props: SignUpProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const handdleClickToggle = () => {
    props.setToggleSignUp(false);
    props.setToggleSignIn(true);
    return props.toggleSignIn, props.toggleSignUp;
  };

  const handdleClickClose = () => {
    props.setToggleSignUp(false);

    return props.toggleSignUp;
  };

  const isEmailOk = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexteste = regex.test(email);

    console.log(regexteste);
    if (regexteste === false) {
      alert("informações incorretas");
    }
    if (email === "") {
      alert("informações incorretas");
    }
    return true;
  };
  const isSenhaOk = (senha: string) => {
    const hasMinLength = senha.length >= 4;
    const hasUpperCase = /[A-Z]/.test(senha);
    const hasLowerCase = /[a-z]/.test(senha);

    if (hasMinLength == true && hasUpperCase == true && hasLowerCase == true) {
      return true;
    } else {
      alert("a senha deve ter maiusculas e minusculas, e no minimo 4 letras");
      return false;
    }
  };

  const Verification = (email: string, senha: string, nome: string) => {
    if (isEmailOk(email) == true && isSenhaOk(senha) == true) {
      alert(`boas vindas, ${nome} sua conta foi criada com sucesso!!`);
    }
  };

  return (
    <>
      <motion.div
        layout
        variants={variantBox}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="signUp"
      >
        <div className="titulosECloseSign">
          <div className="divsecreta"></div>
          <div className="titulosSign">
            <h1 className="tituloSignUp">Criar Conta</h1>
            <p className="subTittleSignUp" onClick={handdleClickToggle}>
              ja tem conta?
            </p>
          </div>

          <button className="buttonCloseSign" onClick={handdleClickClose}>
            <X size={30} color="#1b1a1a" strokeWidth={2.5} />
          </button>
        </div>
        <div className="formSignUp">
          <div className="divTextoEInput">
            <input
              type="text"
              className="input"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="divTextoEInput">
            <input
              type="text"
              className="input"
              placeholder="senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
          <div className="divTextoEInput">
            <input
              type="text"
              className="input"
              placeholder="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
        </div>
        <button
          className="sendSign"
          onClick={() => Verification(email, senha, nome)}
        >
          enviar
        </button>
      </motion.div>
    </>
  );
}
