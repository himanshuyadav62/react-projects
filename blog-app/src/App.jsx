import "./App.css";

import authService from "./appwrite/auth";

function App() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;

    try {
      await authService.createAccount(email.value, password.value,name.value);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );

}

export default App;
