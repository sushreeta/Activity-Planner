import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivities } from "../../../../store/features/activities/activitiesSlice";
import { CONSTANTS, makeApiCall } from "../../../../utils/index.utils";
import { Title } from "../../../../components/index.components";
import "../../../../utils/styles/commonStyles.scss";

export const ActivityList = () => {
  const dispatch = useDispatch();
  const participants = useSelector((state) => state.participants);
  const { numOfParticipants, participantNames } = participants;
  const refData = useRef({
    stop: false,
  });
  const [state, setState] = useState([]);

  const updateState = ({ data }) => {
    setState((prev) => {
      for (let i = 0; i < prev.length; i++) {
        if (data.key === prev[i].key) {
          // found a duplicate activity
          refData.current.stop = true;
          return prev;
        }
      }
      // when the data length is 5
      if (prev.length === 4) {
        refData.current.stop = true;
      }
      const newData = [...prev, data];
      newData.sort((item1, item2) => item1?.price - item2?.price);
      return newData;
    });
  };

  const getData = async () => {
    while (state.length < CONSTANTS.Num_Api_Call && !refData.current.stop) {
      const { data } = await makeApiCall({
        endPoint: "activity",
        queryParams: { participants: numOfParticipants },
      });
      await updateState({ data });
      if (refData.current.stop) {
        return;
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (refData.current.stop) {
      dispatch(setActivities(state));
    }
  }, [state]);

  return (
    <div className="containerBasic">
      <Title text={"Participants Names"} />

      {participantNames.length > 0 ? (
        <ul>
          {participantNames.map((participant) => {
            return (
              <li style={{ padding: 4, margin: 8 }} key={participant?.id}>
                {participant?.name}
              </li>
            );
          })}
        </ul>
      ) : (
        <h6>Oops! No Participants to show</h6>
      )}

      {state?.length > 0 && (
        <>
          <Title text={"Activities"} />
          <ul style={{ minWidth: 460 }}>
            {state.map((activity, index) => (
              <li style={{ padding: 4, margin: 8 }} key={index}>
                {`${activity?.activity} - ${activity?.price}`}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
