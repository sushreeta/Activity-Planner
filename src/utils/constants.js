export const CONSTANTS = Object.freeze({
  Participant_Name_Regx: /^(?=.{1,20}$)[A-Za-z]+(?:[ '-][A-Za-z]+)?$/,
  Header_Title: "Activity Planner",
  Participants_Name_Title: "Participants Name",
  Participants_Number_Title: "Enter Participants (Max 5)",
  Activities_Title: "",
  Submit_Button_Title: "Submit",
  Num_Api_Call: 5,
});

export const ROUTES = Object.freeze({
  Names: "/names",
  Activities: "/activities",
});
