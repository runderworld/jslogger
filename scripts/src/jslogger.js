var jslogger = (function(){
    'use strict';

    var logLevels = {
            debug: 4,
            error: 0,
            info: 2,
            log: 3,
            trace: 4,
            warn: 1
        },
        logLevel = 0;

    function apply(fn, args){
        fn.apply(console, args);
    }

    function extractValue(){
        var tokens = document.cookie.split(';'),
            cookieValue = '';

        tokens.forEach(function(token){
            if(token.match(/logLevel/) !== null){
                cookieValue = token.split(',')[0].split('=')[1];
            }
        });

        return cookieValue;
    }

    function getLogLevel(){
        var storedLevel = extractValue();
        return (!!storedLevel) ? parseInt(storedLevel, 10) : logLevel;
    }

    function setLogLevel(level){
        logLevel = level;
        document.cookie = 'logLevel=' + level;
        return 'Log level set to ' + level;
    }

    function parseArgs(args){
        return Array.prototype.slice.call(args, 0);
    }

    function consoleCaller(fnKey, args){
        if(!!console && typeof console[fnKey] === 'function' && logLevel >= logLevels[fnKey]){
            apply(console[fnKey], args);
        }
    }

    function debug(){
        consoleCaller('debug', parseArgs(arguments));
    }

    function error(){
        consoleCaller('error', parseArgs(arguments));
    }

    function info(){
        consoleCaller('info', parseArgs(arguments));
    }

    function log(){
        consoleCaller('log', parseArgs(arguments));
    }

    function trace(){
        consoleCaller('trace', []);
    }

    function warn(){
        consoleCaller('warn', parseArgs(arguments));
    }

    setLogLevel(getLogLevel());

    return {
        debug: debug,
        error: error,
        getLogLevel: getLogLevel,
        info: info,
        log: log,
        setLogLevel: setLogLevel,
        trace: trace,
        warn: warn
    };

})();
