// eslint-disabled
"use client";
import { useEffect, useRef } from "react";
import styles from "./viewer.module.scss";

export default function page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<any>(null); // Ref to store the current render task.

  useEffect(() => {
    let isCancelled = false;

    (async function () {
      // Import pdfjs-dist dynamically for client-side rendering.
      const pdfJS = await import("pdfjs-dist/build/pdf"!);
      const path = "./pdf.worker.min.mjs";
      // Set up the worker.
      pdfJS.GlobalWorkerOptions.workerSrc = window.location.origin + path;

      // Load the PDF document.
      const pdf = await pdfJS.getDocument("asdasd.pdf").promise;

      // Get the first page.
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      // Prepare the canvas.
      const canvas = canvasRef.current!;
      const canvasContext = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Ensure no other render tasks are running.
      if (renderTaskRef.current) {
        await renderTaskRef.current.promise;
      }
      // Render the page into the canvas.
      const renderContext = { canvasContext, viewport };
      const renderTask = page.render(renderContext);

      // Store the render task.
      renderTaskRef.current = renderTask;

      // Wait for rendering to finish.
      try {
        await renderTask.promise;
      } catch (error: any) {
        if (error.name === "RenderingCancelledException") {
          console.log("Rendering cancelled.");
        } else {
          console.error("Render error:", error);
        }
      }

      if (!isCancelled) {
        console.log("Rendering completed");
      }
    })();

    // Cleanup function to cancel the render task if the component unmounts.
    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, []);

  return (
    <div className={styles["page-viewer"]}>
      <canvas ref={canvasRef} className={styles["pdf-full-size"]} />
    </div>
  );
}
