export function getType(target) {
	return Object.prototype.toString.call(target).slice(8, -1);
}

export function isString(target) {
	return getType(target) === "String";
}

export function isNumber(target) {
	return getType(target) === "Number";
}

export function isBoolean(target) {
	return getType(target) === "Boolean";
}

export function isNull(target) {
	return getType(target) === "Null";
}

export function isUndefined(target) {
	return getType(target) === "Undefined";
}

export function isObject(target) {
	return getType(target) === "Object";
}

export function isArray(target) {
	return getType(target) === "Array";
}

export function isDate(target) {
	return getType(target) === "Date";
}

export function isRegExp(target) {
	return getType(target) === "RegExp";
}

export function isFunction(target) {
	return getType(target) === "Function";
}

export function isElement(target) {
	return target && target instanceof HTMLElement;
}

export function isArrayLike(collection) {
	const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	const length = collection == null ? undefined : collection.length;

	return isNumber(length) && length >= 0 && length < MAX_ARRAY_INDEX;
}
