import avater from "../../assets/froentend/img/patients/patient.jpg";

// avater
const Avater = ({ url }) => {
  return <img src={url ? url : avater} alt="avater" />;
};

export default Avater;
