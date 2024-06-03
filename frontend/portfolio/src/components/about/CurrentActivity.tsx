const CurrentActivity = () => {
  const fetchUpdates = () => {
    console.log("Fetching");
  };

  return (
    <div>
      <br />
      <div className="font-extrabold text-xl sm:text-xl md:text-2xl lg:text-2xl">
        Updates on me...
        <br />
        <br />
      </div>
      <div className="border border-gray-100 p-5">
        <p className="text-justify text-wrap">
          As of writing, in the summer of 2024, I am doing an internship with
          Cardiff University involving adapting the frontend and backend of the
          web application FreeTxt. The application utilises Natural Language
          Processing to analyse questionnaire response data.
        </p>
        <div className="text-wrap font-bold flex flex-row-reverse">
          June 3, 2024
        </div>
      </div>
      <br /><br />
      <div className="border border-gray-100 p-5">
        <p className="text-justify text-wrap">
          As of writing, in the summer of 2024, I am doing an internship with
          Cardiff University involving adapting the frontend and backend of the
          web application FreeTxt. The application utilises Natural Language
          Processing to analyse questionnaire response data. As of writing, in
          the summer of 2024, I am doing an internship with Cardiff University
          involving adapting the frontend and backend of the web application
          FreeTxt. The application utilises Natural Language Processing to
          analyse questionnaire response data. As of writing, in the summer of
          2024, I am doing an internship with Cardiff University involving
          adapting the frontend and backend of the web application FreeTxt. The
          application utilises Natural Language Processing to analyse
          questionnaire response data.
        </p>
        <div className="text-wrap font-bold flex flex-row-reverse">
          June 3, 2024
        </div>
      </div>

      <p className="font-medium">Find details of my specific skills below.</p>
      <div className="flex flex-col items-center"></div>
    </div>
  );
};

export default CurrentActivity;
