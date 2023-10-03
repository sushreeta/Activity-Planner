import { default as React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CustomButton,
  InputField,
  Title,
} from "../../../../components/index.components";
import { setParticipantNames } from "../../../../store/features/participants/participantsSlice";
import { CONSTANTS, ROUTES } from "../../../../utils/index.utils";
import "../../../../utils/styles/commonStyles.scss";

export const ParticipantsNames = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const participantNames = useSelector(
    (state) => state.participants.participantNames
  );

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [participantsName, setParticipantsName] = useState([]);

  useEffect(() => {
    setParticipantsName([...participantNames]);
  }, []);

  const checkIsSubmitButtonDisabled = ({ data }) => {
    let flag = false;
    for (let item in data) {
      if (item?.name?.length === 0) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  const onChangePN = ({ value, index }) => {
    setParticipantsName((prev) => {
      let newData = { ...prev[index] };
      newData.name = value;
      prev[index] = newData;
      checkIsSubmitButtonDisabled({ data: prev });
      return prev;
    });
  };

  const validationPN = ({ value, setError }) => {
    if (value.length < 1) {
      setError("Cannot be empty");
    } else if (!CONSTANTS.Participant_Name_Regx.test(value)) {
      setError("Only Chars (max 20)");
    } else {
      setError("");
    }
  };

  const onSubmitPN = () => {
    dispatch(setParticipantNames(participantsName));
    navigate(ROUTES.Activities);
  };

  return (
    <div className="containerBasic">
      <Title text={CONSTANTS.Participants_Name_Title} />
      {participantsName.map((participant, index) => {
        return (
          <InputField
            key={""} //was giving error
            type={"text"}
            keyName={participant?.id}
            index={index}
            onChange={onChangePN}
            placeholder={`Participant ${index + 1}`}
            maxLength={20}
            initialValue={participant?.name ?? ""}
            validation={validationPN}
          />
        );
      })}
      <CustomButton
        onClick={onSubmitPN}
        disabled={isButtonDisabled}
        text={CONSTANTS.Submit_Button_Title}
      />
    </div>
  );
};
