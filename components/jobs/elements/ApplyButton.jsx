import { View, Text, Button } from "react-native";
import React, { useCallback, useState } from "react";
import {
  useGetJobStatusMutation,
  useApplyForJobMutation,
} from "../../Features/jobs/jobsApiSlice";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default ApplyButton = ({ jobId }) => {
  const navigation = useNavigation();
  const [getJobStatus, { isLoading }] = useGetJobStatusMutation();
  const [applyForJob, { isLoading: applying }] = useApplyForJobMutation();
  const [status, setStatus] = useState("");

  useFocusEffect(
    useCallback(() => {
      async function refetch() {
        const data = await getJobStatus({ id: jobId }).unwrap();
        data && setStatus(data.status);
      }
      refetch();
    }, [navigation])
  );

  const fetch = async () => {
    const data = await applyForJob({ job: jobId, status: "Applied" }).unwrap();

    data && setStatus(data.status);
  };
  return <Button onPress={fetch} title={status + " " || "Apply "} />;
};
