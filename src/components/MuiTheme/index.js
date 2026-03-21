"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@mui/material/styles");
var extTheme = (0, styles_1.extendTheme)({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "hsl(240, 48%, 47%)",
                },
                background: {
                    paper: "hsl(240, 15%, 95%)",
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "hsl(240, 90%, 70%)",
                },
                background: {
                    paper: "hsl(210, 3%, 15%)",
                },
            },
        },
    },
    colorSchemeSelector: "data",
});
exports.default = extTheme;
