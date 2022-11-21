import React from "react";
import "./PollData.scss";
import parse from 'html-react-parser';
import {useNavigate} from "react-router-dom"
export const PollData = ({ data }) => {
  const navigate = useNavigate()
  console.log(data);
  return (
    <div className="PollData">
      <header className="poll-header">
        <h1>
          Pool Information{" "}
          <button
            onClick={() => {
              navigate("/")
            }}
          >
            Go Back
          </button>
        </h1>

        <span>
          <label>Client:</label> <mark>{data.cliente}</mark>
        </span>
        <span>
          <label>Tester:</label> <mark>Tester Name</mark>
        </span>
        <span>
          <label>Pool Duration:</label> <mark>{data.timeTest}</mark>
        </span>
        <span>
          <label>Escenario:</label> <mark>{data.escenario}</mark>
        </span>
        <span>
          <label>Website:</label> <a href={data.link}><mark>{data.link}</mark></a>
        </span>
      </header>

      <div className="video">
      <iframe
        width="560"
        height="315"
        src={data.linkVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
      ></iframe>
      </div>
      <div className="transcription">
        <h1>Transcription</h1>
        <p>{parse(data.transcripcion)}</p>
      </div>
      <div className="questions-container">
        <h1>Questions in the poll</h1>
        {data.preguntas.map((param, id) => {
          return (
            <QuestionComponent param={param} id={id + 1}></QuestionComponent>
          );
        })}
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Go Back Top
      </button>
    </div>
  );
};
const QuestionComponent = ({ param, id }) => {
  return (
    <div className="question">
      <header className="question-header">
        <div className="line"></div>
        <span>
          <label>Question n°:</label> <mark>{id}</mark>
        </span>
        <span>
          <label>Question Type:</label> <mark>{param.respuesta}</mark>
        </span>

        <span>
          <label>Description:</label> {param.texto}
        </span>
        <span>
          <label>Duration:</label> <mark>{param.tiempo}</mark>
        </span>
      </header>
    </div>
  );
};
