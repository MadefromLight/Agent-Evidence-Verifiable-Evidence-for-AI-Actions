import {createHash} from "node:crypto";
import {canonicalize} from "./canonical.js";
export function sha256(value:unknown):string { return createHash("sha256").update(canonicalize(value)).digest("hex"); }
