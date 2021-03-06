/**
 * @module @norjs/cloud-backend
 */

// Dependencies
import Async from '../Async.js';
import symbols from './symbols.js';
import _ from 'lodash';
import debug from '@norjs/debug';
import moment from 'moment';
import FS from 'fs';
import events from 'events';
import PATH from 'path';

const GET = symbols.method.GET;
const POST = symbols.method.POST;
const HEAD = symbols.method.HEAD;
const PUT = symbols.method.PUT;
const DELETE = symbols.method.DELETE;
const PATCH = symbols.method.PATCH;
const OPTIONS = symbols.method.OPTIONS;

// Older Node.js has EventEmitter as events.EventEmitter, not same as events
const EventEmitter = _.isFunction(events && events.EventEmitter) ? events.EventEmitter : events;

// Helpers
import {
	isPrivate
	, getAllKeys
	, notPrivate
	, getConstructors
	, notFunction
	, parseFunctionArgumentNames
	, isUUID
} from './helpers.js';

import ParseError from './ParseError.js';
import parsePrompt from './parsePrompt.js';
import getServiceByName from './getServiceByName.js';

// ENVs
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

export {
	Async
	, symbols
	, GET
	, POST
	, HEAD
	, PUT
	, DELETE
	, PATCH
	, OPTIONS
	, _
	, debug
	, moment
	, FS
	, PATH
	, EventEmitter
	, isPrivate
	, getAllKeys
	, notPrivate
	, getConstructors
	, notFunction
	, parseFunctionArgumentNames
	, isUUID
	, ParseError
	, parsePrompt
	, getServiceByName
	, isProduction
	, isDevelopment
};
