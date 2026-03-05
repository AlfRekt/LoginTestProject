import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const [errors, setErrors] = useState([]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  const validate = () => {
    const newErrors = [];

    if (!emailRegex.test(email)) {
      newErrors.push("Geçerli bir email giriniz");
    }

    if (!passwordRegex.test(password)) {
      newErrors.push("Şifre güçlü olmalı");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate() && accepted) {
      navigate("/success");
    }
  };

  const handleChange = (e) => {
    if(e.target.name === "email")
    {
        setEmail(e.target.value);
    }else if(e.target.name === "password")
    {
        setPassword(e.target.value);
    }
  }

  const isFormValid =
    emailRegex.test(email) &&
    passwordRegex.test(password) &&
    accepted;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        name="password"
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Şartları kabul ediyorum
      </label>

      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}

      <button disabled={!isFormValid}>Login</button>
    </form>
  );
}

export default Login;