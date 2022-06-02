enum ROLE {
	ADMIN = "admin",
	USER = "user"
  }
  
  type user = {
	name: string;
	email: string;
	role: ROLE;
  };
  
  const usersList: user[] = [
	{ name: "Rogério", email: "roger@email.com", role: ROLE.USER },
	{ name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
	{ name: "Aline", email: "aline@email.com", role: ROLE.USER },
	{ name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
	{ name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
	{ name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
  ];
  
  const funcao5 = (list: user[]): string[] => {
	const emailsList: string[] = list
	  .filter((user) => user.role === ROLE.ADMIN)
	  .map((user) => user.email);
	return emailsList;
  };
  console.log("ex.5", funcao5(usersList));