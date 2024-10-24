import { useParams } from "react-router-dom";

const DescriptionPage = () => {
  const { id } = useParams();
  return <h1>Desc{id}</h1>;
};
export default DescriptionPage;
