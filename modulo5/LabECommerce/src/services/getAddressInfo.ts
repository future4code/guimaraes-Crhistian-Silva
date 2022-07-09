import axios from "axios";

export const getAdrressInfo = async (zipcode: number): Promise<string> => {
  try {
    const url = `https://viacep.com.br/ws/${zipcode}/json`;
    const res = await axios.get(url);
    const finalAddress = `${res.data.logradouro}, ${res.data.bairro} - ${res.data.localidade}/${res.data.uf}`;
    return finalAddress;
  } catch (error:any) {
    throw new Error("VIA_CEP_ERROR");
  }
};
