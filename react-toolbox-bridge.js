/*
 *  Copyright 2011 Alexandru Craciun, Eyal Kaspi
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**** Functionality in Java, but not in JS ********
 * methods added to JS prototypes
 */

var stjs={};

stjs.NOT_IMPLEMENTED = function(){
	throw "This method is not implemented in Javascript.";
};

stjs.JavalikeEquals = function(value){
	if (value == null)
		return false;
	if (value.valueOf)
		return this.valueOf() === value.valueOf();
	return this === value;
};

stjs.JavalikeGetClass = function(){
	return this.constructor;
};

/* String */
if (!String.prototype.equals) {
	String.prototype.equals=stjs.JavalikeEquals;
}
if (!String.prototype.getBytes) {
	String.prototype.getBytes=stjs.NOT_IMPLEMENTED;
}
if (!String.prototype.getChars) {
	String.prototype.getChars=stjs.NOT_IMPLEMENTED;
}
if (!String.prototype.contentEquals){
	String.prototype.contentEquals=stjs.NOT_IMPLEMENTED;
}
if (!String.prototype.startsWith) {
	String.prototype.startsWith=function(start, from){
		var f = from != null ? from : 0;
		return this.substring(f, f + start.length) == start;
	}
}
if (!String.prototype.endsWith) {
	String.prototype.endsWith=function(end){
		if (end == null)
			return false;
		if (this.length < end.length)
			return false;
		return this.substring(this.length - end.length, this.length) == end;
	}
}
if (!String.prototype.trim) {
	stjs.trimLeftRegExp = /^\s+/;
	stjs.trimRightRegExp = /\s+$/;
	String.prototype.trim = function() {
		return this.replace(stjs.trimLeftRegExp, "").replace(stjs.trimRightRegExp, "");
	}
}
if (!String.prototype.matches){
	String.prototype.matches=function(regexp){
		return this.match("^" + regexp + "$") != null;
	}
}
if (!String.prototype.compareTo){
	String.prototype.compareTo=function(other){
		if (other == null)
			return 1;
		if (this < other)
			return -1;
		if (this == other)
			return 0;
		return 1;
	}
}

if (!String.prototype.compareToIgnoreCase){
	String.prototype.compareToIgnoreCase=function(other){
		if (other == null)
			return 1;
		return this.toLowerCase().compareTo(other.toLowerCase());
	}
}

if (!String.prototype.equalsIgnoreCase){
	String.prototype.equalsIgnoreCase=function(other){
		if (other == null)
			return false;
		return this.toLowerCase() === other.toLowerCase();
	}
}

if (!String.prototype.codePointAt){
	String.prototype.codePointAt=String.prototype.charCodeAt;
}

if (!String.prototype.codePointBefore){
	String.prototype.codePointBefore=stjs.NOT_IMPLEMENTED;
}
if (!String.prototype.codePointCount){
	String.prototype.codePointCount=stjs.NOT_IMPLEMENTED;
}

if (!String.prototype.replaceAll){
	String.prototype.replaceAll=function(regexp, replace){
		return this.replace(new RegExp(regexp, "g"), replace);
	}
}

if (!String.prototype.replaceFirst){
	String.prototype.replaceFirst=function(regexp, replace){
		return this.replace(new RegExp(regexp), replace);
	}
}

if (!String.prototype.regionMatches){
	String.prototype.regionMatches=function(ignoreCase, toffset, other, ooffset, len){
		if (arguments.length == 4){
			len=arguments[3];
			ooffset=arguments[2];
			other=arguments[1];
			toffset=arguments[0];
			ignoreCase=false;
		}
		if (toffset < 0 || ooffset < 0 || other == null || toffset + len > this.length || ooffset + len > other.length)
			return false;
		var s1 = this.substring(toffset, toffset + len);
		var s2 = other.substring(ooffset, ooffset + len);
		return ignoreCase ? s1.equalsIgnoreCase(s2) : s1 === s2;
	}
}

if(!String.prototype.contains){
	String.prototype.contains=function(it){
		return this.indexOf(it)>=0;
	};
}

if(!String.prototype.getClass){
	String.prototype.getClass=stjs.JavalikeGetClass;
}


//force valueof to match the Java's behavior
String.valueOf=function(value){
	return new String(value);
};

/* Number */
var Byte=Number;
var Double=Number;
var Float=Number;
var Integer=Number;
var Long=Number;
var Short=Number;

/* type conversion - approximative as Javascript only has integers and doubles */
if (!Number.prototype.intValue) {
	Number.prototype.intValue=function(){
		return parseInt(this);
	}
}
if (!Number.prototype.shortValue) {
	Number.prototype.shortValue=function(){
		return parseInt(this);
	}
}
if (!Number.prototype.longValue) {
	Number.prototype.longValue=function(){
		return parseInt(this);
	}
}
if (!Number.prototype.byteValue) {
	Number.prototype.byteValue=function(){
		return parseInt(this);
	}
}

if (!Number.prototype.floatValue) {
	Number.prototype.floatValue=function(){
		return parseFloat(this);
	}
}

if (!Number.prototype.doubleValue) {
	Number.prototype.doubleValue=function(){
		return parseFloat(this);
	}
}

if (!Number.parseInt) {
	Number.parseInt = parseInt;
}
if (!Number.parseShort) {
	Number.parseShort = parseInt;
}
if (!Number.parseLong) {
	Number.parseLong = parseInt;
}
if (!Number.parseByte) {
	Number.parseByte = parseInt;
}

if (!Number.parseDouble) {
	Number.parseDouble = parseFloat;
}

if (!Number.parseFloat) {
	Number.parseFloat = parseFloat;
}

if (!Number.isNaN) {
	Number.isNaN = isNaN;
}

if (!Number.prototype.isNaN) {
	Number.prototype.isNaN = function() {
		return isNaN(this);
	}
}
if (!Number.prototype.equals) {
	Number.prototype.equals=stjs.JavalikeEquals;
}
if(!Number.prototype.getClass){
	Number.prototype.getClass=stjs.JavalikeGetClass;
}

//force valueof to match approximately the Java's behavior (for Integer.valueOf it returns in fact a double)
Number.valueOf=function(value){
	return new Number(value).valueOf();
}

/* Boolean */
if (!Boolean.prototype.equals) {
	Boolean.prototype.equals=stjs.JavalikeEquals;
}
if(!Boolean.prototype.getClass){
	Boolean.prototype.getClass=stjs.JavalikeGetClass;
}

//force valueof to match the Java's behavior
Boolean.valueOf=function(value){
	return new Boolean(value).valueOf();
}



/************* STJS helper functions ***************/
stjs.global=this;
stjs.skipCopy = {"prototype":true, "constructor": true, "$typeDescription":true, "$inherit" : true};

stjs.ns=function(path){
	var p = path.split(".");
	var obj = stjs.global;
	for(var i = 0; i < p.length; ++i){
		var part = p[i];
		obj = obj[part] = obj[part] || {};
	}
	return obj;
};

stjs.copyProps=function(from, to){
	for(var key in from){
		if (!stjs.skipCopy[key])
			to[key]	= from[key];
	}
	return to;
};

stjs.copyInexistentProps=function(from, to){
	for(var key in from){
		if (!stjs.skipCopy[key] && !to[key])
			to[key]	= from[key];
	}
	return to;
};

