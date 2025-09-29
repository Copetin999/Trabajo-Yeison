import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Cargar usuario desde localStorage si ya estaba logueado
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Guardar usuario cuando cambie
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // login de prueba (usuarios hardcodeados)
  const login = (username, password) => {
    // usuarios "registrados"
    const fakeUsers = [
      { username: "Copetin", password: "1234" },
      { username: "Mendez", password: "5678" },
    ];

    const foundUser = fakeUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      return true; // login correcto
    } else {
      return false; // login fallido
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// hook para usarlo fácilmente
export function useAuth() {
  return useContext(AuthContext);
}
