import axios from 'axios';

export const SendEmail = async ({ fullName, email, message, setSend }) => {
  try {
    const datas = { fullName, email, message };
    const res = await axios.post('https://api-code-three.vercel.app/sendemail', datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};