stjs.extend=function(_constructor, _super, _implements, _initializer, _typeDescription, _annotations){
	if(typeof(_typeDescription) !== "object"){
		// stjs 1.3+ always passes an non-null object to _typeDescription => The code calling stjs.extend
		// was generated with version 1.2 or earlier, so let's call the 1.2 version of stjs.extend
		return stjs.extend12.apply(this, arguments);
	}

	_constructor.$inherit=[];

	if(_super != null){
		// I is used as a no-op constructor that has the same prototype as _super
		// we do this because we cannot predict the result of calling new _super()
		// without parameters (it might throw an exception).
		// Basically, the following 3 lines are a safe equivalent for
		// _constructor.prototype = new _super();
		var I = function(){};
		I.prototype	= _super.prototype;
		_constructor.prototype	= new I();

		// copy static properties for super
		// assign every method from proto instance
		stjs.copyProps(_super, _constructor);
		stjs.copyProps(_super.$typeDescription, _typeDescription);
		stjs.copyProps(_super.$annotations, _annotations);

		//add the super class to inherit array
		_constructor.$inherit.push(_super);
	}

	// copy static properties and default methods from interfaces
	for(var a = 0; a < _implements.length; ++a){
		if (!_implements[a]) continue;
		stjs.copyProps(_implements[a], _constructor);
		stjs.copyInexistentProps(_implements[a].prototype, _constructor.prototype);
		_constructor.$inherit.push(_implements[a]);
	}

	// remember the correct constructor
	_constructor.prototype.constructor	= _constructor;

	// run the initializer to assign all static and instance variables/functions
	if(_initializer != null){
		_initializer(_constructor, _constructor.prototype);
	}

	_constructor.$typeDescription = _typeDescription;
	_constructor.$annotations = _annotations;

	// add the default equals method if it is not present yet, and we don't have a superclass
	if(_super == null){
		if(!_constructor.prototype.equals) {
			_constructor.prototype.equals = stjs.JavalikeEquals;
		}
		if(!_constructor.prototype.getClass) {
			_constructor.prototype.getClass = stjs.JavalikeGetClass;
		}
	}

	// build package and assign
	return	_constructor;
};

/**
 * 1.2 and earlier version of stjs.extend. Included for backwards compatibility
 */
stjs.extend12=function( _constructor,  _super, _implements){
	var I = function(){};
	I.prototype	= _super.prototype;
	_constructor.prototype	= new I();

	//copy static properties for super and interfaces
	// assign every method from proto instance
	for(var a = 1; a < arguments.length; ++a){
		stjs.copyProps(arguments[a], _constructor);
	}
	// remember the correct constructor
	_constructor.prototype.constructor	= _constructor;

	// add the default equals method if we don't have a superclass. Code generated with version 1.2 will
	// override this method is equals() is present in the original java code.
	// this was not part of the original 1.2 version of extends, however forward compatibility
	// with 1.3 requires it
	if(_super == null){
		_constructor.prototype.equals = stjs.JavalikeEquals;
		_constructor.prototype.getClass = stjs.JavalikeGetClass;
	}

	// build package and assign
	return	_constructor;
};

/**
 * return type's annotations
 */
stjs.getAnnotations = function(clz) {
	return clz.$annotations;
};

stjs.getTypeAnnotation = function(clz, annType) {
	var ann = clz.$annotations._;
	return ann ? ann[annType]: null;
};

stjs.getMemberAnnotation = function(clz, memberName, annType) {
	var ann = clz.$annotations.memberName;
	return ann ? ann[annType]: null;
};

stjs.getParameterAnnotation = function(clz, methodName, idx, annType) {
	var ann = clz.$annotations[methodName + "$" + idx];
	return ann ? ann[annType]: null;
};

/**
 * checks if the child is an instanceof parent. it checks recursively if "parent" is the child itself or it's found somewhere in the $inherit array
 */
stjs.isInstanceOf=function(child, parent){
	if (child == null)
		return false;
	if (child === parent)
		return true;
	if (!child.$inherit)
		return false;
	for(var i = 0; i < child.$inherit.length; ++i){
		if (stjs.isInstanceOf(child.$inherit[i], parent)) {
			return true;
		}
	}
	return false;
}

stjs.enumEntry=function(idx, name){
	this._name = name;
	this._ordinal = idx;
};

stjs.enumEntry.prototype.name=function(){
	return this._name;
};
stjs.enumEntry.prototype.ordinal=function(){
	return this._ordinal;
};
stjs.enumEntry.prototype.toString=function(){
	return this._name;
};
stjs.enumEntry.prototype.equals=stjs.JavalikeEquals;

stjs.enumeration=function(){
	var i;
	var e = {};
	e._values = [];
	for(i = 0; i < arguments.length; ++i){
		e[arguments[i]] = new stjs.enumEntry(i, arguments[i]);
		e._values[i] = e[arguments[i]];
	}
	e.values = function(){return this._values;};
	e.valueOf=function(label){
		return this[label];
	}
	return e;
};


/**
 * if true the execution of generated main methods is disabled.
 * this is useful when executing unit tests, to no have the main methods executing before the tests
 */
stjs.mainCallDisabled = false;

stjs.exception=function(err){
	return err;
};

stjs.isEnum=function(obj){
	return obj != null && obj.constructor == stjs.enumEntry;
};

if (typeof Math.trunc === "function") {
	stjs.trunc = Math.trunc;
} else {
	stjs.trunc=function(n) {
		if (n == null)
			return null;
		return n >= 0 ? Math.floor(n) : Math.ceil(n);
	}
}

stjs.converters = {
	Date : function(s, type) {
		var a = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)$/
				.exec(s);
		if (a) {
			return new Date(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]);
		}
		return null;
	},

	Enum : function(s, type){
		return eval(type.arguments[0])[s];
	}
};


stjs.serializers = {
	Date : function(d, type) {
		function pad(n){
			return n < 10 ? "0" + n : "" + n;
		}
		if (d) {
			return "" + d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" + pad(d.getDate()) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
		}
		return null;
	},

	Enum : function(e, type){
		return e != null ? e.toString() : null;
	}
};

/**
 * Used to be able to send method references and lambdas that capture 'this' as callbacks.
 * This method has a bunch of different usage patterns:
 *
 * bind(instance, "methodName"):
 *     Used when translating a capturing method reference (eg: instance::methodName), or when translating
 *
 * bind(this, function):
 *     Used when translating a lambda that uses 'this' explicitly or implicitly (eg: () -> this.doSomething(3))
 *
 * bind(this, function, specialTHISparamPosition)
 *     Used when translating a lambda that uses the special all-caps 'THIS' parameter
 *
 * bind("methodName")
 *     Used when translating a non-static method reference (eg: TypeName::methodName, where methodName is non-static)
 */
stjs.bind=function(obj, method, thisParamPos) {
	var useFirstParamAsContext = false;
	if(method == null) {
		// the bind("methodName") is the only usage where the method argument can be null
		method = obj;
		obj = null;
		useFirstParamAsContext = true;
	}
	var addThisToParameters = thisParamPos != null;

	var f = function(){
		var args = arguments;
		if (addThisToParameters) {
			Array.prototype.splice.call(args, thisParamPos, 0, this);
		}
		if(useFirstParamAsContext){
			obj = Array.prototype.shift.call(args);
		}

		if (typeof method === "string") {
			return obj[method].apply(obj, args);

		} else {
			return method.apply(obj, args);
		}
	};
	return f;
};


/** *********** global ************** */
function exception(err){
	return err;
}

function isEnum(obj){
	return obj != null && obj.constructor == stjs.enumEntry;
}

/******* parsing *************/

/**
 * parse a json string using the type definition to build a typed object hierarchy
 */
