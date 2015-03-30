(function(){
    'use strict';

    describe('jslogger', function(){

        it('should be an object', function(){
            expect(typeof jslogger).toBe('object');
        });

        describe('log', function(){
            var log;

            beforeEach(function(){
                jslogger.setLogLevel(3);
                log = console.log;
            });

            afterEach(function(){
                console.log = log;
            });

            it('should call console.log', function(){
                console.log = jasmine.createSpy('log');

                jslogger.log();

                expect(console.log).toHaveBeenCalled();
            });

            it('should call console.log with a single argument', function(){
                console.log = jasmine.createSpy('log');

                jslogger.log('test');

                expect(console.log).toHaveBeenCalledWith('test');
            });

            it('should call console.log with a single argument', function(){
                console.log = jasmine.createSpy('log');

                jslogger.log('test1', 'test2', 'test3', 'test4');

                expect(console.log).toHaveBeenCalledWith('test1', 'test2', 'test3', 'test4');
            });

            it('should not throw an error if console.log does not exist', function(){
                console.log = undefined;

                function logger(){
                    jslogger.log();
                }

                expect(logger).not.toThrow();
            });
        });

        describe('error', function(){

            var error;

            beforeEach(function(){
                jslogger.setLogLevel(0);
                error = console.error;
            });

            afterEach(function(){
                console.error = error;
            });

            it('should call console.error', function(){
                console.error = jasmine.createSpy('error');

                jslogger.error();

                expect(console.error).toHaveBeenCalled();
            });

            it('should call console.error with a single argument', function(){
                console.error = jasmine.createSpy('error');

                jslogger.error('test');

                expect(console.error).toHaveBeenCalledWith('test');
            });

            it('should call console.error with a single argument', function(){
                console.error = jasmine.createSpy('error');

                jslogger.error('test1', 'test2', 'test3', 'test4');

                expect(console.error).toHaveBeenCalledWith('test1', 'test2', 'test3', 'test4');
            });

            it('should not throw an error if console.error does not exist', function(){
                console.error = undefined;

                function logger(){
                    jslogger.error();
                }

                expect(logger).not.toThrow();
            });
        });

        describe('info', function(){

            var info;

            beforeEach(function(){
                jslogger.setLogLevel(2);
                info = console.info;
            });

            afterEach(function(){
                console.info = info;
            });

            it('should call console.info', function(){
                console.info = jasmine.createSpy('info');

                jslogger.info();

                expect(console.info).toHaveBeenCalled();
            });

            it('should call console.info with a single argument', function(){
                console.info = jasmine.createSpy('info');

                jslogger.info('test');

                expect(console.info).toHaveBeenCalledWith('test');
            });

            it('should call console.info with a single argument', function(){
                console.info = jasmine.createSpy('info');

                jslogger.info('test1', 'test2', 'test3', 'test4');

                expect(console.info).toHaveBeenCalledWith('test1', 'test2', 'test3', 'test4');
            });

            it('should not throw an error if console.info does not exist', function(){
                console.info = undefined;

                function logger(){
                    jslogger.info();
                }

                expect(logger).not.toThrow();
            });
        });

        describe('warn', function(){

            var warn;

            beforeEach(function(){
                jslogger.setLogLevel(1);
                warn = console.warn;
            });

            afterEach(function(){
                console.warn = warn;
            });

            it('should call console.warn', function(){
                console.warn = jasmine.createSpy('warn');

                jslogger.warn();

                expect(console.warn).toHaveBeenCalled();
            });

            it('should call console.warn with a single argument', function(){
                console.warn = jasmine.createSpy('warn');

                jslogger.warn('test');

                expect(console.warn).toHaveBeenCalledWith('test');
            });

            it('should call console.warn with a single argument', function(){
                console.warn = jasmine.createSpy('warn');

                jslogger.warn('test1', 'test2', 'test3', 'test4');

                expect(console.warn).toHaveBeenCalledWith('test1', 'test2', 'test3', 'test4');
            });

            it('should not throw an error if console.warn does not exist', function(){
                console.warn = undefined;

                function logger(){
                    jslogger.warn();
                }

                expect(logger).not.toThrow();
            });
        });

        describe('trace', function(){

            var trace;

            beforeEach(function(){
                jslogger.setLogLevel(4);
                trace = console.trace;
            });

            afterEach(function(){
                console.trace = trace;
            });

            it('should call console.trace', function(){
                console.trace = jasmine.createSpy('trace');

                jslogger.trace();

                expect(console.trace).toHaveBeenCalled();
            });

            it('should not throw an error if console.trace does not exist', function(){
                console.trace = undefined;

                function logger(){
                    jslogger.trace();
                }

                expect(logger).not.toThrow();
            });
        });

        describe('debug', function(){
            var debug;

            beforeEach(function(){
                jslogger.setLogLevel(4);
                debug = console.debug;
            });

            afterEach(function(){
                console.debug = debug;
            });

            it('should call console.debug (albeit deprecated)', function(){
                console.debug = jasmine.createSpy('debug');

                jslogger.debug();

                expect(console.debug).toHaveBeenCalled();
            });

            it('should call console.debug with a single argument', function(){
                console.debug = jasmine.createSpy('debug');

                jslogger.debug('test');

                expect(console.debug).toHaveBeenCalledWith('test');
            });

            it('should call console.debug with a single argument', function(){
                console.debug = jasmine.createSpy('debug');

                jslogger.debug('test1', 'test2', 'test3', 'test4');

                expect(console.debug).toHaveBeenCalledWith('test1', 'test2', 'test3', 'test4');
            });

            it('should not throw an error if console.debug does not exist (esp. because it\'s deprecated!)', function(){
                console.debug = undefined;

                function logger(){
                    jslogger.debug();
                }

                expect(logger).not.toThrow();
            });
        });

        describe('setLogLevel', function(){
            var error,
                warn,
                info,
                log,
                debug,
                trace;

            beforeEach(function(){
                error = console.error;
                warn = console.warn;
                info = console.info;
                log = console.log;
                debug = console.debug;
                trace = console.trace;
            });

            afterEach(function(){
                console.error = error;
                console.warn = warn;
                console.info = info;
                console.log = log;
                console.debug = debug;
                console.trace = trace;
            });

            describe('setLogLevel(0)', function(){

                beforeEach(function(){
                    document.cookie = 'test=test';
                    jslogger.setLogLevel(0);
                });

                it('should set log level cookie', function(){
                    expect(document.cookie.match(/logLevel/).length).toBe(1);
                });

                it('SHOULD call console.error if log level is < 1', function(){
                    console.error = jasmine.createSpy('error');
                    jslogger.error();
                    expect(console.error).toHaveBeenCalled();
                });

                it('SHOULD NOT call console.warn if log level is < 1', function(){
                    console.warn = jasmine.createSpy('warn');
                    jslogger.warn();
                    expect(console.warn).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.info if log level is < 1', function(){
                    console.info = jasmine.createSpy('info');
                    jslogger.info();
                    expect(console.info).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.log if log level is < 1', function(){
                    console.log = jasmine.createSpy('log');
                    jslogger.log();
                    expect(console.log).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.debug if log level is < 1', function(){
                    console.debug = jasmine.createSpy('debug');
                    jslogger.debug();
                    expect(console.debug).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.trace if log level is < 1', function(){
                    console.trace = jasmine.createSpy('trace');
                    jslogger.trace();
                    expect(console.trace).not.toHaveBeenCalled();
                });
            });

            describe('setLogLevel(1)', function(){

                beforeEach(function(){
                    document.cookie = 'test=test';
                    jslogger.setLogLevel(1);
                });

                it('should set log level cookie', function(){
                    expect(document.cookie.match(/logLevel/).length).toBe(1);
                });

                it('SHOULD call console.error if log level is < 2', function(){
                    console.error = jasmine.createSpy('error');
                    jslogger.error();
                    expect(console.error).toHaveBeenCalled();
                });

                it('SHOULD call console.warn if log level is < 2', function(){
                    console.warn = jasmine.createSpy('warn');
                    jslogger.warn();
                    expect(console.warn).toHaveBeenCalled();
                });

                it('SHOULD NOT call console.info if log level is < 2', function(){
                    console.info = jasmine.createSpy('info');
                    jslogger.info();
                    expect(console.info).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.log if log level is < 2', function(){
                    console.log = jasmine.createSpy('log');
                    jslogger.log();
                    expect(console.log).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.debug if log level is < 2', function(){
                    console.debug = jasmine.createSpy('debug');
                    jslogger.debug();
                    expect(console.debug).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.trace if log level is < 2', function(){
                    console.trace = jasmine.createSpy('trace');
                    jslogger.trace();
                    expect(console.trace).not.toHaveBeenCalled();
                });
            });

            describe('setLogLevel(2)', function(){

                beforeEach(function(){
                    document.cookie = 'test=test';
                    jslogger.setLogLevel(2);
                });

                it('should set log level cookie', function(){
                    expect(document.cookie.match(/logLevel/).length).toBe(1);
                });

                it('SHOULD call console.error if log level is < 3', function(){
                    console.error = jasmine.createSpy('error');
                    jslogger.error();
                    expect(console.error).toHaveBeenCalled();
                });

                it('SHOULD call console.warn if log level is < 3', function(){
                    console.warn = jasmine.createSpy('warn');
                    jslogger.warn();
                    expect(console.warn).toHaveBeenCalled();
                });

                it('SHOULD call console.info if log level is < 3', function(){
                    console.info = jasmine.createSpy('info');
                    jslogger.info();
                    expect(console.info).toHaveBeenCalled();
                });

                it('SHOULD NOT call console.log if log level is < 3', function(){
                    console.log = jasmine.createSpy('log');
                    jslogger.log();
                    expect(console.log).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.debug if log level is < 3', function(){
                    console.debug = jasmine.createSpy('debug');
                    jslogger.debug();
                    expect(console.debug).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.trace if log level is < 3', function(){
                    console.trace = jasmine.createSpy('trace');
                    jslogger.trace();
                    expect(console.trace).not.toHaveBeenCalled();
                });
            });

            describe('setLogLevel(3)', function(){

                beforeEach(function(){
                    document.cookie = 'test=test';
                    jslogger.setLogLevel(3);
                });

                it('should set log level cookie', function(){
                    expect(document.cookie.match(/logLevel/).length).toBe(1);
                });

                it('SHOULD call console.error if log level is < 4', function(){
                    console.error = jasmine.createSpy('error');
                    jslogger.error();
                    expect(console.error).toHaveBeenCalled();
                });

                it('SHOULD call console.warn if log level is < 4', function(){
                    console.warn = jasmine.createSpy('warn');
                    jslogger.warn();
                    expect(console.warn).toHaveBeenCalled();
                });

                it('SHOULD call console.info if log level is < 4', function(){
                    console.info = jasmine.createSpy('info');
                    jslogger.info();
                    expect(console.info).toHaveBeenCalled();
                });

                it('SHOULD call console.log if log level is < 4', function(){
                    console.log = jasmine.createSpy('log');
                    jslogger.log();
                    expect(console.log).toHaveBeenCalled();
                });

                it('SHOULD NOT call console.debug if log level is < 4', function(){
                    console.debug = jasmine.createSpy('debug');
                    jslogger.debug();
                    expect(console.debug).not.toHaveBeenCalled();
                });

                it('SHOULD NOT call console.trace if log level is < 4', function(){
                    console.trace = jasmine.createSpy('trace');
                    jslogger.trace();
                    expect(console.trace).not.toHaveBeenCalled();
                });
            });

            describe('setLogLevel(4)', function(){

                beforeEach(function(){
                    document.cookie = 'test=test';
                    jslogger.setLogLevel(4);
                });

                it('should set log level cookie', function(){
                    expect(document.cookie.match(/logLevel/).length).toBe(1);
                });

                it('SHOULD call console.error if log level is <= 4', function(){
                    console.error = jasmine.createSpy('error');
                    jslogger.error();
                    expect(console.error).toHaveBeenCalled();
                });

                it('SHOULD call console.warn if log level is <= 4', function(){
                    console.warn = jasmine.createSpy('warn');
                    jslogger.warn();
                    expect(console.warn).toHaveBeenCalled();
                });

                it('SHOULD call console.info if log level is <= 4', function(){
                    console.info = jasmine.createSpy('info');
                    jslogger.info();
                    expect(console.info).toHaveBeenCalled();
                });

                it('SHOULD call console.log if log level is <= 4', function(){
                    console.log = jasmine.createSpy('log');
                    jslogger.log();
                    expect(console.log).toHaveBeenCalled();
                });

                it('SHOULD call console.debug if log level is <= 4', function(){
                    console.debug = jasmine.createSpy('debug');
                    jslogger.debug();
                    expect(console.debug).toHaveBeenCalled();
                });

                it('SHOULD call console.trace if log level is <= 4', function(){
                    console.trace = jasmine.createSpy('trace');
                    jslogger.trace();
                    expect(console.trace).toHaveBeenCalled();
                });
            });
        });

        describe('getLogLevel', function(){

            beforeEach(function(){
                jslogger.setLogLevel(0);
            });

            it('Should return log level', function(){
                jslogger.setLogLevel(1);
                expect(jslogger.getLogLevel()).toBe(1);
            });

        });

    });

})();
