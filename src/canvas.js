import { CONSTANTS } from "./constants";

const { toolType } = CONSTANTS.canvas;

export default class Canvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.isDrawingStarted = false;
        this.init();
        this.setupEventListeners();
    }

    // private methods
    init() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    setupEventListeners() {
        this.canvas.addEventListener('mousedown', this.drawInit.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', this.drawEnd.bind(this));
        this.canvas.addEventListener('mouseleave', this.drawEnd.bind(this));
    }

    drawInit(event) {
        this.isDrawingStarted = true;
        const [posX, posY] = this.getMouseCoordinates(event);
        this.context.beginPath();
        this.context.moveTo(posX, posY);
    }

    draw(event) {
        if (this.isDrawingStarted) {
            const [posX, posY] = this.getMouseCoordinates(event);
            this.context.lineTo(posX, posY);
            this.context.stroke();
            if (this.tool === toolType.pen) {
                // `source-over`(default): The new drawings are placed over the existing content.
                this.context.globalCompositeOperation = "source-over";
            }

            if (this.tool === toolType.eraser) {
                // `destination-out`: The new drawings erase the existing content where they overlap.
                this.context.globalCompositeOperation = "destination-out";
            }
        }
    }

    drawEnd() {
        this.isDrawingStarted = false;
    }

    getMouseCoordinates(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return [x, y];
    }

    // public methods
    setCanvasContextLineWidth(size) {
        this.context.lineWidth = Number(size);
    }

    setStrokeStyle(color) {
        this.context.strokeStyle = color;
    }

    setTool(toolType) {
        this.tool = toolType;
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    downloadCanvas() {
        const dataUrl = this.canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = dataUrl;
        downloadLink.download = `Drawing_sheet ${new Date().toLocaleString()}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}