stjs.parseJSON = (function () {
	  var number
	      = '(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)';
	  var oneChar = '(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]'
	      + '|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))';
	  var string = '(?:\"' + oneChar + '*\")';

	  // Will match a value in a well-formed JSON file.
	  // If the input is not well-formed, may match strangely, but not in an unsafe
	  // way.
	  // Since this only matches value tokens, it does not match whitespace, colons,
	  // or commas.
	  var jsonToken = new RegExp(
	      '(?:false|true|null|[\\{\\}\\[\\]]'
	      + '|' + number
	      + '|' + string
	      + ')', 'g');

	  // Matches escape sequences in a string literal
	  var escapeSequence = new RegExp('\\\\(?:([^u])|u(.{4}))', 'g');

	  // Decodes escape sequences in object literals
	  var escapes = {
	    '"': '"',
	    '/': '/',
	    '\\': '\\',
	    'b': '\b',
	    'f': '\f',
	    'n': '\n',
	    'r': '\r',
	    't': '\t'
	  };
	  function unescapeOne(_, ch, hex) {
	    return ch ? escapes[ch] : String.fromCharCode(parseInt(hex, 16));
	  }

	  var constructors = {};

	  function constr(name, param){
		  var c = constructors[name];
		  if (!c)
			  constructors[name] = c = eval(name);
		  return new c(param);
	  }

	  function convert(type, json){
		  if (!type)
			  return json;
		  var cv = stjs.converters[type.name || type];
		  if (cv)
			  return cv(json, type);
		  //hopefully the type has a string constructor
		 return constr(type, json);
	  }

	  function builder(type){
		  if (!type)
			  return {};
			if (typeof type == "function")
				return new type();
			if (type.name) {
				if (type.name == "Map")
					return {};
				if (type.name == "Array")
					return [];
				return constr(type.name);
			}
			return constr(type);
	  }

	  // A non-falsy value that coerces to the empty string when used as a key.
	  var EMPTY_STRING = new String('');
	  var SLASH = '\\';

	  // Constructor to use based on an open token.
	  var firstTokenCtors = { '{': Object, '[': Array };

	  var hop = Object.hasOwnProperty;

	  function nextMatch(str){
		  var m = jsonToken.exec(str);
		  return m != null ? m[0] : null;
	  }
	  return function (json, type) {
	    // Split into tokens
	    // Construct the object to return
	    var result;
	    var tok = nextMatch(json);
	    var topLevelPrimitive = false;
	    if ('{' === tok) {
	      result = builder(type, null);
	    } else if ('[' === tok) {
	      result = [];
	    } else {
	      // The RFC only allows arrays or objects at the top level, but the JSON.parse
	      // defined by the EcmaScript 5 draft does allow strings, booleans, numbers, and null
	      // at the top level.
	      result = [];
	      topLevelPrimitive = true;
	    }

	    // If undefined, the key in an object key/value record to use for the next
	    // value parsed.
	    var key;
	    // Loop over remaining tokens maintaining a stack of uncompleted objects and
	    // arrays.
	    var stack = [result];
	    var stack2 = [type];
	    for (tok = nextMatch(json); tok != null; tok = nextMatch(json)) {

	      var cont;
	      switch (tok.charCodeAt(0)) {
	        default:  // sign or digit
	          cont = stack[0];
	          cont[key || cont.length] = +(tok);
	          key = void 0;
	          break;
	        case 0x22:  // '"'
	          tok = tok.substring(1, tok.length - 1);
	          if (tok.indexOf(SLASH) !== -1) {
	            tok = tok.replace(escapeSequence, unescapeOne);
	          }
	          cont = stack[0];
	          if (!key) {
	            if (cont instanceof Array) {
	              key = cont.length;
	            } else {
	              key = tok || EMPTY_STRING;  // Use as key for next value seen.
	              stack2[0] = cont.constructor.$typeDescription ? cont.constructor.$typeDescription[key] : stack2[1].arguments[1];
	              break;
	            }
	          }
	          cont[key] = convert(stack2[0],tok);
	          key = void 0;
	          break;
	        case 0x5b:  // '['
	          cont = stack[0];
	          stack.unshift(cont[key || cont.length] = []);
	          stack2.unshift(stack2[0].arguments[0]);
	          //put the element type desc
	          key = void 0;
	          break;
	        case 0x5d:  // ']'
	          stack.shift();
	          stack2.shift();
	          break;
	        case 0x66:  // 'f'
	          cont = stack[0];
	          cont[key || cont.length] = false;
	          key = void 0;
	          break;
	        case 0x6e:  // 'n'
	          cont = stack[0];
	          cont[key || cont.length] = null;
	          key = void 0;
	          break;
	        case 0x74:  // 't'
	          cont = stack[0];
	          cont[key || cont.length] = true;
	          key = void 0;
	          break;
	        case 0x7b:  // '{'
	          cont = stack[0];
	          stack.unshift(cont[key || cont.length] = builder(stack2[0]));
	          stack2.unshift(null);
	          key = void 0;
	          break;
	        case 0x7d:  // '}'
	          stack.shift();
	          stack2.shift();
	          break;
	      }
	    }
	    // Fail if we've got an uncompleted object.
	    if (topLevelPrimitive) {
	      if (stack.length !== 1) { throw new Error(); }
	      result = result[0];
	    } else {
	      if (stack.length) { throw new Error(); }
	    }

	    return result;
	  };
})();




stjs.isArray=function( obj ) {
    return stjs.toString.call(obj) === "[object Array]";
};

/**
 * cls can by the type of the return.
 * If it's an array it can be either the type of an element or the type definition of the field.
 * TODO - for other collections and classes is not done yet
 */
stjs.typefy=function(obj, cls){
	if (stjs.isArray(obj)){
		var result = [];
		for(var idx = 0; idx < obj.length; idx++){
			result.push(stjs.typefy(obj[idx], elementType(cls)));
		}
		return result;
	}
	 var constructors = {};
	 function constr(name, param){
		  var c = constructors[name];
		  if (!c)
			  constructors[name] = c = eval(name);
		  return new c(param);
	  }

	 function elementType(type){
		 if (typeof type == "function")
			 return type;
		 if (type.arguments) {
			 return eval(type.arguments[0]);
		 }
		 if (typeof type == "string")
			 return eval(type);
		 return Object;
	  }


	function convert(type, json){
		  if (!type)
			  return json;
		  var cv = stjs.converters[type.name || type];
		  if (cv)
			  return cv(json, type);
		  //hopefully the type has a string constructor
		 return constr(type, json);
	  }

	 function builder(type){
		  if (!type)
			  return {};
			if (typeof type == "function")
				return new type();
			if (type.name) {
				if (type.name == "Map")
					return {};
				if (type.name == "Array")
					return [];
				return constr(type.name);
			}
			return constr(type);
	  }

	  if (obj == null)
		  return null;

	  var ret = new cls();
	  for(var key in obj){
		  var prop = obj[key];
		  if (prop == null)
			  continue;
		  var td = cls.$typeDescription[key];
		  if (!td) {
			  ret[key] = prop;
			  continue;
		  }
		  if (typeof prop == "string")
			ret[key] = convert(td, prop);
		  else if (typeof prop == "object") {
				if (typeof td == "string") {
					td = eval(td);
		  		}
				ret[key] = stjs.typefy(prop, td);
			}
	  }
	  return ret;
};
stjs.hydrate=stjs.typefy

stjs.stringify=function(obj, cls){
	 if (obj == null)
		  return null;

	 var ret = {};
	  for(var key in obj){
		  var td = cls.$typeDescription[key];
		  var prop = obj[key];
		  var ser = td != null ? stjs.serializers[td.name || td] : null;

		  if (typeof prop == "function")
			  continue;

		  if (!td || !ser) {
			  ret[key] = prop;
			  continue;
		  }
		  if (typeof prop != "string")
			  if (ser)
				  ret[key] = ser(prop, td);
			  else
				  ret[key] = stjs.typefy(prop, td);
	  }
	  return ret;
};
/************* STJS asserts ***************/
stjs.assertHandler = function(position, code, msg) {
	throw msg + " at " + position;
};

stjs.STJSAssert = {};

stjs.STJSAssert.setAssertHandler = function(a) {
	stjs.assertHandler = a;
}

stjs.STJSAssert.assertArgEquals = function(position, code, expectedValue, testValue) {
	if (expectedValue != testValue && stjs.assertHandler)
		stjs.assertHandler(position, code, "Wrong argument. Expected: " + expectedValue + ", got:" + testValue);
}

