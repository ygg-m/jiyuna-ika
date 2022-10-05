import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url, id, param = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // if (param !== null) {
    //   axios({
    //     url: url + id,
    //     method: "GET",
    //     params: { data: param },
    //   })
    //     .then((res) => {
    //       setData(res.data);
    //     })
    //     .catch((err) => {
    //       setError(err);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // } else {
    axios({
      url: url + id,
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // }
  }, [url]);

  return { data, loading, error };
}
