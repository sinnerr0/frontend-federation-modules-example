import { useEffect, useState } from 'react';

function App({ Component, pageProps }) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) return null;

  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}
export default App;