stjs.STJSAssert.assertArgNotNull = function(position, code, testValue) {
	if (testValue == null && stjs.assertHandler)
		stjs.assertHandler(position, code, "Wrong argument. Null value");
}

stjs.STJSAssert.assertArgTrue = function(position, code, condition) {
	if (!condition && stjs.assertHandler)
		stjs.assertHandler(position, code, "Wrong argument. Condition is false");
}

stjs.STJSAssert.assertStateEquals = function(position, code, expectedValue, testValue) {
	if (expectedValue != testValue && stjs.assertHandler)
		stjs.assertHandler(position, code, "Wrong state. Expected: " + expectedValue + ", got:" + testValue);
}

stjs.STJSAssert.assertStateNotNull = function(position, code, testValue) {
	if (testValue == null && stjs.assertHandler)
		stjs.assertHandler(position, code, "Wrong state. Null value");
}

stjs.STJSAssert.assertStateTrue = function(position, code, condition) {
	if (!condition && stjs.assertHandler)
		stjs.assertHandler(position, code, "Wrong state. Condition is false");
}
/** exception **/
var Throwable = function(message, cause){
	Error.call(this);
	if(typeof Error.captureStackTrace === 'function'){
		// nice way to capture the stack trace for chrome
		Error.captureStackTrace(this, arguments.callee);
	} else {
		// alternate way to capture the stack trace for other browsers
		try{
			throw new Error();
		}catch(e){
			this.stack = e.stack;
		}
	}
	if (typeof message === "string"){
		this.detailMessage  = message;
		this.message = message;
		this.cause = cause;
	} else {
		this.cause = message;
	}
};
stjs.extend(Throwable, Error, [], function(constructor, prototype){
	prototype.detailMessage = null;
	prototype.cause = null;
	prototype.getMessage = function() {
        return this.detailMessage;
    };

	prototype.getLocalizedMessage = function() {
        return this.getMessage();
    };

	prototype.getCause = function() {
        return (this.cause==this ? null : this.cause);
    };

	prototype.toString = function() {
	        var s = "Exception";//TODO should get the exception's type name here
	        var message = this.getLocalizedMessage();
	        return (message != null) ? (s + ": " + message) : s;
	 };

	 prototype.getStackTrace = function() {
		 return this.stack;
	 };

	 prototype.printStackTrace = function(){
		 console.error(this.getStackTrace());
	 };
}, {});

var Exception = function(message, cause){
	Throwable.call(this, message, cause);
};
stjs.extend(Exception, Throwable, [], function(constructor, prototype){
}, {});

var RuntimeException = function(message, cause){
	Exception.call(this, message, cause);
};
stjs.extend(RuntimeException, Exception, [], function(constructor, prototype){
}, {});

var Iterator = function() {};
Iterator = stjs.extend(Iterator, null, [], function(constructor, prototype) {
    prototype.hasNext = function() {};
    prototype.next = function() {};
    prototype.remove = function() {};
}, {}, {});

var Iterable = function() {};
Iterable = stjs.extend(Iterable, null, [], function(constructor, prototype) {
    prototype.iterator = function() {};
}, {}, {});

/** stjs field manipulation */
stjs.setField=function(obj, field, value, returnOldValue){
	if (stjs.setFieldHandler)
		return stjs.setFieldHandler(obj, field, value, returnOldValue);
	var toReturn = returnOldValue ? obj[field] : value;
	obj[field] = value;
	return toReturn;
};

stjs.getField=function(obj, field){
	if (stjs.getFieldHandler)
		return stjs.getFieldHandler(obj, field);
	return obj[field];
};


var ReactToolboxProps = {};

