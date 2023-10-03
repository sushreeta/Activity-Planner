import { default as React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Title,
  InputField,
  CustomButton,
} from "../../../../components/index.components";
import { setParticipantsNumAndName } from "../../../../store/features/participants/participantsSlice";
import "../../../../utils/styles/commonStyles.scss";
import { CONSTANTS, ROUTES } from "../../../../utils/constants";

export const ParticipantCountInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const participants = useSelector(
    (state) => state.participants.numOfParticipants
  );

  const [numOfParticipants, setNumOfParticipants] = useState("");

  useEffect(() => {
    if (participants > 0) setNumOfParticipants(participants);
  }, [participants]);

  const isSubmitDisabledNOP =
    Number(numOfParticipants) < 1 || Number(numOfParticipants) > 5;

  const validationNOP = ({ value, setError }) => {
    if (value > 5 || value < 1) {
      // handle error state here
      setError("Enter 1-5");
    } else {
      setError("");
    }
  };

  const onChangeNOP = ({ value }) => {
    setNumOfParticipants(value);
  };

  const onSubmitNOP = () => {
    // Preparing data for participants
    const participantsData = [];
    for (let i = 0; i < numOfParticipants; i++) {
      participantsData.push({
        id: `p_${i + 1}`,
        name: "",
      });
    }
    // setting data to take user input for participants
    dispatch(
      setParticipantsNumAndName({
        participantNames: participantsData,
        numOfParticipants,
      })
    );
    navigate(ROUTES.Names);
  };

  return (
    <div className="containerBasic">
      <Title text={CONSTANTS.Participants_Number_Title} />
      <InputField
        type={"number"}
        initialValue={numOfParticipants}
        onChange={onChangeNOP}
        placeholder={"0"}
        maxLength={1}
        validation={validationNOP}
      />
      <CustomButton
        onClick={onSubmitNOP}
        disabled={isSubmitDisabledNOP}
        text={CONSTANTS.Submit_Button_Title}
      />
    </div>
  );
};
