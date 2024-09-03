import React, { useState } from 'react';
import LoginPage from './LoginPage.tsx';
import FencingCostCalculator from './FencingCostCalculator.tsx';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Simulated login logic (replace with actual backend validation)
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
      console.log('User logged in'); // Add this line for debugging
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignup = (email: string, password: string) => {
    // Simulated signup logic (replace with actual signup logic)
    alert(`Account created for ${email}`);
    // Automatically log in the user after signup
    setIsLoggedIn(true);
    console.log('User signed up and logged in'); // Add this line for debugging
  };

  console.log('isLoggedIn:', isLoggedIn); // Add this line for debugging

  return (
    <div>
      {isLoggedIn ? (
        <FencingCostCalculator />
      ) : (
        <LoginPage onLogin={handleLogin} onSignup={handleSignup} />
      )}
    </div>
  );
};

export default App;


// //   return (
// //     <div className="App">
// //       {isLoggedIn ? (
// //         <FencingCostCalculator />
// //       ) : (
// //         <LoginPage onLogin={handleLogin} onSignup={function (email: string, password: string): void {
// //                       throw new Error('Function not implemented.');
// //                   } } />
// //       )}
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useState } from 'react';
// import './App.tsx';


// interface LoginPageProps {
//   onLogin: (email: string, password: string) => void;
//   onSignup: (email: string, password: string) => void;
// }

// const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSignup }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isLogin) {
//       onLogin(email, password);
//     } else {
//       onSignup(email, password);
//     }
//   };

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="button-container">
//             <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//           </div>
//         </form>
//         <div className="toggle-container">
//           <p className="toggle-text">
//             {isLogin
//               ? "Don't have an account?"
//               : 'Already have an account?'}
//           </p>
//           <button className="toggle-button" onClick={toggleMode}>
//             {isLogin ? 'Sign Up' : 'Login'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


