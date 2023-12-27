import Canvas from "./canvas";
import ControlsBuilder from "./controls-builder";
import { CONSTANTS } from "./constants";

const { 
    penButtonId, 
    eraserButtonId, 
    eraseAllButtonId, 
    canvasContainerId,
    sizeSliderId,
    sizeSliderLabelId,
    penColorPickerId,
    downloadButtonId
} = CONSTANTS.controls;
const { canvasId } = CONSTANTS.canvas;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = new Canvas(canvasId);
    const controlsBuilder = new ControlsBuilder(canvas)
        .setCanvasContainer(canvasContainerId)
        .setPenButton(penButtonId)
        .setEraserButton(eraserButtonId)
        .setEraseAllButton(eraseAllButtonId)
        .setSizeSlider(sizeSliderId)
        .setSizeSliderLabelId(sizeSliderLabelId)
        .setPenColorPickerId(penColorPickerId)
        .setDownloadButtonId(downloadButtonId)
        .build();
});