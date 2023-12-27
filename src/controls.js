import { CONSTANTS } from "./constants";
const { cssClasses, uiTexts } = CONSTANTS.controls;
const { toolType } = CONSTANTS.canvas;

export default class Controls {
    constructor(
        canvasRef,
        canvasContainerId,
        penButtonId,
        eraserButtonId,
        eraseAllButtonId,
        sizeSliderId,
        sizeSliderLabelId,
        penColorPickerId,
        downloadButtonId
    ) {
        this.canvasRef = canvasRef;
        this.canvasContainer = document.getElementById(canvasContainerId);
        this.penButton = document.getElementById(penButtonId);
        this.eraserButton = document.getElementById(eraserButtonId);
        this.eraseAllButton = document.getElementById(eraseAllButtonId);
        this.sizeSlider = document.getElementById(sizeSliderId);
        this.sizeSliderLabel = document.getElementById(sizeSliderLabelId);
        this.penColorPicker = document.getElementById(penColorPickerId);
        this.downloadButton = document.getElementById(downloadButtonId);
        this.init();
    }

    init() {
        this.canvasRef.setTool(toolType.pen);
        const intialLineWidth = this.sizeSlider.value;
        const intialPenColor = this.penColorPicker.value
        this.canvasRef.setCanvasContextLineWidth(intialLineWidth);
        this.canvasRef.setStrokeStyle(intialPenColor);
        this.sizeSliderLabel.innerText = uiTexts.sliderLabel.pen;
        this.penButton.classList.add(cssClasses.buttonSelected);
        this.canvasContainer.classList.add(cssClasses.cursorPen);
        this.setupEventListeners()
    }

    setupEventListeners() {
        this.penButton.addEventListener("click", this.selectPen.bind(this));
        this.eraserButton.addEventListener("click", this.selectEraser.bind(this));
        this.eraseAllButton.addEventListener("click", this.clearCanvas.bind(this));
        this.sizeSlider.addEventListener("input", this.updateToolSize.bind(this));
        this.penColorPicker.addEventListener("change", this.updatePenColor.bind(this));
        this.downloadButton.addEventListener("click", this.downloadCanvas.bind(this));
    }

    selectPen() {
        this.canvasRef.setTool(toolType.pen);
        this.canvasContainer.classList.add(cssClasses.cursorPen);
        this.canvasContainer.classList.remove(cssClasses.cursorEraser);
        this.penButton.classList.add(cssClasses.buttonSelected);
        this.eraserButton.classList.remove(cssClasses.buttonSelected);
        this.sizeSliderLabel.innerText = uiTexts.sliderLabel.pen;
    }

    selectEraser() {
        this.canvasRef.setTool(toolType.eraser);
        this.canvasContainer.classList.remove(cssClasses.cursorPen);
        this.canvasContainer.classList.add(cssClasses.cursorEraser);
        this.penButton.classList.remove(cssClasses.buttonSelected);
        this.eraserButton.classList.add(cssClasses.buttonSelected);
        this.sizeSliderLabel.innerText = uiTexts.sliderLabel.eraser;
    }

    updateToolSize(event) {
        this.canvasRef.setCanvasContextLineWidth(event.target.value);
    }

    updatePenColor(event) {
        this.canvasRef.setStrokeStyle(event.target.value);
    }

    clearCanvas() {
        this.canvasRef.clearCanvas();
    }

    downloadCanvas() {
        this.canvasRef.downloadCanvas();
    }
}