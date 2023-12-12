import { useEffect, useState } from "react";
const useFetchAllJobs = () => {
  const [loading, setLoading] = useState(true);
  const [faliled, setFailed] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await fetch(
          `http://192.168.0.102:5000/api/v1/jobs/all`
        );
        const rData = await response.json();
        if (!response.ok) {
          setLoading(false);
          setFailed(true);
          return;
        }
        setLoading(false);
        setData(rData);
      } catch (error) {
        console.log(`Fetching UserData faliled with error ${error}`);
      }
    };
    fetchAllJobs();
  }, []);

  return { loading, faliled, data };
};

export default useFetchAllJobs;
