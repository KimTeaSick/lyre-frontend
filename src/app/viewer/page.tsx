"use client";
import React from "react";
import * as pdf from "pdfjs-dist";
import { RenderParameters } from "pdfjs-dist/types/src/display/api";

const page = () => {
  const pdfRef = React.useRef<HTMLCanvasElement>(null);
  pdf.GlobalWorkerOptions.workerSrc =
    "node_modules/pdfjs-dist/build/pdf.worker.js";
  React.useEffect(() => {
    var loadingTask = pdf.getDocument("./김요셉_성적증명서.pdf");
    loadingTask.promise.then(function (pdf) {
      // you can now use *pdf* here
      pdf.getPage(1).then(function (page) {
        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });
        // Support HiDPI-screens.
        var outputScale = window.devicePixelRatio || 1;
        var canvas = document.getElementById("the-canvas");
        var context = pdfRef.current!.getContext("2d");
        pdfRef.current!.width = Math.floor(viewport.width * outputScale);
        pdfRef.current!.height! = Math.floor(viewport.height * outputScale);
        pdfRef.current!.style.width = Math.floor(viewport.width) + "px";
        pdfRef.current!.style.height = Math.floor(viewport.height) + "px";
        var transform =
          outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
        var renderContext = {
          canvasContext: context,
          transform: transform,
          viewport: viewport,
        };
        page.render(renderContext as RenderParameters);
      });
    });
  }, []);

  return (
    <div>
      <canvas id="the-canvas" ref={pdfRef}></canvas>
    </div>
  );
};

export default page;