stjs.ns("ReactToolboxProps");
ReactToolboxProps.Props = function(key) {
    this.key = key;
    this.id = key;
};
ReactToolboxProps.Props = stjs.extend(ReactToolboxProps.Props, null, [], function(constructor, prototype) {
    /**
     *  Sets a CSS class on the component.
     */
    prototype.className = null;
    prototype.id = null;
    /**
     *  @param id the id to set
     *  @return 
     */
    prototype.setId = function(id) {
        this.id = id;
        return this;
    };
    /**
     *  A key used to uniquely identify the element within an Array
     */
    prototype.key = null;
    prototype.ref = null;
    /**
     *  Inline style
     */
    prototype.style = null;
    prototype.setStyle = function(style) {
        this.style = style;
        return this;
    };
    prototype.setPadding = function(padding) {
        var css = this.style == null ? {} : this.style;
        css["padding"] = padding;
        this.setStyle(css);
        return this;
    };
    /**
     *  Tooltip text APPLIES ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     *  
     *  @see http://react-toolbox.com/#/components/tooltip
     */
    prototype.tooltip = null;
    /**
     *  Amount of time in miliseconds spent before the tooltip is visible.
     *  APPLIES ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     *  
     *  @see http://react-toolbox.com/#/components/tooltip
     */
    prototype.tooltipDelay = null;
    /**
     *  If true, the Tooltip hides after a click in the host component. APPLIES
     *  ONLY IF THE COMPONENT IS WRAPPED WITH Tooltip.
     *  
     *  @default true
     *  @see http://react-toolbox.com/#/components/tooltip
     */
    prototype.tooltipHideOnClick = false;
    prototype.setRef = function(ref) {
        this.ref = ref;
        return this;
    };
    prototype.setClassName = function(className) {
        this.className = className;
        return this;
    };
    prototype.toPlainObject = function() {
        return (Object).assign({}, this);
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.Option = function(label, value) {
    this.label = label;
    this.value = value;
};
ReactToolboxProps.Option = stjs.extend(ReactToolboxProps.Option, null, [], function(constructor, prototype) {
    prototype.label = null;
    prototype.value = null;
    constructor.opt = function(label, value) {
        if (value == null) {
            value = label;
        }
        return new ReactToolboxProps.Option(label, value);
    };
}, {}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.Type = function(type) {
    this.type = type;
};
ReactToolboxProps.Type = stjs.extend(ReactToolboxProps.Type, null, [], function(constructor, prototype) {
    prototype.type = null;
    prototype.title = null;
    constructor.typeWithTitle = function(type, title) {
        var t = new ReactToolboxProps.Type(type);
        t.title = title;
        return t;
    };
}, {type: "Class"}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.AvatarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.AvatarProps = stjs.extend(ReactToolboxProps.AvatarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.className = null;
    prototype.cover = null;
    prototype.icon = null;
    prototype.image = null;
    prototype.title = null;
    prototype.theme = null;
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setTitle = function(title) {
        this.title = title;
        return this;
    };
    prototype.setImage = function(image) {
        this.image = image;
        return this;
    };
    prototype.setCover = function(cover) {
        this.cover = cover;
        return this;
    };
}, {icon: "Object", image: "Object", theme: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardActionsProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardActionsProps = stjs.extend(ReactToolboxProps.CardActionsProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.children = null;
}, {children: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ChipProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ChipProps = stjs.extend(ReactToolboxProps.ChipProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     * Child components, usually Avatar and inline elements. 
     */
    prototype.children = null;
    /**
     * Additional class name to provide custom styling.	
     *  @default ''
     */
    prototype.className = null;
    /**
     * If true, the chip will be rendered with a delete icon.
     *  
     *  @default false
     */
    prototype.deletable = false;
    /**
     * Callback to be invoked when the delete icon is clicked.
     *  
     */
    prototype.onDeleteClick = null;
    prototype.setOnDeleteClick = function(onDeleteClick) {
        this.onDeleteClick = onDeleteClick;
        return this;
    };
    prototype.setDeletable = function(deletable) {
        this.deletable = deletable;
        return this;
    };
}, {children: "Node", onDeleteClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.IconMenuProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.IconMenuProps = stjs.extend(ReactToolboxProps.IconMenuProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.icon = null;
    prototype.iconRipple = null;
    prototype.menuRipple = null;
    prototype.onClick = null;
    prototype.onHide = null;
    prototype.onSelect = null;
    prototype.onShow = null;
    prototype.position = null;
    prototype.selectable = null;
    prototype.selected = null;
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setPosition = function(position) {
        this.position = position;
        return this;
    };
    prototype.setMenuRipple = function(menuRipple) {
        this.menuRipple = menuRipple;
        return this;
    };
}, {icon: "Object", onClick: {name: "Callback1", arguments: ["DOMEvent"]}, onHide: {name: "Callback1", arguments: ["DOMEvent"]}, onSelect: {name: "Callback1", arguments: ["DOMEvent"]}, onShow: {name: "Callback1", arguments: ["DOMEvent"]}, selected: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.PanelProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.PanelProps = stjs.extend(ReactToolboxProps.PanelProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Set a class for the root component.
     * 
     *  @default ""
     */
    prototype.className = null;
    /**
     * If true, the panel will vertically scroll all content. 
     */
    prototype.scrollY = false;
    prototype.setScrollY = function(scrollY) {
        this.scrollY = scrollY;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.NavigationProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.NavigationProps = stjs.extend(ReactToolboxProps.NavigationProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    constructor.HORIZONTAL = "horizontal";
    constructor.VERTICAL = "vertical";
    /**
     *  Type of the navigation, it can be {@code vertical} or {@code horizontal}.
     * 
     *  @default {@code horizontal}
     */
    prototype.type = null;
    /**
     *  Array of objects that will be represented as {@link com.vg.rt.Button} so
     *  the keys will be transferred as properties the Button Component.
     */
    prototype.actions = null;
    /**
     *  Array of objects similar to actions but that will be rendered as
     *  {@link com.vg.rt.Link} component definition.
     */
    prototype.routes = null;
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
}, {actions: {name: "Array", arguments: ["ReactToolboxProps.ButtonProps"]}, routes: {name: "Array", arguments: ["ReactToolboxProps.LinkProps"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.DropdownProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.DropdownProps = stjs.extend(ReactToolboxProps.DropdownProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.error = null;
    /**
     *  If true, the dropdown will open up or down depending on the position in
     *  the screen.
     */
    prototype.auto = false;
    /**
     *  The text string to use for the floating label element.
     */
    prototype.label = null;
    /**
     *  Array of data objects with the data to represent in the dropdown.
     */
    prototype.source = null;
    /**
     *  Callback function that returns a JSX template to represent the element.
     */
    prototype.template = null;
    /**
     *  Default value using JSON data.
     */
    prototype.value = null;
    prototype.onChange = null;
    prototype.disabled = false;
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setSource = function(source) {
        this.source = source;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setError = function(error) {
        this.error = error;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    prototype.setAuto = function(auto) {
        this.auto = auto;
        return this;
    };
}, {source: {name: "Array", arguments: [{name: "ReactToolboxProps.Option", arguments: ["Object"]}]}, template: {name: "Function0", arguments: [null]}, onChange: {name: "Callback1", arguments: [null]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardMediaProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardMediaProps = stjs.extend(ReactToolboxProps.CardMediaProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Forces a ('wide' 16:9) or ('square' 1:1) aspect ratio respectively.
     *  Unset, the media area will have a flexible height.
     *  
     *  @default ''
     */
    prototype.aspectRatio = null;
    /**
     *  Usually an image/video element or a <CardTitle> component.
     */
    prototype.children = null;
    /**
     *  Sets the background color
     */
    prototype.color = null;
    /**
     *  Creates a dark overlay underneath the child components.
     */
    prototype.contentOverlay = false;
    /**
     *  Can be used instead of children. Accepts an element or a URL string.
     */
    prototype.image = null;
    prototype.onClick = null;
    prototype.setImage = function(image) {
        this.image = image;
        return this;
    };
    prototype.setColor = function(color) {
        this.color = color;
        return this;
    };
    prototype.setAspectRatio = function(aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    };
}, {children: "Object", image: "Object", onClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListCheckboxProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListCheckboxProps = stjs.extend(ReactToolboxProps.ListCheckboxProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Main text of the item. Required.
     */
    prototype.caption = null;
    /**
     *  If true the checkbox appears checked by default.
     *  @default false
     */
    prototype.checked = false;
    /**
     *  Secondary text to display under the caption.
     */
    prototype.legend = null;
    /**
     *  Name for the checkbox input item.
     */
    prototype.name = null;
    /**
     *  Callback called when the input element is blurred.
     */
    prototype.onBlur = null;
    /**
     *  Callback called when the input element is focused.
     */
    prototype.onFocus = null;
    prototype.disabled = false;
    prototype.onChange = null;
    prototype.setCaption = function(caption) {
        this.caption = caption;
        return this;
    };
    prototype.setChecked = function(checked) {
        this.checked = checked;
        return this;
    };
    prototype.setName = function(name) {
        this.name = name;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
}, {onBlur: "Callback0", onFocus: "Callback0", onChange: {name: "Callback1", arguments: [null]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.LayoutProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.LayoutProps = stjs.extend(ReactToolboxProps.LayoutProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Additional class(es) for custom styling.
     */
    prototype.className = null;
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.FontIconProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.FontIconProps = stjs.extend(ReactToolboxProps.FontIconProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  The key string for the icon you want be displayed.
     */
    prototype.value = null;
    prototype.onClick = null;
    prototype.setClassName = function(className) {
        this.className = className;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setOnClick = function(cb) {
        this.onClick = cb;
        return this;
    };
    prototype.setId = function(id) {
        this.id = id;
        return this;
    };
}, {onClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.DialogProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.DialogProps = stjs.extend(ReactToolboxProps.DialogProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  A array of objects representing the buttons for the dialog navigation
     *  area. The properties will be transferred to the buttons.
     */
    prototype.actions = null;
    /**
     * If true, the dialog will be active. 
     */
    prototype.active = null;
    /**
     * Sets a class to give customized styles to the dialog. 
     */
    prototype.className = null;
    /**
     * Callback called when the ESC key is pressed with the overlay active. 
     */
    prototype.onEscKeyDown = null;
    /**
     * Callback to be invoked when the dialog overlay is clicked. 
     */
    prototype.onOverlayClick = null;
    /**
     * Callback called when the mouse button is pressed on the overlay. 
     */
    prototype.onOverlayMouseDown = null;
    /**
     * Callback called when the mouse is moving over the overlay. 
     */
    prototype.onOverlayMouseMove = null;
    /**
     * Callback called when the mouse button is released over the overlay. 
     */
    prototype.onOverlayMouseUp = null;
    /**
     * The text string to use as standar title of the dialog. 
     */
    prototype.title = null;
    /**
     *  normal Used to determine the size of the dialog. It can be small, normal
     *  or large.
     */
    prototype.type = null;
    prototype.setClassName = function(className) {
        this.className = className;
        return this;
    };
    prototype.setOnEscKeyDown = function(onEscKeyDown) {
        this.onEscKeyDown = onEscKeyDown;
        return this;
    };
    prototype.setOnOverlayClick = function(onOverlayClick) {
        this.onOverlayClick = onOverlayClick;
        return this;
    };
    prototype.setOnOverlayMouseDown = function(onOverlayMouseDown) {
        this.onOverlayMouseDown = onOverlayMouseDown;
        return this;
    };
    prototype.setOnOverlayMouseMove = function(onOverlayMouseMove) {
        this.onOverlayMouseMove = onOverlayMouseMove;
        return this;
    };
    prototype.setOnOverlayMouseUp = function(onOverlayMouseUp) {
        this.onOverlayMouseUp = onOverlayMouseUp;
        return this;
    };
    prototype.setActions = function(actions) {
        this.actions = actions;
        return this;
    };
    prototype.setActive = function(active) {
        this.active = active;
        return this;
    };
    prototype.setTitle = function(title) {
        this.title = title;
        return this;
    };
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
}, {actions: {name: "Array", arguments: ["ReactToolboxProps.ButtonProps"]}, onEscKeyDown: {name: "Callback1", arguments: ["DOMEvent"]}, onOverlayClick: {name: "Callback1", arguments: ["DOMEvent"]}, onOverlayMouseDown: {name: "Callback1", arguments: ["DOMEvent"]}, onOverlayMouseMove: {name: "Callback1", arguments: ["DOMEvent"]}, onOverlayMouseUp: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.TableProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.TableProps = stjs.extend(ReactToolboxProps.TableProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.selectable = false;
    prototype.multiSelectable = false;
    /**
     *  If true, component will show a heading using model field names.
     */
    prototype.heading = false;
    /**
     *  Object describing the data model that represents each object in the
     *  source.
     */
    prototype.model = null;
    /**
     *  Callback function that is fired when an item in a row changes. If set,
     *  rows are editable.
     */
    prototype.onChange = null;
    /**
     *  Callback function invoked when the row selection changes.
     */
    prototype.onSelect = null;
    /**
     *  Array of indexes of the items in the source that should appear as
     *  selected.
     */
    prototype.selected = null;
    /**
     *  Array of objects representing each item to show.
     */
    prototype.source = null;
}, {model: {name: "Map", arguments: [null, "ReactToolboxProps.Type"]}, onChange: {name: "Callback3", arguments: [null, null, "Object"]}, onSelect: {name: "Callback1", arguments: [{name: "Array", arguments: [null]}]}, selected: {name: "Array", arguments: [null]}, source: {name: "Array", arguments: ["T"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListProps = stjs.extend(ReactToolboxProps.ListProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  If true, each element in the list will have a ripple effect on click
     *  
     *  @default false
     */
    prototype.ripple = false;
    /**
     *  If true, the elements in the list will display a hover effect and a
     *  pointer cursor.
     *  
     *  @default false
     */
    prototype.selectable = false;
    prototype.setRipple = function(ripple) {
        this.ripple = ripple;
        return this;
    };
    prototype.setSelectable = function(selectable) {
        this.selectable = selectable;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.NavDrawerProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.NavDrawerProps = stjs.extend(ReactToolboxProps.NavDrawerProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Set a class for the root component.
     * 
     *  @default ""
     */
    prototype.className = null;
    /**
     * If true, the panel will vertically scroll all content. 
     */
    prototype.scrollY = false;
    /**
     *  enum('normal','wide') normal 320px or 400px. Only applicable above the sm
     *  breakpoint.
     */
    prototype.width = null;
    /**
     *  If true, the drawer will be shown as an overlay.
     */
    prototype.active = false;
    /**
     *  If true, the drawer will be pinned open. pinned takes precedence over
     *  active.
     */
    prototype.pinned = false;
    /**
     *  The breakpoint at which the drawer is automatically pinned.
     *  enum('sm','md','lg','xl','xxl','xxxl')
     */
    prototype.permanentAt = null;
    /**
     *  Callback function to be invoked when the overlay is clicked.
     */
    prototype.onOverlayClick = null;
}, {onOverlayClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.AutocompleteProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.AutocompleteProps = stjs.extend(ReactToolboxProps.AutocompleteProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Sets the error string for the internal input element.
     */
    prototype.error = null;
    /**
     *  The text string to use for the floating label element.
     */
    prototype.label = null;
    /**
     *  If true, component can hold multiple values.
     *  
     *  @default true
     */
    prototype.multiple = false;
    /**
     *  Object of key/values or array representing all items suggested.
     */
    prototype.source = null;
    /**
     *  If true, the list of suggestions will not be filtered when a value is
     *  selected, until the query is modified.
     *  
     *  @default false
     */
    prototype.showSuggestionsWhenValueIsSet = false;
    /**
     *  Type of the input element. It can be a valid HTML5 input type
     *  
     *  @default text
     */
    prototype.type = null;
    /**
     *  Value or array of values currently selected component.Current value of
     *  the input element.
     */
    prototype.value = null;
    prototype.className = null;
    prototype.direction = null;
    prototype.disabled = false;
    prototype.onChange = null;
    prototype.onKeyPress = null;
    prototype.selectedPosition = null;
    prototype.suggestionMatch = null;
    prototype.hint = null;
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setMultiple = function(multiple) {
        this.multiple = multiple;
        return this;
    };
    prototype.setHint = function(hint) {
        this.hint = hint;
        return this;
    };
    prototype.setSource = function(source) {
        this.source = source;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setOnKeyPress = function(onKeyPress) {
        this.onKeyPress = onKeyPress;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
}, {source: "Object", value: "Object", onChange: "Callback1", onKeyPress: "Callback1", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListSubHeaderProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListSubHeaderProps = stjs.extend(ReactToolboxProps.ListSubHeaderProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.caption = null;
    prototype.setCaption = function(caption) {
        this.caption = caption;
        return this;
    };
    prototype.setKey = function(k) {
        this.key = k;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardTitleProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardTitleProps = stjs.extend(ReactToolboxProps.CardTitleProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.avatar = null;
    /**
     *  Children to pass through the component.
     */
    prototype.children = null;
    /**
     *  Sets a complementary smaller text under the title.
     */
    prototype.subtitle = null;
    /**
     *  Sets the title of the card.
     */
    prototype.title = null;
    prototype.setTitle = function(title) {
        this.title = title;
        return this;
    };
    prototype.setSubtitle = function(subtitle) {
        this.subtitle = subtitle;
        return this;
    };
    prototype.setAvatar = function(urlOrElement) {
        this.avatar = urlOrElement;
        return this;
    };
    prototype.setChildren = function(children) {
        this.children = children;
        return this;
    };
}, {avatar: "Object", children: "Object", title: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListDividerProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListDividerProps = stjs.extend(ReactToolboxProps.ListDividerProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Indicates if the divider should be full width or should leave a space on
     *  the left side.
     */
    prototype.inset = false;
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardProps = stjs.extend(ReactToolboxProps.CardProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Child components, usually Card subcomponents.
     */
    prototype.children = null;
    /**
     *  Increases the shadow depth to appear elevated.
     */
    prototype.raised = false;
    /**
     *  Array of objects describing actions. These actions will be rendered as
     *  buttons and the object fields will be transferred to those.
     *  
     *  @default []
     */
    prototype.actions = null;
    /**
     *  Sets HEX or RGBA color to add a colored layer to the heading.
     */
    prototype.color = null;
    /**
     *  URL to set as a background image in the heading.
     */
    prototype.image = null;
    /**
     *  Type of the component to display general modifications. It can be 'wide'
     *  for a larger card, 'image' if it's an image card or 'event' which shows
     *  just a title on top.
     */
    prototype.type = null;
    prototype.onClick = null;
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
}, {children: "Object", actions: {name: "Array", arguments: ["ReactToolboxProps.ButtonProps"]}, onClick: "Callback0", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.MenuProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.MenuProps = stjs.extend(ReactToolboxProps.MenuProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.active = null;
    prototype.onHide = null;
    prototype.onSelect = null;
    prototype.onShow = null;
    prototype.outline = null;
    prototype.position = null;
    prototype.ripple = null;
    prototype.selectable = null;
    prototype.selected = null;
}, {onHide: {name: "Callback1", arguments: ["DOMEvent"]}, onSelect: {name: "Callback1", arguments: ["DOMEvent"]}, onShow: {name: "Callback1", arguments: ["DOMEvent"]}, selected: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ButtonProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ButtonProps = stjs.extend(ReactToolboxProps.ButtonProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Indicates if the button should have accent color.
     *  
     *  @default false
     */
    prototype.accent = false;
    /**
     *  If true, the button will have a flat look.
     *  
     *  @default false
     */
    prototype.flat = false;
    /**
     *  If true, the button will have a floating look.
     *  
     *  @default false
     */
    prototype.floating = false;
    /**
     *  If specified, the button will be rendered as an <a>
     */
    prototype.href = null;
    /**
     *  The text string to use for the name of the button.
     */
    prototype.label = null;
    /**
     *  The text string to use for the type of the button.
     */
    prototype.type = null;
    /**
     *  If true, component will be disabled and show a loading animation.
     *  
     *  @default false
     */
    prototype.loading = false;
    /**
     *  To be used with floating button. If true the button will be smaller.
     *  
     *  @default false
     */
    prototype.mini = false;
    /**
     *  Indicates if the button should have primary color.
     *  
     *  @default false
     */
    prototype.primary = false;
    /**
     *  If true, the button will have a raised look.
     *  
     *  @default false
     */
    prototype.raised = false;
    /**
     *  If true, component will have a ripple effect on click.
     *  
     *  @default true
     */
    prototype.ripple = false;
    prototype.onClick = null;
    prototype.disabled = false;
    /**
     *  If true, the neutral colors are inverted. Useful to put a button over a
     *  dark background.
     */
    prototype.inverse = null;
    prototype.setInverse = function(inverse) {
        this.inverse = inverse;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    /**
     *  Value of the icon (See icon component).
     */
    prototype.icon = null;
    prototype.setRaised = function(raised) {
        this.raised = raised;
        return this;
    };
    prototype.setPrimary = function(primary) {
        this.primary = primary;
        return this;
    };
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setOnClick = function(onClick) {
        this.onClick = onClick;
        return this;
    };
    prototype.setFloating = function(floating) {
        this.floating = floating;
        return this;
    };
    prototype.setFlat = function(flat) {
        this.flat = flat;
        return this;
    };
    prototype.setAccent = function(accent) {
        this.accent = accent;
        return this;
    };
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
}, {onClick: {name: "Callback1", arguments: ["DOMEvent"]}, icon: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.MenuItemProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.MenuItemProps = stjs.extend(ReactToolboxProps.MenuItemProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.caption = null;
    prototype.disabled = null;
    prototype.onClick = null;
    prototype.selected = null;
    prototype.shortcut = null;
    prototype.icon = null;
    prototype.value = null;
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setCaption = function(caption) {
        this.caption = caption;
        return this;
    };
    prototype.setSelected = function(selected) {
        this.selected = selected;
        return this;
    };
    prototype.setOnClick = function(onClick) {
        this.onClick = onClick;
        return this;
    };
}, {onClick: {name: "Callback1", arguments: ["DOMEvent"]}, icon: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.TimePickerProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.TimePickerProps = stjs.extend(ReactToolboxProps.TimePickerProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.label = null;
    /**
     *  Format to display the clock. It can be 24hr or ampm.
     *  
     *  @default 24hr
     */
    prototype.format = null;
    /**
     *  Datetime object with currrently selected time
     */
    prototype.value = null;
    prototype.readonly = false;
    /**
     *  @param readonly the readonly to set
     *  @return 
     */
    prototype.setReadonly = function(readonly) {
        this.readonly = readonly;
        return this;
    };
    prototype.onChange = null;
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
}, {value: "Date", onChange: {name: "Callback1", arguments: ["Date"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.InputProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.InputProps = stjs.extend(ReactToolboxProps.InputProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.hint = null;
    prototype.name = null;
    /**
     *  Give an error string to display under the field.
     */
    prototype.error = null;
    /**
     *  Indicates if the label is floating in the input field or not.
     * 
     *  @default true
     */
    prototype.floating = false;
    /**
     *  The text string to use for the floating label element.
     */
    prototype.label = null;
    /**
     *  Specifies the maximum number of characters allowed in the component.
     */
    prototype.maxLength = null;
    /**
     *  If true, a textarea element will be rendered. The textarea also grows and
     *  shrinks according to the number of lines.
     * 
     *  @default false
     */
    prototype.multiline = false;
    /**
     *  Callback Callback1 that is fired when components is blurred.
     */
    prototype.onBlur = null;
    /**
     *  Callback Callback0 that is fired when components is focused.
     */
    prototype.onFocus = null;
    /**
     *  Callback Callback0 that is fired when a key is pressed down.
     */
    prototype.onKeyDown = null;
    /**
     *  Callback Callback0 that is fired when a key is pressed.
     */
    prototype.onKeyPress = null;
    /**
     *  Callback Callback0 that is fired when a key is released.
     */
    prototype.onKeyUp = null;
    /**
     *  Callback Callback1 that is fired when input starts.
     */
    prototype.onInput = null;
    /**
     *  If true, the html input has a required value.
     * 
     *  @default false
     */
    prototype.required = false;
    /**
     *  Type of the input element. It can be a valid HTML5 input type
     * 
     *  @default text
     */
    prototype.type = null;
    /**
     *  Current value of the input element.
     */
    prototype.value = null;
    prototype.disabled = false;
    prototype.icon = null;
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.onChange = null;
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setOnKeyPress = function(onKeyPress) {
        this.onKeyPress = onKeyPress;
        return this;
    };
    prototype.setRequired = function(required) {
        this.required = required;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
    prototype.setName = function(name) {
        this.name = name;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    prototype.setError = function(error) {
        this.error = error;
        return this;
    };
    prototype.setOnKeyDown = function(onKeyDown) {
        this.onKeyDown = onKeyDown;
        return this;
    };
    prototype.setOnFocus = function(event) {
        this.onFocus = event;
        return this;
    };
    prototype.placeholder = null;
}, {onBlur: {name: "Callback1", arguments: ["DOMEvent"]}, onFocus: {name: "Callback1", arguments: ["DOMEvent"]}, onKeyDown: {name: "Callback1", arguments: ["DOMEvent"]}, onKeyPress: {name: "Callback1", arguments: ["DOMEvent"]}, onKeyUp: {name: "Callback1", arguments: ["DOMEvent"]}, onInput: {name: "Callback1", arguments: ["DOMEvent"]}, icon: "Object", onChange: {name: "Callback1", arguments: [null]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CheckboxProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CheckboxProps = stjs.extend(ReactToolboxProps.CheckboxProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.checked = false;
    prototype.disabled = false;
    prototype.label = null;
    prototype.name = null;
    prototype.onBlur = null;
    prototype.onChange = null;
    prototype.onFocus = null;
    prototype.setChecked = function(checked) {
        this.checked = checked;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setName = function(name) {
        this.name = name;
        return this;
    };
    prototype.setOnBlur = function(onBlur) {
        this.onBlur = onBlur;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
    prototype.setOnFocus = function(onFocus) {
        this.onFocus = onFocus;
        return this;
    };
}, {onBlur: "Callback0", onChange: {name: "Callback1", arguments: [null]}, onFocus: "Callback0", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.SidebarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.SidebarProps = stjs.extend(ReactToolboxProps.SidebarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Set a class for the root component.
     * 
     *  @default ""
     */
    prototype.className = null;
    /**
     * If true, the sidebar will vertically scroll all content. 
     */
    prototype.scrollY = false;
    /**
     *  If true, the sidebar will be pinned open.
     */
    prototype.pinned = false;
    /**
     *  Width in standard increments (1-12) or percentage (25, 33, 50, 66, 75,
     *  100)
     *  
     *  enum(1,2,3,4,5,6,7,8,9,10,11,12,25,33,50,66,75,100) 5
     */
    prototype.width = 0;
    prototype.setPinned = function(pinned) {
        this.pinned = pinned;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ListItemProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ListItemProps = stjs.extend(ReactToolboxProps.ListItemProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  A string URL to specify an avatar in the left side of the item.
     */
    prototype.avatar = null;
    /**
     *  Main text of the item. Required.
     */
    prototype.caption = null;
    /**
     *  An element that will be displayed as the item. If set, this will override
     *  `caption` and `legend`.
     */
    prototype.itemContent = null;
    /**
     *  A list of elements that are placed on the left side of the item and after
     *  the avatar attribute.
     */
    prototype.leftActions = null;
    /**
     *  A string key of a font icon or element to display an icon in the left side of the item.
     */
    prototype.leftIcon = null;
    /**
     *  Secondary text to display under the caption.
     */
    prototype.legend = null;
    /**
     *  A list of elements that are placed on the right side of the item and
     *  after the rightIcon attribute.
     */
    prototype.rightActions = null;
    /**
     *  The same as the leftIcon but in this case the icon is displayed in the
     *  right side.
     */
    prototype.rightIcon = null;
    /**
     *  If true, the item displays a ripple effect on click. By default it's
     *  inherited from the parent element.
     *  
     *  @default false
     */
    prototype.ripple = false;
    /**
     *  If true, the elements in the list will display a hover effect and a
     *  pointer cursor. Inherited from the parent
     *  
     *  @default false
     */
    prototype.selectable = false;
    /**
     *  In case you want to provide the item as a link, you can pass this
     *  property to specify the href.
     */
    prototype.to = null;
    prototype.onClick = null;
    prototype.disabled = false;
    prototype.setCaption = function(caption) {
        this.caption = caption;
        return this;
    };
    prototype.setLegend = function(legend) {
        this.legend = legend;
        return this;
    };
    prototype.setKey = function(k) {
        this.key = k;
        return this;
    };
    prototype.setAvatar = function(avatar) {
        this.avatar = avatar;
        return this;
    };
    prototype.setSelectable = function(selectable) {
        this.selectable = selectable;
        return this;
    };
    prototype.setLeftIcon = function(leftIcon) {
        this.leftIcon = leftIcon;
        return this;
    };
    prototype.setDisabled = function(disabled) {
        this.disabled = disabled;
        return this;
    };
    prototype.setOnClick = function(onClick) {
        this.onClick = onClick;
        return this;
    };
    prototype.setRightIcon = function(rightIcon) {
        this.rightIcon = rightIcon;
        return this;
    };
    prototype.setRightActions = function(rightActions) {
        this.rightActions = rightActions;
        return this;
    };
    prototype.setLeftActions = function(leftActions) {
        this.leftActions = leftActions;
        return this;
    };
}, {avatar: "Object", itemContent: "ReactElement", leftActions: {name: "Array", arguments: [{name: "ReactElement", arguments: ["Object"]}]}, leftIcon: "Object", legend: "Object", rightActions: {name: "Array", arguments: [{name: "ReactElement", arguments: ["Object"]}]}, onClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.CardTextProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.CardTextProps = stjs.extend(ReactToolboxProps.CardTextProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.children = null;
}, {children: "Object", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.SnackbarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.SnackbarProps = stjs.extend(ReactToolboxProps.SnackbarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.action = null;
    prototype.active = null;
    prototype.className = null;
    prototype.icon = null;
    prototype.label = null;
    prototype.onClick = null;
    prototype.onTimeout = null;
    prototype.timeout = null;
    prototype.type = null;
    prototype.setActive = function(active) {
        this.active = active;
        return this;
    };
}, {icon: "Object", onClick: {name: "Callback1", arguments: ["DOMEvent"]}, onTimeout: "Callback0", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.LinkProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.LinkProps = stjs.extend(ReactToolboxProps.LinkProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  If {@code true}, adds active style to link.
     * 
     *  @default {@code false}
     */
    prototype.active = false;
    /**
     *  Sets a custom class name to add styles to the link.
     * 
     *  @default {@code ""}
     */
    prototype.className = null;
    /**
     *  Sets a count number.
     */
    prototype.count = 0;
    /**
     *  An icon key string to include a {@link com.vg.rt.FontIcon} component in
     *  front of the text.
     */
    prototype.icon = null;
    /**
     *  The text string used for the text content of the link.
     */
    prototype.label = null;
    prototype.onClick = null;
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setIcon = function(icon) {
        this.icon = icon;
        return this;
    };
    prototype.setActive = function(active) {
        this.active = active;
        return this;
    };
    prototype.setOnClick = function(onClick) {
        this.onClick = onClick;
        return this;
    };
}, {onClick: {name: "Callback1", arguments: ["DOMEvent"]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.ProgressBarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.ProgressBarProps = stjs.extend(ReactToolboxProps.ProgressBarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     * Value of a secondary progress bar useful for buffering. 
     */
    prototype.buffer = null;
    /**
     * Maximum value permitted. 
     */
    prototype.max = null;
    /**
     * Minimum value permitted. 
     */
    prototype.min = null;
    /**
     * Mode of the progress bar, it can be determinate or indeterminate. 
     */
    prototype.mode = null;
    /**
     * If true, the circular progress bar will be changing its color. 
     */
    prototype.multicolor = null;
    /**
     * Type of the progress bar, it can be circular or linear. 
     */
    prototype.type = null;
    /**
     * Value of the current progress. 
     */
    prototype.value = null;
    prototype.setType = function(type) {
        this.type = type;
        return this;
    };
    prototype.setMulticolor = function(multicolor) {
        this.multicolor = multicolor;
        return this;
    };
    constructor.LINEAR = "linear";
    constructor.CIRCULAR = "circular";
}, {buffer: "Number", max: "Number", min: "Number", value: "Number", style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.DatePickerProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.DatePickerProps = stjs.extend(ReactToolboxProps.DatePickerProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    prototype.label = null;
    /**
     *  Date object with the maximum selectable date.
     */
    prototype.maxDate = null;
    /**
     *  Date object with the minimum selectable date.
     */
    prototype.minDate = null;
    /**
     *  The text string to use like a input placeholder.
     */
    prototype.placeholder = null;
    /**
     *  Date object with the currently selected date.
     */
    prototype.value = null;
    prototype.onChange = null;
    prototype.readonly = false;
    /**
     *  @param readonly the readonly to set
     *  @return 
     */
    prototype.setReadonly = function(readonly) {
        this.readonly = readonly;
        return this;
    };
    /**
     * Function to format the date displayed on the input. 
     */
    prototype.inputFormat = null;
    prototype.setLabel = function(label) {
        this.label = label;
        return this;
    };
    prototype.setMinDate = function(minDate) {
        this.minDate = minDate;
        return this;
    };
    prototype.setValue = function(value) {
        this.value = value;
        return this;
    };
    prototype.setOnChange = function(onChange) {
        this.onChange = onChange;
        return this;
    };
}, {maxDate: "Date", minDate: "Date", value: "Date", onChange: {name: "Callback1", arguments: ["Date"]}, inputFormat: {name: "Function1", arguments: ["Date", null]}, style: {name: "Map", arguments: [null, "Object"]}}, {});
stjs.ns("ReactToolboxProps");
ReactToolboxProps.AppBarProps = function(key) {
    ReactToolboxProps.Props.call(this, key);
};
ReactToolboxProps.AppBarProps = stjs.extend(ReactToolboxProps.AppBarProps, ReactToolboxProps.Props, [], function(constructor, prototype) {
    /**
     *  Set a class for the root component.
     * 
     *  @default ""
     */
    prototype.className = null;
    /**
     *  Determine if the bar should have position {@code fixed} or {@code relative}
     * 
     *  @default false
     */
    prototype.fixed = false;
    /**
     *  If {@code true}, the AppBar shows a shadow.
     * 
     *  @default false
     */
    prototype.flat = false;
    prototype.setFixed = function(fixed) {
        this.fixed = fixed;
        return this;
    };
    prototype.setFlat = function(flat) {
        this.flat = flat;
        return this;
    };
}, {style: {name: "Map", arguments: [null, "Object"]}}, {});
//# sourceMappingURL=react-toolbox-bridge.map

module.exports = ReactToolboxProps;

