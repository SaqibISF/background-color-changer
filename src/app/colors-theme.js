"use client"

const colorNameToHex = (colorName) => {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = colorName;
    return ctx.fillStyle;
}

const lightOrDark = (color) => {

        let r, g, b;

        if (color.match(/^rgb/)) {
            color = color.match(
                /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
            );

            r = color[1];
            g = color[2];
            b = color[3];
        } else {
            let hexColor = color;

            if (!color.includes("#")) {
                hexColor = colorNameToHex(color)
            }

            hexColor = +("0x" + hexColor.slice(1).replace(hexColor.length < 5 && /./g, "$&$&"));

            r = hexColor >> 16;
            g = (hexColor >> 8) & 255;
            b = hexColor & 255;
        }

        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        if (brightness > 128) {
            return "light";
        } else {
            return "dark";
        }
}

export const isColorDark = (color) => {
    return lightOrDark(color) === "dark";
}

export const isColorLight = (color) => {
    return lightOrDark(color) === "light";
}