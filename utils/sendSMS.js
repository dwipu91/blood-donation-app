import axios from "axios";

export const sendSMS = async (to, msg) => {
  await axios.get(
    `http://bulksmsbd.net/api/smsapi?api_key=Gh1FYXzOyR0bW58iQpQN&type=text&number=${to}&senderid=8809617613060&message=${msg}`
  );
};
// http://bulksmsbd.net/api/smsapi?api_key=Gh1FYXzOyR0bW58iQpQN&type=text&number=Receiver&senderid=8809617613060&message=TestSMS

// `http://bulksmsbd.net/api/smsapi?api_key=cxVzYEy04o7WVqpJOf77&type=text&number=${to}&senderid=8809612443880&message=${msg}`
