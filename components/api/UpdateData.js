import { useEffect, useState } from "react";
const useUpdateData = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [faliled, setFailed] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(0);
  const updateData = async (user) => {
    try {
      const response = await fetch(`http://192.168.0.102:5000/api/v1/${url}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const rData = await response.json();
      if (!response.ok) {
        setLoading(false);
        setFailed(true);
        setStatus(response.status);
        console.log(response.status);
        return;
      }
      setLoading(false);
      setStatus(response.status);
      setData(rData);
    } catch (error) {
      console.log(`Fetching UserData faliled with error ${error}`);
    }
  };
  return { updateData, data, loading, faliled, status };
};

export default useUpdateData;
