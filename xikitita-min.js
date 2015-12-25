"use strict";var Xikitita={window:this,afterInit:[],defineProperties:function(e,t){var i=this;Object.keys(t).forEach(function(a){i.defineProperty(e,a,t[a])})},defineProperty:function(e,t,i){e.hasOwnProperty(t)||Object.defineProperty(e,t,i)}};Object.defineProperty(Xikitita,"init",{get:function(){return this.classes={},this.inflection={singular:{},plural:{}},this.translations={},this.validators={},this.afterInit.forEach(function(e){e()}),this}}),Xikitita.Inflection=function(body){var __this__=this,irregular=function(e,t){__this__.inflection.singular[e]=t,__this__.inflection.plural[t]=e};return eval("new function (){\n      var irregular = #{irregular};\n      (#{body})(this);\n    };".replace(/#{irregular}/,irregular.toString()).replace(/#{body}/,body.toString())),__this__},Xikitita.I18n=function(e,t){return this.translations[e]=t||{},this},Xikitita.afterInit.push(function(){var e=Xikitita;eval.call(e.window,"var I18n;"),I18n={locale:"en",translate:function(t,i){var a=t,n=e.translations[I18n.locale];return t.split(".").forEach(function(e){n=n[e]}),"string"==typeof n&&(a=n,i=i||{},Object.keys(i).forEach(function(e){a=a.replace(new RegExp("#{"+e+"}","ig"),i[e])})),a},localize:function(t,i){i=i||"default";var a=t;if("object"==typeof t&&"Date"===t.constructor.name)a=e.translations[I18n.locale].date[i](t);else if("number"==typeof t){var n=e.translations[I18n.locale].integer[i];/\./.test(t)&&(n=e.translations[I18n.locale].decimal[i]),a=n(t)}else"boolean"==typeof t&&(a=e.translations[I18n.locale].logic[i](t));return a}},I18n.t=I18n.translate,I18n.l=I18n.localize}),Xikitita.Error=function(e){var t=this,i=e;Object.defineProperties(t,{add:{value:function(e,i){t[e]=t[e]||[],t[e].push(i)}},clear:{get:function(){for(var e in t)delete t[e]}},messages:{get:function(){var e=[];return Object.keys(t).forEach(function(i){t[i].forEach(function(t){e.push(t)})}),e}},fullMessages:{get:function(){var e=[];return Object.keys(t).forEach(function(a){var n=["attributes",i,a].join("."),r=I18n.t(n);t[a].forEach(function(t){var i=I18n.t("errors.format").replace(/#{attribute}/,r).replace(/#{message}/,t);e.push(i)})}),e}}})},Xikitita.Class=function(name,body){eval.call(Xikitita.window,"function #{name}(){\n      var Xikitita = Xikitita;\n      var __class__ =  #{name};\n      var __attrAccessible__ = [];\n      \n      var object = this;\n      var attrAccessible = #{attrAccessible};\n      \n      var __id__ = 'id';\n      var id = #{id};\n      var __afterNew__ = [];\n      \n      var __belongsToClasses__ = {};\n      var belongsTo = #{belongsTo};\n      \n      var __hasOneClasses__ = {};\n      var hasOne = #{hasOne};\n      \n      var __hasManyClasses__ = {};\n      var hasMany = #{hasMany};\n      \n      var __errors__ = new #{Error}(__class__.name.toLowerCase());\n      var __validations__ = [];\n      Object.defineProperties(object, {\n        'errors': {get: #{errors}, enumerable: false },\n        'isValid': {get: #{isValid}, enumerable: false }\n      });\n      \n      var validates = #{validates};\n      \n      var def = #{def};\n      var defClass = #{defClass};\n      \n      #{validatesOf}\n      \n      (#{body})(object);\n      attrAccessible();\n      \n      var __initAttributes__ =  Array.prototype.slice.call(arguments).shift() || {};\n      (#{new})(object);\n      \n      Object.defineProperties(object, {\n        'reset': {get: #{reset}, enumerable: false },\n        'changes': {get: #{changes}, enumerable: false },\n        'changed': {get: #{changed}, enumerable: false }\n      });\n    };".replace(/#{name}/g,name).replace(/#{attrAccessible}/,Xikitita.attrAccessible.toString()).replace(/#{id}/,Xikitita.id.toString()).replace(/#{belongsTo}/,Xikitita.belongsTo.toString()).replace(/#{hasOne}/,Xikitita.hasOne.toString()).replace(/#{hasMany}/,Xikitita.hasMany.toString()).replace(/#{Error}/,Xikitita.Error.toString()).replace(/#{errors}/,Xikitita.errors.toString()).replace(/#{isValid}/,Xikitita.isValid.toString()).replace(/#{validates}/,Xikitita.validates.toString()).replace(/#{def}/,Xikitita.def.toString()).replace(/#{defClass}/,Xikitita.defClass.toString()).replace(/#{validatesOf}/,Xikitita.validatesOf()).replace(/#{body}/,body.toString()).replace(/#{new}/,Xikitita["new"].toString()).replace(/#{reset}/,Xikitita.reset.toString()).replace(/#{changes}/,Xikitita.changes.toString()).replace(/#{changed}/,Xikitita.changed.toString()));var Class=eval(name);return Object.defineProperty(Class,"toTranslated",{get:function(){var e=Class.name.toLowerCase(),t=["classes",e,"member"].join("."),i=["classes",e,"collection"].join(".");return{member:I18n.t(t),collection:I18n.t(i)}}}),Object.defineProperties(Class.prototype,{Xikitita:{get:function(){return Xikitita}}}),new Class,this.classes[name]=Class,this},Xikitita.id=function(e){__id__=e,Object.defineProperty(object,"__idValue__",{get:function(){return object[__id__]}})},Xikitita.attrAccessible=function(){var e=Array.prototype.slice.call(arguments);0===__attrAccessible__.length&&e.unshift(__id__),e.forEach(function(e){object[e]=null,__attrAccessible__.push(e)})},Xikitita["new"]=function(){function e(e){var t=["changes",e].join("_");Object.defineProperty(object,t,{get:function(){return this.changes[e]||[]}})}function t(e){var t=["changes",e].join("_"),i=["changed",e].join("_");Object.defineProperty(object,i,{get:function(){return this[t].isAny}})}"string"==typeof __initAttributes__&&(__initAttributes__=JSON.parse(__initAttributes__)),__attrAccessible__.forEach(function(i){"undefined"==typeof __initAttributes__[i]&&(__initAttributes__[i]=null),__afterNew__.push(function(){e(i),t(i)})}),Object.keys(__initAttributes__).forEach(function(e){if(__attrAccessible__.indexOf(e)<0)throw new TypeError(__class__.name.toLowerCase()+"."+e+" is not a attribute");object[e]=__initAttributes__[e]}),__afterNew__.forEach(function(e){e()})},Xikitita.reset=function(){Object.keys(__initAttributes__).forEach(function(e){object[e]=__initAttributes__[e]})},Xikitita.changes=function(){var e={};return __attrAccessible__.forEach(function(t){var i=__initAttributes__[t]||null,a=object[t];i!==a&&(e[t]=[i,a])}),e},Xikitita.changed=function(){return this.changes.isAny},Xikitita.def=function(e,t){Object.defineProperty(object,e,{value:t,enumerable:!1})},Xikitita.defClass=function(e,t){__class__[e]=__class__[e]||t},Xikitita.belongsTo=function(classNameSingularized,options){var options=options||{},foreingKey=options.foreingKey||classNameSingularized+"_id",referenceKey=options.referenceKey||"id";Object.defineProperty(object,classNameSingularized,{get:function(){return object[classNameSingularized]=__belongsToClasses__[classNameSingularized]||null,__belongsToClasses__[classNameSingularized]},set:function(value){value=value||null;var classTitleize=classNameSingularized.replace(/(\w)/,function(e){return e.toUpperCase()}),Class=eval(classTitleize);null!==value&&"Object"===value.constructor.name&&(value=new Class(value)),__belongsToClasses__[classNameSingularized]=value;var idValue=null;null!==value&&(idValue=value[referenceKey]),object[foreingKey]=idValue}}),attrAccessible(foreingKey),__afterNew__.push(function(){var e={};e[referenceKey]=object[foreingKey],__belongsToClasses__[classNameSingularized]=e})},Xikitita.hasOne=function(classNameSingularized,options){var options=options||{},foreingKey=options.foreingKey||__class__.name.toLowerCase()+"_id";Object.defineProperty(object,classNameSingularized,{get:function(){return object[classNameSingularized]=__hasOneClasses__[classNameSingularized]||null,__hasOneClasses__[classNameSingularized]},set:function(value){value=value||null;var Class=eval(classNameSingularized.capitalize);null!==value&&(value[foreingKey]=object[__id__],"Object"===value.constructor.name&&(value=new Class(value))),__hasOneClasses__[classNameSingularized]=value}})},Xikitita.hasMany=function(classNamePluralized,options){var options=options||{},foreingKey=options.foreingKey||__class__.name.toLowerCase()+"_id";Object.defineProperty(object,classNamePluralized,{get:function(){return object[classNamePluralized]=__hasManyClasses__[classNamePluralized],__hasManyClasses__[classNamePluralized]},set:function(values){values=values||null;var Class=eval(classNamePluralized.singularize.capitalize);null!==values&&values.forEach(function(e){e[foreingKey]=object[__id__],"Object"===e.constructor.name&&(e=new Class(e))}),__hasManyClasses__[classNamePluralized]=values}})},Xikitita.validates=function(e,t){Object.keys(t).forEach(function(i){var a={};"Object"==typeof t[i]&&(a=t[i]),__validations__.push(function(){var t=object[e];if(!object.Xikitita.validators[i].call(t,e,object,a)){var n=object.Xikitita.validators[i].messageName,r=["errors","messages",n].join(".");__errors__.add(e,I18n.t(r))}})})},Xikitita.validatesOf=function(){var e=[];return Object.keys(Xikitita.validators).forEach(function(t){e.push("var validates#{validator}Of = ".replace(/#{validator}/,t.capitalize)+function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){validates(e,"#{options}")})}.toString().replace(/'#{options}'/,"{"+t+": true}")+";")}),e.join("\n")},Xikitita.errors=function(){return __errors__},Xikitita.isValid=function(){return __errors__.clear,__validations__.forEach(function(e){e()}),__errors__.isEmpty},Xikitita.Validator=function(e,t,i){return this.validators[e.toLowerCase()]={messageName:t,call:i},this},Xikitita.afterInit.push(function(){Xikitita.Validator("Presence","blank",function(e,t,i,a){return null!==e})}),Xikitita.afterInit.push(function(){Xikitita.defineProperties(Object.prototype,{toJson:{get:function(){return JSON.stringify(this)}},asJson:{get:function(){return JSON.parse(this.toJson)}},isAny:{get:function(){return Object.keys(this).length>0}},isEmpty:{get:function(){return!this.isAny}}})}),Xikitita.afterInit.push(function(){Xikitita.defineProperties(String.prototype,{capitalize:{get:function(){return this.replace(/(\w)/,function(e){return e.toUpperCase()})}},pluralize:{get:function(){var e=this,t=e,i=Xikitita.inflection.singular[e]||null;return i||(t=/$/,i="s"),this.replace(t,i)}},singularize:{get:function(){var e=this,t=e,i=Xikitita.inflection.plural[e]||null;return i||(t=/s$/,i=""),this.replace(t,i)}}})});