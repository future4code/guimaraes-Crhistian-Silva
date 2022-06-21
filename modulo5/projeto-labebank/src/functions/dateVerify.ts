export const dateVerify = (date: any)=> {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const arrayBirth = date.split("/");
  const day = arrayBirth[0];
  const month = arrayBirth[1];
  const birthDate = arrayBirth[2];
  let age = currentYear - birthDate;
  const currentMonth = currentDate.getMonth() + 1;
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
  if (currentMonth < month) {
    age--;
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if (currentMonth == month) {
      if (new Date().getDate() < day) {
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        age--;
      }
    }
  }
  return age;
}
