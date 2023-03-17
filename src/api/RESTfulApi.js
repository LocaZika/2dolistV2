import { host } from "./config";
const send = async (method, path, data) => {
  const getData = await fetch(`${host}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data === null || data === "" ? null : JSON.stringify(data),
  });
  return {
    data: await getData.json(),
    res: getData,
  };
};
export const get = async (path) => await send("GET", path);
export const post = (path, data) => send("POST", path, data);
export const remove = (path, id) => send("DELETE", `${path}/${id}`);
export const update = async (path, id, data) => send("PATCH", `${path}/${id}`, data);
