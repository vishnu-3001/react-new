import { useEffect, useState, useCallback } from "react";

async function sendRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json(); // Fixed: use response.json() instead of resData.json()
  if (!response.ok) {
    throw new Error(resData.message || 'Something went wrong while sending the request');
  }
  return resData;
}

export default function useHTTP(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const send = useCallback(async function send(data) {
    setLoading(true);
    setError(''); // Clear previous error state
    try {
      const resData = await sendRequest(url, {...config,body:data});
      setData(resData);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [url, config]);

  useEffect(() => {
    if (config && config.method === 'GET') {
      send();
    }
  }, [send, config]);

  return {
    data,
    loading,
    error,
    send,
  };
}
