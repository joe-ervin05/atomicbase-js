import AtomicClient from "./atomicClient";
import { column } from "./util";

const client = new AtomicClient("http://localhost:8080", "", "db1");