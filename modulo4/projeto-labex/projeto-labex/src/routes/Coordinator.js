export const goToTripsList = (navigate) => {
    navigate("/trips/list");
  };

 export const goToLogin = (navigate) => {
    navigate("/login");
  };

  export const goToHome = (navigate)=> {
    navigate("/");
  };

  export const goToCreateTrip = (navigate) =>{
    navigate("/admin/trips/create")
  }

  export const goToTripDetails = (navigate)=>{
    navigate("/admin/trips/id")
  }
  export const goToTripApplication = (navigate) => {
    navigate("/trips/application");
  };

  export const goToAdminTripsList = (navigate) =>{
    navigate("/admin/trips/list")
  }

  export const goBack = (navigate) => {
    navigate(-1);
  };