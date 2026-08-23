"use client";

import { useState } from "react";

export default function AccountActions() {
  const [message, setMessage] = useState("");

  return (
    <div className="account-actions-wrap">
      <div className="account-actions">
        <button type="button" onClick={() => setMessage("Sign-in is disabled in this front-end demo.")}>Sign in</button>
        <button type="button" onClick={() => setMessage("Account creation is disabled in this front-end demo.")}>Create an account</button>
      </div>
      <p className="account-demo-message" aria-live="polite">{message}</p>
    </div>
  );
}
