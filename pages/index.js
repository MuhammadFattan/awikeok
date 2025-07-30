import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [output, setOutput] = useState('');

  const fetchAndDecrypt = async () => {
    const code = document.getElementById('friendcode').value;

    try {
      const res = await fetch('https://awikeok.vercel.app/api/proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friendCode: code }),
      });

      const data = await res.json();
      const { encrypted } = data;
      if (!encrypted) {
        setOutput('❌ Tidak ada data terenkripsi dari server.');
        return;
      }

      const { init, dec } = await import('../src/runnable.js');
      await init();
      const decrypted = dec(encrypted);

      try {
        const json = JSON.parse(decrypted);
        setOutput(JSON.stringify(json, null, 2));
      } catch {
        setOutput(decrypted);
      }
    } catch (err) {
      setOutput(`❌ Error saat mengambil atau mendekripsi data: ${err}`);
    }
  };

  return (
    <>
      <Head>
        <title>Arona Decrypt Tool</title>
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Cari Assist Murid</h1>
        <input id="friendcode" placeholder="Masukkan Friend Code" style={{ padding: '0.5rem', fontSize: '1rem' }} />
        <button onClick={fetchAndDecrypt} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>Cari</button>
        <pre style={{ marginTop: '2rem', background: '#f0f0f0', padding: '1rem' }}>{output}</pre>
      </main>
    </>
  );
}
