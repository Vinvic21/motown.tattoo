import { useEffect, useState } from 'react';
import { getStatus } from '../time.js';

export default function OpenStatus({ className = '' }) {
  const [status, setStatus] = useState(getStatus);
  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={`status ${status.open ? 'status--open' : 'status--closed'} ${className}`}>
      <span className="status__dot" aria-hidden="true" />
      {status.label}
    </span>
  );
}
