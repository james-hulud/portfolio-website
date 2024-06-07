"use client";

import { fetchUpdates } from "@/api/api";
import { useEffect, useState } from "react";
import Loading from "../data/Loading";

interface updateObject {
  id: number;
  date: string;
  content: string;
}

const UpdateSection = (props: { update: updateObject }) => {
  return (
    <>
      {props.update.id === 1 ? (
        <>
          <br />
          <br />
          <div className="border border-gray-300 rounded p-5">
            <p className="text-center sm:text-justify text-wrap">
              {props.update.content}
            </p>
            <div className="text-wrap font-bold flex flex-row-reverse">
              {props.update.date}
            </div>
          </div>
        </>
      ) : (
        <div className="border border-gray-300 rounded p-5">
          <p className="text-wrap">{props.update.content}</p>
          <div className="text-wrap font-bold flex flex-row-reverse">
            {props.update.date}
          </div>
        </div>
      )}
    </>
  );
};

const CurrentActivity = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatesData = await fetchUpdates();
        setUpdates(updatesData.reverse());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <br />
      <div className="font-extrabold text-xl sm:text-xl md:text-2xl lg:text-2xl">
        Updates on me
        <br />
        <br />
      </div>
      {updates.map((update, index) => (
        <UpdateSection key={index} update={update} />
      ))}
    </div>
  );
};

export default CurrentActivity;
