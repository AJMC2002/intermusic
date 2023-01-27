"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const functions_1 = require("./functions");
const app = (0, express_1.default)()
    .use(body_parser_1.default.json())
    .use((0, cors_1.default)())
    .use((0, morgan_1.default)("combined"));
const port = process.env.PORT || 8081;
app.get("/genius", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let lyrics = yield (0, functions_1.getLyrics)("https://genius.com/Almendra-fermin-lyrics");
    res.send({ lyrics: lyrics });
}));
app.listen(port, () => {
    console.log(`🀄 [server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map