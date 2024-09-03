import React, { useState } from 'react';
import './LoginPage.css';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onSignup: (email: string, password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(email, password);
    } else {
      onSignup(email, password);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </div>
        </form>
        <div className="toggle-container">
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button className="toggle-button" onClick={toggleMode}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


// import React, { useState } from 'react';
// import './LoginPage.css';

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
//     <div className="login-container">
//       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//       </form>
//       <p>
//         {isLogin ? "Don't have an account?" : "Already have an account?"}
//         <button onClick={toggleMode}>
//           {isLogin ? 'Sign Up' : 'Login'}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;
