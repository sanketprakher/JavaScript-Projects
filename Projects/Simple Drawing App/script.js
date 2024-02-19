class DrawingApp {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.isDrawing = false;
        this.tool = new Pencil('#000000', 5);

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mouseout', this.stopDrawing.bind(this));

        const colorPicker = document.getElementById('colorPicker');
        const brushSize = document.getElementById('brushSize');
        const pencilBtn = document.getElementById('pencilBtn');
        const eraserBtn = document.getElementById('eraserBtn');
        const clearBtn = document.getElementById('clearBtn');

        colorPicker.addEventListener('input', () => this.updateColor(colorPicker.value));
        brushSize.addEventListener('input', () => this.updateSize(brushSize.value));
        pencilBtn.addEventListener('click', () => this.selectTool(new Pencil(this.tool.color, this.tool.size)));
        eraserBtn.addEventListener('click', () => this.selectTool(new Eraser(this.tool.size)));
        clearBtn.addEventListener('click', this.clearCanvas.bind(this));
    }

    startDrawing(event) {
        this.isDrawing = true;
        this.ctx.beginPath();
        this.ctx.moveTo(event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop);
    }

    draw(event) {
        if (!this.isDrawing) return;
        this.tool.draw(this.ctx, event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop);
    }

    stopDrawing() {
        this.isDrawing = false;
        this.ctx.closePath();
    }

    updateColor(newColor) {
        this.tool.setColor(newColor);
    }

    updateSize(newSize) {
        this.tool.setSize(newSize);
    }

    selectTool(tool) {
        this.tool = tool;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

class DrawingTool {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }

    setColor(newColor) {
        this.color = newColor;
    }

    setSize(newSize) {
        this.size = newSize;
    }
}

class Pencil extends DrawingTool {
    draw(context, x, y) {
        context.strokeStyle = this.color;
        context.lineWidth = this.size;
        context.lineJoin = 'round';
        context.lineCap = 'round';

        context.lineTo(x, y);
        context.stroke();
    }
}

class Eraser extends DrawingTool {
    constructor(size) {
        super('#ffffff', size); // Eraser color is white
    }

    draw(context, x, y) {
        context.strokeStyle = this.color;
        context.lineWidth = this.size;
        context.lineJoin = 'round';
        context.lineCap = 'round';

        context.lineTo(x, y);
        context.stroke();
    }
}

const canvas = document.getElementById('drawing-canvas');
canvas.width = window.innerWidth - 20; // Adjust canvas width based on window size
canvas.height = window.innerHeight - 20; // Adjust canvas height based on window size
const drawingApp = new DrawingApp(canvas);
