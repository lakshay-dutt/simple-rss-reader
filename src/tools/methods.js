import parser from "fast-xml-parser";

export function get(object, keys, defaultVal) {
  keys = Array.isArray(keys) ? keys : keys.split(".");
  object = object[keys[0]];
  if (object && keys.length > 1) {
    return get(object, keys.slice(1), defaultVal);
  }
  return object === undefined ? defaultVal : object;
}

export function removeElement(array, index) {
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

export function parseXmlToJSON(xml = null) {
  return xml ? parser.parse(xml) : {};
}
