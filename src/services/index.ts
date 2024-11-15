import { storage } from "@/lib";
import { getDownloadURL, ref } from "firebase/storage";

export const getContent = async (path: string) => {
  const url = await getDownloadURL(ref(storage, `Owbird-cdn/${path}`));

  return url;
};
