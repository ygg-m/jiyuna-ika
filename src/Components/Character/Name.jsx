import { useState} from "react";

export const Name = ({ id }) => {
  // const { data } = useFetch("http://xivapi.com/character/", id);
  const [authorName, setAuthorName] = useState("undefined");

  // useEffect(() => {
  //   console.log(getCharacter());
  // }, [id]);

  // useEffect(() => {
  //   if (data) setAuthorName(data.Character.Name);
  // }, [data, imgIndex]);

  return authorName;
};
