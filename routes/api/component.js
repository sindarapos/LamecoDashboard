const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Dashboard Schema
const ComponentSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
        // @ToDo add constrains for size
    },
    height: {
        type: Number,
        required: true
        // @ToDo add constrains for size
    },
    minWidth: {
        type: Number,
        required: true
        // @ToDo add constrains for size
    },
    minHeight: {
        type: Number,
        required: true
        // @ToDo add constrains for size
    },
    maxWidth: {
        type: Number,
        required: true
        // @ToDo add constrains for size
    },
    maxHeight: {
        type: Number,
        required: true
        // @ToDo add constrains for size
    },
    moved: {
        type: Boolean
    },
    static: {
        type: Boolean
    },
    type: {
        type: String,
        required: true
        // @ToDo create a new collection to hold all the widget types
    },
    title: {
        type: String,
    },
    handle: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
});

module.exports = Dashboard = mongoose.model("dashboard", ComponentSchema);