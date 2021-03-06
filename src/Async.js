import _ from 'lodash';
import { Promise } from 'es6-promise';

/**
 *
 * @type {{Promise: (function(*=): *)}}
 */
export let Async = {
	Promise: (...args) => new Promise(...args)
	, all: (...args) => Promise.all(...args)
};

/**
 * Call a function and resolves as promise.
 *
 * @param call {function}
 * @returns {Promise}
 */
export function promiseCall (call) {
	return Async.Promise( (resolve, reject) => {
		try {
			resolve(call());
		} catch (err) {
			reject(err);
		}
	});
}

/**
 * Reject with `err`.
 *
 * @param err
 * @returns {Promise}
 */
export function promiseReject (err) {
	return Async.Promise( (resolve, reject) => {
		reject(err);
	});
}

/**
 * Resolve with `value`.
 *
 * @param value
 * @returns {Promise}
 */
export function promiseResolve (value) {
	return Async.Promise( (resolve) => {
		resolve(value);
	});
}

/**
 * Call .done on promise if it exists.
 *
 * @param promise {Promise}
 */
export function promiseDone (promise) {
	const done = promise && _.isFunction(promise.done) ? promise.done : undefined;
	if (done) {
		promise.finally(() => done());
	}
}

Async.reject = promiseReject;
Async.resolve = promiseResolve;
Async.fcall = promiseCall;
Async.done = promiseDone;

export default Async;
