import { contextBridge } from "electron";
import api from "./methods";

contextBridge.exposeInMainWorld("electronAPI", api);
