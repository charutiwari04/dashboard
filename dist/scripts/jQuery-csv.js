RegExp.escape=function(r){return r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},function(r){"use strict";var e;e="undefined"!=typeof jQuery&&jQuery?jQuery:{},e.csv={defaults:{separator:",",delimiter:'"',headers:!0},hooks:{castToScalar:function(r,e){var a=/\./;if(isNaN(r))return r;if(a.test(r))return parseFloat(r);var t=parseInt(r);return isNaN(t)?null:t}},parsers:{parse:function(e,a){function t(){if(c=0,u="",a.start&&a.state.rowNum<a.start)return i=[],a.state.rowNum++,void(a.state.colNum=1);if(a.onParseEntry===r)l.push(i);else{var e=a.onParseEntry(i,a.state);e!==!1&&l.push(e)}i=[],a.end&&a.state.rowNum>=a.end&&(f=!0),a.state.rowNum++,a.state.colNum=1}function s(){if(a.onParseValue===r)i.push(u);else{var e=a.onParseValue(u,a.state);e!==!1&&i.push(e)}u="",c=0,a.state.colNum++}var o=a.separator,n=a.delimiter;a.state.rowNum||(a.state.rowNum=1),a.state.colNum||(a.state.colNum=1);var l=[],i=[],c=0,u="",f=!1,m=RegExp.escape(o),p=RegExp.escape(n),d=/(D|S|\r\n|\n|\r|[^DS\r\n]+)/,w=d.source;return w=w.replace(/S/g,m),w=w.replace(/D/g,p),d=new RegExp(w,"gm"),e.replace(d,function(r){if(!f)switch(c){case 0:if(r===o){u+="",s();break}if(r===n){c=1;break}if(/^(\r\n|\n|\r)$/.test(r)){s(),t();break}u+=r,c=3;break;case 1:if(r===n){c=2;break}u+=r,c=1;break;case 2:if(r===n){u+=r,c=1;break}if(r===o){s();break}if(/^(\r\n|\n|\r)$/.test(r)){s(),t();break}throw new Error("CSVDataError: Illegal State [Row:"+a.state.rowNum+"][Col:"+a.state.colNum+"]");case 3:if(r===o){s();break}if(/^(\r\n|\n|\r)$/.test(r)){s(),t();break}if(r===n)throw new Error("CSVDataError: Illegal Quote [Row:"+a.state.rowNum+"][Col:"+a.state.colNum+"]");throw new Error("CSVDataError: Illegal Data [Row:"+a.state.rowNum+"][Col:"+a.state.colNum+"]");default:throw new Error("CSVDataError: Unknown State [Row:"+a.state.rowNum+"][Col:"+a.state.colNum+"]")}}),0!==i.length&&(s(),t()),l},splitLines:function(e,a){function t(){if(l=0,a.start&&a.state.rowNum<a.start)return i="",void a.state.rowNum++;if(a.onParseEntry===r)n.push(i);else{var e=a.onParseEntry(i,a.state);e!==!1&&n.push(e)}i="",a.end&&a.state.rowNum>=a.end&&(c=!0),a.state.rowNum++}var s=a.separator,o=a.delimiter;a.state.rowNum||(a.state.rowNum=1);var n=[],l=0,i="",c=!1,u=RegExp.escape(s),f=RegExp.escape(o),m=/(D|S|\n|\r|[^DS\r\n]+)/,p=m.source;return p=p.replace(/S/g,u),p=p.replace(/D/g,f),m=new RegExp(p,"gm"),e.replace(m,function(r){if(!c)switch(l){case 0:if(r===s){i+=r,l=0;break}if(r===o){i+=r,l=1;break}if("\n"===r){t();break}if(/^\r$/.test(r))break;i+=r,l=3;break;case 1:if(r===o){i+=r,l=2;break}i+=r,l=1;break;case 2:var e=i.substr(i.length-1);if(r===o&&e===o){i+=r,l=1;break}if(r===s){i+=r,l=0;break}if("\n"===r){t();break}if("\r"===r)break;throw new Error("CSVDataError: Illegal state [Row:"+a.state.rowNum+"]");case 3:if(r===s){i+=r,l=0;break}if("\n"===r){t();break}if("\r"===r)break;if(r===o)throw new Error("CSVDataError: Illegal quote [Row:"+a.state.rowNum+"]");throw new Error("CSVDataError: Illegal state [Row:"+a.state.rowNum+"]");default:throw new Error("CSVDataError: Unknown state [Row:"+a.state.rowNum+"]")}}),""!==i&&t(),n},parseEntry:function(e,a){function t(){if(a.onParseValue===r)n.push(i);else{var e=a.onParseValue(i,a.state);e!==!1&&n.push(e)}i="",l=0,a.state.colNum++}var s=a.separator,o=a.delimiter;a.state.rowNum||(a.state.rowNum=1),a.state.colNum||(a.state.colNum=1);var n=[],l=0,i="";if(!a.match){var c=RegExp.escape(s),u=RegExp.escape(o),f=/(D|S|\n|\r|[^DS\r\n]+)/,m=f.source;m=m.replace(/S/g,c),m=m.replace(/D/g,u),a.match=new RegExp(m,"gm")}return e.replace(a.match,function(r){switch(l){case 0:if(r===s){i+="",t();break}if(r===o){l=1;break}if("\n"===r||"\r"===r)break;i+=r,l=3;break;case 1:if(r===o){l=2;break}i+=r,l=1;break;case 2:if(r===o){i+=r,l=1;break}if(r===s){t();break}if("\n"===r||"\r"===r)break;throw new Error("CSVDataError: Illegal State [Row:"+a.state.rowNum+"][Col:"+a.state.colNum+"]");case 3:if(r===s){t();break}if("\n"===r||"\r"===r)break;if(r===o)throw new Error("CSVDataError: Illegal Quote [Row:"+a.state.rowNum+"][Col:"+a.state.colNum+"]");throw new Error("CSVDataError: Illegal Data [Row:"+a.state.rowNum+"][Col:"+a.state.colNum+"]");default:throw new Error("CSVDataError: Unknown State [Row:"+a.state.rowNum+"][Col:"+a.state.colNum+"]")}}),t(),n}},helpers:{collectPropertyNames:function(r){var e,a,t=[];for(e in r)for(a in r[e])r[e].hasOwnProperty(a)&&t.indexOf(a)<0&&"function"!=typeof r[e][a]&&t.push(a);return t}},toArray:function(a,t,s){t=t!==r?t:{};var o={};o.callback=s!==r&&"function"==typeof s&&s,o.separator="separator"in t?t.separator:e.csv.defaults.separator,o.delimiter="delimiter"in t?t.delimiter:e.csv.defaults.delimiter;var n=t.state!==r?t.state:{};t={delimiter:o.delimiter,separator:o.separator,onParseEntry:t.onParseEntry,onParseValue:t.onParseValue,state:n};var l=e.csv.parsers.parseEntry(a,t);return o.callback?void o.callback("",l):l},toArrays:function(a,t,s){t=t!==r?t:{};var o={};o.callback=s!==r&&"function"==typeof s&&s,o.separator="separator"in t?t.separator:e.csv.defaults.separator,o.delimiter="delimiter"in t?t.delimiter:e.csv.defaults.delimiter;var n=[];return t={delimiter:o.delimiter,separator:o.separator,onPreParse:t.onPreParse,onParseEntry:t.onParseEntry,onParseValue:t.onParseValue,onPostParse:t.onPostParse,start:t.start,end:t.end,state:{rowNum:1,colNum:1}},t.onPreParse!==r&&t.onPreParse(a,t.state),n=e.csv.parsers.parse(a,t),t.onPostParse!==r&&t.onPostParse(n,t.state),o.callback?void o.callback("",n):n},toObjects:function(a,t,s){t=t!==r?t:{};var o={};o.callback=s!==r&&"function"==typeof s&&s,o.separator="separator"in t?t.separator:e.csv.defaults.separator,o.delimiter="delimiter"in t?t.delimiter:e.csv.defaults.delimiter,o.headers="headers"in t?t.headers:e.csv.defaults.headers,t.start="start"in t?t.start:1,o.headers&&t.start++,t.end&&o.headers&&t.end++;var n=[],l=[];t={delimiter:o.delimiter,separator:o.separator,onPreParse:t.onPreParse,onParseEntry:t.onParseEntry,onParseValue:t.onParseValue,onPostParse:t.onPostParse,start:t.start,end:t.end,state:{rowNum:1,colNum:1},match:!1,transform:t.transform};var i={delimiter:o.delimiter,separator:o.separator,start:1,end:1,state:{rowNum:1,colNum:1}};t.onPreParse!==r&&t.onPreParse(a,t.state);var c=e.csv.parsers.splitLines(a,i),u=e.csv.toArray(c[0],t);n=e.csv.parsers.splitLines(a,t),t.state.colNum=1,u?t.state.rowNum=2:t.state.rowNum=1;for(var f=0,m=n.length;f<m;f++){for(var p=e.csv.toArray(n[f],t),d={},w=0;w<u.length;w++)d[u[w]]=p[w];t.transform!==r?l.push(t.transform.call(r,d)):l.push(d),t.state.rowNum++}return t.onPostParse!==r&&t.onPostParse(l,t.state),o.callback?void o.callback("",l):l},fromArrays:function(a,t,s){t=t!==r?t:{};var o={};o.callback=s!==r&&"function"==typeof s&&s,o.separator="separator"in t?t.separator:e.csv.defaults.separator,o.delimiter="delimiter"in t?t.delimiter:e.csv.defaults.delimiter;var n,l,i,c,u="";for(i=0;i<a.length;i++){for(n=a[i],l=[],c=0;c<n.length;c++){var f=n[c]===r||null===n[c]?"":n[c].toString();f.indexOf(o.delimiter)>-1&&(f=f.replace(o.delimiter,o.delimiter+o.delimiter));var m="\n|\r|S|D";m=m.replace("S",o.separator),m=m.replace("D",o.delimiter),f.search(m)>-1&&(f=o.delimiter+f+o.delimiter),l.push(f)}u+=l.join(o.separator)+"\r\n"}return o.callback?void o.callback("",u):u},fromObjects:function(a,t,s){t=t!==r?t:{};var o={};if(o.callback=s!==r&&"function"==typeof s&&s,o.separator="separator"in t?t.separator:e.csv.defaults.separator,o.delimiter="delimiter"in t?t.delimiter:e.csv.defaults.delimiter,o.headers="headers"in t?t.headers:e.csv.defaults.headers,o.sortOrder="sortOrder"in t?t.sortOrder:"declare",o.manualOrder="manualOrder"in t?t.manualOrder:[],o.transform=t.transform,"string"==typeof o.manualOrder&&(o.manualOrder=e.csv.toArray(o.manualOrder,o)),o.transform!==r){var n=a;a=[];var l;for(l=0;l<n.length;l++)a.push(o.transform.call(r,n[l]))}var i=e.csv.helpers.collectPropertyNames(a);if("alpha"===o.sortOrder&&i.sort(),o.manualOrder.length>0){var c,u=[].concat(o.manualOrder);for(c=0;c<i.length;c++)u.indexOf(i[c])<0&&u.push(i[c]);i=u}var f,c,m,p,d=[];for(o.headers&&d.push(i),f=0;f<a.length;f++){for(m=[],c=0;c<i.length;c++)p=i[c],p in a[f]&&"function"!=typeof a[f][p]?m.push(a[f][p]):m.push("");d.push(m)}return e.csv.fromArrays(d,t,o.callback)}},e.csvEntry2Array=e.csv.toArray,e.csv2Array=e.csv.toArrays,e.csv2Dictionary=e.csv.toObjects,"undefined"!=typeof module&&module.exports&&(module.exports=e.csv)}.call(this);