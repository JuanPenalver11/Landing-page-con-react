import React from "react";

const Jumbotron = (props) => {
  return (
    <div class="container py-5" id="jumbo">
      <div class="container">
        <h1 class="display-5 fw-bold">El Alquimista</h1>
        <p class="col-md-12 fs-4">
          "Comprendió que para ser feliz se necesita amar; aceptar la vida
          comoviene; disfrutar de lo pequeño y de lo grande; conocerse a sí
          mismo y aceptarse así como se es; sentirse querido y valorado, pero
          también querer y valorar; tener razones para vivir y esperar y también
          razonespara morir y descansar."
        </p>
        <button class="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
