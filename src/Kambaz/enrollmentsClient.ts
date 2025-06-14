import axios from "axios";

const BASE = "http://localhost:4000/api/enrollments";

export const enroll = async (userId: string, courseId: string) =>
  await axios.post(BASE, { userId, courseId });

export const unenroll = async (userId: string, courseId: string) =>
  await axios.delete(BASE, { data: { userId, courseId } });

export const fetchEnrollments = async () => {
  const response = await axios.get(BASE);
  return response.data;
};
