import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

app.get("/", () => "Hello, World!");

app.get("/greet/:name", (c) =>{
  const name = c.params.name;
  return { message: "Hello "+name };
})

app.start({ port: 3000 })
