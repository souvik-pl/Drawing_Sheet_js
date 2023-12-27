import Controls from "./controls";

export default class ControlsBuilder {
    constructor(canvasRef) {
        this.canvasRef = canvasRef;
    }

    setCanvasContainer(canvasContainerId) {
        this.canvasContainerId = canvasContainerId;
        return this;
    }

    setPenButton(penButtonId) {
        this.penButtonId = penButtonId;
        return this;
    }

    setEraserButton(eraserButtonId) {
        this.eraserButtonId = eraserButtonId;
        return this;
    }

    setEraseAllButton(eraseAllButtonId) {
        this.eraseAllButtonId = eraseAllButtonId;
        return this;
    }

    setSizeSlider(sizeSliderId) {
        this.sizeSliderId = sizeSliderId;
        return this;
    }

    setSizeSliderLabelId(sizeSliderLabelId) {
        this.sizeSliderLabelId = sizeSliderLabelId;
        return this;
    }

    setPenColorPickerId(penColorPickerId) {
        this.penColorPickerId = penColorPickerId;
        return this;
    }

    setDownloadButtonId(downloadButtonId) {
        this.downloadButtonId = downloadButtonId;
        return this;
    }

    build() {
        return new Controls(
            this.canvasRef,
            this.canvasContainerId,
            this.penButtonId,
            this.eraserButtonId,
            this.eraseAllButtonId,
            this.sizeSliderId,
            this.sizeSliderLabelId,
            this.penColorPickerId,
            this.downloadButtonId
        );
    }
}