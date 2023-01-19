/*! For license information please see main.3b4970e2.js.LICENSE.txt */
!(function () {
  var A = {
      9850: function (A, B) {
        var Q, g, E;
        (g = []),
          void 0 ===
            (E =
              'function' ===
              typeof (Q = function () {
                return (
                  (function (A) {
                    'use strict';
                    function B() {
                      return new Promise(function (A, B) {
                        var Q =
                          'wss://javascript.info/article/websocket/chat/ws';
                        console.log('[WS]: Start testing'),
                          console.log('[WS]: Connecting to ' + Q);
                        try {
                          var g = new WebSocket(Q);
                          (g.onopen = function (A) {
                            var B = 'test-msg';
                            console.log('[WS]: Connection established'),
                              console.log(
                                '[WS]: Sending data to socket, msg: ' + B,
                              ),
                              g.send(B);
                          }),
                            (g.onmessage = function (B) {
                              console.log(
                                '[WS]: Data received from server: ' + B.data,
                              ),
                                console.log('[WS]: Finish testing - OK'),
                                A();
                            }),
                            (g.onerror = function (A) {
                              console.log('[WS]: ', A.message),
                                console.log('[WS]: Finish testing - ERROR'),
                                B();
                            });
                        } catch (E) {
                          console.log('[WS]: ', E), B();
                        }
                      });
                    }
                    function Q() {
                      return new Promise(function (A, B) {
                        if (
                          (console.log('[WebWorker]: Start testing'),
                          'undefined' !== typeof Worker)
                        ) {
                          console.log('[WebWorker]: Has Web Worker support');
                          try {
                            var Q = new Worker(
                              window.URL.createObjectURL(
                                new Blob([
                                  "onmessage = function(e) {console.log('[WebWorker]: Message received from main script');var workerResult = e.data[0];console.log('[WebWorker]: Posting message back to main script');postMessage(workerResult);}",
                                ]),
                              ),
                            );
                            (Q.onmessage = function (B) {
                              console.log(
                                '[WebWorker]: Message received from worker: ',
                                B.data,
                              ),
                                console.log('[WebWorker]: Finish testing - OK'),
                                A();
                            }),
                              (Q.onerror = function (A) {
                                console.error(
                                  '[WebWorker]: Finish testing - ERROR',
                                ),
                                  B();
                              }),
                              Q.postMessage(['test-msg']);
                          } catch (g) {
                            console.error(
                              '[WebWorker]: Finish testing - ERROR',
                            ),
                              B();
                          }
                        } else console.log('[WebWorker]: No Web Worker support'), B();
                      });
                    }
                    function g() {
                      return new Promise(function (A, B) {
                        console.log('[ORIGN]: Start testing');
                        var Q = window.location.protocol,
                          g = window.location.hostname;
                        'https:' === Q ||
                        'file:' === Q ||
                        ('http:' === Q &&
                          (g.indexOf('localhost') > -1 ||
                            g.indexOf('127.0.0.1') > -1))
                          ? (console.log('[ORIGN]: Secure'),
                            console.log('[ORIGN]: Finish testing - OK'),
                            A())
                          : (console.log('[ORIGN]: Not secure'),
                            console.log('[ORIGN]: Finish testing - ERROR'),
                            B());
                      });
                    }
                    function E() {
                      return new Promise(function (A, B) {
                        console.log('[AUDIO CONTEXT]: Start testing');
                        var Q =
                            navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia ||
                            (navigator.mediaDevices &&
                              navigator.mediaDevices.getUserMedia),
                          g =
                            window.AudioContext ||
                            window.webkitAudioContext ||
                            window.mozAudioContext;
                        Q && g
                          ? (console.log('[AUDIO CONTEXT]: Audio supported'),
                            console.log('[AUDIO CONTEXT]: Finish testing - OK'),
                            A())
                          : (console.log(
                              '[AUDIO CONTEXT]: Audio NOT supported',
                            ),
                            console.log('[AUDIO CONTEXT DETAILS]:', e()),
                            console.log(
                              '[AUDIO CONTEXT]: Finish testing - ERROR',
                            ),
                            B());
                      });
                    }
                    function e() {
                      var A = '';
                      return (
                        (A += 'getUserMedia: '),
                        (A += navigator.getUserMedia ? '1' : '0'),
                        (A += ', '),
                        (A += 'mediaDevices: '),
                        (A += navigator.mediaDevices ? '1' : '0'),
                        (A += ', '),
                        (A += 'mediaDevices.getUserMedia: '),
                        (A +=
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                            ? '1'
                            : '0'),
                        (A += ', '),
                        (A += 'webkitGUM: '),
                        (A += navigator.webkitGetUserMedia ? '1' : '0'),
                        (A += ', '),
                        (A += 'mozGUM: '),
                        (A += navigator.mozGetUserMedia ? '1' : '0'),
                        (A += ', '),
                        (A += 'msGUM: '),
                        (A += navigator.msGetUserMedia ? '1' : '0'),
                        (A += '\n'),
                        (A += 'window: \n'),
                        (A += 'AudioContext: '),
                        (A += window.AudioContext ? '1' : '0'),
                        (A += ', '),
                        (A += 'webkitAC: '),
                        (A += window.webkitAudioContext ? '1' : '0'),
                        (A += ', '),
                        (A += 'mozAC: '),
                        (A += window.mozAudioContext ? '1' : '0'),
                        (A += '\n'),
                        (A += 'userAgent: '),
                        (A += navigator.userAgent)
                      );
                    }
                    function n() {
                      var A = this,
                        B = Object.keys(this);
                      function Q(B) {
                        return A[B]();
                      }
                      return (B = B.filter(function (A) {
                        return 'run' !== A && 'getAudioDebugInfo' !== A;
                      })).reduce(function (A, B) {
                        return A.then(function () {
                          return Q(B);
                        });
                      }, Promise.resolve());
                    }
                    window.alanDiagnostic = {
                      testSocket: B,
                      testWorker: Q,
                      testOrignSecure: g,
                      testAudioContext: E,
                      getAudioDebugInfo: e,
                      run: n,
                    };
                  })(),
                  (function (A) {
                    'use strict';
                    var B = 'studio.alan.app',
                      Q = {
                        baseURL:
                          'wss://' +
                          (0 === B.indexOf('$') || '' === B
                            ? window.location.hostname
                            : B),
                        codec: 'opus',
                        version: '2.0.45',
                        platform: 'web',
                      };
                    function g() {
                      var A = this;
                      (this._worker = new Worker(
                        window.URL.createObjectURL(
                          new Blob([
                            "(function(ns) {\n    'use strict';\n\n    var SENT_TS    = 1;\n    var REMOTE_TS  = 2;\n    var TIMESTAMP  = 3;\n    var AUDIO_DATA = 4;\n    var JSON_DATA  = 5;\n\n    AlanFrame.fields = [\n        propUint64(SENT_TS,   'sentTs'),\n        propUint64(REMOTE_TS, 'remoteTs'),\n        propUint64(TIMESTAMP, 'timestamp'),\n        propBytes(AUDIO_DATA, 'audioData'),\n        propJson(JSON_DATA,   'jsonData'),\n    ];\n\n    function AlanFrameProp(type, name, sizeF, readF, writeF) {\n        this.type   = type;\n        this.name   = name;\n        this.sizeF  = sizeF;\n        this.writeF = writeF;\n        this.readF  = readF;\n    }\n\n    function fixedSize(size) {\n        return function() {\n            return size;\n        }\n    }\n\n    function bufferSize(buffer) {\n        return 4 + byteLength(buffer);\n    }\n\n    function writeUIntN(uint8array, value, nBytes, offset) {\n        for (var i = 0; i < nBytes; i++ ) {\n            uint8array[offset + i] = 0xFF & value;\n            value /= 256;\n        }\n    }\n\n    function readUIntN(uint8array, nBytes, offset) {\n        var r = 0;\n        for (var i = nBytes - 1; i >= 0; i-- ) {\n            r *= 256;\n            r += 0xFF & uint8array[offset + i];\n        }\n        return r;\n    }\n\n    function writeUInt64(uint8array, value, offset) {\n        writeUIntN(uint8array, value, 8, offset);\n    }\n\n    function readUInt64(uint8array, offset) {\n        return readUIntN(uint8array, 8, offset);\n    }\n\n    function writeUInt32(uint8array, value, offset) {\n        writeUIntN(uint8array, value, 4, offset);\n    }\n\n    function readUInt32(uint8array, offset) {\n        return readUIntN(uint8array, 4, offset);\n    }\n\n    function writeBuffer(uint8array, buffer, offset) {\n        buffer = toUint8(buffer);\n        writeUInt32(uint8array, buffer.length, offset);\n        for (var i = 0; i < buffer.length; i++ ) {\n            uint8array[offset + 4 + i] = buffer[i];\n        }\n    }\n\n    function readBuffer(uint8array, offset) {\n        var size = readUInt32(uint8array, offset);\n        if (size > 1024 * 1024) {\n            throw new Error('buffer too big');\n        }\n        return uint8array.subarray(offset + 4, offset + 4 + size);\n    }\n\n    function readUTF8(uint8array, offset) {\n        var size = readUInt32(uint8array, offset);\n        if (size > 1024 * 1024) {\n            throw new Error('string too big');\n        }\n        return String.fromCharCode.apply(null, uint8array.slice(offset + 4, offset + 4 + size));\n    }\n\n    function writeUTF8(uint8array, string, offset) {\n        writeUInt32(uint8array, string.length, offset);\n        for (var i = 0; i < string.length; i++ ) {\n            uint8array[offset + 4 + i] = string.charCodeAt(i);\n        }\n    }\n\n    function sizeUTF8(string) {\n        return 4 + string.length;\n    }\n\n    function propUint32(type, name) {\n        return new AlanFrameProp(type, name, fixedSize(4), readUInt32, writeUInt32);\n    }\n\n    function propUint64(type, name) {\n        return new AlanFrameProp(type, name, fixedSize(8), readUInt64, writeUInt64);\n    }\n\n    function propBytes(type, name) {\n        return new AlanFrameProp(type, name, bufferSize, readBuffer, writeBuffer);\n    }\n\n    function propJson(type, name) {\n        return new AlanFrameProp(type, name, sizeUTF8, readUTF8, writeUTF8);\n    }\n\n    AlanFrame.fieldByType = function(type) {\n        for (var i = 0; i < AlanFrame.fields.length; i++ ) {\n            var frame = AlanFrame.fields[i];\n            if (frame.type === type) {\n                return frame;\n            }\n        }\n        throw new Error('invalid field: ' + type);\n    };\n\n    function AlanFrame() {\n        this.version = 1;\n    }\n\n    AlanFrame.prototype.write = function() {\n        var result = new Uint8Array(this.writeSize());\n        var offset = 1;\n        result[0]  = 1;\n        for (var i = 0; i < AlanFrame.fields.length; i++ ) {\n            var field = AlanFrame.fields[i];\n            var value = this[field.name];\n            if (value) {\n                result[offset++] = field.type;\n                field.writeF(result, value, offset);\n                offset += field.sizeF(value);\n            }\n        }\n        return result.buffer;\n    };\n\n    /**\n     * @returns UInt8Array\n     */\n    AlanFrame.prototype.writeSize = function() {\n        var size = 1;\n        for (var i = 0; i < AlanFrame.fields.length; i++ ) {\n            var field = AlanFrame.fields[i];\n            var value = this[field.name];\n            if (value) {\n                size += 1 + field.sizeF(value);\n            }\n        }\n        return size;\n    };\n\n    AlanFrame.prototype.toString = function() {\n        var first = true, str = '';\n        for (var k in this) {\n            if (this.hasOwnProperty(k)) {\n                if (first) {\n                    str += k + ' = ';\n                    first = false;\n                } else {\n                    str += ', ' + k + ' = ';\n                }\n                var v = this[k];\n                if (typeof(v) === 'object') {\n                    str += 'bytes[' + byteLength(v) + ']';\n                } else {\n                    str += v;\n                }\n            }\n        }\n        return str;\n    };\n\n    function byteLength(b) {\n        if (b instanceof Uint8Array) {\n            return b.length;\n        }\n        if (b instanceof ArrayBuffer) {\n            return b.byteLength;\n        }\n    }\n\n    function toArrayBuffer(buffer) {\n        if (buffer instanceof ArrayBuffer) {\n            return buffer;\n        }\n        return buffer.buffer;\n    }\n\n    function toUint8(buffer) {\n        if (buffer instanceof Uint8Array) {\n            return buffer;\n        }\n        if (buffer instanceof ArrayBuffer) {\n            return new Uint8Array(buffer);\n        }\n        throw new Error('invalid buffer type');\n    }\n\n    function parse(uint8array) {\n        uint8array = toUint8(uint8array);\n        var r = new AlanFrame();\n        var offset = 0;\n        r.version = uint8array[offset++];\n        while (offset < uint8array.length) {\n            var frame = AlanFrame.fieldByType(uint8array[offset++]);\n            r[frame.name] = frame.readF(uint8array, offset);\n            offset += frame.sizeF(r[frame.name]);\n        }\n        return r;\n    }\n\n    ns.create = function() {\n        return new AlanFrame();\n    };\n\n    ns.parse = parse;\n\n})(typeof(window)            !== 'undefined' ? (function() {window.alanFrame = {}; return window.alanFrame; })() :\n   typeof(WorkerGlobalScope) !== 'undefined' ? (function() {alanFrame = {}; return alanFrame; })() :\n   exports);\n\n\n'use strict';\n\nvar ALAN_OFF       = 'off';\nvar ALAN_SPEAKING  = 'speaking';\nvar ALAN_LISTENING = 'listening';\n\nfunction ConnectionImpl(config, auth, mode) {\n    var _this = this;\n    this._config = config;\n    this._auth = auth;\n    this._mode = mode;\n    this._projectId = config.projectId;\n    this._url = config.url;\n    this._connected = false;\n    this._authorized = false;\n    this._dialogId = null;\n    this._callId = 1;\n    this._callSent = {};\n    this._callWait = [];\n    this._failed = false;\n    this._closed = false;\n    this._reconnectTimeout = 100;\n    this._cleanups = [];\n    this._format = null;\n    this._formatSent = false;\n    this._frameQueue = [];\n    this._remoteSentTs = 0;\n    this._remoteRecvTs = 0;\n    this._rtt = 25;\n    this._rttAlpha = 1./16;\n    this._alanState = ALAN_OFF;\n    this._sendTimer = setInterval(_this._flushQueue.bind(_this), 50);\n    this._visualState = {};\n    this._addCleanup(function() {clearInterval(_this._sendTimer);});\n    this._connect();\n    \n}\n\nConnectionImpl.prototype._addCleanup = function(f) {\n    this._cleanups.push(f);\n};\n\nConnectionImpl.prototype._onConnectStatus = function(s) {\n    this._fire('connectStatus', s);\n};\n\nConnectionImpl.prototype._fire = function(event, object) {\n    if (event === 'options') {\n        if (object.versions) {\n            object.versions['alanbase:web'] = this._config.version;\n        }\n    }\n    postMessage(['fireEvent', event, object]);\n};\n\nConnectionImpl.prototype._connect = function() {\n    var _this = this;\n    if (this._socket) {\n        console.error('socket is already connected');\n        return;\n    }\n   this._socket = new WebSocket(this._url);\n    this._socket.binaryType = 'arraybuffer';\n    this._socket.onopen = function(e) {\n       _this._connected = true;\n        _this._reconnectTimeout = 100;\n        _this._fire('connection', {status: 'connected'});\n        if (_this._auth) {\n            _this._fire('connection', {status: 'authorizing'});\n            _this._callAuth();\n        } else {\n            _this._callWait.forEach(function(c) {  _this._sendCall(c); });\n            _this._callWait = [];\n        }\n    };\n    this._socket.onmessage = function(msg) {\n        if (msg.data instanceof ArrayBuffer) {\n            var f = alanFrame.parse(msg.data);\n            if (f.sentTs > 0) {\n                _this._remoteSentTs = f.sentTs;\n                _this._remoteRecvTs = Date.now();\n            } else {\n                _this._remoteSentTs = null;\n                _this._remoteRecvTs = null;\n            }\n            var rtt = 0;\n            if (f.remoteTs) {\n                rtt = Date.now() - f.remoteTs;\n            }\n            _this._rtt = _this._rttAlpha * rtt  + (1 - _this._rttAlpha) * _this._rtt;\n            var uint8 = new Uint8Array(f.audioData);\n            var frame = [];\n            var batch = 10000;\n            for (var offset = 0; offset < uint8.byteLength; offset += batch) {\n                var b = uint8.subarray(offset, Math.min(uint8.byteLength, offset + batch));\n                let a = String.fromCharCode.apply(null, b);\n                frame.push(a);\n            }\n            frame = frame.join('');\n            postMessage(['alanAudio', 'playFrame', frame]);\n        } else if (typeof(msg.data) === 'string') {\n            msg = JSON.parse(msg.data);\n            if (msg.i) {\n                var c = _this._callSent[msg.i];\n                delete _this._callSent[msg.i];\n                if (c && c.callback) {\n                    c.callback(msg.e, msg.r);\n                }\n            } else if (msg.e) {\n                if (msg.e === 'text') {\n                    postMessage(['alanAudio', 'playText', msg.p]);\n                } else if (msg.e === 'showPopup') {\n                    postMessage(['alanAudio', 'showPopup', msg.p]);\n                } else if (msg.e === 'command') {\n                    postMessage(['alanAudio', 'playCommand', msg.p]);\n                } else if (msg.e === 'inactivity') {\n                    postMessage(['alanAudio', 'stop']);\n                } else {\n                    _this._fire(msg.e, msg.p);\n                }\n            }\n        } else {\n            console.error('invalid message type');\n        }\n    };\n    this._socket.onerror = function(evt) {\n        console.error('Alan: connection closed due to error: ', evt);\n    };\n    this._socket.onclose = function(evt) {\n        console.info('Alan: connection closed');\n        _this._connected = false;\n        _this._authorized = false;\n        _this._socket = null;\n        _this._onConnectStatus('disconnected');\n        if (!_this._failed && _this._reconnectTimeout && !_this._closed) {\n            console.log('Alan: reconnecting in %s ms.', _this._reconnectTimeout);\n            _this._reConnect = setTimeout(_this._connect.bind(_this), _this._reconnectTimeout);\n            if (_this._reconnectTimeout < 3000) {\n                _this._reconnectTimeout *= 2;\n            } else {\n                _this._reconnectTimeout += 500;\n            }\n            _this._reconnectTimeout = Math.min(7000, _this._reconnectTimeout);\n        }\n    };\n    this._addCleanup(function() {\n        if (this._socket) {\n            this._socket.close();\n            this._socket = null;\n        }\n    });\n};\n\nConnectionImpl.prototype._callAuth = function() {\n    var _this = this;\n    var callback = function(err, r) {\n        if (!err && r.status === 'authorized') {\n            _this._authorized = true;\n            _this._formatSent = false;\n            if (r.dialogId) {\n                postMessage(['setDialogId', r.dialogId]);\n                _this._dialogId = r.dialogId;\n            }\n            _this._onAuthorized();\n            _this._onConnectStatus('authorized');\n        } else if (err === 'auth-failed') {\n            _this._onConnectStatus('auth-failed');\n            if (_this._socket) {\n                _this._socket.close();\n                _this._socket = null;\n                _this._failed = true;\n            }\n        } else {\n            _this._onConnectStatus('invalid-auth-response');\n            console.log('Alan: invalid auth response', err, r);\n        }\n    };\n    var authParam = this._auth;\n    authParam.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;\n    if (this._dialogId) {\n        authParam.dialogId = this._dialogId;\n    }\n    authParam.mode = this._mode;\n    this._sendCall({cid: this._callId++, method: '_auth_', callback: callback, param: authParam});\n    return this;\n};\n\nConnectionImpl.prototype._sendCall = function(call) {\n    this._sendFormatIfNeeded(false);\n    this._socket.send(JSON.stringify({i: call.cid, m: call.method, p: call.param}));\n    if (call.callback) {\n        this._callSent[call.cid] = call;\n    }\n};\n\nConnectionImpl.prototype._onAuthorized = function() {\n    var _this = this;\n    this._callWait.forEach(function(c) {\n        _this._sendCall(c);\n    });\n    this._callWait = [];\n};\n\nConnectionImpl.prototype.close = function() {\n    for (var i = 0; i < this._cleanups.length; i++ ) {\n        this._cleanups[i]();\n    }\n    this._cleanups = [];\n    this._closed = true;\n    \n    if (this._socket && (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING)) {\n        this._socket.close();\n        this._socket = null;\n    }\n    console.log('Alan: closed connection to: ' + getConnectionDetails(this._url));\n    //close(); TODO: delete it!\n};\n\nConnectionImpl.prototype.call = function(cid, method, param) {\n    var call = {cid: cid, method: method, param: param, callback: function(err, obj) {\n        if (cid) {\n            postMessage(['callback', cid, err, obj]);\n        }\n    }};\n    if (this._authorized || this._connected && !this._auth) {\n        this._sendCall(call);\n    } else {\n        this._callWait.push(call);\n    }\n};\n\nConnectionImpl.prototype.setVisual = function(state) {\n    this._visualState = state;\n    this.call(null, '_visual_', state);\n};\n\nConnectionImpl.prototype._sendFrame = function(frame) {\n    if (!this._socket) {\n        console.error('sendFrame to closed socket');\n        return;\n    }\n    frame.sentTs = Date.now();\n    if (this._remoteSentTs > 0 && this._remoteRecvTs > 0) {\n        frame.remoteTs = this._remoteSentTs + Date.now() - this._remoteRecvTs;\n    }\n    this._socket.send(frame.write());\n};\n\nConnectionImpl.prototype._listen = function() {\n    var f = alanFrame.create();\n    f.jsonData = JSON.stringify({signal: 'listen'});\n    this._frameQueue.push(f);\n    this._alanState = ALAN_LISTENING;\n};\n\nConnectionImpl.prototype._stopListen = function() {\n    var f = alanFrame.create();\n    f.jsonData = JSON.stringify({signal: 'stopListen'});\n    this._frameQueue.push(f);\n    this._alanState = ALAN_OFF;\n};\n\nConnectionImpl.prototype._onAudioFormat = function(format) {\n    this._formatSent = false;\n    this._format = format;\n};\n\nConnectionImpl.prototype._onMicFrame = function(sampleRate, frame) {\n    if (this._alanState === ALAN_SPEAKING) {\n        return;\n    }\n    if (this._alanState === ALAN_OFF) {\n        this._listen();\n    }\n    if (this._alanState !== ALAN_LISTENING) {\n        console.error('invalid alan state: ' + this._alanState);\n        return;\n    }\n    this._sendFormatIfNeeded(true);\n    var f = alanFrame.create();\n    f.audioData = frame;\n    this._frameQueue.push(f);\n};\n\nConnectionImpl.prototype._sendFormatIfNeeded = function(inQueue) {\n    if (!this._format || this._formatSent) {\n        return;\n    }\n    this._formatSent = true;\n    var f = alanFrame.create();\n    f.jsonData = JSON.stringify({format: this._format});\n    if (inQueue) {\n        this._frameQueue.push(f);\n    } else {\n        this._sendFrame(f);\n    }\n};\n\nConnectionImpl.prototype._flushQueue = function() {\n    if (!this._socket || !this._connected) {\n        var d = 0;\n        while (this._frameQueue.length > 100 && !this._frameQueue[0].jsonData) {\n            this._frameQueue.shift();\n            d++;\n        }\n        if (d > 0) {\n            console.error('dropped: %s, frames', d);\n        }\n        return;\n    }\n    while (this._frameQueue.length > 0 && this._socket && this._socket.bufferedAmount < 64 * 1024) {\n        this._sendFrame(this._frameQueue.shift());\n    }\n};\n\nfunction getConnectionDetails(url){\n    var urlParts = url.split('/');\n    var projectId = urlParts[4];\n    var environment = urlParts[5];\n    var host = urlParts[2];\n\n    if (projectId && environment && host) {\n        return ' (ProjectID: ' + projectId + ', environment: ' + environment + ', host: ' + host + ')';\n    }\n\n    return url;\n}\n\nfunction connectProject(config, auth, mode) {\n    var c = new ConnectionImpl(config, auth, mode);\n    c.onAudioEvent = function(event, arg1, arg2) {\n        if (event === 'format') {\n            c._onAudioFormat(arg1);\n        } else if (event === 'frame') {\n            c._onMicFrame(arg1, arg2);\n        } else if (event === 'micStop' || event === 'playStart') {\n            c._stopListen();\n        } else {\n            console.error('unknown audio event: ' + event, arg1, arg2);\n        }\n    };\n    return c;\n}\n\nvar factories = {\n    connectProject: connectProject,\n};\n\nvar currentConnect = null;\n\nonmessage = function(e) {\n    var name = e.data[0];\n    try {\n        if (!currentConnect) {\n            currentConnect = factories[name].apply(null, e.data.slice(1, e.data.length));\n        } else {\n            currentConnect[name].apply(currentConnect, e.data.slice(1, e.data.length));\n        }\n    } catch(e) {\n        console.error('error calling: ' + name, e);\n    }\n};\n",
                          ]),
                          { type: 'text/javascript' },
                        ),
                      )),
                        (this._worker.onmessage = function (B) {
                          if ('fireEvent' !== B.data[0]) {
                            if ('alanAudio' === B.data[0]) {
                              if ('playText' === B.data[1])
                                return void alanAudio.playText(B.data[2]);
                              if (
                                'playAudio' === B.data[1] ||
                                'playFrame' === B.data[1]
                              )
                                return void alanAudio.playAudio(B.data[2]);
                              if (
                                'playEvent' === B.data[1] ||
                                'playCommand' === B.data[1]
                              )
                                return void alanAudio.playEvent(B.data[2]);
                              if ('showPopup' === B.data[1])
                                return void alanAudio.showPopup(B.data[2]);
                              if ('stop' === B.data[1])
                                return void alanAudio.stop();
                            }
                            if ('callback' === B.data[0])
                              return (
                                A._callback[B.data[1]](B.data[2], B.data[3]),
                                void delete A._callback[B.data[1]]
                              );
                            'setDialogId' !== B.data[0]
                              ? console.error('invalid event', B.data)
                              : (A._dialogId = B.data[1]);
                          } else A._fire(B.data[1], B.data[2]);
                        }),
                        (this._worker.onerror = function (A) {
                          console.error(
                            'error in worker: ' +
                              A.filename +
                              ':' +
                              A.lineno +
                              ' - ' +
                              A.message,
                          );
                        }),
                        (this._handlers = {}),
                        (this._cleanups = []),
                        (this._callback = {}),
                        (this._callIds = 1),
                        (this._config = {});
                    }
                    function E(A, B) {
                      var g = {};
                      for (var E in B) g[E] = B[E];
                      for (var E in A) g[E] = A[E];
                      return (
                        !B || (B && null == B.platform)
                          ? (g.platform = Q.platform)
                          : (g.platform = Q.platform + ':' + B.platform),
                        !B || (B && null == B.platformVersion)
                          ? (g.platformVersion = Q.version)
                          : (g.platformVersion =
                              Q.version + ':' + B.platformVersion),
                        B && B.appName && (g.appName = B.appName),
                        g
                      );
                    }
                    function e(A) {
                      return A.match(/^[A-Z0-9]{64}\/(prod|stage|testing)$/gi);
                    }
                    function n(A, B, n, t, C) {
                      var I = new g();
                      if (
                        (n && (Q.baseURL = 'wss://' + n),
                        (I._config.projectId = A),
                        (I._config.codec = Q.codec),
                        (I._config.version = Q.version),
                        (I._config.url = Q.baseURL + '/ws_project/' + A),
                        !e(A))
                      )
                        throw new Error('Wrong projectId was provided');
                      function o(A, B) {
                        alanAudio.on(A, B),
                          I._addCleanup(function () {
                            alanAudio.off(A, B);
                          });
                      }
                      function i(A) {
                        function B(B, Q) {
                          ('frame' === A && alanAudio.isPlaying()) ||
                            I._worker.postMessage(['onAudioEvent', A, B, Q]);
                        }
                        o(A, B);
                      }
                      function a(A) {
                        function B(B) {
                          I._fire(A, B);
                        }
                        o(A, B);
                      }
                      return (
                        I._worker.postMessage([
                          'connectProject',
                          I._config,
                          E(B, C),
                          t,
                        ]),
                        i('frame'),
                        i('micStop'),
                        i('playStart'),
                        a('text'),
                        a('command'),
                        I._worker.postMessage([
                          'onAudioEvent',
                          'format',
                          alanAudio.getFormat(),
                        ]),
                        I
                      );
                    }
                    function t(A, B, n, t, C) {
                      var I = new g();
                      if (
                        (n && (Q.baseURL = 'wss://' + n),
                        (I._config.projectId = A),
                        (I._config.codec = Q.codec),
                        (I._config.version = Q.version),
                        (I._config.url = Q.baseURL + '/ws_project/' + A),
                        !e(A))
                      )
                        throw new Error('Wrong projectId was provided');
                      function o(A, B) {
                        alanAudio.on(A, B),
                          I._addCleanup(function () {
                            alanAudio.off(A, B);
                          });
                      }
                      function i(A) {
                        function B(B, Q) {
                          ('frame' === A && alanAudio.isPlaying()) ||
                            I._worker.postMessage(['onAudioEvent', A, B, Q]);
                        }
                        o(A, B);
                      }
                      function a(A) {
                        function B(B) {
                          I._fire(A, B);
                        }
                        o(A, B);
                      }
                      return (
                        I._worker.postMessage([
                          'connectProject',
                          I._config,
                          E(B, C),
                          t,
                        ]),
                        i('frame'),
                        i('micStop'),
                        i('playStart'),
                        a('text'),
                        a('command'),
                        I
                      );
                    }
                    function C(A, B) {
                      var E = new g();
                      return (
                        B && (Q.baseURL = 'wss://' + B),
                        (E._config.version = Q.version),
                        (E._config.url = Q.baseURL + '/ws_tutor'),
                        E._worker.postMessage(['connectProject', E._config, A]),
                        E
                      );
                    }
                    (g.prototype.on = function (A, B) {
                      var Q = this._handlers[A];
                      Q || ((Q = []), (this._handlers[A] = Q)), Q.push(B);
                    }),
                      (g.prototype.off = function (A, B) {
                        var Q = this._handlers[A];
                        if (Q) {
                          var g = Q.indexOf(B);
                          g >= 0 && Q.splice(g, 1);
                        }
                      }),
                      (g.prototype.getSettings = function () {
                        return {
                          server: Q.baseURL,
                          projectId: this._config.projectId,
                          dialogId: this._dialogId,
                        };
                      }),
                      (g.prototype.setVisual = function (A) {
                        this._worker.postMessage(['setVisual', A]);
                      }),
                      (g.prototype.call = function (A, B, Q) {
                        var g = null;
                        Q && ((g = this._callIds++), (this._callback[g] = Q)),
                          this._worker.postMessage(['call', g, A, B]);
                      }),
                      (g.prototype.close = function () {
                        console.log('closing connection to: ' + this._url),
                          this._cleanups.forEach(function (A) {
                            A();
                          }),
                          this._worker.postMessage(['close']),
                          this._worker.terminate();
                      }),
                      (g.prototype._fire = function (A, B) {
                        var Q = this._handlers[A];
                        if (Q) for (var g = 0; g < Q.length; g++) Q[g](B);
                      }),
                      (g.prototype._addCleanup = function (A) {
                        this._cleanups.push(A);
                      }),
                      (A.alanSDKVersion = Q.version),
                      (A.alan = {
                        sdkVersion: Q.version,
                        diagnostic: A.alanDiagnostic,
                        projectTest: t,
                        project: n,
                        tutor: C,
                      });
                  })(window),
                  (function (A) {
                    'use strict';
                    var B = 'playIdle',
                      Q = 'playActive',
                      g = 'playStopped',
                      E = 'micIdle',
                      e = 'micActive',
                      n = 'micStopped',
                      t = 'audioRunning',
                      C = {
                        bufferLength: 4096,
                        sampleRate: 16e3,
                        encoderApplication: 2048,
                        encodePCM: !1,
                        micTimeout: 4e3,
                      },
                      I = new Worker(
                        window.URL.createObjectURL(
                          new Blob([
                          ]),
                          { type: 'text/javascript' },
                        ),
                      ),
                      o = {},
                      i = n,
                      a = g,
                      w = [],
                      r = null,
                      c = null,
                      s = window.AudioContext || window.webkitAudioContext,
                      l = null,
                      F = !1,
                      D = !document.documentMode && !!window.StyleMedia,
                      U =
                        /Chrome/.test(navigator.userAgent) &&
                        /Google Inc/.test(navigator.vendor);
                    (c = D || U ? new s({ sampleRate: C.sampleRate }) : new s())
                      .resume()
                      .then(function () {
                        return b(t);
                      });
                    var u = null,
                      d = null,
                      M = c.createGain(),
                      f = c.createScriptProcessor(C.bufferLength, 1, 1);
                    (f.onaudioprocess = function (A) {
                      return R(A.inputBuffer);
                    }),
                      f.connect(c.destination),
                      I.start && I.start();
                    var G = function A(B) {
                      var Q = B.data;
                      switch (Q.message) {
                        case 'ready':
                          console.log('Alan: audio worker initialized');
                          break;
                        case 'page':
                          b('frame', C.sampleRate, Q.page);
                          break;
                        case 'done':
                          I.removeEventListener('message', A);
                          break;
                        case 'print':
                          console.log('AUDIO-WORKER', Q.text);
                      }
                    };
                    function h() {
                      return d
                        ? Promise.resolve(d)
                        : navigator.mediaDevices
                            .getUserMedia({ audio: !0 })
                            .then(function (A) {
                              b('micAllowed'),
                                (u = A),
                                (d = c.createMediaStreamSource(A)).connect(M),
                                M.connect(f);
                            });
                    }
                    function R(A) {
                      if (i === e && a !== Q && !F) {
                        var B = [A.getChannelData(0)];
                        I.postMessage({ command: 'encode', buffers: B });
                      }
                    }
                    function Y() {
                      return (
                        r ||
                        ((r = document.createElement('audio')).addEventListener(
                          'ended',
                          function () {
                            (a = B), p(!0);
                          },
                        ),
                        document.body.appendChild(r),
                        r.setAttribute('autoplay', 'true'),
                        r)
                      );
                    }
                    function p(A) {
                      if (
                        'suspended' !== c.state &&
                        (A && !w.length && N(), w.length && a !== Q)
                      ) {
                        for (; w.length && a !== Q; ) {
                          var g = w.shift();
                          g.event
                            ? b('command', g.event)
                            : g.text
                            ? b('text', g.text)
                            : g.popup
                            ? b('popup', g.popup)
                            : g.audio
                            ? a === B &&
                              ((a = Q),
                              b('playStart'),
                              Y().setAttribute('src', g.audio))
                            : console.error('invalid queue item');
                        }
                        A && a !== Q && N();
                      }
                    }
                    function N() {
                      b('playStop');
                    }
                    function b(A, B, Q) {
                      var g = o[A];
                      if (g) for (var E = 0; E < g.length; E++) g[E](B, Q);
                    }
                    I.addEventListener('message', G),
                      I.postMessage({
                        command: 'init',
                        originalSampleRate: c.sampleRate,
                        encoderSampleRate: C.sampleRate,
                        encoderApplication: C.encoderApplication,
                        encodePCM: C.encodePCM,
                      }),
                      (A.getFormat = function () {
                        return C.encodePCM
                          ? {
                              send: { codec: 'pcm_f32le', sampleRate: 16e3 },
                              recv: { codec: 'mp3;base64', sampleRate: 16e3 },
                            }
                          : {
                              send: { codec: 'opus', sampleRate: 16e3 },
                              recv: { codec: 'mp3;base64', sampleRate: 16e3 },
                            };
                      }),
                      (A.isAudioRunning = function () {
                        return c && 'running' === c.state;
                      }),
                      (A.isPlaying = function () {
                        return a === Q;
                      }),
                      (A.playText = function (A) {
                        c.resume().then(function () {
                          w.push({ text: A }), p();
                        });
                      }),
                      (A.playCommand = function (A) {
                        c.resume().then(function () {
                          w.push({ event: A }), p();
                        });
                      }),
                      (A.showPopup = function (A) {
                        A.popup.force
                          ? b('popup', A)
                          : c.resume().then(function () {
                              w.push({ popup: A }), p();
                            });
                      }),
                      (A.playEvent = function (B) {
                        A.playCommand(B);
                      }),
                      (A.playAudio = function (A) {
                        c.resume().then(function () {
                          w.push({ audio: A }), p();
                        });
                      }),
                      (A.on = function (A, B) {
                        var Q = o[A];
                        null == Q ? (o[A] = [B]) : Q.push(B);
                      }),
                      (A.off = function (A, B) {
                        var Q = o[A];
                        if (Q) {
                          var g = Q.indexOf(B);
                          g >= 0 && Q.splice(g, 1);
                        }
                      }),
                      (A.resumeAudioCtx = function () {
                        c.resume();
                      });
                    var m = !1;
                    function y(A) {
                      m = A;
                    }
                    function J() {
                      console.log('stopping the mic.'),
                        (i = n),
                        d && (d.disconnect(), (d = null)),
                        M.disconnect(),
                        u &&
                          (u.getTracks
                            ? u.getTracks().forEach(function (A) {
                                return A.stop();
                              })
                            : u.stop(),
                          (u = null));
                    }
                    (A.isMicAllowed = function () {
                      return m;
                    }),
                      (A.start = function (A) {
                        l && (clearTimeout(l), (l = null)),
                          Y().setAttribute('src', ''),
                          (a = B),
                          h()
                            .then(function () {
                              (i = e), b('micStart');
                            })
                            .then(function () {
                              y(!0), c.resume();
                            })
                            .catch(function (A) {
                              b('micFail', A);
                            }),
                          A && (A(), (A = null));
                      }),
                      (A.stop = function () {
                        d && (i = E),
                          l && (clearTimeout(l), (l = null)),
                          (l = setTimeout(J, C.micTimeout)),
                          b('micStop'),
                          (a = g),
                          (w = []),
                          r && (r.pause(), (r.currentTime = 0), (r.src = ''));
                      }),
                      (A.skipExternalSounds = function (A) {
                        F = A;
                      });
                  })(
                    'undefined' !== typeof window
                      ? ((window.alanAudio = {}), window.alanAudio)
                      : B,
                  ),
                  (function (A) {
                    var B = '1.8.34';
                    window.alanBtn &&
                      console.warn(
                        'Alan: the Alan Button source code has already added (v.' +
                          B +
                          ')',
                      );
                    var Q,
                      g,
                      E = 'Alan voice assistant',
                      e = null,
                      n = null,
                      t = !1;
                    try {
                      localStorage.getItem('test'), (t = !0);
                    } catch (r) {
                      t = !1;
                    }
                    var C = !1;
                    try {
                      sessionStorage.getItem('test'), (C = !0);
                    } catch (r) {
                      C = !1;
                    }
                    function I(A) {
                      return A ? '1' : '0';
                    }
                    function o() {
                      return '\n        Debug Info:\n        alanBtn: v.'
                        .concat(B, '\n        alanSDK: v.')
                        .concat(window.alanSDKVersion, '\n        projectId: ')
                        .concat(e || 'unknown', '\n        deviceId: ')
                        .concat(
                          i(),
                          '\n        navigator: \n        getUserMedia: ',
                        )
                        .concat(
                          I(navigator.getUserMedia),
                          ', \n        mediaDevices: ',
                        )
                        .concat(
                          I(navigator.mediaDevices),
                          ', \n        mediaDevices.getUserMedia: ',
                        )
                        .concat(
                          I(
                            navigator.mediaDevices &&
                              navigator.mediaDevices.getUserMedia,
                          ),
                          ',\n        webkitGUM: ',
                        )
                        .concat(
                          I(navigator.webkitGetUserMedia),
                          ',\n        mozGUM: ',
                        )
                        .concat(
                          I(navigator.mozGetUserMedia),
                          ',\n        msGUM: ',
                        )
                        .concat(
                          I(navigator.msGetUserMedia),
                          ',\n        window:\n        AudioContext: ',
                        )
                        .concat(I(window.AudioContext), ',\n        webkitAC: ')
                        .concat(
                          I(window.webkitAudioContext),
                          ',\n        mozAC: ',
                        )
                        .concat(
                          I(window.mozAudioContext),
                          ',\n        userAgent: ',
                        )
                        .concat(navigator.userAgent, '\n        ');
                    }
                    function i() {
                      var A = 'alan-btn-uuid-' + e;
                      return (
                        t && (Q = localStorage.getItem(A)),
                        Q || ((Q = a()), t && localStorage.setItem(A, Q)),
                        Q
                      );
                    }
                    function a() {
                      function A() {
                        return Math.floor(65536 * (1 + Math.random()))
                          .toString(16)
                          .substring(1);
                      }
                      return (
                        A() +
                        A() +
                        '-' +
                        A() +
                        '-' +
                        A() +
                        '-' +
                        A() +
                        '-' +
                        A() +
                        A() +
                        A()
                      );
                    }
                    function w(A) {
                      var Q,
                        I = !1,
                        w = !1,
                        c = !0,
                        s = !1,
                        l = !1,
                        F = !1,
                        D = !1;
                      if (
                        ('tutor' === (A = A || {}).mode
                          ? ((Q = 'tutor'), (s = !0))
                          : (Q = 'demo' === A.mode ? 'demo' : 'component'),
                        console.log('Alan: v.' + B),
                        window.tutorProject && !MB() && g)
                      ) {
                        if (e === A.key) return g;
                        throw new Error(
                          'The Alan Button instance has already been created. There cannot be two Alan Button instances created at the same time connected to the different projects.',
                        );
                      }
                      function U() {
                        uA.resumeAudioCtx(),
                          document.removeEventListener('click', U);
                      }
                      function u(A, B) {
                        d(B ? { name: A, value: B } : { name: A });
                      }
                      function d(A) {
                        window.tutorProject
                          ? window.tutorProject.call('clientEvent', A)
                          : setTimeout(function () {
                              return d(A);
                            }, 3e3);
                      }
                      (g = {
                        version: B,
                        setVisualState: function (A) {
                          I ||
                            (window.tutorProject &&
                              window.tutorProject.setVisual(A));
                        },
                        callProjectApi: function (A, B, Q) {
                          var g = 'script::';
                          if (!I) {
                            if (!A)
                              throw new Error(
                                'Function name for callProjectApi must be provided',
                              );
                            window.tutorProject &&
                              (0 === A.indexOf(g)
                                ? window.tutorProject.call(A, B, Q)
                                : window.tutorProject.call(g + A, B, Q));
                          }
                        },
                        playText: function (A) {
                          I ||
                            (window.tutorProject &&
                              window.tutorProject.call('play', { text: A }));
                        },
                        playCommand: function (A) {
                          I || uA.playCommand({ data: A });
                        },
                        activate: function () {
                          return EQ();
                        },
                        deactivate: function () {
                          I || uA.stop();
                        },
                        isActive: function () {
                          return _;
                        },
                        callClientApi: function (A, B, Q) {
                          console.error(
                            'The "callClientApi" method is deprecated. Please use the "callProjectApi: instead.\n\nSee more info here: https://alan.app/docs/client-api/methods/common-api/?highlight=callprojectapi#callprojectapi',
                          ),
                            I ||
                              (window.tutorProject &&
                                window.tutorProject.call(A, B, Q));
                        },
                        setAuthData: function (B) {
                          console.error(
                            'The "setAuthData" method is deprecated. Please use the "authData" property when you create the Alan Button.\n\nSee more info here:  https://alan.app/docs/server-api/sending-data/authdata/?highlight=authdata',
                          ),
                            I ||
                              (window.tutorProject &&
                                (window.tutorProject.close(),
                                (window.tutorProject = window.alan.project(
                                  A.key,
                                  zB(B),
                                  A.host,
                                )),
                                window.tutorProject.on('connectStatus', sQ),
                                window.tutorProject.on('options', cQ)));
                        },
                        setOptions: function (A) {
                          cQ(A);
                        },
                        setPreviewState: function (A) {
                          kQ(A);
                        },
                        remove: function () {
                          uA.stop(),
                            window.tutorProject.close(),
                            (dA.innerHTML = ''),
                            (g = null),
                            MB() || (window.tutorProject = null);
                        },
                        stop: function () {
                          uA.stop();
                        },
                        updateButtonState: function (A) {
                          sQ(A);
                        },
                        sendEvent: u,
                      }),
                        document.addEventListener('click', U);
                      var M = 'studio.alan.app';
                      (0 === M.indexOf('$') || '' === M) &&
                        window.location.host,
                        A.host && A.host,
                        ('absolute' === A.position || A.pinned) && (s = !0),
                        'absolute' === A.position && (l = !0);
                      var f,
                        G,
                        h = {
                          default: 'ONLINE',
                          offline: 'OFFLINE',
                          disconnected: 'CONNECTING',
                          listening: 'LISTEN',
                          understood: 'PROCESS',
                          intermediate: 'PROCESS',
                          speaking: 'REPLY',
                        },
                        R = 'default',
                        Y = 'listening',
                        p = 'speaking',
                        N = 'intermediate',
                        b = 'understood',
                        m = 'disconnected',
                        y = 'offline',
                        J = 'lowVolume',
                        k = 'permissionDenied',
                        Z = 'noVoiceSupport',
                        X = 'notSecureOrigin',
                        L =
                          'Microphone access is blocked in your browser settings. Enable it to allow the voice assistant using your microphone',
                        v =
                          'Your browser doesn\u2019t support voice input. If you think your browser supports voice input, please send the Debug info below to support@alan.app. ' +
                          o(),
                        S =
                          'Audio is allowed only on a secure connection: make sure your connection protocol is under HTTPS, HTTP on localhost or file. A connection over the file protocol may not work in some browsers, e.g., in Safari. Now you are running with "' +
                          window.location.protocol +
                          '" protocol and "' +
                          window.location.hostname +
                          '" hostname',
                        H = 'Low volume level',
                        W = "You're offline",
                        O = null,
                        V = 'browser-does-not-support-voice-input',
                        x = 'microphone-access-blocked',
                        T = 'preview-mode',
                        z = 'btn-is-disabled',
                        j = 'no-alan-audio-instance-was-provided',
                        K = m,
                        P = null,
                        q = !1,
                        _ = !1,
                        $ = !1,
                        AA = !1,
                        BA = !1,
                        QA = !0,
                        gA = 3e4,
                        EA = [0, 0],
                        eA = !1,
                        nA = !1,
                        tA = !1,
                        CA = null,
                        IA = 0,
                        oA = 300,
                        iA = 0,
                        aA = 0,
                        wA = oA + 'ms',
                        rA = !0;
                      function cA() {
                        f = KB(function () {
                          q ? f() : (uA.stop(), (F = !0));
                        }, gA);
                      }
                      cA();
                      var sA = '',
                        lA = '',
                        FA = '';
                      fB() ||
                        ((sA = 'alan-pulsating 2s ease-in-out infinite'),
                        (lA = 'alan-mic-pulsating 1.4s ease-in-out infinite'),
                        (FA =
                          'alan-triangle-mic-pulsating 1.2s ease-in-out infinite'));
                      var DA = 'alan-gradient 3s ease-in-out infinite',
                        UA = 'disconnected-loader-animation 2s linear infinite',
                        uA = window.alanAudio,
                        dA = A.rootEl || document.createElement('div'),
                        MA = document.getElementsByTagName('body')[0],
                        fA = document.createElement('div'),
                        GA =
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH9SURBVHgB7dvvUcIwGMfxByfADdjAEdQN3EA2YATcAJ2AEXADdALcgG4AGzwm13DQkNKWQBvK93OXF4W0Z36mf5IUEQAAAAAAAAAAgPOo6ocpS91bmfIuOM2ENHJhlVnbOoIwF1CVleCYCWas9U0kEQ+SjibXuDdJxEASYbtVg+rbwWDwKAm41QDFBJjE357SKXyTCDASAUYiwEgEGIkAIxFgJAKMRICRWgvQTRZs3IzLxef2rn38zmlxqmoT+L6Rpse/ltbGk36j/bFsKJRTqvZva6zc2TXQtHfofbSV+rYVx2pNmwFm3vbI2/6R+r4rjvUnLWkzQL9Rz972l9T3WXGsTPrGTsN794FloM5Uq00D+/kLUb28Cw8DYbwE6k1LgrOPKJNA/dBaykj6SItrvdZaAzcAzZc3bTBzVyYl9YZ6vJK3kL6yPS7QW+ZyJhvW3fS+HdPAWaDRiyYNdz1vecl/xs0oOe12p3Plxd+d2mX7t/482MnKlutt9i48CnydSf5M+Cv7xxFb78mUsSnDkn1ezeAjk3uh+Y0i1JOaWuu9vi/jTueZns/u29kwLhma98Z5g+CWpjwLirT4/Oezn01S63HJvNrhs4kdbqfyKoePKf1IBBiJACMRYCQCjESAkVIO8HDhKBM0o/tZFzsTzY9sAAAAAAAAAABAjH+9EqX09fBHaQAAAABJRU5ErkJggg==',
                        hA =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjMuNzQ5Mzk5NDZlLTMxJSIgeDI9IjIuODYwODIwMDklIiB5Mj0iOTcuMTM5MTc5OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBbGFuLUJ1dHRvbi0vLUFuaW1hdGlvbi0vLWJ1dHRvbi1pbm5lci1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTQwLjEwMDU0MjIsOSBMNDAuMTAwNTQyMiw5IEM1MC4wNzA0NzUxLDkgNTkuMTUxNjIzNSwxNC43MzM3OTM4IDYzLjQzODA5OCwyMy43MzUyMjE0IEw3MC40MjIwMjY3LDM4LjQwMTE5NyBDNzUuMTcxMDE0NSw0OC4zNzM4ODQ0IDcwLjkzNjM2OTMsNjAuMzA4MTYwMSA2MC45NjM2ODE5LDY1LjA1NzE0NzggQzU4LjI3NzU5NDksNjYuMzM2MjYwOCA1NS4zMzk5NzQ0LDY3IDUyLjM2NDg3ODksNjcgTDI3LjgzNjIwNTQsNjcgQzE2Ljc5MDUxMDQsNjcgNy44MzYyMDU0Myw1OC4wNDU2OTUgNy44MzYyMDU0Myw0NyBDNy44MzYyMDU0Myw0NC4wMjQ5MDQ1IDguNDk5OTQ0NTksNDEuMDg3Mjg0IDkuNzc5MDU3NiwzOC40MDExOTcgTDE2Ljc2Mjk4NjQsMjMuNzM1MjIxNCBDMjEuMDQ5NDYwOCwxNC43MzM3OTM4IDMwLjEzMDYwOTIsOSA0MC4xMDA1NDIyLDkgWiIgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==\n',
                        RA =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZS1zcGVha2luZyBiYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMy43NDkzOTk0NmUtMzElIiB4Mj0iMi44NjA4MjAwOSUiIHkyPSI5Ny4xMzkxNzk5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMTIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjA0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWlubmVyLXNoYXBlLXNwZWFraW5nLWJhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBjeD0iNDAiIGN5PSI0MCIgcj0iMzIiPjwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=\n',
                        YA = document.createElement('div'),
                        pA = document.createElement('img'),
                        NA = document.createElement('img'),
                        bA = document.createElement('img'),
                        mA = document.createElement('img'),
                        yA = document.createElement('img'),
                        JA = document.createElement('img'),
                        kA = document.createElement('img'),
                        ZA = document.createElement('img'),
                        XA = document.createElement('img'),
                        LA = document.createElement('img'),
                        vA = document.createElement('img'),
                        SA = document.createElement('img'),
                        HA = document.createElement('img'),
                        WA = document.createElement('img'),
                        OA = document.createElement('div'),
                        VA = document.createElement('div'),
                        xA = document.createElement('img'),
                        TA = document.createElement('img'),
                        zA = document.createElement('img'),
                        jA = document.createElement('img'),
                        KA = document.createElement('div'),
                        PA = document.createElement('div'),
                        qA = !1,
                        _A = !1,
                        $A = !0,
                        AB = new Audio(
                          'data:audio/mp4;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAA2+bWRhdNwATGF2YzUyLjEwOC4wAEI4qTpRvIg0Vzm9dWB5qtSee+dV99Zx+l/Fq3cRzpUzwAczEW3K/QeibL/z/o61lFt2+2XCTlsCfHhPJn0NNjJXaYSmaGfiEpxAmgMa8Y2Ku6tMaY2KEd0fh2Lq+1V9QG2AG2X9fz/aRthoUg25mjNoUzfH76Zho4Cf+NoHx+YADSANIAuZgCoAAAAFwAgra8wAABKSk/AIUHOc8dID2qtSdc86r763r7a82c3db4VK9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOIRxP//9ff9l+StBOFQEEIMADrU1esviVP0+/58+1VXjrYUTqI8wqniRIBSUmZdymtUaj50znKCY0MEME2aHNzNhuEHb0MhRkTocVXOwAwa/MACXcksMsAAAAwgASEoo7GegIIQYAHWpqdU8sv9Pv+nt7UrxxgAAAAAAAAAjyswppc3gAAAABVlwgAAAAADghHEnxPFkQQMIcx2IUooUhB58D/n/j8QiSXYbrMqqoH6UR9o49FoWGURDSXZCbt224HuTzw83B/8ZqeLzP6MKrV7m60F8kasq3hbtLnW80RAWCQAEAAAARIRR2I2McUBFxyP9v7/SIkl2ZbndVVUH1QAAAOepYKxFCsoZScK3ra6yEismpEDlxJtTPBoJABMMQDmcMRhnn/aTL8p8ROYkXzoqpkwAABM4hHErTQEDgAAIEnskThJqTnqEIklwG8yqqgYTV/DSPoRrAZ1CAXtWTyKqALkJAayvmk+spUNhRZFUNV6Mzyg7YGJlokaGF4WnZ5fU/X9unfpWvu7NFAFQAAAs/mkkMchiMJrkzUIRJLAzMqqEQ3oUygkpG7mgf/K/FYBrCTnTXKAMTEZ1sIqaGkgm6sO2+pzYVqJBdTmL8SnzOcGRfmYMl7VVKgXTXACdjgCEcSQCpBsACQfyixkGKAe1JEIiJIBWZVUpQMAsYkHDKBsfXlsW4/hCc7iSUneiLJQhIaUWHTYMiWuAmJBDZMMcmAol2GUV+ZwF671Aw+ybevC/QwC4CEKzx1KURCQSARALv4wYqEEgUXJEIRJLAzMqhEHAnTe768EYWipFDgDkYvDk42wsIsUwccDIsoNtD/7Nm6YLEhRZCy6h2XOha33MO8CgBwCEsTZ3wFUAAAgBeixSDmriEIiSwMyqqqooRAp1GNLBSNp5RcTS8l2g7/b+u6q8tBwW57VbLU2oBv+n09/9wj1waNQOE1QpKmzRCrQjaqEd8eIFnXTh3zFhdMAAqqACIfxeixIE1yRCESSwMzKqgqMoTESt4QjZgsGFUtaJEMp8LJAXooj3+3WcyqEp36CI7ACG22YVqKB4zOCkKBSdBARCIcCFOx0wH4bgWEpJh1GyhLkH9z2/xl1V//tz918e3n15zeb/tX3v2r67cWBgyQYDgU9joaw0P20rqBOd9DKSUM10E8XGk+/7tPGGmkCekRgEINDc0Pt9XF3sCYOlyyiAcY9CgAC11Lu50cQwALAUAoMhAAAAIJAAEyH4XCws5EOo2UJcg/unn/G9VP/pz9L4+OvXmuW/759+Onx3OAKuJ0NdeIDTb8D870iFiAfFpRPfgvSHxpAVEcwiiQ3ND7YBSQDA+WQYAxgAAACXUrADAAAFAKAAADAAAAABwIXxP/////33+SIlmJoqCDF4A1rUlytaFjvqoMnx8JFSsLtjG2dw/3SLWQaHJm/f394Rk+Mw9/f3LJ8Nh33ID4zD3hlGT4zB/DzAyLmKeRaDF2YZZYCYDzAADL6AAJNz2MbhBS9gONakuVrSrDegAAAAAAAAAAAAAAAAAAAAAAAHAIRxO/3QLrv96FE9jMzHQQnCLqSPyF+fMkvQVzmVVKEYDOZb+JDkWMmagDNGlV8YVyOcEQtEXaobWdUJHI7bEoppIp7Uiik9SubFIkua4AoohJUmmqAgiFwAAAAQonshmY4oCLqSPsP+v/HnzJL03rJzmVVUAAAAAADw4AIJSKRsBMl0g80mlwVypim1qJmkOEmbnQVaKCG5kQiMbcOV5xOQkmAO8EQAAADghHE5+iwX80gYR0khjmgIupIn2PwiSXYPDKqqCQAF7vZ+YzDhw2cgmc3uruZIFhtd4crrbzCODPCTJKnFQvqS6iHAbu46CoqUyL0pKjZpeMQOaoAgAAAAEE7EOxTUD3EkT7H4RJLjLN5lVVFAEgAEgD2FY0ntXGAt0SRICwvTrCJv1UODqZlaT6AOegWBIromeSWSoxlO9egbXN0dp28QAAAAAAAAEhyEcTQw1ACQAAgFWiGMJQmu4jvOOiRNAbyqqh2ACC3f/t2jRTyWL5jszVMifzz2rQdYnkhuwttkp5U21jyAhGa4DBAgogkJK+R3TBrSs5iKAYKv1VngTyw/WHItS4I6hUIFZsYUBBqSJ3z10iSXAbzKqqAAJFhJME0pWpkXar2uMoazjdI2uIq7baa8ZyK25EYK4dkuGiibKae+FcpExR6WRZAAIT+9rZ7IpCs5VkWACoAAADiEsTF8QQaQAAfzYjBIFUuIQiJNAbyqESYfGhCtCrwVPBz816cYA0ZADmNLmkNEN0LjyfLRa87M4vMq81Q21YWHw45SqEAA/m9FCgILkiEIklgZmVVUAABFuelUuPVDQ+rz7vT3HFwwUJ0TnTk4KS1Z4tD+aa8S/y5azYVNW3N5twoAEkAAAAAAcIU6bOYfi2TDm0zJBxZolA5/1tl67HWTk1eh1h0n0FoxKZVPOCQZxDTU+0CW3yHTpHJ6Oz40a+kOuj1D8cs5yO9xQg4qAEcnmCAoAAHBiU/Q6JunJ8aS9dNc/y+nNrh52cyIcPxODm0xQsSQcWZIwOWqy+vQ85OzWtA+/fthc2xqKAAAAAOwHWAAAAAPK4AAAAAIAAAAAw23cSfXeM9zAwHurwCF8T///+3p7/kkJZieJgkACa1qtW4qXIFUCgUFQsMY4j8DKUDAid5YtPTqWk2ZPv7wj4+Gwn39x8fDY9/eE/x8Nu++gD4yGCd0IZ8VBONyn/I3vBdONoMFdQwWsxR4AASTlsUjGgTABNa1WrrUnGay6qgAAAAAAAAAAAD+N44PeAAmIVAAHIRxO/oBQPAOeDEtkE7IEoUakfl/5P/H8okl6ePKucyqEYG9C2bdNxT4AosQ4eHIWhD1zGBNoApQpOuMLroxwolNBCLnWWitpjOFotNq1trCaHnkiMp+PdKWittvQdEJSgCtRBOaxkhkCYJNSPl/y/4/WIku2WzMxigAAAAMCMGjOADF7n7S7MQJqpGpU4fGyKZQRGVARnsF20GKIIDMs51uwUFLEBfDABMXs8CuSzdut04VXpdnUFwAAcCEcTzynZ7iAUg5QKWOZwk4knp/n+30iJLtUbrMYoSAXWl/XeS5cNcA7J6r0w/vB3NZc1pQkBIC0bEUh7JjUUKJ5neIMryQmZRnrqMaecRXAXFARAAAgpSSGOKQg4kn2H6oiS4DeZVUoAIkAKEhTE7zBC5IoMSJYWGN0QacZ4uxvRwAxAWRCDsISUUhaGFRDu1F+V7Y4WovctM1RBPziIAAAARBwIRxMN4Oh4AACBV7KE4Rakj15tESS4VG8yqqg7AAx3yAVHLSKXAYSNCQjalJOuKhREZzVWg7ErQLGxYsHZxJwlc7CeYwtSEQaWNEpGILROvXhIALIAAAARAgTYqkGKAg1cT39rQkTQG8qqqqAIBIizGVKZ3EwRe47owRjUUzmoVa977M/BuJxuHc27b0VZpAG7O6IFJPWK2myi1ly4AAAAAAucCEsTQXTNIAAAfzgiBKFF3EQiJJAK3VUAR8rsmtxc0W7XRaxLVlVVpHBpuTfSgnlsimhYX0FUV02T/opLsyJPCyuSuDrAZAhaQg/m9EiUKLkiEIklgZmVQA8qAwkTdVrwVZWr0cpr4MY/GhqLEJYZtRWCpsjTZRL7MEMKbfTwi8oBQOAIU43PYfiqPTG0xKBiNpCTDj9vE6J1P7H8/x7enm7l/bb6k6DuWY3f9G2fZaLnSgrpIAASiB/lsAVlx0w3no8ifVk8qMVZlSc20aBnXlroKFsywA2AG0gAcyAb+wLRxjn5CNQ4T3KQ/jbGB82UHBACcQgB8D8TD7Y2mJUKRtISYcfp4nROp/Y/n+Pb083cuvnb6k6AAAAAAAA2AAAAA8iAAAAAABOoBgAFgAAAAAAAAAAAAAADHOAAHKQ7uBgAAAAAADgIXxP///8/du+LRljGgOHXx+ia+05A/ddee/IAoNCjp3vRoKaiFBR235qwu2Mc+3SGxAbOpp1JjwyQP4v4fwzP4/aLzeJTH5IpQMOE826HHFGOP6Qph+0+OECaVgGRQoAElAAAARhskNhUI0Bw8/X8VfH5YB+rWeeeNAooAAAAAAAAAAAAfw8WLtyn4ZSh/HsAAAAAAABEABwIRxP6/6FdxOOCVtjETHE4RakiET9n/L/jr97MZmVVKEFQLYCLrsA1UD3NgiA2cS0qYxzHjwDqRAtJ0rhetKCh7Jr2ekSGS2mclwhLyGZa5KQMKicWOhwdJueC/tgEZR2MTkAABUBK4gjYobGImMaQg1chCPy/2f34/Ww3uqqqUALsgAAAAccUQDRRwJKLzuQQ4wznklMiqdhAleJuNU9xzZVPCSINtHQ1c958XBKcSSc4ztdMAAABQABwAAAAyxtb292AAAAbG12aGQAAAAAfCWwgHwlsIAAAAPoAAABwAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACWHRyYWsAAABcdGtoZAAAAA98JbCAfCWwgAAAAAEAAAAAAAABwAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAfRtZGlhAAAAIG1kaGQAAAAAfCWwgHwlsIAAALuAAABUAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAGfbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAFjc3RibAAAAFtzdHNkAAAAAAAAAAEAAABLbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAALuAAAAAAAAnZXNkcwAAAAADGQABAAQRQBUAAAAAAPoAAAAAAAUCEZAGAQIAAAAYc3R0cwAAAAAAAAABAAAAFQAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAaHN0c3oAAAAAAAAAAAAAABUAAADgAAAAjwAAAKgAAACqAAAApQAAAKIAAADaAAAAgQAAAKoAAACnAAAAtAAAAIkAAACjAAAAhgAAALsAAACkAAAAowAAAIMAAADDAAAAmQAAALsAAABkc3RjbwAAAAAAAAAVAAAAKAAAAQgAAAGXAAACPwAAAukAAAOOAAAEMAAABQoAAAWLAAAGNQAABtwAAAeQAAAIGQAACLwAAAlCAAAJ/QAACqEAAAtEAAALxwAADIoAAA0jAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi45My4w',
                        );
                      AB.onerror = function () {};
                      var BB = new Audio(
                        'data:audio/mp4;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAWbbWRhdNwATGF2YzUyLjEwOC4wAEI4liJvGTaBRNWgpCwBiMCjrsceWmt/FX4+tazOAVVgZQfdya5JhBsOJ3/kOLuaScl8ydUMZk+oCXDAQR4AwMDdP/MDUUJNh9sfnQJI67rzSfO+O/wSYeAkr2hw/AiHzSA2iwAABVoAAATSEQAWBwACwAJq0j8oENVh51BL41uvM13rzrd1VazVblJSlB968g89yG7I+jnst9OXR9sLNIq6QTNdwTAiACMbS6bNcogBd6uHq2bP2+9v8W4RgZ9J87InCwEgAAAWoAVCYE0wABICYCwSCJYARiABQOAhHEhXf73AAAJuzqc3hQAPh5nPtWt3xrF1EDTThAsCZ35emIYzsHbWvviUi8B6TR6I3FEXS27pXovDTi9vXdk9kY83K6Li6LESt19EOrWbdod7lUhQIAAJazuQ7g8AOHSuNY1XF5fHMiqBjnJiSEKXL9Gg066fyhzOdsPOiq4JVfeSAalwAACoAADP9I7P8VyuxAAKAFkyYAAAAKuAIRxPH/fokAACXs6kGYTABrzk6a56yvbx7b8gTbkJGTKRMwZs+oNhUlJEbiZbqKHWI/1XrNXxFH4+/4rXvevonT+RC8L+qkBfR39U5ApqpAenmrOx5wgTd6xnMwjglbQdwkAB5ydVrOKrzmmgDL02TydTcY7HxwkJFi4RS2Vwz8aYywsACoAADHC1AQXlwqZuxhilTKAF1V4JyJwsAOAhLE6t////CEJi0lIRhMAL1qTV1cvNVqRUG/e+CR0TMHKNkqjy3ad0D7sSMbq7CXo+u3OvRI5mjGY5lPPQ6kIynobbeJBzOu4xQhoBJZQcw54odEI3Bx8NLTQoAAExaDsEwAnGrai5eaSXAJaO9ay9zDzSeUvgfsrNuf2qrZiR60AAAAAAAAAAAADgIU7ZOQfgPxcRhxbikgn261Y/Z8XoA5N+b6U1DtrC2jv2QJmqLIZrCkNBopcnyH/JG3R7bW52taiziWookX3P9k3HUqdzD8B+KxINaqsigH7ceYU/ida6SpStjzj4PNrxhLba06ZYIKWPr84KCGKhkIkq1T3t6yquOKkcdlLKNjiWzUbtxKauaRHmVDPwVzP2c35acUOAIXxPIV/+8AACWtQ0CYAOOKV8ZVr6y99SgzBUQSAcP9VlkmanC8ykvqjcWDiztAmWZ1i6WlCdF0K052WpCj8LWvUxBc1t/PZvCN+/xVgFxmM5eoQAArKWg8hAAGlp5VdXL1VgBM/CAWXJzbtdgq4kNkqDm7hm+6Ij7YH0femapCwAAAAAAmXrSe4FAAAAAABC5yEcTy3X++ABAlLQgxqEQAXON+Ul5eq49fEFD1zBIxKViiEo2PTaYQMJMMHxUWUFZ2mUDgfxhAzn/iY8YUfqVj25fPC4xpq/CNv8VD4mmPzwyhvtSzGKDBvmtgpWNJiCICVggrUXBK2g7BMAGmnnJNZeq676uqDv3f078fLYKuyQ0z/Lr1Yx381ass4E+MCY54AAAAWlk4JAAAawAA4hHEo///93AgJi0k8UBEAHm61xS5remmhljsjmck4t2n53zihd/FMh54rUP4IigM9qSQXshl7ObbJMP7XpqWVWARSkTKnm/NZIO1GF/1iQVW68fvVzu63sz8JaJy2EUirqAAInYsmrQNgmADrUmkaVwurlhYH1LVzlzX4KLE+3OsxUdPRiWJAAAAAAAAAAE5EQABwhGogf/////x1JSIQABetS5L1xllD6Lkf3uE14UyZQQs1HttutUitG2UFsarRLNRUzQq1kKhZOw0Do2JrSsR0FFUzQpKaCkpIKG0Do2g0NsWad60dCTkDwAXrUku71WiqH5vx+zUYwk9rInJSyUnwmEAAAAAAAAAOAIRAEYIwcIRAEYIwcIRAEYIwcAAAC5G1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAEAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIQdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABrG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAu4AAADAAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAVdtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAARtzdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAAu4AAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAAA+gAAAAAABQIRkAYBAgAAABhzdHRzAAAAAAAAAAEAAAAMAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAABEc3RzegAAAAAAAAAAAAAADAAAAOsAAACdAAAAngAAAIsAAACWAAAAkQAAAJ0AAACTAAAAeQAAAAYAAAAGAAAABgAAAEBzdGNvAAAAAAAAAAwAAAAoAAABEwAAAbAAAAJOAAAC2QAAA28AAAQAAAAEnQAABTAAAAWpAAAFrwAABbUAAABgdWR0YQAAAFhtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACtpbHN0AAAAI6l0b28AAAAbZGF0YQAAAAEAAAAATGF2ZjUyLjkzLjA=',
                      );
                      BB.onerror = function () {
                        qA = !0;
                      };
                      var QB = new Audio(
                        'data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAAAAE00QSBtcDQyaXNvbQAAAAFtZGF0AAAAAAAAEXohTMaAB//+fl/BB7eRCgV2mzE3qLQC1u4rDx0KkHPyP1u9BFKZpQkBB8EicZPF5QlOkEJ0CfxejbF3c+XEnaGMrrPIi1pFYX7RSRwfPCfji+Rm0yGDwXUvEbQDhsh2jUC3FkfyaOAfzkXvoQEqnC1FecwjgLVauoVSOWRDynF4XD1zKtfD1DCtfFZSrh98VEfFNJRghlwCehCn5OPSGuv5OW92wL6xXijBoPoR7iE7gq1Psxwd8XKRPwoaKeSNdlSVhTX3MJ0rTBlYIMMspkJnTNIQT1DMAVDDua4RiI33A9Bgso4voe3qbITeimbtNGJEKK3sIjpv14j7p5egilM0oSAn0vkZDH+NyHnXnJPuXnYn4RQQ47xIhprGQaZPAxCCI+PXymDl7blk2fSrBGW/RtGkHDsFCfZZnbOqlBqXrEoaglwjsBP0/81CHifxES7HtySnEZOCI1REkxruZ9h56hax83BiQV0uKLk2G2m2OROyNbBdMEgfGix5wKADUIpkBO4OoOnyb/URHgTSIvUpNkUivz4T40/RMpF135VpOcVi/jaiZkjUTRrzxqK6Um1gYb/vVhfr9VGpnvApXXcq7lVLPTrChM1tMzGeXoyG8hTagEkMw6ZaE5ERc7DQSnE5up6NxLY4gxG+MRABwCF6FGW2B2JhWGSm4jkrn5Pp7YOAIBQC2jq5AHE4l0m5hEQ/8vauaadaV6Rig03RaDMTNhQsLttn2EhHqY+X3Vi09fZuLsxQ6ctFn2fZ3NqSZLKp7maonEbMjAQd46NtmKuntwEGbzYzIVaVpYYjKI/xtGGCpGrjjCDHHi8X6x5qdfKRBYtAvk9FOwaMAn1Hw5StArWbfVLAXvY1ok4xaFbVqVqIhBMClwFKEAAAESQuUDYqDFZqVtXq/4fr56UQOFAFAK3N0z3Txb+17p1TCNJfVvWvz35LZzj8Zz79VIlSRdD0j6zj0OPK2BQfisWi13A5qpo/cvGvZOxf2vNNkqFPaS2N2Vsbt6tjkYDvvvdOjcw2y6ZpkqVVVZVUUtFmpyUWWNCtOJ4shO+7CR3E6URA6TFykd1ADamZJkB3d3rmOw6F4jazKsUzUN+T3nxqhzyh3qx4pwspSnZGTenE98n24zulbEnAgzTqJAWBYC1FVQJViHAhGgj98H///I2Gk2IyWKSIGwkGQkFwkFhIk68qHfyeeEFTyQQKALHxdRAdIoD4QfN9RmuCzV0ano4IIYQkMBLYw5UsuBOd2vYwha4Znoka6T10PtualGszgHPwKlU8/+2wLSGdRh5MxAWArV7MqAY9P+fe+LyuYpn2vqGL6trm2yLxwG13W2cJ3s/fjgpgSVnV3GJoCu4G1jsZoKqVJaCe5MV+y1hERS3hwy94k2xAv/net3ntB/4j9M5gQekdh6OsLB86SKxWRCBOqSBFMaviCl+H3ffUGS3jDY8VEFAbu8dbVHYZIwqCwkceRKV/R+66J0LASgAs+haA4Aw76UDgKJbIpkxhRvKizCNaix0SUwlxHjJCc1zDinkWRn3BKOykJBQt5hOOXyeSspyC6yjO0R11fRvvojZ1CjCkdKDAzBTQyKBreiARne+wEpYRim8EBgivVbR9XRhWqRtwZqMyOnLRchLUivXL0evSiKIQ8/EedgmCROhUA6RgN0PuXCiiNavaTJ78D2o6B7MxCmgroGewObQy5e20Vr4dFhy56RDX2fjofPSxrNBehgIBqIIa+T+l6HdgbanfByEaFFWOD2IyWKTEFwqRgoYhjQk3/Rp+uE4FwEKABLhUwjLPhLZq4TayevWHTW9Wr1waHfBDxqRl4D4dKUF9E9hoSxGo5/KSjwcvDFGCGRNjLKotWpO//S+xTc5SDJalVLHg/6HTKOCnO/NKkVhqfRxGsb0u4jWdKVUfz5b1E7gzwcYhZqTupGdbToNrUvFzgbHuZ2AVAOP2O7lMW7r4s+qBBiNGTzxXQ5vY7climkQHn2zy3M0KkNsoLj2yZFujsvyZoF13aFQfeJ25GGWUgI2wweyCSwudFsFCIu1nj7D6scDgEAKDArr2wfQrMgi+Fy5y/Fs1cjSMsi5NKRu9UIx5OXSgYxCkwR99kgj98ggDdSalWlfV/g4L5QVOsTVYTzzk+TGWrdDiZbKs3ld4n1BoVDKaYPhEUYVkSg+9wP1dfD6LR5yC7LwgU5wvcC+JdOUqms8TFBs9Q0Ob/sjAusvQyrjsZBJnPBlTQOSiwcrd8IpqFkI7oaBA3M84abyu3AUoE1Bk4UhJ7NXutUf8El2o7vwhGgj78H///IWwyWGSIKgsdEj+XK32D27HVxxgAABLHOJvCtjAbsqA6vfq46YbDRcLRAMj5B2lJnMiVSHjocCGH+H6dDaEUbRFMkrysRaKkNeMyq52F+q/JuyNFPVMPzpnhKkAz/7wjkGViMDc4VFIQIHb3ZQZw6PDkbVJCRcYkl3AEUEUANDM0oeFYol7QgzMIcjoCwFFUAwjkqMeszwNW40jpbVXI7PD69wiOkWvFerPV+QlR127inp+RwZbXHNMiV0mX4/HyswzrlSPOO9pVvMZ71+WlJSQBNyWut3h7GxLKJLDJWEkAho/4D+cccCUQJQAJZ2mTwkjQbgl4Drov1KDxKijrq06ABOLJIWM8SoDfRYMYW6GG7xoAvMItlphhOvvz0WpOf0P2HQNG4oL2q4Cpt4GTf45UioVRHlYk2Bux2AKFRLAIN3j3til3crhCfCLR69bYx20K2JIomzfmh3X2PB1JIRGm+Jg2+dE/Ixc4ZCOX51ZfWaVQ5cxEWlKmpg9QGhCms8XZimgIizxKkR8DC8Sv/gm5xBTkbzh3Pr6BbvwIRoI7xB7OXy1sMlhk7PILp/I5P6D+WJ7F89b1eXWcDChLy/QloYAzYoYfNDzjXJFUxgLAANaiZhy7GOFBfRPa9r2Ywz/5lUnmSKJDQyx25yy0NT1T1LhxCpiYvLGsKWyiI9JtWMvbXUC+RO5jABJmYPo10ED4OR2ikapTrZTr+dN+x9luN8+02c3kjEomW7zSWvup51yWYA1l+RpcZrXy1BdAEU5m6syGB1y68Nc+TfP48k3VNP+c6R1P5cWGMoH0H7dhyVyC8uz1c++mxe3d5klx2bJ3sncJbPJZdNfONtVwWroqCkYnel0kZ0BzcTg96EkpHbQCC3jIwoyAjLGx7FKULAmJAkDAWGgToXh4HTL11i93XG9MlRKjYqeGSglpKON9P+W6RoYusLfMwAOMSiSCXWKxPDinIBOndwUmrwxqz3T/+vS3jUS25axUbPH3o1raefpvMlDecmjWk+KVMeyAdyCYbkxHVsANzdNSMiGyTKCkVfenHcooJwDpj67gmFjNU0+geOug+WMoEgT7qKjFY6gvA5iGi88jFXvYgRQUaEro2njsxeESnoOymhCpV8qAKYwQDQRqJb0I3onQWTOQeL6yJX+vJ4BVTHKfTM1AwWOyjxJ1In3WsEiqVFMsOGnbuya+fvK2KstjYb4jFmeqVYJ7aym2UeNmXd+IRoO//i926x9idFiYlhdDOUJrhdtuTXW6OM4osq6rWKgEvKsxj8UIr37u4x2bey34cuAxhyqEjkLVTvaRgLsOKhIbvVLbASQW9czUVC+lNTnOGlJGzfVXoVMtTtt9zF7ZXTUz3VF3N3l3W2r12Wd4GBpc5JjOeblMxO5FKKgp1WDQFBQ74TaAUgMSNbbyC0KdQyE0S1TUcROxcgWZa8bnYgrDSQFTBkIIYINB0hLNzmGrvtvkWrDO2Qp1GCmQCUt6olVNQJSJuthTgE6EbAMErCbpOo7NnQ5seQzrbS8mV9M1VE5MU63g00KN/Hq7EI8nzLrZZ8V93OOvUQCPsansREsSCgSDgKCgTGgKBYKBcGrDweQkzzVWm9MXUq+eMEzEihcLj95i+eM4RfP22CSWRTBI8C5pneFmkYDuDZ12GSMgsK1hrQ4xg4einiWJRnGAHWrgEvpNLAHPkdozM7LvwVtukei8FxaE4UVpyiQ+Oyem/N7ZxcN/20eYuPitICE85F0MJJ4JThIkvEq1qzYG3hR11awmeUbnNwcEQinIorJnRHOuKUr65E/b7CuXUlcI9LsF9pgcqC8rtk6T5V3rAyX6K+NlJxPgtVVCpIUtLT4SjXiFNSqC16Z46ntA4yriETRbbyoqEYp3r1TNvp51t/Gl659bvwhGhRFlYtiYlhYcBYaGZKhBoPR1d0sQVaoIKAkOmRhz4jkRbRzgzGjTzWc+I4GmYPWfiTK3nSsAHyCKnlHfSt60uyNDwXoqa2BzgKGaFcxvWE0QA6hQHDOiFJainWQQ4rUP7V0glyb5LxCrpoHvvoBYPCFcctCUE4/8J2XmaZK3hY0ECA+Lz9H92PsciSRWMjdYs9NgziT3tDjU00xiYDFeE60wVwQAPZSriCK7WHSBIyO72LcU8oDSrGCex5r+CzXyQLtC3TyRXBWB33QbtQRWmVijLaQ23k4ZlPah2O4VFGt44ot8NyCIsZGsYkgLWMIb6pRwBd4tKSgSquqBIZPvsV0u4CtKrjnhFOi5GwYJJ3RSWwwdBCRLwv24SMH9ewRFRTEUpWFretjNRk3IgoaqTVz5WhWglCUusioRtKs2dmNVZKiSxSbLORpLFI0QAwN1QnK65nPmNx2Q5xesHWkBeMXo2k0FbQApmM58iORRECfi5izmIuQ5znYUK5FbfK4kklyBdD2AyizuwVSXRK0E2BIypEYwMzJLFIvSMEKmBODsUNEyxYwETrY2gIGIjI5j5Eiw0XtgyjIBFTc8Pp3bjghGhQ9ihFjYdBaCHAQFpS7CggFQBAgrPznO+HU4MWDUxhEngvuwAUSYeeLrr2a1VEKZx0Yj4HD7laJEogVFr8zqrAbojZPQ4z9V10sHDH96pTvtZ4eRZykhQJgfKvxkBFJgWBeEKcQMaII/SigpQYHNBwEEwhBXa3UnIaqoZWsMGYDmOWzNtokRWEgJSMllAJAK8rwMLaJG+LXGBG6Tqb7aKoapzNkJN2v4+uspoXomgSEAAczaTfM7ga0fR9zokgE4gwb+k/12kn5jxLSutL2YF8xtXNWxdrchWuAJTvD2JUWISQFiINmIQAGL4DrkWKgFIFmCmc2g88+fPHlqrBAB7+lE8BgbFlKgBiTj7M7pCMPgyI5OCGCQmKzrQSgkV8ca5EHyLHt+Kh9APUrLAz5qXMJDQsDCy6aWV82Aicrzi5ocr3U+0AtR7IatFe26g3rCqSsNEhMUWXICUshQZwNQPbMMBlYySm4OhLQTmlxWiqoYFVSIAaCSxrpgU4rCUglct7LaCwLWwIsNBKqktGTSTZcm+DQLMg+riPttNf9gJF0l/lR86H9N1Ox1uf+gFC/W78hGhQ1ihEiYqIYJBYKEYSGCpeK2vhKRnAVKRGWOQRu1yA8D+x/NRe94rS178YwI4qZoD3r9j759PdF/gilKoLfwtaXKap7rtY29dp7srocBXqD7pd554++DSmqMtYd3e0al0mm5l4uZOl8wog37m8XeNCc7lTKwiQNqMzPm9Ld2oAuHxOm9LuROd2ak97lMBnxePslqa4T6qzVzFTqwLJSIaj0xCMRkjVNdkmEvo2ki3fBMSAAel4PH9eU+VCvc07fICtLcOh4LfbOORavbs8/kiLotbu+goc5KUbu8HY2Io7Ej2Cg2OggNoBYQqyZYBgEcAWfFXDOosKfbYfGYmNToNAzt0ZGlE1WsmBwMbqdKMqRfpkITR2OqdWCpVMaXTpay0xdQs3NExg2j4G+3e8co3+B8khh6SuM8XfCSDis0r0EAeXXXn3KUprBDwCCQem/qv5/nwyPkHlau60GaF7gBIAZxh6rxF2mdb5JFnxNZJwK2BujWdSCcVIq0EgODoZ3CgcphaUZCeMJHVbUNhWhpkJzY0CLYERSwdJC7XJWF25yUexFYoLqnfgAAAONbW9vdgAAAGxtdmhkAAAAANfIAsvXyALLAAAD6AAAAH8AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAfp0cmFrAAAAXHRraGQAAAAB18gCy9fIAssAAAABAAAAAAAAAH8AAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAOdGdhcwAAAAAAAAAAAYhtZGlhAAAAIG1kaGQAAAAA18gCy9fIAssAALuAAAAoAFXEAAAAAAAxaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAENvcmUgTWVkaWEgQXVkaW8AAAABL21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA83N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAQAEgICAFEAVAAAAAAI2cgACNnIFgICAAhGQBoCAgAECAAAAGHN0dHMAAAAAAAAAAQAAAAoAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAAKAAAAAQAAADxzdHN6AAAAAAAAAAAAAAAKAAAB7gAAAXUAAAG7AAABkwAAAaUAAAH+AAAB9wAAAcIAAAGzAAABqgAAABRzdGNvAAAAAAAAAAEAAAAsAAABH3VkdGEAAAEXbWV0YQAAAAAAAAAiaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAAA6Wlsc3QAAAC8LS0tLQAAABxtZWFuAAAAAGNvbS5hcHBsZS5pVHVuZXMAAAAUbmFtZQAAAABpVHVuU01QQgAAAIRkYXRhAAAAAQAAAAAgMDAwMDAwMDAgMDAwMDBDNDAgMDAwMDAzRUYgMDAwMDAwMDAwMDAwMTdEMSAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ny40MS4xMDA=',
                      );
                      (QB.onerror = function () {
                        _A = !0;
                      }),
                        (QB.onended = function () {
                          $A ||
                            setTimeout(function () {
                              uA.skipExternalSounds(!1);
                            }, 100);
                        }),
                        (QB.onplay = function () {
                          $A || uA.skipExternalSounds(!0);
                        });
                      var gB,
                        EB,
                        eB,
                        nB,
                        tB,
                        CB,
                        IB,
                        oB,
                        iB,
                        aB = document.createElement('div'),
                        wB = document.createElement('div'),
                        rB = document.createElement('div'),
                        cB = document.createElement('div'),
                        sB = document.createElement('div'),
                        lB = document.createElement('div'),
                        FB = document.createElement('div'),
                        DB = !1;
                      function UB() {
                        navigator.onLine ? kQ(uB()) : (uA.stop(), kQ(y));
                      }
                      function uB(A) {
                        return (
                          void 0 === A && (A = R), WQ() ? (VQ() ? A : Z) : X
                        );
                      }
                      window.addEventListener('online', UB),
                        window.addEventListener('offline', UB);
                      var dB = {
                        tutor: {
                          btnSize: 44,
                          rightPos: 0,
                          leftPos: 0,
                          bottomPos: 0,
                          topPos: 0,
                        },
                        demo: {
                          btnSize: A.size || 64,
                          rightPos: 20,
                          leftPos: 20,
                          bottomPos: 40,
                          topPos: 0,
                        },
                        component: {
                          btnSize: A.size || 64,
                          rightPos: 20,
                          leftPos: 20,
                          bottomPos: 40,
                          topPos: 0,
                        },
                      };
                      function MB() {
                        return Q.indexOf('tutor') > -1;
                      }
                      function fB() {
                        return Q.indexOf('preview') > -1;
                      }
                      function GB(A) {
                        return /^\d+$/.test(A) ? A + 'px' : A;
                      }
                      function hB() {
                        for (
                          var A = document.getElementsByTagName('*'),
                            B = 4,
                            Q = 0;
                          Q < A.length;
                          Q++
                        ) {
                          var g = Number.parseInt(
                            document.defaultView
                              .getComputedStyle(A[Q], null)
                              .getPropertyValue('z-index'),
                            10,
                          );
                          g > B && (B = g);
                        }
                        return B;
                      }
                      function RB(B) {
                        var g = B ? Cg() : null;
                        g &&
                          ('left' === g.orientation &&
                            ((A.left = g.x), (A.top = g.y)),
                          'right' === g.orientation &&
                            ((A.right = g.x), (A.top = g.y))),
                          void 0 !== A.left && ($ = !0),
                          void 0 !== A.top && (AA = !0),
                          $
                            ? (EB = GB(
                                void 0 !== A.left ? A.left : dB[Q].leftPos,
                              ))
                            : ((EB = GB(
                                void 0 !== A.right ? A.right : dB[Q].rightPos,
                              )),
                              (tB = parseInt(EB, 10))),
                          (dA.style[$ ? 'left' : 'right'] = EB),
                          YB();
                      }
                      function YB() {
                        AA
                          ? (nB = GB(void 0 !== A.top ? A.top : dB[Q].topPos))
                          : (eB = GB(
                              void 0 !== A.bottom ? A.bottom : dB[Q].bottomPos,
                            )),
                          AA
                            ? ((dA.style.top = nB),
                              dA.style.setProperty('bottom', ''))
                            : ((dA.style.bottom = eB),
                              dA.style.setProperty('top', ''));
                      }
                      function pB(A, B) {
                        var Q = parseInt(gB, 10);
                        $
                          ? ((A.style.textAlign = 'left'),
                            (A.style.right = ''),
                            (A.style.left =
                              (l ? 0 : parseInt(dA.style.left, 10)) +
                              Q +
                              10 +
                              'px'))
                          : ((A.style.textAlign = 'right'),
                            (A.style.left = ''),
                            (A.style.right =
                              (l ? 0 : parseInt(dA.style.right, 10)) +
                              Q +
                              10 +
                              'px')),
                          B ||
                            (AA
                              ? ((A.style.bottom = ''),
                                (A.style.top =
                                  (l ? 0 : parseInt(dA.style.top, 10)) +
                                  Q / 2 +
                                  'px'))
                              : ((A.style.top = ''),
                                (A.style.bottom =
                                  (l ? 0 : parseInt(dA.style.bottom, 10)) +
                                  Q / 2 +
                                  'px'))),
                          l &&
                            ((A.style.position = 'absolute'),
                            A.classList.add(
                              'alan-btn-lib__absolute-positioned',
                            )),
                          B &&
                            ((A.style.bottom = ''),
                            (A.style.top = (l ? 0 : B) + Q / 2 + 'px'),
                            A.style.setProperty(
                              'transform',
                              'translateY(-50%)',
                              'important',
                            )),
                          (A.style.zIndex = oB);
                      }
                      function NB() {
                        $
                          ? ((fA.style.left = '0'),
                            (fA.style.right = ''),
                            KA.classList.remove('alan-btn-lib__left-side'),
                            KA.classList.add('alan-btn-lib__right-side'))
                          : ((fA.style.right = '0'),
                            (fA.style.left = ''),
                            KA.classList.remove('alan-btn-lib__right-side'),
                            KA.classList.add('alan-btn-lib__left-side'));
                      }
                      function bB(A) {
                        (gB = A),
                          (fA.style.width = A + 'px'),
                          (fA.style.minWidth = A + 'px'),
                          (fA.style.maxWidth = A + 'px'),
                          (fA.style.minHeight = A + 'px'),
                          (fA.style.height = A + 'px'),
                          (fA.style.maxHeight = A + 'px'),
                          (dA.style.width = A + 'px'),
                          (dA.style.minWidth = A + 'px'),
                          (dA.style.maxWidth = A + 'px'),
                          (dA.style.minHeight = A + 'px'),
                          (dA.style.height = A + 'px'),
                          (dA.style.maxHeight = A + 'px'),
                          SQ() &&
                            (KA.style.maxWidth =
                              'calc(100vw - ' +
                              (parseInt(EB, 10) + parseInt(gB, 10) + 20) +
                              'px)'),
                          vB([lB, FB]),
                          pB(KA);
                      }
                      (gB = dB[Q].btnSize),
                        (CB = A.zIndex || hB() + 1),
                        (IB = CB - 2),
                        (oB = CB - 1),
                        (iB = CB - 3),
                        CB && (dA.style.zIndex = CB),
                        (dA.style.position = A.position ? A.position : 'fixed'),
                        RB(),
                        PA.classList.add('alanBtn-recognised-text-content'),
                        KA.classList.add('alanBtn-recognised-text-holder'),
                        pB(KA),
                        (fA.style.color = '#fff'),
                        (fA.style.position = 'absolute');
                      var mB =
                        'transform 0.4s ease-in-out, opacity 0.4s ease-in-out';
                      function yB(A) {
                        for (var B = 0; B < A.length; B++)
                          (A[B].style.minHeight = '100%'),
                            (A[B].style.height = '100%'),
                            (A[B].style.maxHeight = '100%'),
                            (A[B].style.minWidth = '100%'),
                            (A[B].style.width = '100%'),
                            (A[B].style.maxWidth = '100%'),
                            (A[B].style.top = '0%'),
                            (A[B].style.left = '0%'),
                            (A[B].style.position = 'absolute'),
                            (A[B].style.pointerEvents = 'none'),
                            (A[B].style.animationIterationCount = 'infinite'),
                            (A[B].style.animationDuration = '9s'),
                            (A[B].style.animationTimingFunction =
                              'ease-in-out'),
                            (A[B].style.opacity = 0),
                            (A[B].alt = E + ' logo animated part ' + B),
                            YA.appendChild(A[B]);
                      }
                      bB(gB),
                        AA ? (fA.style.top = '0') : (fA.style.bottom = '0'),
                        NB(),
                        (fA.style.borderRadius = '50%'),
                        (fA.style.textAlign = 'center'),
                        (fA.style.transition = mB),
                        (fA.style.zIndex = CB),
                        A && A.tabIndex && (fA.tabIndex = A.tabIndex),
                        fB()
                          ? (fA.style.cursor = 'default')
                          : SQ() || (fA.style.cursor = 'pointer'),
                        (YA.style.minHeight = '100%'),
                        (YA.style.height = '100%'),
                        (YA.style.maxHeight = '100%'),
                        (YA.style.top = '0%'),
                        (YA.style.left = '0%'),
                        (YA.style.zIndex = IB),
                        (YA.style.position = 'relative'),
                        (YA.style.transition = mB),
                        (yA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFogTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlLTIiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='),
                        (JA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LDEuODU4NDEzMzFlLTE1IDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgTDMwLjk0NDQ0NDQsMCBMMzAuODIyNzM0NywxLjgzNTczNjRlLTE1IEMzMC43OTI0NzYzLDEuODk0OTg1MzllLTE1IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgQzMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LDIuMDMyMDE2NDNlLTE1IDE3LjE3NzI2NTMsMCBMMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='),
                        (kA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'),
                        (ZA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='),
                        (XA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBMMzAuOTQ0NDQ0NCwtMS40MjEwODU0N2UtMTQgTDMwLjgyMjczNDcsLTEuMjM3NTExODNlLTE0IEMzMC43OTI0NzYzLC0xLjIzMTU4NjkzZS0xNCAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LjI3MTE5MjQsMjEgTDIzLjk1NjQ1ODIsMjEgQzI0LjczMDk1NjIsMjAuOTk5ODkzOSAyNS40NDE1ODY3LDIxLjI5NTM4NDggMjUuODAxNDg0NiwyMS45ODIzNzY3IEwyOS45ODE5MDE1LDI5Ljk2MjE3NjkgQzMwLjMzODM0NCwzMC42NDI1NzMyIDMwLjA3NjY4NTIsMzEuNDgzNTk5NyAyOS4zOTc0NzAxLDMxLjg0MDY2MjEgQzI5LjE5ODM4MzgsMzEuOTQ1MzIxNSAyOC45NzY5MDkzLDMyIDI4Ljc1MjA3MzgsMzIgTDExLjIwOTMzNzgsMzIgTDEuNzA3ODY0OTUsMzIgQzAuOTQwODAyNzk2LDMyIDAuMzE4OTc2MDU5LDMxLjM3NzA5MTggMC4zMTg5NzYwNTksMzAuNjA4Njk1NyBDMC4zMTg5NzYwNTksMzAuMzg0NTk0OCAwLjM3MzAxNTYxOCwzMC4xNjM4MSAwLjQ3NjQ5NzEwNiwyOS45NjUxMjU2IEw0LjYzMDYyNzg1LDIxLjk4OTE5NDUgQzQuOTg5NjE3NzYsMjEuMjk5OTMzOSA1LjcwMTMxMTAxLDIxLjAwMDEwNjMgNi40NzczOTQ2NiwyMSBMMTguMjcxMTkyNCwyMSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='),
                        (LA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBMMzAuOTQ0NDQ0NCwwIEwzMC44MjI3MzQ3LDEuODM1NzM2NGUtMTUgQzMwLjc5MjQ3NjMsMS44OTQ5ODUzOWUtMTUgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='),
                        (vA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA3PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEwzMC45NDQ0NDQ0LDAgTDMwLjgyMjczNDcsMS44MzU3MzY0ZS0xNSBDMzAuNzkyNDc2MywxLjg5NDk4NTM5ZS0xNSAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEMzMC42Nzk5OTUsMS44NTg0MTMzMWUtMTUgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='),
                        (SA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'),
                        (HA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='),
                        (WA.src =
                          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTEwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMTAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBMMS43MDc4NjQ5NSwzMiBDMC45NDA4MDI3OTYsMzIgMC4zMTg5NzYwNTksMzEuMzc3MDkxOCAwLjMxODk3NjA1OSwzMC42MDg2OTU3IEMwLjMxODk3NjA1OSwzMC4zODQ1OTQ4IDAuMzczMDE1NjE4LDMwLjE2MzgxIDAuNDc2NDk3MTA2LDI5Ljk2NTEyNTYgTDQuNjMwNjI3ODUsMjEuOTg5MTk0NSBDNC45ODk2MTc3NiwyMS4yOTk5MzM5IDUuNzAxMzExMDEsMjEuMDAwMTA2MyA2LjQ3NzM5NDY2LDIxIEwxOC4yMDEzODg5LDIxIEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUtMiIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBDMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LC0xLjIxNzg4MzgzZS0xNCAxNy4xNzcyNjUzLC0xLjQyMTA4NTQ3ZS0xNCBMMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='),
                        yB([yA, JA, kA, ZA, XA, LA, vA, SA, HA, WA]),
                        (pA.alt = E + ' button icon for idle state'),
                        (NA.alt = E + ' button icon for listening state'),
                        (bA.alt = E + ' button icon for processing state'),
                        (mA.alt = E + ' button icon for reply state');
                      var JB = [pA, NA, bA, mA];
                      pA.src = GA;
                      for (var kB = 0; kB < JB.length; kB++) {
                        var ZB = JB[kB];
                        (ZB.style.minHeight = '100%'),
                          (ZB.style.height = '100%'),
                          (ZB.style.maxHeight = '100%'),
                          (ZB.style.minWidth = '100%'),
                          (ZB.style.width = '100%'),
                          (ZB.style.maxWidth = '100%'),
                          (ZB.style.top = '0%'),
                          (ZB.style.left = '0%'),
                          (ZB.style.position = 'absolute'),
                          (ZB.style.pointerEvents = 'none'),
                          (ZB.style.borderRadius = '50%'),
                          YA.appendChild(ZB);
                      }
                      function XB(A, B) {
                        var Q = B.height,
                          g = B.top,
                          e = B.altText,
                          n = B.src,
                          t = B.animation;
                        (A.style.minHeight = Q),
                          (A.style.height = Q),
                          (A.style.maxHeight = Q),
                          (A.style.top = g),
                          (A.style.left = g),
                          (A.style.zIndex = IB),
                          (A.style.position = 'absolute'),
                          (A.style.transition = mB),
                          (A.style.opacity = '0'),
                          (A.alt = E + e),
                          (A.src = n),
                          t && (A.style.animation = t);
                      }
                      (OA.style.minHeight = '100%'),
                        (OA.style.height = '100%'),
                        (OA.style.maxHeight = '100%'),
                        (OA.style.minWidth = '100%'),
                        (OA.style.width = '100%'),
                        (OA.style.maxWidth = '100%'),
                        (OA.style.top = '0%'),
                        (OA.style.left = '0%'),
                        (OA.style.zIndex = IB),
                        (OA.style.position = 'absolute'),
                        (OA.style.opacity = '0'),
                        (OA.style.transition = mB),
                        (OA.style.overflow = 'hidden'),
                        (OA.style.borderRadius = '50%'),
                        (OA.style.backgroundSize = '100% 100%'),
                        (OA.style.backgroundPosition = 'center center'),
                        (OA.style.backgroundRepeat = 'no-repeat'),
                        OA.classList.add('triangleMicIconBg'),
                        OA.classList.add('triangleMicIconBg-default'),
                        (VA.style.minHeight = '100%'),
                        (VA.style.height = '100%'),
                        (VA.style.maxHeight = '100%'),
                        (VA.style.minWidth = '100%'),
                        (VA.style.width = '100%'),
                        (VA.style.maxWidth = '100%'),
                        (VA.style.top = '0%'),
                        (VA.style.left = '0%'),
                        (VA.style.zIndex = IB),
                        (VA.style.position = 'absolute'),
                        (VA.style.opacity = '0'),
                        (VA.style.transition = mB),
                        (VA.style.overflow = 'hidden'),
                        (VA.style.borderRadius = '50%'),
                        (VA.style.backgroundSize = '0% 0%'),
                        (VA.style.backgroundPosition = 'center center'),
                        (VA.style.backgroundRepeat = 'no-repeat'),
                        VA.classList.add('circleMicIconBg'),
                        XB(xA, {
                          height: '70%',
                          top: '15%',
                          altText: ' disconnected microphone icon',
                          animation: UA,
                          src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiB2aWV3Qm94PSIwIDAgMTkyIDE5MiI+CiAgICA8ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTk2IDBjNTMuMDIgMCA5NiA0Mi45OCA5NiA5NnMtNDIuOTggOTYtOTYgOTZTMCAxNDkuMDIgMCA5NiA0Mi45OCAwIDk2IDB6IiBvcGFjaXR5PSIuMDIiLz4KICAgICAgICA8cGF0aCBkPSJNMTMxLjk2NiAxOS4wOTJjLTMwLTE0LTY1LjI4NC05Ljg0OS05MS4xNDIgMTIuNTc1QzE0Ljk2NiA1NC4wOTIgNi44NSA4My44MSAxMi45MDggMTEzLjk1YzYuMDU4IDMwLjE0MiAzMC4zMDIgNTYuMTkgNjAuMDU4IDY0LjE0MiAzNS4xODMgOS40MDYgNzMtNCA5My0zNC0xNy45MjQgMjMuOTE2LTUyLjM2NiAzOC4yOTMtODMgMzMtMzAuMTY4LTUuMjEtNTcuMTA0LTMxLjExLTY0LTYxLTcuMzQ3LTMxLjgzNS43NzktNTYgMjctODBzODAtMjYgMTA5IDljNS41MzYgNi42ODEgMTMgMTkgMTUgMzQgMSA2IDEgNyAyIDEyIDAgMiAyIDQgNCA0IDMgMCA1LjM3NC0yLjI1NiA1LTYtMy0zMC0yMS41NTYtNTcuMTkzLTQ5LTcweiIgb3BhY2l0eT0iLjQiLz4KICAgIDwvZz4KPC9zdmc+Cg==',
                        }),
                        XB(TA, {
                          height: '100%',
                          top: '0%',
                          altText: ' low volume icon',
                          src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1taWM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWxhbi1CdXR0b24tLy1BbmltYXRpb24tLy1idXR0b24tbm8tbWljIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCAxOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTguNDczNjg0MiBDMzIsMjUuNzE5NDczNyAyNi43OCwzMS42OTI2MzE2IDIwLDMyLjY5ODQyMTEgTDIwLDQwIEMyMCw0MS4xMDQ1Njk1IDE5LjEwNDU2OTUsNDIgMTgsNDIgQzE2Ljg5NTQzMDUsNDIgMTYsNDEuMTA0NTY5NSAxNiw0MCBMMTYsMzIuNjk4NDIxMSBDOS4yMiwzMS42OTI2MzE2IDQsMjUuNzE5NDczNyA0LDE4LjQ3MzY4NDIgTDQsMTggQzQsMTYuODk1NDMwNSA0Ljg5NTQzMDUsMTYgNiwxNiBDNy4xMDQ1Njk1LDE2IDgsMTYuODk1NDMwNSA4LDE4IEw4LDE4LjQ3MzY4NDIgQzgsMjQuMTQxODY5OCAxMi40NzcxNTI1LDI4LjczNjg0MjEgMTgsMjguNzM2ODQyMSBDMjMuNTIyODQ3NSwyOC43MzY4NDIxIDI4LDI0LjE0MTg2OTggMjgsMTguNDczNjg0MiBMMjgsMTggQzI4LDE2Ljg5NTQzMDUgMjguODk1NDMwNSwxNiAzMCwxNiBDMzEuMTA0NTY5NSwxNiAzMiwxNi44OTU0MzA1IDMyLDE4IEwzMiwxOC40NzM2ODQyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LC00LjUyNzM3MjYzZS0xNCBDMjEuMzEzNzA4NSwtNC42MTg1Mjc3OGUtMTQgMjQsMi43NTY5ODMzOCAyNCw2LjE1Nzg5NDc0IEwyNCwxOC40NzM2ODQyIEMyNCwyMS44NzQ1OTU2IDIxLjMxMzcwODUsMjQuNjMxNTc4OSAxOCwyNC42MzE1Nzg5IEMxNC42ODYyOTE1LDI0LjYzMTU3ODkgMTIsMjEuODc0NTk1NiAxMiwxOC40NzM2ODQyIEwxMiw2LjE1Nzg5NDc0IEMxMiwyLjc1Njk4MzM4IDE0LjY4NjI5MTUsLTQuNTI3MzcyNjNlLTE0IDE4LC00LjYxODUyNzc4ZS0xNCBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC42Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjgxLDMuMjcgTDM0LjczLDM0LjE5IEMzNS40MzE0MDE2LDM0Ljg5MTQwMTYgMzUuNDMxNDAxNiwzNi4wMjg1OTg0IDM0LjczLDM2LjczIEMzNC4wMjg1OTg0LDM3LjQzMTQwMTYgMzIuODkxNDAxNiwzNy40MzE0MDE2IDMyLjE5LDM2LjczIEwxLjI3LDUuODEgQzAuNTY4NTk4MzY4LDUuMTA4NTk4MzcgMC41Njg1OTgzNjgsMy45NzE0MDE2MyAxLjI3LDMuMjcgQzEuOTcxNDAxNjMsMi41Njg1OTgzNyAzLjEwODU5ODM3LDIuNTY4NTk4MzcgMy44MSwzLjI3IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\n',
                        }),
                        XB(zA, {
                          height: '100%',
                          top: '0%',
                          altText: ' no voice support icon',
                          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB7dvxUYMwFAbwpxMwAhvoBtVJygZ1A92gI1Qn6AjoBO0GsEG7wfPlgCtNA7xASzX5fnf5oyThLp+BQDiJAAAAAAAAAAAAAAAAxmHmDyk5n+ykLAn6SUhpHVaXwrQhcBsIr5FTLGSwb1IOmpkj9RnrxXE5+1x+fH7Pwyw0+PKSLLpCrGeq1oFiwNWiUGhCZE8UC22I7IliogmRPVFshkJkTxSjvhDZE8WqJ0QEqNURIgL0MTVEgmkhElTGhkix4WqzoNlYWFp1k1fhvvMHgc9n2cFRPzXAou/8t/JAM7EH/SD66ocM9bfrb+WR7kTGm1iHjqR3HDjXbOYMsLR+p9bvPentr3iuSeYM0B7Uwvr9RXqfA+cqKTRyma2sdSB3tMlZJ7X62Ru3Qa7CiSOIF6uN9pmw4NMuTjYUcDAcM8wEkTjaZdasytm9AfHsOL6lUJkZx5c2yr7a2ZlSyGSAa8egt5qBK0JU/TH+Na7uha4QzLHBm7+0ee8Iz/Sf/XlwtjeRtnq2mVU4dVSXUr6l/NDpccS0e5KSSekKybR9lReQkmLAV9hU7ZiFKcWCq8t5zeOtWfndOWhczcYN6+VSFq2+RfQhGnUYWUeY5ph5m0k6+iHENjs9RXuE2OYbYN3HFeKOYjQmwLrfRYgUo7EB1n2bEM03khXd0F0epDXs0Obaovd1ty39UCDAif5ygO0PRyWBH64eqJuFAP9kAwAAAAAAAAAAAAAAU/wC52820szaQtwAAAAASUVORK5CYII=',
                        }),
                        XB(jA, {
                          height: '100%',
                          top: '0%',
                          altText: ' offline icon',
                          src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1uZXR3b3JrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLW5vLW5ldHdvcmsiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDIyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzMsMiBDMzQuNjU2ODU0MiwyIDM2LDMuMzQzMTQ1NzUgMzYsNSBMMzYsMjkgQzM2LDMwLjY1Njg1NDIgMzQuNjU2ODU0MiwzMiAzMywzMiBDMzEuMzQzMTQ1OCwzMiAzMCwzMC42NTY4NTQyIDMwLDI5IEwzMCw1IEMzMCwzLjM0MzE0NTc1IDMxLjM0MzE0NTgsMiAzMywyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIzLDggQzI0LjY1Njg1NDIsOCAyNiw5LjM0MzE0NTc1IDI2LDExIEwyNiwyOSBDMjYsMzAuNjU2ODU0MiAyNC42NTY4NTQyLDMyIDIzLDMyIEMyMS4zNDMxNDU4LDMyIDIwLDMwLjY1Njg1NDIgMjAsMjkgTDIwLDExIEMyMCw5LjM0MzE0NTc1IDIxLjM0MzE0NTgsOCAyMyw4IFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLDE2IEMxNC42NTY4NTQyLDE2IDE2LDE3LjM0MzE0NTggMTYsMTkgTDE2LDI5IEMxNiwzMC42NTY4NTQyIDE0LjY1Njg1NDIsMzIgMTMsMzIgQzExLjM0MzE0NTgsMzIgMTAsMzAuNjU2ODU0MiAxMCwyOSBMMTAsMTkgQzEwLDE3LjM0MzE0NTggMTEuMzQzMTQ1OCwxNiAxMywxNiBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC44Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIyIEM0LjY1Njg1NDI1LDIyIDYsMjMuMzQzMTQ1OCA2LDI1IEw2LDI5IEM2LDMwLjY1Njg1NDIgNC42NTY4NTQyNSwzMiAzLDMyIEMxLjM0MzE0NTc1LDMyIDIuMDI5MDYxMjVlLTE2LDMwLjY1Njg1NDIgMCwyOSBMMCwyNSBDLTIuMDI5MDYxMjVlLTE2LDIzLjM0MzE0NTggMS4zNDMxNDU3NSwyMiAzLDIyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44MSwxLjI3IEwzNi43MywzMi4xOSBDMzcuNDMxNDAxNiwzMi44OTE0MDE2IDM3LjQzMTQwMTYsMzQuMDI4NTk4NCAzNi43MywzNC43MyBDMzYuMDI4NTk4NCwzNS40MzE0MDE2IDM0Ljg5MTQwMTYsMzUuNDMxNDAxNiAzNC4xOSwzNC43MyBMMy4yNywzLjgxIEMyLjU2ODU5ODM3LDMuMTA4NTk4MzcgMi41Njg1OTgzNywxLjk3MTQwMTYzIDMuMjcsMS4yNyBDMy45NzE0MDE2MywwLjU2ODU5ODM2OCA1LjEwODU5ODM3LDAuNTY4NTk4MzY4IDUuODEsMS4yNyBaIiBpZD0iUGF0aCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\n',
                        });
                      var LB = {
                        idle: {
                          background: {
                            color: ['rgb(34, 203, 255)', 'rgb(25, 149, 255)'],
                          },
                          hover: {
                            color: [
                              'rgba(0, 70, 255, 0.95)',
                              'rgba(0, 156,  255, 0.95)',
                            ],
                          },
                        },
                        listen: {
                          background: {
                            color: [
                              'rgba(0, 70, 255, 0.95)',
                              'rgba(0, 156,  255, 0.95)',
                            ],
                          },
                          hover: {
                            color: [
                              'rgba(0, 70, 255, 0.95)',
                              'rgb(0, 70, 255)',
                            ],
                          },
                        },
                        process: {
                          background: {
                            color: [
                              'rgba(0, 255, 205, 0.95)',
                              'rgba(0, 115, 255, 0.95)',
                            ],
                          },
                          hover: {
                            color: [
                              'rgb(0, 115, 255)',
                              'rgba(0, 115, 255, 0.95)',
                            ],
                          },
                        },
                        reply: {
                          background: {
                            color: [
                              'rgba(122, 40, 255, 0.95)',
                              'rgba(61, 122, 255, 0.95)',
                            ],
                          },
                          hover: {
                            color: [
                              'rgba(122, 40, 255, 0.95)',
                              'rgb(122, 40, 255)',
                            ],
                          },
                        },
                      };
                      function vB(A) {
                        for (var B = 0; B < A.length; B++) {
                          var Q = A[B];
                          (Q.style.height = gB / 2 + 'px'),
                            (Q.style.maxHeight = gB / 2 + 'px'),
                            (Q.style.minHeight = gB / 2 + 'px'),
                            (Q.style.minWidth = gB + 'px'),
                            (Q.style.width = gB + 'px'),
                            (Q.style.maxWidth = gB + 'px'),
                            (Q.style.top =
                              'calc(100%/2 - ' + gB / 2 / 2 + 'px)'),
                            (Q.style.filter = 'blur(' + gB / 10 + 'px)'),
                            (Q.style.left = 0),
                            (Q.style.zIndex = iB),
                            (Q.style.position = 'absolute'),
                            (Q.style.transition = mB),
                            (Q.style.opacity = '.5'),
                            (Q.style.borderRadius = '100px'),
                            Q.classList.add('alanBtn-oval-bg-default');
                        }
                      }
                      (lB.style.transform = 'rotate(-315deg)'),
                        (FB.style.transform = 'rotate(-45deg)'),
                        vB([lB, FB]);
                      var SB =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzczNDUgNy4wMDAwM0wxMy44Mzk4IDAuOTMzNjA0QzE0LjA1MzQgMC43MjAwMjIgMTQuMDUzNCAwLjM3Mzc0MSAxMy44Mzk4IDAuMTYwMTg2QzEzLjYyNjMgLTAuMDUzMzY4MSAxMy4yOCAtMC4wNTMzOTU1IDEzLjA2NjQgMC4xNjAxODZMNyA2LjIyNjYxTDAuOTMzNjA0IDAuMTYwMTg2QzAuNzIwMDIyIC0wLjA1MzM5NTUgMC4zNzM3NDEgLTAuMDUzMzk1NSAwLjE2MDE4NiAwLjE2MDE4NkMtMC4wNTMzNjgxIDAuMzczNzY4IC0wLjA1MzM5NTUgMC43MjAwNDkgMC4xNjAxODYgMC45MzM2MDRMNi4yMjY1OSA3TDAuMTYwMTg2IDEzLjA2NjRDLTAuMDUzMzk1NSAxMy4yOCAtMC4wNTMzOTU1IDEzLjYyNjMgMC4xNjAxODYgMTMuODM5OEMwLjI2Njk2NCAxMy45NDY2IDAuNDA2OTM2IDE0IDAuNTQ2OTA5IDE0QzAuNjg2ODgxIDE0IDAuODI2ODI3IDEzLjk0NjYgMC45MzM2MzEgMTMuODM5OEw3IDcuNzczNDVMMTMuMDY2NCAxMy44Mzk4QzEzLjE3MzIgMTMuOTQ2NiAxMy4zMTMyIDE0IDEzLjQ1MzEgMTRDMTMuNTkzMSAxNCAxMy43MzMgMTMuOTQ2NiAxMy44Mzk4IDEzLjgzOThDMTQuMDUzNCAxMy42MjYzIDE0LjA1MzQgMTMuMjggMTMuODM5OCAxMy4wNjY0TDcuNzczNDUgNy4wMDAwM1oiIGZpbGw9IiNCQkNGRTciLz4KPC9zdmc+Cg==';
                      aB.classList.add('alanBtn-bg-default'),
                        wB.classList.add('alanBtn-bg-listening'),
                        rB.classList.add('alanBtn-bg-speaking'),
                        cB.classList.add('alanBtn-bg-intermediate'),
                        sB.classList.add('alanBtn-bg-understood'),
                        ZQ(aB),
                        ZQ(wB),
                        ZQ(rB),
                        ZQ(cB),
                        ZQ(sB);
                      var HB = '1',
                        WB = '0';
                      aB.style.opacity = HB;
                      var OB = [
                        VA,
                        OA,
                        YA,
                        jA,
                        TA,
                        zA,
                        yA,
                        JA,
                        kA,
                        ZA,
                        XA,
                        LA,
                        vA,
                        SA,
                        HA,
                        WA,
                      ];
                      for (kB = 0; kB < OB.length; kB++)
                        OB[kB].setAttribute('draggable', 'false');
                      function VB(A) {
                        return '.alan-' + jB() + (A ? '' : ' ');
                      }
                      function xB(B) {
                        var Q,
                          g,
                          E = '',
                          e = jB();
                        (g = A.shadowDOM
                          ? A.shadowDOM.getElementById('alan-stylesheet-' + e)
                          : document.getElementById('alan-stylesheet-' + e)) &&
                          ((g.disabled = !0), g.parentNode.removeChild(g)),
                          (Q = document.createElement('style')).setAttribute(
                            'id',
                            'alan-stylesheet-' + e,
                          ),
                          (Q.type = 'text/css'),
                          (E +=
                            '.alanBtn-root * {  box-sizing: border-box; font-family: Helvetica, Arial, sans-serif; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}');
                        var n = SQ() ? ':active' : ':hover';
                        function t(A, B) {
                          for (
                            var Q = [
                                0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
                              ],
                              g = '',
                              E = 0;
                            E < Q.length;
                            E++
                          ) {
                            var e = 0;
                            (e =
                              0 === B
                                ? 0 === E || 10 === E
                                  ? 1
                                  : 0
                                : E === B
                                ? 1
                                : 0),
                              (g += ''
                                .concat(Q[E], '% {  opacity: ')
                                .concat(e, ';  } '));
                          }
                          return VB() + TB(A, g);
                        }
                        SQ() ||
                          (E +=
                            VB() +
                            '.alanBtn{transform: scale(1);' +
                            mB +
                            ';} .alanBtn' +
                            n +
                            '{transform: scale(1.11111);transition:' +
                            mB +
                            ';}.alanBtn:focus {transform: scale(1);' +
                            mB +
                            ';  border: solid 3px #50e3c2;  outline: none;  }'),
                          (E +=
                            VB() +
                            '.alanBtn-recognised-text-holder { position:fixed; transform: translateY(' +
                            (AA ? '-' : '') +
                            '50%); max-width:236px; font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px;  min-height: 40px;  color: #000; font-weight: normal; background-color: #fff; border-radius:10px; box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.35); display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack: activate;-ms-flex-pack: start;justify-content: start;}'),
                          (E +=
                            VB() +
                            ' .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__left-side { text-align: left;}'),
                          (E +=
                            VB() +
                            ' .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__right-side { text-align: right;}'),
                          (E +=
                            VB() +
                            ' .alanBtn-recognised-text-holder .alanBtn-recognised-text-content:not(:empty) {padding: 10px;}'),
                          (E +=
                            VB(!0) +
                            '.alanBtn-recognised-text-holder-long  { font-size: 12px!important;line-height: 1.4!important;}  '),
                          (E +=
                            VB(!0) +
                            '.alanBtn-recognised-text-holder-super-long  { font-size: 11px!important;line-height: 1.4!important;}  '),
                          (E +=
                            VB() +
                            '.alanBtn-text-appearing {  animation: text-holder-appear 800ms ease-in-out forwards;  }'),
                          (E +=
                            VB() +
                            '.alanBtn-text-disappearing {  animation: text-holder-disappear 800ms ease-in-out forwards;    }'),
                          (E +=
                            VB() +
                            '.alanBtn-text-disappearing-immediately {  animation: none; opactity: 0;   }'),
                          (E +=
                            VB() +
                            '.alan-btn-disabled {  pointer-events: none;  opacity: .5;  transition: all .2s ease-in-out;  }'),
                          (E +=
                            VB() +
                            '.shadow-appear {  opacity: 1 !important;  }\n'),
                          (E +=
                            VB() +
                            '.shadow-disappear {  opacity: 0 !important;  transition: all .1s linear !important;  }'),
                          (E +=
                            VB(!0) +
                            '.alan-btn-offline .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}'),
                          (E +=
                            VB(!0) +
                            '.alan-btn-offline .alanBtn' +
                            n +
                            ' .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}'),
                          (E +=
                            VB(!0) +
                            '.alan-btn-no-voice-support .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}'),
                          (E +=
                            VB(!0) +
                            '.alan-btn-no-voice-support .alanBtn' +
                            n +
                            ' .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}'),
                          (E +=
                            VB(!0) +
                            '.alan-btn-permission-denied .alanBtn .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}'),
                          (E +=
                            VB(!0) +
                            '.alan-btn-permission-denied .alanBtn' +
                            n +
                            ' .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}'),
                          (E +=
                            VB() +
                            '.triangleMicIconBg {background-image:url(' +
                            hA +
                            '); pointer-events: none;}'),
                          (E +=
                            VB() +
                            '.circleMicIconBg {background-image:url(' +
                            RA +
                            '); pointer-events: none;}'),
                          (E += VB() + ' img {pointer-events: none;}'),
                          (E +=
                            VB() +
                            '' +
                            n +
                            ' .triangleMicIconBg-default {opacity:0!important;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-for-alert {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}'),
                          (E +=
                            VB() +
                            '.alan-alert-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:12px;padding-right:24px;text-align: center;width: 220px;background: rgb(255 255 255);position: fixed;left: 50%;transform: translateX(-50%);top: 10%;    color: #000;font-size: 14px;line-height: 18px;}'),
                          (E +=
                            VB() +
                            '.alan-alert-popup__close-btn {background:url("' +
                            SB +
                            '") no-repeat center;cursor:pointer; background-size:100% 100%;position: absolute;top: 12px;right: 12px;width: 14px;height: 14px;}'),
                          (E +=
                            VB() +
                            '.alan-overlay {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup.alan-btn-lib__default-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:6px 30px 6px 12px;text-align: left;width: 220px;background: rgb(255 255 255);}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup.alan-btn-lib__top.alan-btn-lib__right {border-top-right-radius: 0!important;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup.alan-btn-lib__top.alan-btn-lib__left {border-top-left-radius: 0!important;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup.alan-btn-lib__bottom.alan-btn-lib__left {border-bottom-left-radius: 0!important;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup.alan-btn-lib__bottom.alan-btn-lib__right {border-bottom-right-radius: 0!important;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup {position: fixed;opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup__body {position:relative;color: #0D1940;font-size: 16px;line-height: 20px;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup__ok {background:url("' +
                            SB +
                            '") no-repeat center; background-size:100% 100%;min-height:14px;height:14px;max-height:14px;min-width:14px;width:14px;max-width:14px;opacity:0;transition:opacity 300ms ease-in-out;position:absolute;top:8px;right:8px;cursor: pointer;pointer-events: auto!important;}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup__ok:hover {opacity:0.9}'),
                          (E +=
                            VB() +
                            '.alan-overlay-popup:hover .alan-overlay-popup__ok{opacity:1;transition:opacity 300ms ease-in-out;}'),
                          (E +=
                            VB() +
                            TB(
                              'alan-gradient',
                              '0%{backgroundPosition: 0 0;}50%{backgroundPosition: -100% 0;}100%{backgroundPosition: 0 0;}',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'alan-pulsating',
                              '0%{transform: scale(1.11111);}50%{transform: scale(1.0);}100%{transform: scale(1.11111);}',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'alan-mic-pulsating',
                              '0%{transform: scale(0.91);}50%{transform: scale(1.0);}100%{transform: scale(0.91);}',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'alan-triangle-mic-pulsating',
                              '0%{transform: scale(0.94);}50%{transform: scale(1.0);}100%{transform: scale(0.94);}',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'alan-fade-in',
                              '0%{opacity: 0;}100%{opacity:1;}',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'alan-fade-out',
                              '0%{opacity: 1;}100%{opacity:0;}',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'text-holder-appear',
                              '0%{opacity:0; color:transparent; background-color:rgba(245, 252, 252, 0.0);border: solid 1px transparent; }100%{opacity:1; color:#000;background-color:rgba(245, 252, 252, 0.8);}',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'text-holder-disappear',
                              '0%{opacity:1; color:#000;background-color:rgba(245, 252, 252, 0.8);  }100%{opacity:0; color:transparent;background-color:rgba(245, 252, 252, 0.0);border: solid 1px transparent;}',
                            ));
                        for (var C = 0; C < 10; C++)
                          E += t('logo-state-'.concat(C + 1, '-animation'), C);
                        (E +=
                          VB() +
                          TB(
                            'disconnected-loader-animation',
                            '0%{  transform: rotate(0deg);  } 100%{  transform: rotate(360deg);  }',
                          )),
                          (E +=
                            VB() +
                            TB(
                              'oval1-animation',
                              '0%{  transform: rotate(-315deg);  } 50%{  transform: rotate(-495deg);  } 100%{  transform: rotate(-315deg);  }',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'oval2-animation',
                              '0%{  transform: rotate(-45deg);  } 50%{  transform: rotate(-215deg);  } 100%{  transform: rotate(-45deg);  }',
                            )),
                          (E +=
                            VB() +
                            TB(
                              'alan-text-fade-in',
                              '0%{  opacity: 0;  } 100%{   opacity: 1;  }',
                            )),
                          (E +=
                            VB() +
                            '.alanBtn-bg-default.super-hidden{opacity:0!important;display:none;}');
                        var I = LB;
                        B && (I = B.btnLayerOptions ? LB : B || LB),
                          Object.keys(I);
                        var o,
                          i,
                          a,
                          w,
                          r = {
                            idle: ['default'],
                            listen: ['listening'],
                            process: ['intermediate', 'understood'],
                            reply: ['speaking'],
                          },
                          c = Object.keys(r);
                        for (kB = 0; kB < c.length; kB++) {
                          (a = r[(i = c[kB])]), (o = I[i]);
                          for (var s = 0; s < a.length; s++)
                            (w = a[s]),
                              o.background &&
                                ((E += VB() + '.alanBtn-bg-' + w + ' {'),
                                (E +=
                                  'background-image: linear-gradient(122deg,' +
                                  o.background.color[0] +
                                  ',' +
                                  o.background.color[1] +
                                  ');'),
                                (E += '}'),
                                (E += VB() + '.alanBtn-oval-bg-' + w + ' {'),
                                (E +=
                                  'background-image: linear-gradient(122deg,' +
                                  o.background.color[0] +
                                  ',' +
                                  o.background.color[1] +
                                  ');'),
                                (E += '}')),
                              o.hover &&
                                ((E +=
                                  VB() +
                                  '.alanBtn' +
                                  n +
                                  ' .alanBtn-bg-' +
                                  w +
                                  ':not(.super-hidden) {'),
                                (E +=
                                  'background-image: linear-gradient(122deg,' +
                                  o.hover.color[0] +
                                  ',' +
                                  o.hover.color[1] +
                                  ');'),
                                (E += '}'),
                                (E +=
                                  VB() +
                                  '.alanBtn:active .alanBtn-bg-' +
                                  w +
                                  ':not(.super-hidden) {'),
                                (E +=
                                  'background-image: linear-gradient(122deg,' +
                                  o.hover.color[0] +
                                  ',' +
                                  o.hover.color[1] +
                                  ');'),
                                (E += '}'),
                                (E +=
                                  VB() +
                                  '.alanBtn' +
                                  n +
                                  ' .alanBtn-oval-bg-' +
                                  w +
                                  ':not(.super-hidden) {'),
                                (E +=
                                  'background-image: linear-gradient(122deg,' +
                                  o.hover.color[0] +
                                  ',' +
                                  o.hover.color[1] +
                                  ');'),
                                (E += '}'),
                                (E +=
                                  VB() +
                                  '.alanBtn:active .alanBtn-oval-bg-' +
                                  w +
                                  ':not(.super-hidden) {'),
                                (E +=
                                  'background-image: linear-gradient(122deg,' +
                                  o.hover.color[0] +
                                  ',' +
                                  o.hover.color[1] +
                                  ');'),
                                (E += '}'));
                        }
                        (Q.innerHTML = E),
                          A.shadowDOM
                            ? A.shadowDOM.prepend(Q)
                            : document
                                .getElementsByTagName('head')[0]
                                .appendChild(Q);
                      }
                      function TB(A, B) {
                        for (
                          var Q = ['@-webkit-keyframes', '@keyframes'],
                            g = '',
                            E = 0;
                          E < Q.length;
                          E++
                        )
                          g += Q[E] + ' ' + A + '{' + B + '} ';
                        return g;
                      }
                      function zB(A) {
                        var B = A || {};
                        return (B.uuid = i()), B;
                      }
                      function jB() {
                        var B;
                        return A.key
                          ? (B = A.key).substr(0, B.indexOf('/'))
                          : Q;
                      }
                      function KB(A, B) {
                        var Q,
                          g = B || 100;
                        return function (B) {
                          clearTimeout(Q),
                            (Q = setTimeout(function () {
                              A.apply(this, B);
                            }, g));
                        };
                      }
                      XQ([wB, rB, cB, sB]),
                        fA.appendChild(lB),
                        fA.appendChild(FB),
                        fA.appendChild(aB),
                        fA.appendChild(wB),
                        fA.appendChild(rB),
                        fA.appendChild(cB),
                        fA.appendChild(sB),
                        fA.appendChild(YA),
                        fA.appendChild(OA),
                        fA.appendChild(VA),
                        fA.appendChild(xA),
                        fA.appendChild(TA),
                        fA.appendChild(zA),
                        fA.appendChild(jA),
                        fA.classList.add('alanBtn'),
                        SQ() && dA.classList.add('mobile'),
                        xB(),
                        A &&
                          (A.alanAudio && (uA = A.alanAudio),
                          A.key
                            ? ((e = A.key),
                              $Q(),
                              kQ(uB(m)),
                              (window.tutorProject = window.alan.project(
                                A.key,
                                zB(A.authData),
                                A.host,
                                null,
                                {
                                  platform:
                                    'demo' === Q ? 'alanplayground' : null,
                                  userAgent: navigator.userAgent,
                                  appName: window.location.hostname,
                                },
                              )),
                              window.tutorProject.on('connectStatus', sQ),
                              window.tutorProject.on('options', cQ))
                            : (MB() ||
                                console.error(
                                  "The Alan Button key wasn't provided",
                                ),
                              kQ(uB())));
                      var PB = KB(function () {
                          iQ(!0, !0);
                        }, 400),
                        qB = window.innerHeight,
                        _B = window.orientation;
                      function $B() {
                        return /apple/i.test(navigator.vendor);
                      }
                      window.onresize = function () {
                        if (!MB() && !l) {
                          var A = Math.abs(qB - window.innerHeight),
                            B = (SQ() || HQ()) && $B(),
                            Q = _B !== window.orientation,
                            g = 0 !== A,
                            E =
                              B &&
                              (84 === A || 95 === A || 50 === A || 0 === A);
                          if (
                            ((_B = window.orientation),
                            (qB = window.innerHeight),
                            (Q || nA || E) && g)
                          ) {
                            var e,
                              n = dA.getBoundingClientRect();
                            (e = 0 === A ? n.top + 84 : n.top),
                              Q && 0 === window.orientation
                                ? YB()
                                : dA.style.setProperty(
                                    'top',
                                    gg(e) + 'px',
                                    'important',
                                  );
                          }
                          iQ(!1), PB({});
                        }
                      };
                      var AQ,
                        BQ = !1;
                      function QQ() {
                        if (navigator.permissions) {
                          var A = 'microphone';
                          navigator.permissions
                            .query({ name: A })
                            .then(function (A) {
                              'prompt' === A.state &&
                                (OQ()
                                  ? BQ ||
                                    ((BQ = !0),
                                    tQ({ overlay: !0, buttonUnderOverlay: !0 }))
                                  : tQ({ overlay: !0, buttonUnderOverlay: !0 }),
                                d({ micPermissionPrompt: !0 })),
                                'granted' !== A.state
                                  ? d({ buttonClicked: !0, micAllowed: !1 })
                                  : d({ buttonClicked: !0, micAllowed: !0 });
                            })
                            .catch(function () {
                              console.warn(
                                'Not possible to detect mic permissions',
                              ),
                                setTimeout(function () {
                                  return d({
                                    buttonClicked: !0,
                                    micAllowed: uA.isMicAllowed(),
                                  });
                                }, 300);
                            });
                        } else
                          setTimeout(function () {
                            return d({
                              buttonClicked: !0,
                              micAllowed: uA.isMicAllowed(),
                            });
                          }, 300);
                      }
                      function gQ(B) {
                        QQ(),
                          A.onBeforeMicStart && A.onBeforeMicStart(),
                          uA.on('micStart', DQ),
                          uA.on('micStop', UQ),
                          uA.on('micAllowed', lQ),
                          uA.on('audioRunning', FQ),
                          eQ(),
                          uA.on('micFail', uQ),
                          uA.on('playStart', GQ),
                          uA.on('playStop', hQ),
                          uA.on('command', NQ),
                          uA.start(B),
                          A.onMicStarted && A.onMicStarted();
                      }
                      function EQ() {
                        return new Promise(function (A, B) {
                          if (I) B({ err: z });
                          else if (fB()) B({ err: T });
                          else if (uA)
                            switch (K) {
                              case R:
                                try {
                                  gQ(A);
                                } catch (r) {
                                  (O = v), B({ err: V });
                                }
                                break;
                              case m:
                              case y:
                                window.tutorProject.on('connectStatus', Q);
                                break;
                              case k:
                                B({ err: x }),
                                  d({ buttonClicked: !0, micAllowed: !1 });
                                break;
                              case Y:
                              case p:
                              case N:
                              case b:
                                A(), d({ buttonClicked: !0, micAllowed: !0 });
                            }
                          else B({ err: j });
                          function Q(B) {
                            'authorized' === B &&
                              (window.tutorProject.off('connectStatus', Q),
                              gQ(A));
                          }
                        });
                      }
                      function eQ() {
                        uA.isAudioRunning() && d({ playAllowed: !0 });
                      }
                      function nQ(A) {
                        oQ(null),
                          SQ() || MB() || (A && tQ(A.popup ? A.popup : A));
                      }
                      function tQ(B, Q) {
                        if (!I && !DB && c) {
                          AQ = B;
                          var g = B.message,
                            E = B.buttonMarginInPopup,
                            e = B.overlay,
                            n = parseInt(gB, 10),
                            t = document.createElement('div'),
                            C = dA.getBoundingClientRect(),
                            o = 2147483647,
                            i = 12;
                          if (
                            ((DB = !0),
                            (t.id = 'alan-overlay-popup'),
                            t.classList.add('alan-overlay-popup'),
                            !0 !== B.buttonUnderOverlay &&
                              (fA.style.zIndex = o.toString()),
                            (t.style.zIndex = (o - 2).toString()),
                            B.preventClick && (fA.style.pointerEvents = 'none'),
                            B.style)
                          ) {
                            var w = document.createElement('style');
                            w.setAttribute('id', 'alan-stylesheet-popup'),
                              (w.type = 'text/css');
                            var r = 'alan-popup-' + a();
                            t.classList.add(r),
                              (w.innerHTML = B.style.replace(
                                /(\.-?[_a-zA-Z]+[_a-zA-Z0-9-:]*\s*\{)/gi,
                                '.'.concat(r, ' $&'),
                              )),
                              A.shadowDOM
                                ? A.shadowDOM.prepend(w)
                                : document
                                    .getElementsByTagName('head')[0]
                                    .appendChild(w);
                          }
                          t.classList.add(
                            $ ? 'alan-btn-lib__left' : 'alan-btn-lib__right',
                          ),
                            l
                              ? ((t.style.position = 'absolute'),
                                (t.style[$ ? 'left' : 'right'] =
                                  (-E || 0) + 'px'),
                                (t.style[AA ? 'top' : 'bottom'] =
                                  (E ? -E : n + i) + 'px'),
                                t.classList.add(
                                  AA
                                    ? 'alan-btn-lib__top'
                                    : 'alan-btn-lib__bottom',
                                ))
                              : ($
                                  ? (t.style.left = C.x + (-E || 0) + 'px')
                                  : (t.style.right = tB + (-E || 0) + 'px'),
                                C.top > 80
                                  ? (t.classList.add('alan-btn-lib__bottom'),
                                    (t.style.top =
                                      C.top + (E ? n + E : -i) + 'px'),
                                    t.style.setProperty(
                                      'transform',
                                      'translateY(-100%)',
                                      'important',
                                    ))
                                  : (t.classList.add('alan-btn-lib__top'),
                                    (t.style.top =
                                      C.top + (E ? -E : n + i) + 'px'))),
                            B.html
                              ? (t.innerHTML = B.html)
                              : g &&
                                (t.classList.add('alan-btn-lib__default-popup'),
                                (t.innerHTML =
                                  '<div class="alan-overlay-popup__body">' +
                                  g +
                                  '</div>'));
                          var s = document.createElement('div');
                          if (
                            ((s.id = 'alan-overlay-ok-btn'),
                            s.classList.add('alan-overlay-popup__ok'),
                            B.html && t.children[0]
                              ? t.children[0].appendChild(s)
                              : t.appendChild(s),
                            dA.appendChild(t),
                            e && !0 !== Q)
                          ) {
                            var F = document.createElement('div');
                            (F.id = 'alan-overlay'),
                              F.classList.add('alan-overlay'),
                              (F.style.zIndex = (o - 3).toString()),
                              dA.appendChild(F),
                              F.addEventListener('click', oQ);
                          }
                          s.addEventListener('click', CQ),
                            document.addEventListener('keyup', IQ);
                          var D = 'showPopup';
                          B.name && (D += ':' + B.name), u(D);
                        }
                      }
                      function CQ() {
                        oQ(null), d({ popupCloseClicked: !0 });
                      }
                      function IQ(A) {
                        27 === A.keyCode &&
                          (oQ(null), d({ popupCloseClicked: !0 }));
                      }
                      function oQ(A, B, Q) {
                        !0 !== B && (AQ = null);
                        var g = dA.querySelector('#alan-overlay'),
                          E = dA.querySelector('#alan-overlay-popup');
                        if (E) {
                          var e = dA.querySelector('#alan-overlay-ok-btn');
                          e && e.removeEventListener('click', oQ),
                            g &&
                              !0 !== Q &&
                              (g.remove(), g.removeEventListener('click', oQ)),
                            E && E.remove(),
                            document.removeEventListener('keyup', IQ),
                            (fA.style.zIndex = CB),
                            (fA.style.pointerEvents = 'auto'),
                            (DB = !1);
                        }
                      }
                      function iQ(A, B) {
                        var Q = dA.querySelector('#alan-overlay-popup');
                        Q &&
                          ((Q.style.visibility = A ? 'visible' : 'hidden'),
                          A && (oQ(null, !0, B), AQ && tQ(AQ, B)));
                      }
                      function aQ(B) {
                        var Q = '';
                        w ||
                          eA ||
                          ((BA = !0),
                          A.hideRecognizedText ||
                            (-1 ===
                              KA.classList.value.indexOf(
                                'alanBtn-text-appearing',
                              ) &&
                              ((KA.style.opacity = '1'),
                              KA.classList.add('alan-btn-lib__with-text'),
                              KA.classList.add('alanBtn-text-appearing'),
                              KA.classList.remove('alanBtn-text-disappearing')),
                            B.text &&
                              ((Q = B.text).length > 200 &&
                                (Q = Q.substr(0, 200)),
                              (PA.innerHTML = Q)),
                            KA.classList.contains(
                              'alan-btn-lib__absolute-positioned',
                            ) &&
                              (Q.length < 33
                                ? ((KA.style.whiteSpace = 'nowrap'),
                                  (KA.style.minWidth = 'auto'))
                                : ((KA.style.minWidth = '236px'),
                                  (KA.style.whiteSpace = 'normal'))),
                            Q.length > 60 && Q.length <= 80
                              ? KA.classList.add(
                                  'alanBtn-recognised-text-holder-long',
                                )
                              : Q.length > 80
                              ? KA.classList.add(
                                  'alanBtn-recognised-text-holder-super-long',
                                )
                              : (KA.classList.remove(
                                  'alanBtn-recognised-text-holder-long',
                                ),
                                KA.classList.remove(
                                  'alanBtn-recognised-text-holder-super-long',
                                )),
                            wQ(Q)));
                      }
                      function wQ(B) {
                        SQ() || A.hideRecognizedText || (PA.innerText = B);
                      }
                      function rQ(B, Q) {
                        if (!A.hideRecognizedText && BA) {
                          if (!0 === Q)
                            return (
                              (KA.style.opacity = '0'),
                              KA.classList.remove('alanBtn-text-appearing'),
                              void (BA = !1)
                            );
                          KA.classList.add('alanBtn-text-disappearing'),
                            KA.classList.remove('alanBtn-text-appearing'),
                            (BA = !1),
                            setTimeout(function () {
                              (PA.innerHTML = ''),
                                KA.classList.remove(
                                  'alanBtn-recognised-text-holder-long',
                                ),
                                KA.classList.remove(
                                  'alanBtn-recognised-text-holder-super-long',
                                ),
                                KA.classList.remove('alan-btn-lib__with-text');
                            }, B || 810);
                        }
                      }
                      function cQ(B) {
                        B && B.web
                          ? ((D = B.web.keepButtonPositionAfterDnD) || tg(),
                            RB(B.web.keepButtonPositionAfterDnD))
                          : RB(),
                          B && B.web && !0 === B.web.hideS2TPanel ? jQ() : zQ(),
                          B && B.web && !0 === B.web.popupEnabled
                            ? (c = !0)
                            : ((c = !1), oQ()),
                          B &&
                            B.web &&
                            void 0 !== B.web.timeout &&
                            ((gA = B.web.timeout), cA()),
                          B && B.web && KQ(B.web.btnOptions),
                          PQ(B),
                          'tutor' !== A.mode &&
                            B &&
                            B.web &&
                            bB(B.web.buttonSize || dB[Q].btnSize),
                          t &&
                            B &&
                            localStorage.setItem(vQ(), JSON.stringify(B)),
                          B &&
                            B.web &&
                            void 0 !== B.web.playReadyToListenSound &&
                            qQ(B.web.playReadyToListenSound),
                          B && B.web && !0 === B.web.hidden ? TQ() : xQ();
                      }
                      function sQ(B) {
                        A.onConnectionStatus && A.onConnectionStatus(B),
                          'disconnected' === B
                            ? P !== y && kQ(uB(m))
                            : 'authorized' === B && kQ(P || uB());
                      }
                      function lQ() {
                        d({ micAllowed: !0 });
                      }
                      function FQ() {
                        eQ();
                      }
                      function DQ() {
                        if (F) return (F = !1), void uA.start();
                        oQ(null),
                          kQ(Y),
                          yQ(),
                          (_ = !0),
                          window.tutorProject &&
                            (window.tutorProject.on('text', RQ),
                            window.tutorProject.on('parsed', YQ),
                            window.tutorProject.on('recognized', pQ),
                            window.tutorProject.on('connectStatus', sQ),
                            window.tutorProject.on('options', cQ));
                      }
                      function UQ() {
                        bQ(),
                          (q = !1),
                          uA.off('micStart', DQ),
                          uA.off('micStop', UQ),
                          uA.off('micAllowed', lQ),
                          uA.off('audioRunning', FQ),
                          uA.off('micFail', uQ),
                          uA.off('playStart', GQ),
                          uA.off('playStop', hQ),
                          uA.off('command', NQ),
                          rQ(),
                          kQ(R),
                          (_ = !1),
                          window.tutorProject &&
                            (window.tutorProject.off('text', RQ),
                            window.tutorProject.off('parsed', YQ),
                            window.tutorProject.off('recognized', pQ),
                            window.tutorProject.off('connectStatus', sQ),
                            window.tutorProject.off('options', cQ)),
                          A.onMicStopped && A.onMicStopped();
                      }
                      function uQ(A) {
                        UQ(),
                          A &&
                            (oQ(null),
                            'NotAllowedError' === A.name
                              ? kQ(k)
                              : 'SecurityError' === A.name
                              ? (kQ(X),
                                setTimeout(function () {
                                  dQ(S);
                                }, 300))
                              : console.error(A.name + ' ' + A.message));
                      }
                      function dQ(A) {
                        var B = dA.querySelector('#alan-alert-popup');
                        if (!B) {
                          var Q = document.createElement('div');
                          B = document.createElement('div');
                          var g = 2147483647;
                          (Q.id = 'alan-overlay-for-alert'),
                            Q.classList.add('alan-overlay-for-alert'),
                            (B.id = 'alan-alert-popup'),
                            B.classList.add('alan-alert-popup'),
                            (fA.style.zIndex = g.toString()),
                            (Q.style.zIndex = (g - 3).toString()),
                            (B.style.zIndex = (g - 2).toString()),
                            (B.innerHTML = A);
                          var E = document.createElement('div');
                          (E.id = 'alan-alert-popup-close-btn'),
                            E.classList.add('alan-alert-popup__close-btn'),
                            B.appendChild(E),
                            dA.appendChild(B),
                            dA.appendChild(Q),
                            E.addEventListener('click', fQ),
                            Q.addEventListener('click', fQ),
                            document.addEventListener('keyup', MQ);
                        }
                      }
                      function MQ(A) {
                        27 === A.keyCode && fQ();
                      }
                      function fQ() {
                        var A = dA.querySelector('#alan-overlay-for-alert'),
                          B = dA.querySelector('#alan-alert-popup'),
                          Q = dA.querySelector('#alan-alert-popup-close-btn');
                        Q && Q.removeEventListener('click', oQ),
                          A && (A.remove(), A.removeEventListener('click', oQ)),
                          B && B.remove(),
                          (fA.style.zIndex = CB),
                          (fA.style.pointerEvents = 'auto'),
                          document.removeEventListener('keyup', MQ);
                      }
                      function GQ(A) {
                        console.log('BTN: play start'), (q = !0), kQ(p), f();
                      }
                      function hQ(A) {
                        console.log('BTN: play stop'),
                          (q = !1),
                          yQ(),
                          kQ(Y),
                          f();
                      }
                      function RQ(B) {
                        A.onEvent &&
                          A.onEvent(Object.assign(B, { name: 'text' })),
                          f();
                      }
                      function YQ(B) {
                        A.onEvent &&
                          A.onEvent(Object.assign(B, { name: 'parsed' })),
                          f(),
                          aQ(B);
                      }
                      function pQ(B) {
                        A.onEvent &&
                          A.onEvent(Object.assign(B, { name: 'recognized' })),
                          !0 === B.final ? kQ(b) : kQ(N),
                          aQ(B),
                          f();
                      }
                      function NQ(B) {
                        A.onCommand && A.onCommand(B.data), _ && kQ(Y), f();
                      }
                      function bQ() {
                        qA ||
                          ((BB.currentTime = 0),
                          BB.play().catch(function () {
                            console.log(
                              "No deactivation sound, because the user didn't interact with the button",
                            );
                          }));
                      }
                      function mQ() {
                        QA &&
                          ((QB.loop = !0),
                          (QB.muted = !0),
                          QB.play().catch(function (A) {
                            console.log(A);
                          }));
                      }
                      function yQ() {
                        ($A = !1),
                          QA &&
                            (uA.skipExternalSounds(!0),
                            _A ||
                              ((QB.currentTime = 0),
                              (QB.muted = !1),
                              (QB.loop = !1),
                              QB.play().catch(function (A) {
                                console.log(A);
                              })));
                      }
                      function JQ(A, B) {
                        A && A.src && (A.style.opacity = 1);
                        for (var Q = 0; Q < B.length; Q++)
                          B[Q].style.opacity = 0;
                      }
                      function kQ(B) {
                        A.onButtonState && A.onButtonState(h[B]);
                        var Q = [],
                          g = 0;
                        if (
                          (B !== m && (P = B),
                          (O = null),
                          B === R
                            ? ((fA.style.animation = ''),
                              (YA.style.animation = ''),
                              (OA.style.animation = ''),
                              aB.classList.remove('super-hidden'),
                              (aB.style.opacity = HB),
                              (lB.style.animation = ''),
                              (FB.style.animation = ''),
                              (lB.style.opacity = '0'),
                              (FB.style.opacity = '0'),
                              LQ(R),
                              (YA.style.opacity = '1'),
                              (OA.style.opacity = '0'),
                              JQ(pA, [NA, bA, mA]),
                              XQ([wB, rB, cB, sB]))
                            : B === Y
                            ? ((fA.style.animation = sA),
                              (YA.style.animation = lA),
                              wB.classList.remove('super-hidden'),
                              (wB.style.opacity = HB),
                              (lB.style.opacity = '1'),
                              (FB.style.opacity = '1'),
                              LQ(Y),
                              (YA.style.opacity = '1'),
                              NA.src ||
                                ((OA.style.animation = FA),
                                (OA.style.opacity = '1')),
                              JQ(NA, [pA, bA, mA]),
                              XQ([rB, cB, sB]))
                            : B === p
                            ? (rQ(),
                              (fA.style.animation = sA),
                              rB.classList.remove('super-hidden'),
                              (rB.style.opacity = HB),
                              (lB.style.opacity = '1'),
                              (FB.style.opacity = '1'),
                              LQ(p),
                              JQ(mA, [pA, NA, bA]),
                              XQ([aB, wB, cB, sB]))
                            : B === N
                            ? ((fA.style.animation = sA),
                              cB.classList.remove('super-hidden'),
                              (cB.style.opacity = HB),
                              (lB.style.opacity = '1'),
                              (FB.style.opacity = '1'),
                              LQ(N),
                              (YA.style.opacity = '1'),
                              bA.src || (OA.style.opacity = '1'),
                              XQ([aB, wB, rB, sB]),
                              JQ(bA, [pA, NA, mA]))
                            : B === b &&
                              ((fA.style.animation = sA),
                              sB.classList.remove('super-hidden'),
                              (sB.style.opacity = HB),
                              (lB.style.opacity = '1'),
                              (FB.style.opacity = '1'),
                              LQ(b),
                              (YA.style.opacity = '1'),
                              bA.src
                                ? (OA.style.opacity = '0')
                                : (OA.style.opacity = '1'),
                              JQ(bA, [pA, NA, mA]),
                              XQ([aB, wB, rB, cB])),
                          B === p
                            ? ((OA.style.opacity = '0'),
                              (OA.style.backgroundSize = '0% 0%'),
                              mA.src ||
                                ((VA.style.opacity = '1'),
                                (VA.style.backgroundSize = '100% 100%')))
                            : ((VA.style.opacity = '0'),
                              (VA.style.backgroundSize = '0% 0%'),
                              (OA.style.backgroundSize = '100% 100%')),
                          B === R
                            ? OA.classList.add('triangleMicIconBg-default')
                            : OA.classList.remove('triangleMicIconBg-default'),
                          (Q = [yA, JA, kA, ZA, XA, LA, vA, SA, HA, WA]),
                          (B === Y && !NA.src) ||
                            (B === N && !bA.src) ||
                            (B === p && !mA.src) ||
                            (B === b && !bA.src))
                        ) {
                          if ('' === yA.style.animationName)
                            for (g = 0; g < Q.length; g++)
                              (Q[g].style.opacity = 0 === g ? 1 : 0),
                                (Q[g].style.animationName =
                                  'logo-state-' + (g + 1) + '-animation');
                          pA.style.opacity = '0';
                        } else
                          for (g = 0; g < Q.length; g++)
                            (Q[g].style.opacity = 0),
                              (Q[g].style.animationName = '');
                        B === J || B === k || B === Z || B === X
                          ? (B === J
                              ? (dA.classList.add('alan-btn-low-volume'),
                                (O = H))
                              : B === k
                              ? (dA.classList.add('alan-btn-permission-denied'),
                                (O = L),
                                console.warn(L))
                              : (B !== Z && B !== X) ||
                                (dA.classList.add('alan-btn-no-voice-support'),
                                B === Z ? (O = v) : B === X && (O = S)),
                            B === Z
                              ? ((zA.style.opacity = '1'),
                                (TA.style.opacity = '0'))
                              : ((zA.style.opacity = '0'),
                                (TA.style.opacity = '1')),
                            JQ(null, [pA, NA, bA, mA]),
                            (YA.style.opacity = '0'),
                            (OA.style.opacity = '0'),
                            (xA.style.opacity = '0'),
                            (jA.style.opacity = '0'),
                            (lB.style.animation = ''),
                            (FB.style.animation = ''),
                            (lB.style.opacity = '0'),
                            (FB.style.opacity = '0'))
                          : B === m || B === y
                          ? (B === m &&
                              dA.classList.add('alan-btn-disconnected'),
                            B === y &&
                              (dA.classList.add('alan-btn-offline'), (O = W)),
                            (OA.style.opacity = '0'),
                            (TA.style.opacity = '0'),
                            (lB.style.animation = ''),
                            (FB.style.animation = ''),
                            (lB.style.opacity = '0'),
                            (FB.style.opacity = '0'),
                            JQ(null, [pA, NA, bA, mA]),
                            B === m
                              ? ((YA.style.opacity = '0'),
                                (xA.style.opacity = '1'))
                              : ((YA.style.opacity = '0'),
                                (xA.style.opacity = '0'),
                                (jA.style.opacity = '1')))
                          : ((TA.style.opacity = '0'),
                            (jA.style.opacity = '0'),
                            (xA.style.opacity = '0'),
                            dA.classList.remove('alan-btn-low-volume'),
                            dA.classList.remove('alan-btn-permission-denied'),
                            dA.classList.remove('alan-btn-disconnected'),
                            dA.classList.remove('alan-btn-offline'),
                            dA.classList.remove('alan-btn-no-voice-support')),
                          (K = B);
                      }
                      function ZQ(A) {
                        (A.style.transition = 'all 0.4s linear'),
                          (A.style.position = 'absolute'),
                          (A.style.top = '0px'),
                          (A.style.left = '0px'),
                          (A.style.width = '100%'),
                          (A.style.height = '100%'),
                          (A.style.borderRadius = '50%'),
                          (A.style.zIndex = iB),
                          (A.style.backgroundPosition = '0 0'),
                          (A.style.opacity = 0),
                          (A.style.opacity = 0),
                          (A.style.transition = 'opacity 300ms ease-in-out'),
                          (A.style.animation = DA),
                          (A.style.display = 'block');
                      }
                      function XQ(A) {
                        for (var B = 0; B < A.length; B++)
                          (A[B].style.opacity = WB),
                            A[B].classList.add('super-hidden');
                      }
                      function LQ(A) {
                        for (
                          var B = [lB, FB],
                            Q = A || R,
                            g = [
                              'alanBtn-oval-bg-' + R,
                              'alanBtn-oval-bg-' + Y,
                              'alanBtn-oval-bg-' + N,
                              'alanBtn-oval-bg-' + b,
                              'alanBtn-oval-bg-' + p,
                            ],
                            E = 0;
                          E < B.length;
                          E++
                        ) {
                          B[E].classList.add('alanBtn-oval-bg-' + Q);
                          for (var e = 0; e < g.length; e++)
                            B[E].classList.remove(g[e]);
                        }
                      }
                      function vQ() {
                        var B = '';
                        return (
                          A && A.key && (B = A.key), 'alan-btn-options-' + B
                        );
                      }
                      function SQ() {
                        return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent,
                        );
                      }
                      function HQ() {
                        return (
                          navigator.maxTouchPoints &&
                          navigator.maxTouchPoints > 2 &&
                          /MacIntel/.test(navigator.platform)
                        );
                      }
                      function WQ() {
                        var A = !1,
                          B = window.location.protocol,
                          Q = window.location.hostname;
                        return (
                          'https:' === B && (A = !0),
                          OQ() && (A = !0),
                          'http:' === B &&
                            (Q.indexOf('localhost') > -1 ||
                              Q.indexOf('127.0.0.1') > -1) &&
                            (A = !0),
                          A
                        );
                      }
                      function OQ() {
                        return 'file:' === window.location.protocol;
                      }
                      function VQ() {
                        var A,
                          B,
                          Q = !1;
                        return (
                          (A =
                            navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia ||
                            (navigator.mediaDevices &&
                              navigator.mediaDevices.getUserMedia)),
                          (B =
                            window.AudioContext ||
                            window.webkitAudioContext ||
                            window.mozAudioContext),
                          A && B && (Q = !0),
                          Q
                        );
                      }
                      function xQ() {
                        (dA.innerHTML = ''),
                          KA.appendChild(PA),
                          dA.appendChild(KA),
                          dA.appendChild(fA),
                          (I = !1),
                          d({ buttonReady: !0 });
                      }
                      function TQ() {
                        MB() || (uA.stop(), (dA.innerHTML = ''), (I = !0));
                      }
                      function zQ() {
                        w = !1;
                      }
                      function jQ() {
                        (w = !0), rQ();
                      }
                      function KQ(A) {
                        A ? xB(A) : xB();
                      }
                      function PQ(A) {
                        A &&
                          A.web &&
                          (!A.web.logoUrl ||
                          A.web.logoIdle ||
                          A.web.logoListen ||
                          A.web.logoProcess ||
                          A.web.logoReply
                            ? (A.web.logoIdle
                                ? (pA.src = A.web.logoIdle)
                                : (pA.src = GA),
                              A.web.logoListen
                                ? (NA.src = A.web.logoListen)
                                : (NA.removeAttribute('src'),
                                  (NA.style.opacity = '0')),
                              A.web.logoProcess
                                ? (bA.src = A.web.logoProcess)
                                : (bA.removeAttribute('src'),
                                  (bA.style.opacity = '0')),
                              A.web.logoReply
                                ? (mA.src = A.web.logoReply)
                                : (mA.removeAttribute('src'),
                                  (mA.style.opacity = '0')))
                            : ((NA.src = A.web.logoUrl),
                              (bA.src = A.web.logoUrl),
                              (mA.src = A.web.logoUrl)));
                      }
                      function qQ(A) {
                        QA = A;
                      }
                      uA.on('popup', nQ),
                        fA.addEventListener('click', function (A) {
                          if (!tA && rA)
                            if (
                              (oQ(null),
                              n || ((n = !0), d({ firstClick: !0 })),
                              O)
                            )
                              O === L
                                ? (d({ buttonClicked: !0, micAllowed: !1 }),
                                  dQ(O))
                                : dQ(O);
                            else {
                              if (!uA)
                                throw new Error(
                                  'No alan audio instance was provided',
                                );
                              'default' === K ? (mQ(), EQ()) : uA.stop(),
                                this.blur();
                            }
                        }),
                        dA.classList.add('alanBtn-root'),
                        dA.classList.add('alan-' + jB());
                      var _Q = null;
                      if (MB()) xQ();
                      else if (t)
                        try {
                          $Q();
                        } catch (r) {}
                      function $Q() {
                        if (t)
                          try {
                            (_Q = JSON.parse(localStorage.getItem(vQ()))) &&
                              _Q.web &&
                              _Q.web.btnOptions &&
                              KQ(_Q.web.btnOptions);
                          } catch (r) {}
                      }
                      function Ag(A) {
                        var B,
                          Q = A.touches ? A.touches[0] : A;
                        if (
                          Q &&
                          rA &&
                          (void 0 === A.buttons || 1 === A.buttons) &&
                          ((eA = !0),
                          (dA.style.transition = '0ms'),
                          (B = dA.getBoundingClientRect()))
                        ) {
                          var g = B.x;
                          CA ||
                            (CA = $
                              ? g
                              : window.innerWidth -
                                g -
                                gB -
                                (window.innerWidth -
                                  document.documentElement.clientWidth)),
                            (IA = g),
                            (EA = [Q.clientX, Q.clientY]),
                            (G = parseInt(B.top, 10));
                        }
                      }
                      function Bg(A) {
                        var B,
                          Q,
                          g = A.touches ? A.touches[0] : A;
                        if (g)
                          return eA
                            ? (iQ(!1),
                              rQ(0, !0),
                              A.preventDefault(),
                              tA ||
                                (dA.style.setProperty(
                                  'left',
                                  IA + 'px',
                                  'important',
                                ),
                                dA.style.setProperty(
                                  'right',
                                  'auto',
                                  'important',
                                ),
                                dA.style.setProperty(
                                  'top',
                                  G + 'px',
                                  'important',
                                ),
                                dA.style.setProperty(
                                  'bottom',
                                  'auto',
                                  'important',
                                )),
                              (tA = !0),
                              (B = IA + g.clientX - EA[0]),
                              (Q = G + g.clientY - EA[1]),
                              (iA = g.clientX - EA[0]),
                              (aA = g.clientY - EA[1]),
                              dA.style.setProperty(
                                'left',
                                Eg(B) + 'px',
                                'important',
                              ),
                              dA.style.setProperty(
                                'top',
                                gg(Q) + 'px',
                                'important',
                              ),
                              A.preventDefault(),
                              !1)
                            : void 0;
                      }
                      function Qg(A) {
                        var B, Q;
                        if (eA) {
                          if (!(A.changedTouches ? A.changedTouches[0] : A))
                            return;
                          if (
                            ((eA = !1),
                            (dA.style.transition = wA),
                            (B = parseInt(dA.style.left, 10)),
                            (Q = parseInt(dA.style.top, 10)),
                            Math.abs(iA) < 15 && Math.abs(aA) < 15)
                          )
                            return void setTimeout(function () {
                              (tA = !1), (rA = !0);
                            }, 300);
                          B <= window.innerWidth / 2
                            ? (dA.style.setProperty(
                                'left',
                                CA + 'px',
                                'important',
                              ),
                              eg('to-left'),
                              ($ = !0),
                              pB(KA, Q),
                              (nA = !0),
                              setTimeout(function () {
                                iQ(!0), ng('left', CA, Q);
                              }, oA))
                            : (dA.style.setProperty(
                                'left',
                                window.innerWidth -
                                  CA -
                                  gB -
                                  (window.innerWidth -
                                    document.documentElement.clientWidth) +
                                  'px',
                                'important',
                              ),
                              setTimeout(function () {
                                dA.style.setProperty(
                                  'right',
                                  CA + 'px',
                                  'important',
                                ),
                                  eg('to-right'),
                                  ($ = !1),
                                  pB(KA, Q),
                                  ng('right', CA, Q),
                                  (nA = !0),
                                  (rA = !0),
                                  iQ(!0);
                              }, oA)),
                            setTimeout(function () {
                              tA = !1;
                            }, 300);
                        }
                      }
                      function gg(A) {
                        var B = 10;
                        return A < B
                          ? B
                          : A > window.innerHeight - gB - B
                          ? window.innerHeight - gB - B
                          : A;
                      }
                      function Eg(A) {
                        var B = 10;
                        return A < B
                          ? B
                          : A > window.innerWidth - gB - B
                          ? window.innerWidth - gB - B
                          : A;
                      }
                      function eg(A) {
                        'to-left' === A
                          ? dA.style.setProperty('right', 'auto', 'important')
                          : dA.style.setProperty('left', 'auto', 'important'),
                          NB();
                      }
                      function ng(A, B, Q) {
                        if (D && C) {
                          var g = jB();
                          sessionStorage.setItem(
                            'alan-btn-saved-orientation-' + g,
                            A,
                          ),
                            sessionStorage.setItem(
                              'alan-btn-saved-x-pos-' + g,
                              Math.floor(B).toString(),
                            ),
                            sessionStorage.setItem(
                              'alan-btn-saved-y-pos-' + g,
                              Math.floor(Q).toString(),
                            );
                        }
                      }
                      function tg() {
                        if (C) {
                          var A = jB();
                          sessionStorage.removeItem(
                            'alan-btn-saved-orientation-' + A,
                          ),
                            sessionStorage.removeItem(
                              'alan-btn-saved-x-pos-' + A,
                            ),
                            sessionStorage.removeItem(
                              'alan-btn-saved-y-pos-' + A,
                            );
                        }
                      }
                      function Cg() {
                        if (C) {
                          var A = jB(),
                            B = {
                              orientation: sessionStorage.getItem(
                                'alan-btn-saved-orientation-' + A,
                              ),
                              x: +sessionStorage.getItem(
                                'alan-btn-saved-x-pos-' + A,
                              ),
                              y: +sessionStorage.getItem(
                                'alan-btn-saved-y-pos-' + A,
                              ),
                            };
                          return B.orientation ? B : null;
                        }
                        return null;
                      }
                      return (
                        A.rootEl || MA.appendChild(dA),
                        s ||
                          (fA.addEventListener('mousedown', Ag, !0),
                          fA.addEventListener('touchstart', Ag, {
                            passive: !1,
                          }),
                          document.addEventListener('mouseup', Qg, !0),
                          document.addEventListener('touchend', Qg, {
                            passive: !1,
                          }),
                          document.addEventListener('mousemove', Bg, !0),
                          document.addEventListener('touchmove', Bg, {
                            passive: !1,
                          })),
                        g
                      );
                    }
                    (A.alanBtn = w), (A.alanBtn.getDebugInfo = o);
                  })(window),
                  alanBtn
                );
              })
                ? Q.apply(B, g)
                : Q) || (A.exports = E);
      },
      4569: function (A, B, Q) {
        A.exports = Q(8036);
      },
      3381: function (A, B, Q) {
        'use strict';
        var g = Q(3589),
          E = Q(7297),
          e = Q(9301),
          n = Q(9774),
          t = Q(1804),
          C = Q(9145),
          I = Q(5411),
          o = Q(6467),
          i = Q(221),
          a = Q(9346);
        A.exports = function (A) {
          return new Promise(function (B, Q) {
            var w,
              r = A.data,
              c = A.headers,
              s = A.responseType;
            function l() {
              A.cancelToken && A.cancelToken.unsubscribe(w),
                A.signal && A.signal.removeEventListener('abort', w);
            }
            g.isFormData(r) && delete c['Content-Type'];
            var F = new XMLHttpRequest();
            if (A.auth) {
              var D = A.auth.username || '',
                U = A.auth.password
                  ? unescape(encodeURIComponent(A.auth.password))
                  : '';
              c.Authorization = 'Basic ' + btoa(D + ':' + U);
            }
            var u = t(A.baseURL, A.url);
            function d() {
              if (F) {
                var g =
                    'getAllResponseHeaders' in F
                      ? C(F.getAllResponseHeaders())
                      : null,
                  e = {
                    data:
                      s && 'text' !== s && 'json' !== s
                        ? F.response
                        : F.responseText,
                    status: F.status,
                    statusText: F.statusText,
                    headers: g,
                    config: A,
                    request: F,
                  };
                E(
                  function (A) {
                    B(A), l();
                  },
                  function (A) {
                    Q(A), l();
                  },
                  e,
                ),
                  (F = null);
              }
            }
            if (
              (F.open(
                A.method.toUpperCase(),
                n(u, A.params, A.paramsSerializer),
                !0,
              ),
              (F.timeout = A.timeout),
              'onloadend' in F
                ? (F.onloadend = d)
                : (F.onreadystatechange = function () {
                    F &&
                      4 === F.readyState &&
                      (0 !== F.status ||
                        (F.responseURL &&
                          0 === F.responseURL.indexOf('file:'))) &&
                      setTimeout(d);
                  }),
              (F.onabort = function () {
                F &&
                  (Q(o('Request aborted', A, 'ECONNABORTED', F)), (F = null));
              }),
              (F.onerror = function () {
                Q(o('Network Error', A, null, F)), (F = null);
              }),
              (F.ontimeout = function () {
                var B = 'timeout of ' + A.timeout + 'ms exceeded',
                  g = A.transitional || i.transitional;
                A.timeoutErrorMessage && (B = A.timeoutErrorMessage),
                  Q(
                    o(
                      B,
                      A,
                      g.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                      F,
                    ),
                  ),
                  (F = null);
              }),
              g.isStandardBrowserEnv())
            ) {
              var M =
                (A.withCredentials || I(u)) && A.xsrfCookieName
                  ? e.read(A.xsrfCookieName)
                  : void 0;
              M && (c[A.xsrfHeaderName] = M);
            }
            'setRequestHeader' in F &&
              g.forEach(c, function (A, B) {
                'undefined' === typeof r && 'content-type' === B.toLowerCase()
                  ? delete c[B]
                  : F.setRequestHeader(B, A);
              }),
              g.isUndefined(A.withCredentials) ||
                (F.withCredentials = !!A.withCredentials),
              s && 'json' !== s && (F.responseType = A.responseType),
              'function' === typeof A.onDownloadProgress &&
                F.addEventListener('progress', A.onDownloadProgress),
              'function' === typeof A.onUploadProgress &&
                F.upload &&
                F.upload.addEventListener('progress', A.onUploadProgress),
              (A.cancelToken || A.signal) &&
                ((w = function (A) {
                  F &&
                    (Q(!A || (A && A.type) ? new a('canceled') : A),
                    F.abort(),
                    (F = null));
                }),
                A.cancelToken && A.cancelToken.subscribe(w),
                A.signal &&
                  (A.signal.aborted
                    ? w()
                    : A.signal.addEventListener('abort', w))),
              r || (r = null),
              F.send(r);
          });
        };
      },
      8036: function (A, B, Q) {
        'use strict';
        var g = Q(3589),
          E = Q(4049),
          e = Q(3773),
          n = Q(777);
        var t = (function A(B) {
          var Q = new e(B),
            t = E(e.prototype.request, Q);
          return (
            g.extend(t, e.prototype, Q),
            g.extend(t, Q),
            (t.create = function (Q) {
              return A(n(B, Q));
            }),
            t
          );
        })(Q(221));
        (t.Axios = e),
          (t.Cancel = Q(9346)),
          (t.CancelToken = Q(6857)),
          (t.isCancel = Q(5517)),
          (t.VERSION = Q(7600).version),
          (t.all = function (A) {
            return Promise.all(A);
          }),
          (t.spread = Q(8089)),
          (t.isAxiosError = Q(9580)),
          (A.exports = t),
          (A.exports.default = t);
      },
      9346: function (A) {
        'use strict';
        function B(A) {
          this.message = A;
        }
        (B.prototype.toString = function () {
          return 'Cancel' + (this.message ? ': ' + this.message : '');
        }),
          (B.prototype.__CANCEL__ = !0),
          (A.exports = B);
      },
      6857: function (A, B, Q) {
        'use strict';
        var g = Q(9346);
        function E(A) {
          if ('function' !== typeof A)
            throw new TypeError('executor must be a function.');
          var B;
          this.promise = new Promise(function (A) {
            B = A;
          });
          var Q = this;
          this.promise.then(function (A) {
            if (Q._listeners) {
              var B,
                g = Q._listeners.length;
              for (B = 0; B < g; B++) Q._listeners[B](A);
              Q._listeners = null;
            }
          }),
            (this.promise.then = function (A) {
              var B,
                g = new Promise(function (A) {
                  Q.subscribe(A), (B = A);
                }).then(A);
              return (
                (g.cancel = function () {
                  Q.unsubscribe(B);
                }),
                g
              );
            }),
            A(function (A) {
              Q.reason || ((Q.reason = new g(A)), B(Q.reason));
            });
        }
        (E.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (E.prototype.subscribe = function (A) {
            this.reason
              ? A(this.reason)
              : this._listeners
              ? this._listeners.push(A)
              : (this._listeners = [A]);
          }),
          (E.prototype.unsubscribe = function (A) {
            if (this._listeners) {
              var B = this._listeners.indexOf(A);
              -1 !== B && this._listeners.splice(B, 1);
            }
          }),
          (E.source = function () {
            var A;
            return {
              token: new E(function (B) {
                A = B;
              }),
              cancel: A,
            };
          }),
          (A.exports = E);
      },
      5517: function (A) {
        'use strict';
        A.exports = function (A) {
          return !(!A || !A.__CANCEL__);
        };
      },
      3773: function (A, B, Q) {
        'use strict';
        var g = Q(3589),
          E = Q(9774),
          e = Q(7470),
          n = Q(2733),
          t = Q(777),
          C = Q(7835),
          I = C.validators;
        function o(A) {
          (this.defaults = A),
            (this.interceptors = { request: new e(), response: new e() });
        }
        (o.prototype.request = function (A) {
          'string' === typeof A
            ? ((A = arguments[1] || {}).url = arguments[0])
            : (A = A || {}),
            (A = t(this.defaults, A)).method
              ? (A.method = A.method.toLowerCase())
              : this.defaults.method
              ? (A.method = this.defaults.method.toLowerCase())
              : (A.method = 'get');
          var B = A.transitional;
          void 0 !== B &&
            C.assertOptions(
              B,
              {
                silentJSONParsing: I.transitional(I.boolean),
                forcedJSONParsing: I.transitional(I.boolean),
                clarifyTimeoutError: I.transitional(I.boolean),
              },
              !1,
            );
          var Q = [],
            g = !0;
          this.interceptors.request.forEach(function (B) {
            ('function' === typeof B.runWhen && !1 === B.runWhen(A)) ||
              ((g = g && B.synchronous), Q.unshift(B.fulfilled, B.rejected));
          });
          var E,
            e = [];
          if (
            (this.interceptors.response.forEach(function (A) {
              e.push(A.fulfilled, A.rejected);
            }),
            !g)
          ) {
            var o = [n, void 0];
            for (
              Array.prototype.unshift.apply(o, Q),
                o = o.concat(e),
                E = Promise.resolve(A);
              o.length;

            )
              E = E.then(o.shift(), o.shift());
            return E;
          }
          for (var i = A; Q.length; ) {
            var a = Q.shift(),
              w = Q.shift();
            try {
              i = a(i);
            } catch (r) {
              w(r);
              break;
            }
          }
          try {
            E = n(i);
          } catch (r) {
            return Promise.reject(r);
          }
          for (; e.length; ) E = E.then(e.shift(), e.shift());
          return E;
        }),
          (o.prototype.getUri = function (A) {
            return (
              (A = t(this.defaults, A)),
              E(A.url, A.params, A.paramsSerializer).replace(/^\?/, '')
            );
          }),
          g.forEach(['delete', 'get', 'head', 'options'], function (A) {
            o.prototype[A] = function (B, Q) {
              return this.request(
                t(Q || {}, { method: A, url: B, data: (Q || {}).data }),
              );
            };
          }),
          g.forEach(['post', 'put', 'patch'], function (A) {
            o.prototype[A] = function (B, Q, g) {
              return this.request(t(g || {}, { method: A, url: B, data: Q }));
            };
          }),
          (A.exports = o);
      },
      7470: function (A, B, Q) {
        'use strict';
        var g = Q(3589);
        function E() {
          this.handlers = [];
        }
        (E.prototype.use = function (A, B, Q) {
          return (
            this.handlers.push({
              fulfilled: A,
              rejected: B,
              synchronous: !!Q && Q.synchronous,
              runWhen: Q ? Q.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (E.prototype.eject = function (A) {
            this.handlers[A] && (this.handlers[A] = null);
          }),
          (E.prototype.forEach = function (A) {
            g.forEach(this.handlers, function (B) {
              null !== B && A(B);
            });
          }),
          (A.exports = E);
      },
      1804: function (A, B, Q) {
        'use strict';
        var g = Q(4044),
          E = Q(9549);
        A.exports = function (A, B) {
          return A && !g(B) ? E(A, B) : B;
        };
      },
      6467: function (A, B, Q) {
        'use strict';
        var g = Q(6460);
        A.exports = function (A, B, Q, E, e) {
          var n = new Error(A);
          return g(n, B, Q, E, e);
        };
      },
      2733: function (A, B, Q) {
        'use strict';
        var g = Q(3589),
          E = Q(2693),
          e = Q(5517),
          n = Q(221),
          t = Q(9346);
        function C(A) {
          if (
            (A.cancelToken && A.cancelToken.throwIfRequested(),
            A.signal && A.signal.aborted)
          )
            throw new t('canceled');
        }
        A.exports = function (A) {
          return (
            C(A),
            (A.headers = A.headers || {}),
            (A.data = E.call(A, A.data, A.headers, A.transformRequest)),
            (A.headers = g.merge(
              A.headers.common || {},
              A.headers[A.method] || {},
              A.headers,
            )),
            g.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              function (B) {
                delete A.headers[B];
              },
            ),
            (A.adapter || n.adapter)(A).then(
              function (B) {
                return (
                  C(A),
                  (B.data = E.call(A, B.data, B.headers, A.transformResponse)),
                  B
                );
              },
              function (B) {
                return (
                  e(B) ||
                    (C(A),
                    B &&
                      B.response &&
                      (B.response.data = E.call(
                        A,
                        B.response.data,
                        B.response.headers,
                        A.transformResponse,
                      ))),
                  Promise.reject(B)
                );
              },
            )
          );
        };
      },
      6460: function (A) {
        'use strict';
        A.exports = function (A, B, Q, g, E) {
          return (
            (A.config = B),
            Q && (A.code = Q),
            (A.request = g),
            (A.response = E),
            (A.isAxiosError = !0),
            (A.toJSON = function () {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
                status:
                  this.response && this.response.status
                    ? this.response.status
                    : null,
              };
            }),
            A
          );
        };
      },
      777: function (A, B, Q) {
        'use strict';
        var g = Q(3589);
        A.exports = function (A, B) {
          B = B || {};
          var Q = {};
          function E(A, B) {
            return g.isPlainObject(A) && g.isPlainObject(B)
              ? g.merge(A, B)
              : g.isPlainObject(B)
              ? g.merge({}, B)
              : g.isArray(B)
              ? B.slice()
              : B;
          }
          function e(Q) {
            return g.isUndefined(B[Q])
              ? g.isUndefined(A[Q])
                ? void 0
                : E(void 0, A[Q])
              : E(A[Q], B[Q]);
          }
          function n(A) {
            if (!g.isUndefined(B[A])) return E(void 0, B[A]);
          }
          function t(Q) {
            return g.isUndefined(B[Q])
              ? g.isUndefined(A[Q])
                ? void 0
                : E(void 0, A[Q])
              : E(void 0, B[Q]);
          }
          function C(Q) {
            return Q in B ? E(A[Q], B[Q]) : Q in A ? E(void 0, A[Q]) : void 0;
          }
          var I = {
            url: n,
            method: n,
            data: n,
            baseURL: t,
            transformRequest: t,
            transformResponse: t,
            paramsSerializer: t,
            timeout: t,
            timeoutMessage: t,
            withCredentials: t,
            adapter: t,
            responseType: t,
            xsrfCookieName: t,
            xsrfHeaderName: t,
            onUploadProgress: t,
            onDownloadProgress: t,
            decompress: t,
            maxContentLength: t,
            maxBodyLength: t,
            transport: t,
            httpAgent: t,
            httpsAgent: t,
            cancelToken: t,
            socketPath: t,
            responseEncoding: t,
            validateStatus: C,
          };
          return (
            g.forEach(Object.keys(A).concat(Object.keys(B)), function (A) {
              var B = I[A] || e,
                E = B(A);
              (g.isUndefined(E) && B !== C) || (Q[A] = E);
            }),
            Q
          );
        };
      },
      7297: function (A, B, Q) {
        'use strict';
        var g = Q(6467);
        A.exports = function (A, B, Q) {
          var E = Q.config.validateStatus;
          Q.status && E && !E(Q.status)
            ? B(
                g(
                  'Request failed with status code ' + Q.status,
                  Q.config,
                  null,
                  Q.request,
                  Q,
                ),
              )
            : A(Q);
        };
      },
      2693: function (A, B, Q) {
        'use strict';
        var g = Q(3589),
          E = Q(221);
        A.exports = function (A, B, Q) {
          var e = this || E;
          return (
            g.forEach(Q, function (Q) {
              A = Q.call(e, A, B);
            }),
            A
          );
        };
      },
      221: function (A, B, Q) {
        'use strict';
        var g = Q(3589),
          E = Q(4341),
          e = Q(6460),
          n = { 'Content-Type': 'application/x-www-form-urlencoded' };
        function t(A, B) {
          !g.isUndefined(A) &&
            g.isUndefined(A['Content-Type']) &&
            (A['Content-Type'] = B);
        }
        var C = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter: (function () {
            var A;
            return (
              ('undefined' !== typeof XMLHttpRequest ||
                ('undefined' !== typeof process &&
                  '[object process]' ===
                    Object.prototype.toString.call(process))) &&
                (A = Q(3381)),
              A
            );
          })(),
          transformRequest: [
            function (A, B) {
              return (
                E(B, 'Accept'),
                E(B, 'Content-Type'),
                g.isFormData(A) ||
                g.isArrayBuffer(A) ||
                g.isBuffer(A) ||
                g.isStream(A) ||
                g.isFile(A) ||
                g.isBlob(A)
                  ? A
                  : g.isArrayBufferView(A)
                  ? A.buffer
                  : g.isURLSearchParams(A)
                  ? (t(B, 'application/x-www-form-urlencoded;charset=utf-8'),
                    A.toString())
                  : g.isObject(A) ||
                    (B && 'application/json' === B['Content-Type'])
                  ? (t(B, 'application/json'),
                    (function (A, B, Q) {
                      if (g.isString(A))
                        try {
                          return (B || JSON.parse)(A), g.trim(A);
                        } catch (E) {
                          if ('SyntaxError' !== E.name) throw E;
                        }
                      return (Q || JSON.stringify)(A);
                    })(A))
                  : A
              );
            },
          ],
          transformResponse: [
            function (A) {
              var B = this.transitional || C.transitional,
                Q = B && B.silentJSONParsing,
                E = B && B.forcedJSONParsing,
                n = !Q && 'json' === this.responseType;
              if (n || (E && g.isString(A) && A.length))
                try {
                  return JSON.parse(A);
                } catch (t) {
                  if (n) {
                    if ('SyntaxError' === t.name)
                      throw e(t, this, 'E_JSON_PARSE');
                    throw t;
                  }
                }
              return A;
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (A) {
            return A >= 200 && A < 300;
          },
          headers: { common: { Accept: 'application/json, text/plain, */*' } },
        };
        g.forEach(['delete', 'get', 'head'], function (A) {
          C.headers[A] = {};
        }),
          g.forEach(['post', 'put', 'patch'], function (A) {
            C.headers[A] = g.merge(n);
          }),
          (A.exports = C);
      },
      7600: function (A) {
        A.exports = { version: '0.22.0' };
      },
      4049: function (A) {
        'use strict';
        A.exports = function (A, B) {
          return function () {
            for (var Q = new Array(arguments.length), g = 0; g < Q.length; g++)
              Q[g] = arguments[g];
            return A.apply(B, Q);
          };
        };
      },
      9774: function (A, B, Q) {
        'use strict';
        var g = Q(3589);
        function E(A) {
          return encodeURIComponent(A)
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/gi, '[')
            .replace(/%5D/gi, ']');
        }
        A.exports = function (A, B, Q) {
          if (!B) return A;
          var e;
          if (Q) e = Q(B);
          else if (g.isURLSearchParams(B)) e = B.toString();
          else {
            var n = [];
            g.forEach(B, function (A, B) {
              null !== A &&
                'undefined' !== typeof A &&
                (g.isArray(A) ? (B += '[]') : (A = [A]),
                g.forEach(A, function (A) {
                  g.isDate(A)
                    ? (A = A.toISOString())
                    : g.isObject(A) && (A = JSON.stringify(A)),
                    n.push(E(B) + '=' + E(A));
                }));
            }),
              (e = n.join('&'));
          }
          if (e) {
            var t = A.indexOf('#');
            -1 !== t && (A = A.slice(0, t)),
              (A += (-1 === A.indexOf('?') ? '?' : '&') + e);
          }
          return A;
        };
      },
      9549: function (A) {
        'use strict';
        A.exports = function (A, B) {
          return B ? A.replace(/\/+$/, '') + '/' + B.replace(/^\/+/, '') : A;
        };
      },
      9301: function (A, B, Q) {
        'use strict';
        var g = Q(3589);
        A.exports = g.isStandardBrowserEnv()
          ? {
              write: function (A, B, Q, E, e, n) {
                var t = [];
                t.push(A + '=' + encodeURIComponent(B)),
                  g.isNumber(Q) &&
                    t.push('expires=' + new Date(Q).toGMTString()),
                  g.isString(E) && t.push('path=' + E),
                  g.isString(e) && t.push('domain=' + e),
                  !0 === n && t.push('secure'),
                  (document.cookie = t.join('; '));
              },
              read: function (A) {
                var B = document.cookie.match(
                  new RegExp('(^|;\\s*)(' + A + ')=([^;]*)'),
                );
                return B ? decodeURIComponent(B[3]) : null;
              },
              remove: function (A) {
                this.write(A, '', Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      4044: function (A) {
        'use strict';
        A.exports = function (A) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(A);
        };
      },
      9580: function (A) {
        'use strict';
        A.exports = function (A) {
          return 'object' === typeof A && !0 === A.isAxiosError;
        };
      },
      5411: function (A, B, Q) {
        'use strict';
        var g = Q(3589);
        A.exports = g.isStandardBrowserEnv()
          ? (function () {
              var A,
                B = /(msie|trident)/i.test(navigator.userAgent),
                Q = document.createElement('a');
              function E(A) {
                var g = A;
                return (
                  B && (Q.setAttribute('href', g), (g = Q.href)),
                  Q.setAttribute('href', g),
                  {
                    href: Q.href,
                    protocol: Q.protocol ? Q.protocol.replace(/:$/, '') : '',
                    host: Q.host,
                    search: Q.search ? Q.search.replace(/^\?/, '') : '',
                    hash: Q.hash ? Q.hash.replace(/^#/, '') : '',
                    hostname: Q.hostname,
                    port: Q.port,
                    pathname:
                      '/' === Q.pathname.charAt(0)
                        ? Q.pathname
                        : '/' + Q.pathname,
                  }
                );
              }
              return (
                (A = E(window.location.href)),
                function (B) {
                  var Q = g.isString(B) ? E(B) : B;
                  return Q.protocol === A.protocol && Q.host === A.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      4341: function (A, B, Q) {
        'use strict';
        var g = Q(3589);
        A.exports = function (A, B) {
          g.forEach(A, function (Q, g) {
            g !== B &&
              g.toUpperCase() === B.toUpperCase() &&
              ((A[B] = Q), delete A[g]);
          });
        };
      },
      9145: function (A, B, Q) {
        'use strict';
        var g = Q(3589),
          E = [
            'age',
            'authorization',
            'content-length',
            'content-type',
            'etag',
            'expires',
            'from',
            'host',
            'if-modified-since',
            'if-unmodified-since',
            'last-modified',
            'location',
            'max-forwards',
            'proxy-authorization',
            'referer',
            'retry-after',
            'user-agent',
          ];
        A.exports = function (A) {
          var B,
            Q,
            e,
            n = {};
          return A
            ? (g.forEach(A.split('\n'), function (A) {
                if (
                  ((e = A.indexOf(':')),
                  (B = g.trim(A.substr(0, e)).toLowerCase()),
                  (Q = g.trim(A.substr(e + 1))),
                  B)
                ) {
                  if (n[B] && E.indexOf(B) >= 0) return;
                  n[B] =
                    'set-cookie' === B
                      ? (n[B] ? n[B] : []).concat([Q])
                      : n[B]
                      ? n[B] + ', ' + Q
                      : Q;
                }
              }),
              n)
            : n;
        };
      },
      8089: function (A) {
        'use strict';
        A.exports = function (A) {
          return function (B) {
            return A.apply(null, B);
          };
        };
      },
      7835: function (A, B, Q) {
        'use strict';
        var g = Q(7600).version,
          E = {};
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
          function (A, B) {
            E[A] = function (Q) {
              return typeof Q === A || 'a' + (B < 1 ? 'n ' : ' ') + A;
            };
          },
        );
        var e = {};
        (E.transitional = function (A, B, Q) {
          function E(A, B) {
            return (
              '[Axios v' +
              g +
              "] Transitional option '" +
              A +
              "'" +
              B +
              (Q ? '. ' + Q : '')
            );
          }
          return function (Q, g, n) {
            if (!1 === A)
              throw new Error(
                E(g, ' has been removed' + (B ? ' in ' + B : '')),
              );
            return (
              B &&
                !e[g] &&
                ((e[g] = !0),
                console.warn(
                  E(
                    g,
                    ' has been deprecated since v' +
                      B +
                      ' and will be removed in the near future',
                  ),
                )),
              !A || A(Q, g, n)
            );
          };
        }),
          (A.exports = {
            assertOptions: function (A, B, Q) {
              if ('object' !== typeof A)
                throw new TypeError('options must be an object');
              for (var g = Object.keys(A), E = g.length; E-- > 0; ) {
                var e = g[E],
                  n = B[e];
                if (n) {
                  var t = A[e],
                    C = void 0 === t || n(t, e, A);
                  if (!0 !== C)
                    throw new TypeError('option ' + e + ' must be ' + C);
                } else if (!0 !== Q) throw Error('Unknown option ' + e);
              }
            },
            validators: E,
          });
      },
      3589: function (A, B, Q) {
        'use strict';
        var g = Q(4049),
          E = Object.prototype.toString;
        function e(A) {
          return '[object Array]' === E.call(A);
        }
        function n(A) {
          return 'undefined' === typeof A;
        }
        function t(A) {
          return null !== A && 'object' === typeof A;
        }
        function C(A) {
          if ('[object Object]' !== E.call(A)) return !1;
          var B = Object.getPrototypeOf(A);
          return null === B || B === Object.prototype;
        }
        function I(A) {
          return '[object Function]' === E.call(A);
        }
        function o(A, B) {
          if (null !== A && 'undefined' !== typeof A)
            if (('object' !== typeof A && (A = [A]), e(A)))
              for (var Q = 0, g = A.length; Q < g; Q++)
                B.call(null, A[Q], Q, A);
            else
              for (var E in A)
                Object.prototype.hasOwnProperty.call(A, E) &&
                  B.call(null, A[E], E, A);
        }
        A.exports = {
          isArray: e,
          isArrayBuffer: function (A) {
            return '[object ArrayBuffer]' === E.call(A);
          },
          isBuffer: function (A) {
            return (
              null !== A &&
              !n(A) &&
              null !== A.constructor &&
              !n(A.constructor) &&
              'function' === typeof A.constructor.isBuffer &&
              A.constructor.isBuffer(A)
            );
          },
          isFormData: function (A) {
            return 'undefined' !== typeof FormData && A instanceof FormData;
          },
          isArrayBufferView: function (A) {
            return 'undefined' !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(A)
              : A && A.buffer && A.buffer instanceof ArrayBuffer;
          },
          isString: function (A) {
            return 'string' === typeof A;
          },
          isNumber: function (A) {
            return 'number' === typeof A;
          },
          isObject: t,
          isPlainObject: C,
          isUndefined: n,
          isDate: function (A) {
            return '[object Date]' === E.call(A);
          },
          isFile: function (A) {
            return '[object File]' === E.call(A);
          },
          isBlob: function (A) {
            return '[object Blob]' === E.call(A);
          },
          isFunction: I,
          isStream: function (A) {
            return t(A) && I(A.pipe);
          },
          isURLSearchParams: function (A) {
            return (
              'undefined' !== typeof URLSearchParams &&
              A instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ('undefined' === typeof navigator ||
                ('ReactNative' !== navigator.product &&
                  'NativeScript' !== navigator.product &&
                  'NS' !== navigator.product)) &&
              'undefined' !== typeof window &&
              'undefined' !== typeof document
            );
          },
          forEach: o,
          merge: function A() {
            var B = {};
            function Q(Q, g) {
              C(B[g]) && C(Q)
                ? (B[g] = A(B[g], Q))
                : C(Q)
                ? (B[g] = A({}, Q))
                : e(Q)
                ? (B[g] = Q.slice())
                : (B[g] = Q);
            }
            for (var g = 0, E = arguments.length; g < E; g++)
              o(arguments[g], Q);
            return B;
          },
          extend: function (A, B, Q) {
            return (
              o(B, function (B, E) {
                A[E] = Q && 'function' === typeof B ? g(B, Q) : B;
              }),
              A
            );
          },
          trim: function (A) {
            return A.trim ? A.trim() : A.replace(/^\s+|\s+$/g, '');
          },
          stripBOM: function (A) {
            return 65279 === A.charCodeAt(0) && (A = A.slice(1)), A;
          },
        };
      },
      2110: function (A, B, Q) {
        'use strict';
        var g = Q(8309),
          E = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          e = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          n = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          t = {};
        function C(A) {
          return g.isMemo(A) ? n : t[A.$$typeof] || E;
        }
        (t[g.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (t[g.Memo] = n);
        var I = Object.defineProperty,
          o = Object.getOwnPropertyNames,
          i = Object.getOwnPropertySymbols,
          a = Object.getOwnPropertyDescriptor,
          w = Object.getPrototypeOf,
          r = Object.prototype;
        A.exports = function A(B, Q, g) {
          if ('string' !== typeof Q) {
            if (r) {
              var E = w(Q);
              E && E !== r && A(B, E, g);
            }
            var n = o(Q);
            i && (n = n.concat(i(Q)));
            for (var t = C(B), c = C(Q), s = 0; s < n.length; ++s) {
              var l = n[s];
              if (!e[l] && (!g || !g[l]) && (!c || !c[l]) && (!t || !t[l])) {
                var F = a(Q, l);
                try {
                  I(B, l, F);
                } catch (D) {}
              }
            }
          }
          return B;
        };
      },
      746: function (A, B) {
        'use strict';
        var Q = 'function' === typeof Symbol && Symbol.for,
          g = Q ? Symbol.for('react.element') : 60103,
          E = Q ? Symbol.for('react.portal') : 60106,
          e = Q ? Symbol.for('react.fragment') : 60107,
          n = Q ? Symbol.for('react.strict_mode') : 60108,
          t = Q ? Symbol.for('react.profiler') : 60114,
          C = Q ? Symbol.for('react.provider') : 60109,
          I = Q ? Symbol.for('react.context') : 60110,
          o = Q ? Symbol.for('react.async_mode') : 60111,
          i = Q ? Symbol.for('react.concurrent_mode') : 60111,
          a = Q ? Symbol.for('react.forward_ref') : 60112,
          w = Q ? Symbol.for('react.suspense') : 60113,
          r = Q ? Symbol.for('react.suspense_list') : 60120,
          c = Q ? Symbol.for('react.memo') : 60115,
          s = Q ? Symbol.for('react.lazy') : 60116,
          l = Q ? Symbol.for('react.block') : 60121,
          F = Q ? Symbol.for('react.fundamental') : 60117,
          D = Q ? Symbol.for('react.responder') : 60118,
          U = Q ? Symbol.for('react.scope') : 60119;
        function u(A) {
          if ('object' === typeof A && null !== A) {
            var B = A.$$typeof;
            switch (B) {
              case g:
                switch ((A = A.type)) {
                  case o:
                  case i:
                  case e:
                  case t:
                  case n:
                  case w:
                    return A;
                  default:
                    switch ((A = A && A.$$typeof)) {
                      case I:
                      case a:
                      case s:
                      case c:
                      case C:
                        return A;
                      default:
                        return B;
                    }
                }
              case E:
                return B;
            }
          }
        }
        function d(A) {
          return u(A) === i;
        }
        (B.AsyncMode = o),
          (B.ConcurrentMode = i),
          (B.ContextConsumer = I),
          (B.ContextProvider = C),
          (B.Element = g),
          (B.ForwardRef = a),
          (B.Fragment = e),
          (B.Lazy = s),
          (B.Memo = c),
          (B.Portal = E),
          (B.Profiler = t),
          (B.StrictMode = n),
          (B.Suspense = w),
          (B.isAsyncMode = function (A) {
            return d(A) || u(A) === o;
          }),
          (B.isConcurrentMode = d),
          (B.isContextConsumer = function (A) {
            return u(A) === I;
          }),
          (B.isContextProvider = function (A) {
            return u(A) === C;
          }),
          (B.isElement = function (A) {
            return 'object' === typeof A && null !== A && A.$$typeof === g;
          }),
          (B.isForwardRef = function (A) {
            return u(A) === a;
          }),
          (B.isFragment = function (A) {
            return u(A) === e;
          }),
          (B.isLazy = function (A) {
            return u(A) === s;
          }),
          (B.isMemo = function (A) {
            return u(A) === c;
          }),
          (B.isPortal = function (A) {
            return u(A) === E;
          }),
          (B.isProfiler = function (A) {
            return u(A) === t;
          }),
          (B.isStrictMode = function (A) {
            return u(A) === n;
          }),
          (B.isSuspense = function (A) {
            return u(A) === w;
          }),
          (B.isValidElementType = function (A) {
            return (
              'string' === typeof A ||
              'function' === typeof A ||
              A === e ||
              A === i ||
              A === t ||
              A === n ||
              A === w ||
              A === r ||
              ('object' === typeof A &&
                null !== A &&
                (A.$$typeof === s ||
                  A.$$typeof === c ||
                  A.$$typeof === C ||
                  A.$$typeof === I ||
                  A.$$typeof === a ||
                  A.$$typeof === F ||
                  A.$$typeof === D ||
                  A.$$typeof === U ||
                  A.$$typeof === l))
            );
          }),
          (B.typeOf = u);
      },
      8309: function (A, B, Q) {
        'use strict';
        A.exports = Q(746);
      },
      1571: function (A) {
        A.exports =
          Array.isArray ||
          function (A) {
            return '[object Array]' == Object.prototype.toString.call(A);
          };
      },
      1725: function (A) {
        'use strict';
        var B = Object.getOwnPropertySymbols,
          Q = Object.prototype.hasOwnProperty,
          g = Object.prototype.propertyIsEnumerable;
        function E(A) {
          if (null === A || void 0 === A)
            throw new TypeError(
              'Object.assign cannot be called with null or undefined',
            );
          return Object(A);
        }
        A.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var A = new String('abc');
            if (((A[5] = 'de'), '5' === Object.getOwnPropertyNames(A)[0]))
              return !1;
            for (var B = {}, Q = 0; Q < 10; Q++)
              B['_' + String.fromCharCode(Q)] = Q;
            if (
              '0123456789' !==
              Object.getOwnPropertyNames(B)
                .map(function (A) {
                  return B[A];
                })
                .join('')
            )
              return !1;
            var g = {};
            return (
              'abcdefghijklmnopqrst'.split('').forEach(function (A) {
                g[A] = A;
              }),
              'abcdefghijklmnopqrst' ===
                Object.keys(Object.assign({}, g)).join('')
            );
          } catch (E) {
            return !1;
          }
        })()
          ? Object.assign
          : function (A, e) {
              for (var n, t, C = E(A), I = 1; I < arguments.length; I++) {
                for (var o in (n = Object(arguments[I])))
                  Q.call(n, o) && (C[o] = n[o]);
                if (B) {
                  t = B(n);
                  for (var i = 0; i < t.length; i++)
                    g.call(n, t[i]) && (C[t[i]] = n[t[i]]);
                }
              }
              return C;
            };
      },
      6151: function (A, B, Q) {
        var g = Q(1571);
        (A.exports = w),
          (A.exports.parse = e),
          (A.exports.compile = function (A, B) {
            return t(e(A, B), B);
          }),
          (A.exports.tokensToFunction = t),
          (A.exports.tokensToRegExp = a);
        var E = new RegExp(
          [
            '(\\\\.)',
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
          ].join('|'),
          'g',
        );
        function e(A, B) {
          for (
            var Q, g = [], e = 0, n = 0, t = '', o = (B && B.delimiter) || '/';
            null != (Q = E.exec(A));

          ) {
            var i = Q[0],
              a = Q[1],
              w = Q.index;
            if (((t += A.slice(n, w)), (n = w + i.length), a)) t += a[1];
            else {
              var r = A[n],
                c = Q[2],
                s = Q[3],
                l = Q[4],
                F = Q[5],
                D = Q[6],
                U = Q[7];
              t && (g.push(t), (t = ''));
              var u = null != c && null != r && r !== c,
                d = '+' === D || '*' === D,
                M = '?' === D || '*' === D,
                f = Q[2] || o,
                G = l || F;
              g.push({
                name: s || e++,
                prefix: c || '',
                delimiter: f,
                optional: M,
                repeat: d,
                partial: u,
                asterisk: !!U,
                pattern: G ? I(G) : U ? '.*' : '[^' + C(f) + ']+?',
              });
            }
          }
          return n < A.length && (t += A.substr(n)), t && g.push(t), g;
        }
        function n(A) {
          return encodeURI(A).replace(/[\/?#]/g, function (A) {
            return '%' + A.charCodeAt(0).toString(16).toUpperCase();
          });
        }
        function t(A, B) {
          for (var Q = new Array(A.length), E = 0; E < A.length; E++)
            'object' === typeof A[E] &&
              (Q[E] = new RegExp('^(?:' + A[E].pattern + ')$', i(B)));
          return function (B, E) {
            for (
              var e = '',
                t = B || {},
                C = (E || {}).pretty ? n : encodeURIComponent,
                I = 0;
              I < A.length;
              I++
            ) {
              var o = A[I];
              if ('string' !== typeof o) {
                var i,
                  a = t[o.name];
                if (null == a) {
                  if (o.optional) {
                    o.partial && (e += o.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + o.name + '" to be defined',
                  );
                }
                if (g(a)) {
                  if (!o.repeat)
                    throw new TypeError(
                      'Expected "' +
                        o.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(a) +
                        '`',
                    );
                  if (0 === a.length) {
                    if (o.optional) continue;
                    throw new TypeError(
                      'Expected "' + o.name + '" to not be empty',
                    );
                  }
                  for (var w = 0; w < a.length; w++) {
                    if (((i = C(a[w])), !Q[I].test(i)))
                      throw new TypeError(
                        'Expected all "' +
                          o.name +
                          '" to match "' +
                          o.pattern +
                          '", but received `' +
                          JSON.stringify(i) +
                          '`',
                      );
                    e += (0 === w ? o.prefix : o.delimiter) + i;
                  }
                } else {
                  if (
                    ((i = o.asterisk
                      ? encodeURI(a).replace(/[?#]/g, function (A) {
                          return (
                            '%' + A.charCodeAt(0).toString(16).toUpperCase()
                          );
                        })
                      : C(a)),
                    !Q[I].test(i))
                  )
                    throw new TypeError(
                      'Expected "' +
                        o.name +
                        '" to match "' +
                        o.pattern +
                        '", but received "' +
                        i +
                        '"',
                    );
                  e += o.prefix + i;
                }
              } else e += o;
            }
            return e;
          };
        }
        function C(A) {
          return A.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
        }
        function I(A) {
          return A.replace(/([=!:$\/()])/g, '\\$1');
        }
        function o(A, B) {
          return (A.keys = B), A;
        }
        function i(A) {
          return A && A.sensitive ? '' : 'i';
        }
        function a(A, B, Q) {
          g(B) || ((Q = B || Q), (B = []));
          for (
            var E = (Q = Q || {}).strict, e = !1 !== Q.end, n = '', t = 0;
            t < A.length;
            t++
          ) {
            var I = A[t];
            if ('string' === typeof I) n += C(I);
            else {
              var a = C(I.prefix),
                w = '(?:' + I.pattern + ')';
              B.push(I),
                I.repeat && (w += '(?:' + a + w + ')*'),
                (n += w =
                  I.optional
                    ? I.partial
                      ? a + '(' + w + ')?'
                      : '(?:' + a + '(' + w + '))?'
                    : a + '(' + w + ')');
            }
          }
          var r = C(Q.delimiter || '/'),
            c = n.slice(-r.length) === r;
          return (
            E || (n = (c ? n.slice(0, -r.length) : n) + '(?:' + r + '(?=$))?'),
            (n += e ? '$' : E && c ? '' : '(?=' + r + '|$)'),
            o(new RegExp('^' + n, i(Q)), B)
          );
        }
        function w(A, B, Q) {
          return (
            g(B) || ((Q = B || Q), (B = [])),
            (Q = Q || {}),
            A instanceof RegExp
              ? (function (A, B) {
                  var Q = A.source.match(/\((?!\?)/g);
                  if (Q)
                    for (var g = 0; g < Q.length; g++)
                      B.push({
                        name: g,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null,
                      });
                  return o(A, B);
                })(A, B)
              : g(A)
              ? (function (A, B, Q) {
                  for (var g = [], E = 0; E < A.length; E++)
                    g.push(w(A[E], B, Q).source);
                  return o(new RegExp('(?:' + g.join('|') + ')', i(Q)), B);
                })(A, B, Q)
              : (function (A, B, Q) {
                  return a(e(A, Q), B, Q);
                })(A, B, Q)
          );
        }
      },
      888: function (A, B, Q) {
        'use strict';
        var g = Q(9047);
        function E() {}
        function e() {}
        (e.resetWarningCache = E),
          (A.exports = function () {
            function A(A, B, Q, E, e, n) {
              if (n !== g) {
                var t = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((t.name = 'Invariant Violation'), t);
              }
            }
            function B() {
              return A;
            }
            A.isRequired = A;
            var Q = {
              array: A,
              bigint: A,
              bool: A,
              func: A,
              number: A,
              object: A,
              string: A,
              symbol: A,
              any: A,
              arrayOf: B,
              element: A,
              elementType: A,
              instanceOf: B,
              node: A,
              objectOf: B,
              oneOf: B,
              oneOfType: B,
              shape: B,
              exact: B,
              checkPropTypes: e,
              resetWarningCache: E,
            };
            return (Q.PropTypes = Q), Q;
          });
      },
      2007: function (A, B, Q) {
        A.exports = Q(888)();
      },
      9047: function (A) {
        'use strict';
        A.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
      4463: function (A, B, Q) {
        'use strict';
        var g = Q(2791),
          E = Q(1725),
          e = Q(5296);
        function n(A) {
          for (
            var B =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + A,
              Q = 1;
            Q < arguments.length;
            Q++
          )
            B += '&args[]=' + encodeURIComponent(arguments[Q]);
          return (
            'Minified React error #' +
            A +
            '; visit ' +
            B +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        if (!g) throw Error(n(227));
        var t = new Set(),
          C = {};
        function I(A, B) {
          o(A, B), o(A + 'Capture', B);
        }
        function o(A, B) {
          for (C[A] = B, A = 0; A < B.length; A++) t.add(B[A]);
        }
        var i = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          a =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          w = Object.prototype.hasOwnProperty,
          r = {},
          c = {};
        function s(A, B, Q, g, E, e, n) {
          (this.acceptsBooleans = 2 === B || 3 === B || 4 === B),
            (this.attributeName = g),
            (this.attributeNamespace = E),
            (this.mustUseProperty = Q),
            (this.propertyName = A),
            (this.type = B),
            (this.sanitizeURL = e),
            (this.removeEmptyString = n);
        }
        var l = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (A) {
            l[A] = new s(A, 0, !1, A, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (A) {
            var B = A[0];
            l[B] = new s(B, 1, !1, A[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (A) {
              l[A] = new s(A, 2, !1, A.toLowerCase(), null, !1, !1);
            },
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (A) {
            l[A] = new s(A, 2, !1, A, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (A) {
              l[A] = new s(A, 3, !1, A.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (A) {
            l[A] = new s(A, 3, !0, A, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (A) {
            l[A] = new s(A, 4, !1, A, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (A) {
            l[A] = new s(A, 6, !1, A, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (A) {
            l[A] = new s(A, 5, !1, A.toLowerCase(), null, !1, !1);
          });
        var F = /[\-:]([a-z])/g;
        function D(A) {
          return A[1].toUpperCase();
        }
        function U(A, B, Q, g) {
          var E = l.hasOwnProperty(B) ? l[B] : null;
          (null !== E
            ? 0 === E.type
            : !g &&
              2 < B.length &&
              ('o' === B[0] || 'O' === B[0]) &&
              ('n' === B[1] || 'N' === B[1])) ||
            ((function (A, B, Q, g) {
              if (
                null === B ||
                'undefined' === typeof B ||
                (function (A, B, Q, g) {
                  if (null !== Q && 0 === Q.type) return !1;
                  switch (typeof B) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !g &&
                        (null !== Q
                          ? !Q.acceptsBooleans
                          : 'data-' !== (A = A.toLowerCase().slice(0, 5)) &&
                            'aria-' !== A)
                      );
                    default:
                      return !1;
                  }
                })(A, B, Q, g)
              )
                return !0;
              if (g) return !1;
              if (null !== Q)
                switch (Q.type) {
                  case 3:
                    return !B;
                  case 4:
                    return !1 === B;
                  case 5:
                    return isNaN(B);
                  case 6:
                    return isNaN(B) || 1 > B;
                }
              return !1;
            })(B, Q, E, g) && (Q = null),
            g || null === E
              ? (function (A) {
                  return (
                    !!w.call(c, A) ||
                    (!w.call(r, A) &&
                      (a.test(A) ? (c[A] = !0) : ((r[A] = !0), !1)))
                  );
                })(B) &&
                (null === Q ? A.removeAttribute(B) : A.setAttribute(B, '' + Q))
              : E.mustUseProperty
              ? (A[E.propertyName] = null === Q ? 3 !== E.type && '' : Q)
              : ((B = E.attributeName),
                (g = E.attributeNamespace),
                null === Q
                  ? A.removeAttribute(B)
                  : ((Q =
                      3 === (E = E.type) || (4 === E && !0 === Q)
                        ? ''
                        : '' + Q),
                    g ? A.setAttributeNS(g, B, Q) : A.setAttribute(B, Q))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (A) {
            var B = A.replace(F, D);
            l[B] = new s(B, 1, !1, A, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (A) {
              var B = A.replace(F, D);
              l[B] = new s(B, 1, !1, A, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (A) {
            var B = A.replace(F, D);
            l[B] = new s(
              B,
              1,
              !1,
              A,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1,
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (A) {
            l[A] = new s(A, 1, !1, A.toLowerCase(), null, !1, !1);
          }),
          (l.xlinkHref = new s(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (A) {
            l[A] = new s(A, 1, !1, A.toLowerCase(), null, !0, !0);
          });
        var u = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          d = 60103,
          M = 60106,
          f = 60107,
          G = 60108,
          h = 60114,
          R = 60109,
          Y = 60110,
          p = 60112,
          N = 60113,
          b = 60120,
          m = 60115,
          y = 60116,
          J = 60121,
          k = 60128,
          Z = 60129,
          X = 60130,
          L = 60131;
        if ('function' === typeof Symbol && Symbol.for) {
          var v = Symbol.for;
          (d = v('react.element')),
            (M = v('react.portal')),
            (f = v('react.fragment')),
            (G = v('react.strict_mode')),
            (h = v('react.profiler')),
            (R = v('react.provider')),
            (Y = v('react.context')),
            (p = v('react.forward_ref')),
            (N = v('react.suspense')),
            (b = v('react.suspense_list')),
            (m = v('react.memo')),
            (y = v('react.lazy')),
            (J = v('react.block')),
            v('react.scope'),
            (k = v('react.opaque.id')),
            (Z = v('react.debug_trace_mode')),
            (X = v('react.offscreen')),
            (L = v('react.legacy_hidden'));
        }
        var S,
          H = 'function' === typeof Symbol && Symbol.iterator;
        function W(A) {
          return null === A || 'object' !== typeof A
            ? null
            : 'function' === typeof (A = (H && A[H]) || A['@@iterator'])
            ? A
            : null;
        }
        function O(A) {
          if (void 0 === S)
            try {
              throw Error();
            } catch (Q) {
              var B = Q.stack.trim().match(/\n( *(at )?)/);
              S = (B && B[1]) || '';
            }
          return '\n' + S + A;
        }
        var V = !1;
        function x(A, B) {
          if (!A || V) return '';
          V = !0;
          var Q = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (B)
              if (
                ((B = function () {
                  throw Error();
                }),
                Object.defineProperty(B.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(B, []);
                } catch (C) {
                  var g = C;
                }
                Reflect.construct(A, [], B);
              } else {
                try {
                  B.call();
                } catch (C) {
                  g = C;
                }
                A.call(B.prototype);
              }
            else {
              try {
                throw Error();
              } catch (C) {
                g = C;
              }
              A();
            }
          } catch (C) {
            if (C && g && 'string' === typeof C.stack) {
              for (
                var E = C.stack.split('\n'),
                  e = g.stack.split('\n'),
                  n = E.length - 1,
                  t = e.length - 1;
                1 <= n && 0 <= t && E[n] !== e[t];

              )
                t--;
              for (; 1 <= n && 0 <= t; n--, t--)
                if (E[n] !== e[t]) {
                  if (1 !== n || 1 !== t)
                    do {
                      if ((n--, 0 > --t || E[n] !== e[t]))
                        return '\n' + E[n].replace(' at new ', ' at ');
                    } while (1 <= n && 0 <= t);
                  break;
                }
            }
          } finally {
            (V = !1), (Error.prepareStackTrace = Q);
          }
          return (A = A ? A.displayName || A.name : '') ? O(A) : '';
        }
        function T(A) {
          switch (A.tag) {
            case 5:
              return O(A.type);
            case 16:
              return O('Lazy');
            case 13:
              return O('Suspense');
            case 19:
              return O('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (A = x(A.type, !1));
            case 11:
              return (A = x(A.type.render, !1));
            case 22:
              return (A = x(A.type._render, !1));
            case 1:
              return (A = x(A.type, !0));
            default:
              return '';
          }
        }
        function z(A) {
          if (null == A) return null;
          if ('function' === typeof A) return A.displayName || A.name || null;
          if ('string' === typeof A) return A;
          switch (A) {
            case f:
              return 'Fragment';
            case M:
              return 'Portal';
            case h:
              return 'Profiler';
            case G:
              return 'StrictMode';
            case N:
              return 'Suspense';
            case b:
              return 'SuspenseList';
          }
          if ('object' === typeof A)
            switch (A.$$typeof) {
              case Y:
                return (A.displayName || 'Context') + '.Consumer';
              case R:
                return (A._context.displayName || 'Context') + '.Provider';
              case p:
                var B = A.render;
                return (
                  (B = B.displayName || B.name || ''),
                  A.displayName ||
                    ('' !== B ? 'ForwardRef(' + B + ')' : 'ForwardRef')
                );
              case m:
                return z(A.type);
              case J:
                return z(A._render);
              case y:
                (B = A._payload), (A = A._init);
                try {
                  return z(A(B));
                } catch (Q) {}
            }
          return null;
        }
        function j(A) {
          switch (typeof A) {
            case 'boolean':
            case 'number':
            case 'object':
            case 'string':
            case 'undefined':
              return A;
            default:
              return '';
          }
        }
        function K(A) {
          var B = A.type;
          return (
            (A = A.nodeName) &&
            'input' === A.toLowerCase() &&
            ('checkbox' === B || 'radio' === B)
          );
        }
        function P(A) {
          A._valueTracker ||
            (A._valueTracker = (function (A) {
              var B = K(A) ? 'checked' : 'value',
                Q = Object.getOwnPropertyDescriptor(A.constructor.prototype, B),
                g = '' + A[B];
              if (
                !A.hasOwnProperty(B) &&
                'undefined' !== typeof Q &&
                'function' === typeof Q.get &&
                'function' === typeof Q.set
              ) {
                var E = Q.get,
                  e = Q.set;
                return (
                  Object.defineProperty(A, B, {
                    configurable: !0,
                    get: function () {
                      return E.call(this);
                    },
                    set: function (A) {
                      (g = '' + A), e.call(this, A);
                    },
                  }),
                  Object.defineProperty(A, B, { enumerable: Q.enumerable }),
                  {
                    getValue: function () {
                      return g;
                    },
                    setValue: function (A) {
                      g = '' + A;
                    },
                    stopTracking: function () {
                      (A._valueTracker = null), delete A[B];
                    },
                  }
                );
              }
            })(A));
        }
        function q(A) {
          if (!A) return !1;
          var B = A._valueTracker;
          if (!B) return !0;
          var Q = B.getValue(),
            g = '';
          return (
            A && (g = K(A) ? (A.checked ? 'true' : 'false') : A.value),
            (A = g) !== Q && (B.setValue(A), !0)
          );
        }
        function _(A) {
          if (
            'undefined' ===
            typeof (A =
              A || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return A.activeElement || A.body;
          } catch (B) {
            return A.body;
          }
        }
        function $(A, B) {
          var Q = B.checked;
          return E({}, B, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != Q ? Q : A._wrapperState.initialChecked,
          });
        }
        function AA(A, B) {
          var Q = null == B.defaultValue ? '' : B.defaultValue,
            g = null != B.checked ? B.checked : B.defaultChecked;
          (Q = j(null != B.value ? B.value : Q)),
            (A._wrapperState = {
              initialChecked: g,
              initialValue: Q,
              controlled:
                'checkbox' === B.type || 'radio' === B.type
                  ? null != B.checked
                  : null != B.value,
            });
        }
        function BA(A, B) {
          null != (B = B.checked) && U(A, 'checked', B, !1);
        }
        function QA(A, B) {
          BA(A, B);
          var Q = j(B.value),
            g = B.type;
          if (null != Q)
            'number' === g
              ? ((0 === Q && '' === A.value) || A.value != Q) &&
                (A.value = '' + Q)
              : A.value !== '' + Q && (A.value = '' + Q);
          else if ('submit' === g || 'reset' === g)
            return void A.removeAttribute('value');
          B.hasOwnProperty('value')
            ? EA(A, B.type, Q)
            : B.hasOwnProperty('defaultValue') &&
              EA(A, B.type, j(B.defaultValue)),
            null == B.checked &&
              null != B.defaultChecked &&
              (A.defaultChecked = !!B.defaultChecked);
        }
        function gA(A, B, Q) {
          if (B.hasOwnProperty('value') || B.hasOwnProperty('defaultValue')) {
            var g = B.type;
            if (
              !(
                ('submit' !== g && 'reset' !== g) ||
                (void 0 !== B.value && null !== B.value)
              )
            )
              return;
            (B = '' + A._wrapperState.initialValue),
              Q || B === A.value || (A.value = B),
              (A.defaultValue = B);
          }
          '' !== (Q = A.name) && (A.name = ''),
            (A.defaultChecked = !!A._wrapperState.initialChecked),
            '' !== Q && (A.name = Q);
        }
        function EA(A, B, Q) {
          ('number' === B && _(A.ownerDocument) === A) ||
            (null == Q
              ? (A.defaultValue = '' + A._wrapperState.initialValue)
              : A.defaultValue !== '' + Q && (A.defaultValue = '' + Q));
        }
        function eA(A, B) {
          return (
            (A = E({ children: void 0 }, B)),
            (B = (function (A) {
              var B = '';
              return (
                g.Children.forEach(A, function (A) {
                  null != A && (B += A);
                }),
                B
              );
            })(B.children)) && (A.children = B),
            A
          );
        }
        function nA(A, B, Q, g) {
          if (((A = A.options), B)) {
            B = {};
            for (var E = 0; E < Q.length; E++) B['$' + Q[E]] = !0;
            for (Q = 0; Q < A.length; Q++)
              (E = B.hasOwnProperty('$' + A[Q].value)),
                A[Q].selected !== E && (A[Q].selected = E),
                E && g && (A[Q].defaultSelected = !0);
          } else {
            for (Q = '' + j(Q), B = null, E = 0; E < A.length; E++) {
              if (A[E].value === Q)
                return (
                  (A[E].selected = !0), void (g && (A[E].defaultSelected = !0))
                );
              null !== B || A[E].disabled || (B = A[E]);
            }
            null !== B && (B.selected = !0);
          }
        }
        function tA(A, B) {
          if (null != B.dangerouslySetInnerHTML) throw Error(n(91));
          return E({}, B, {
            value: void 0,
            defaultValue: void 0,
            children: '' + A._wrapperState.initialValue,
          });
        }
        function CA(A, B) {
          var Q = B.value;
          if (null == Q) {
            if (((Q = B.children), (B = B.defaultValue), null != Q)) {
              if (null != B) throw Error(n(92));
              if (Array.isArray(Q)) {
                if (!(1 >= Q.length)) throw Error(n(93));
                Q = Q[0];
              }
              B = Q;
            }
            null == B && (B = ''), (Q = B);
          }
          A._wrapperState = { initialValue: j(Q) };
        }
        function IA(A, B) {
          var Q = j(B.value),
            g = j(B.defaultValue);
          null != Q &&
            ((Q = '' + Q) !== A.value && (A.value = Q),
            null == B.defaultValue &&
              A.defaultValue !== Q &&
              (A.defaultValue = Q)),
            null != g && (A.defaultValue = '' + g);
        }
        function oA(A) {
          var B = A.textContent;
          B === A._wrapperState.initialValue &&
            '' !== B &&
            null !== B &&
            (A.value = B);
        }
        var iA = 'http://www.w3.org/1999/xhtml',
          aA = 'http://www.w3.org/2000/svg';
        function wA(A) {
          switch (A) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function rA(A, B) {
          return null == A || 'http://www.w3.org/1999/xhtml' === A
            ? wA(B)
            : 'http://www.w3.org/2000/svg' === A && 'foreignObject' === B
            ? 'http://www.w3.org/1999/xhtml'
            : A;
        }
        var cA,
          sA,
          lA =
            ((sA = function (A, B) {
              if (A.namespaceURI !== aA || 'innerHTML' in A) A.innerHTML = B;
              else {
                for (
                  (cA = cA || document.createElement('div')).innerHTML =
                    '<svg>' + B.valueOf().toString() + '</svg>',
                    B = cA.firstChild;
                  A.firstChild;

                )
                  A.removeChild(A.firstChild);
                for (; B.firstChild; ) A.appendChild(B.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (A, B, Q, g) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return sA(A, B);
                  });
                }
              : sA);
        function FA(A, B) {
          if (B) {
            var Q = A.firstChild;
            if (Q && Q === A.lastChild && 3 === Q.nodeType)
              return void (Q.nodeValue = B);
          }
          A.textContent = B;
        }
        var DA = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          UA = ['Webkit', 'ms', 'Moz', 'O'];
        function uA(A, B, Q) {
          return null == B || 'boolean' === typeof B || '' === B
            ? ''
            : Q ||
              'number' !== typeof B ||
              0 === B ||
              (DA.hasOwnProperty(A) && DA[A])
            ? ('' + B).trim()
            : B + 'px';
        }
        function dA(A, B) {
          for (var Q in ((A = A.style), B))
            if (B.hasOwnProperty(Q)) {
              var g = 0 === Q.indexOf('--'),
                E = uA(Q, B[Q], g);
              'float' === Q && (Q = 'cssFloat'),
                g ? A.setProperty(Q, E) : (A[Q] = E);
            }
        }
        Object.keys(DA).forEach(function (A) {
          UA.forEach(function (B) {
            (B = B + A.charAt(0).toUpperCase() + A.substring(1)),
              (DA[B] = DA[A]);
          });
        });
        var MA = E(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function fA(A, B) {
          if (B) {
            if (
              MA[A] &&
              (null != B.children || null != B.dangerouslySetInnerHTML)
            )
              throw Error(n(137, A));
            if (null != B.dangerouslySetInnerHTML) {
              if (null != B.children) throw Error(n(60));
              if (
                'object' !== typeof B.dangerouslySetInnerHTML ||
                !('__html' in B.dangerouslySetInnerHTML)
              )
                throw Error(n(61));
            }
            if (null != B.style && 'object' !== typeof B.style)
              throw Error(n(62));
          }
        }
        function GA(A, B) {
          if (-1 === A.indexOf('-')) return 'string' === typeof B.is;
          switch (A) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        function hA(A) {
          return (
            (A = A.target || A.srcElement || window).correspondingUseElement &&
              (A = A.correspondingUseElement),
            3 === A.nodeType ? A.parentNode : A
          );
        }
        var RA = null,
          YA = null,
          pA = null;
        function NA(A) {
          if ((A = QE(A))) {
            if ('function' !== typeof RA) throw Error(n(280));
            var B = A.stateNode;
            B && ((B = EE(B)), RA(A.stateNode, A.type, B));
          }
        }
        function bA(A) {
          YA ? (pA ? pA.push(A) : (pA = [A])) : (YA = A);
        }
        function mA() {
          if (YA) {
            var A = YA,
              B = pA;
            if (((pA = YA = null), NA(A), B))
              for (A = 0; A < B.length; A++) NA(B[A]);
          }
        }
        function yA(A, B) {
          return A(B);
        }
        function JA(A, B, Q, g, E) {
          return A(B, Q, g, E);
        }
        function kA() {}
        var ZA = yA,
          XA = !1,
          LA = !1;
        function vA() {
          (null === YA && null === pA) || (kA(), mA());
        }
        function SA(A, B) {
          var Q = A.stateNode;
          if (null === Q) return null;
          var g = EE(Q);
          if (null === g) return null;
          Q = g[B];
          A: switch (B) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (g = !g.disabled) ||
                (g = !(
                  'button' === (A = A.type) ||
                  'input' === A ||
                  'select' === A ||
                  'textarea' === A
                )),
                (A = !g);
              break A;
            default:
              A = !1;
          }
          if (A) return null;
          if (Q && 'function' !== typeof Q) throw Error(n(231, B, typeof Q));
          return Q;
        }
        var HA = !1;
        if (i)
          try {
            var WA = {};
            Object.defineProperty(WA, 'passive', {
              get: function () {
                HA = !0;
              },
            }),
              window.addEventListener('test', WA, WA),
              window.removeEventListener('test', WA, WA);
          } catch (sA) {
            HA = !1;
          }
        function OA(A, B, Q, g, E, e, n, t, C) {
          var I = Array.prototype.slice.call(arguments, 3);
          try {
            B.apply(Q, I);
          } catch (o) {
            this.onError(o);
          }
        }
        var VA = !1,
          xA = null,
          TA = !1,
          zA = null,
          jA = {
            onError: function (A) {
              (VA = !0), (xA = A);
            },
          };
        function KA(A, B, Q, g, E, e, n, t, C) {
          (VA = !1), (xA = null), OA.apply(jA, arguments);
        }
        function PA(A) {
          var B = A,
            Q = A;
          if (A.alternate) for (; B.return; ) B = B.return;
          else {
            A = B;
            do {
              0 !== (1026 & (B = A).flags) && (Q = B.return), (A = B.return);
            } while (A);
          }
          return 3 === B.tag ? Q : null;
        }
        function qA(A) {
          if (13 === A.tag) {
            var B = A.memoizedState;
            if (
              (null === B &&
                null !== (A = A.alternate) &&
                (B = A.memoizedState),
              null !== B)
            )
              return B.dehydrated;
          }
          return null;
        }
        function _A(A) {
          if (PA(A) !== A) throw Error(n(188));
        }
        function $A(A) {
          if (
            ((A = (function (A) {
              var B = A.alternate;
              if (!B) {
                if (null === (B = PA(A))) throw Error(n(188));
                return B !== A ? null : A;
              }
              for (var Q = A, g = B; ; ) {
                var E = Q.return;
                if (null === E) break;
                var e = E.alternate;
                if (null === e) {
                  if (null !== (g = E.return)) {
                    Q = g;
                    continue;
                  }
                  break;
                }
                if (E.child === e.child) {
                  for (e = E.child; e; ) {
                    if (e === Q) return _A(E), A;
                    if (e === g) return _A(E), B;
                    e = e.sibling;
                  }
                  throw Error(n(188));
                }
                if (Q.return !== g.return) (Q = E), (g = e);
                else {
                  for (var t = !1, C = E.child; C; ) {
                    if (C === Q) {
                      (t = !0), (Q = E), (g = e);
                      break;
                    }
                    if (C === g) {
                      (t = !0), (g = E), (Q = e);
                      break;
                    }
                    C = C.sibling;
                  }
                  if (!t) {
                    for (C = e.child; C; ) {
                      if (C === Q) {
                        (t = !0), (Q = e), (g = E);
                        break;
                      }
                      if (C === g) {
                        (t = !0), (g = e), (Q = E);
                        break;
                      }
                      C = C.sibling;
                    }
                    if (!t) throw Error(n(189));
                  }
                }
                if (Q.alternate !== g) throw Error(n(190));
              }
              if (3 !== Q.tag) throw Error(n(188));
              return Q.stateNode.current === Q ? A : B;
            })(A)),
            !A)
          )
            return null;
          for (var B = A; ; ) {
            if (5 === B.tag || 6 === B.tag) return B;
            if (B.child) (B.child.return = B), (B = B.child);
            else {
              if (B === A) break;
              for (; !B.sibling; ) {
                if (!B.return || B.return === A) return null;
                B = B.return;
              }
              (B.sibling.return = B.return), (B = B.sibling);
            }
          }
          return null;
        }
        function AB(A, B) {
          for (var Q = A.alternate; null !== B; ) {
            if (B === A || B === Q) return !0;
            B = B.return;
          }
          return !1;
        }
        var BB,
          QB,
          gB,
          EB,
          eB = !1,
          nB = [],
          tB = null,
          CB = null,
          IB = null,
          oB = new Map(),
          iB = new Map(),
          aB = [],
          wB =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function rB(A, B, Q, g, E) {
          return {
            blockedOn: A,
            domEventName: B,
            eventSystemFlags: 16 | Q,
            nativeEvent: E,
            targetContainers: [g],
          };
        }
        function cB(A, B) {
          switch (A) {
            case 'focusin':
            case 'focusout':
              tB = null;
              break;
            case 'dragenter':
            case 'dragleave':
              CB = null;
              break;
            case 'mouseover':
            case 'mouseout':
              IB = null;
              break;
            case 'pointerover':
            case 'pointerout':
              oB.delete(B.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              iB.delete(B.pointerId);
          }
        }
        function sB(A, B, Q, g, E, e) {
          return null === A || A.nativeEvent !== e
            ? ((A = rB(B, Q, g, E, e)),
              null !== B && null !== (B = QE(B)) && QB(B),
              A)
            : ((A.eventSystemFlags |= g),
              (B = A.targetContainers),
              null !== E && -1 === B.indexOf(E) && B.push(E),
              A);
        }
        function lB(A) {
          var B = BE(A.target);
          if (null !== B) {
            var Q = PA(B);
            if (null !== Q)
              if (13 === (B = Q.tag)) {
                if (null !== (B = qA(Q)))
                  return (
                    (A.blockedOn = B),
                    void EB(A.lanePriority, function () {
                      e.unstable_runWithPriority(A.priority, function () {
                        gB(Q);
                      });
                    })
                  );
              } else if (3 === B && Q.stateNode.hydrate)
                return void (A.blockedOn =
                  3 === Q.tag ? Q.stateNode.containerInfo : null);
          }
          A.blockedOn = null;
        }
        function FB(A) {
          if (null !== A.blockedOn) return !1;
          for (var B = A.targetContainers; 0 < B.length; ) {
            var Q = $B(A.domEventName, A.eventSystemFlags, B[0], A.nativeEvent);
            if (null !== Q)
              return null !== (B = QE(Q)) && QB(B), (A.blockedOn = Q), !1;
            B.shift();
          }
          return !0;
        }
        function DB(A, B, Q) {
          FB(A) && Q.delete(B);
        }
        function UB() {
          for (eB = !1; 0 < nB.length; ) {
            var A = nB[0];
            if (null !== A.blockedOn) {
              null !== (A = QE(A.blockedOn)) && BB(A);
              break;
            }
            for (var B = A.targetContainers; 0 < B.length; ) {
              var Q = $B(
                A.domEventName,
                A.eventSystemFlags,
                B[0],
                A.nativeEvent,
              );
              if (null !== Q) {
                A.blockedOn = Q;
                break;
              }
              B.shift();
            }
            null === A.blockedOn && nB.shift();
          }
          null !== tB && FB(tB) && (tB = null),
            null !== CB && FB(CB) && (CB = null),
            null !== IB && FB(IB) && (IB = null),
            oB.forEach(DB),
            iB.forEach(DB);
        }
        function uB(A, B) {
          A.blockedOn === B &&
            ((A.blockedOn = null),
            eB ||
              ((eB = !0),
              e.unstable_scheduleCallback(e.unstable_NormalPriority, UB)));
        }
        function dB(A) {
          function B(B) {
            return uB(B, A);
          }
          if (0 < nB.length) {
            uB(nB[0], A);
            for (var Q = 1; Q < nB.length; Q++) {
              var g = nB[Q];
              g.blockedOn === A && (g.blockedOn = null);
            }
          }
          for (
            null !== tB && uB(tB, A),
              null !== CB && uB(CB, A),
              null !== IB && uB(IB, A),
              oB.forEach(B),
              iB.forEach(B),
              Q = 0;
            Q < aB.length;
            Q++
          )
            (g = aB[Q]).blockedOn === A && (g.blockedOn = null);
          for (; 0 < aB.length && null === (Q = aB[0]).blockedOn; )
            lB(Q), null === Q.blockedOn && aB.shift();
        }
        function MB(A, B) {
          var Q = {};
          return (
            (Q[A.toLowerCase()] = B.toLowerCase()),
            (Q['Webkit' + A] = 'webkit' + B),
            (Q['Moz' + A] = 'moz' + B),
            Q
          );
        }
        var fB = {
            animationend: MB('Animation', 'AnimationEnd'),
            animationiteration: MB('Animation', 'AnimationIteration'),
            animationstart: MB('Animation', 'AnimationStart'),
            transitionend: MB('Transition', 'TransitionEnd'),
          },
          GB = {},
          hB = {};
        function RB(A) {
          if (GB[A]) return GB[A];
          if (!fB[A]) return A;
          var B,
            Q = fB[A];
          for (B in Q)
            if (Q.hasOwnProperty(B) && B in hB) return (GB[A] = Q[B]);
          return A;
        }
        i &&
          ((hB = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete fB.animationend.animation,
            delete fB.animationiteration.animation,
            delete fB.animationstart.animation),
          'TransitionEvent' in window || delete fB.transitionend.transition);
        var YB = RB('animationend'),
          pB = RB('animationiteration'),
          NB = RB('animationstart'),
          bB = RB('transitionend'),
          mB = new Map(),
          yB = new Map(),
          JB = [
            'abort',
            'abort',
            YB,
            'animationEnd',
            pB,
            'animationIteration',
            NB,
            'animationStart',
            'canplay',
            'canPlay',
            'canplaythrough',
            'canPlayThrough',
            'durationchange',
            'durationChange',
            'emptied',
            'emptied',
            'encrypted',
            'encrypted',
            'ended',
            'ended',
            'error',
            'error',
            'gotpointercapture',
            'gotPointerCapture',
            'load',
            'load',
            'loadeddata',
            'loadedData',
            'loadedmetadata',
            'loadedMetadata',
            'loadstart',
            'loadStart',
            'lostpointercapture',
            'lostPointerCapture',
            'playing',
            'playing',
            'progress',
            'progress',
            'seeking',
            'seeking',
            'stalled',
            'stalled',
            'suspend',
            'suspend',
            'timeupdate',
            'timeUpdate',
            bB,
            'transitionEnd',
            'waiting',
            'waiting',
          ];
        function kB(A, B) {
          for (var Q = 0; Q < A.length; Q += 2) {
            var g = A[Q],
              E = A[Q + 1];
            (E = 'on' + (E[0].toUpperCase() + E.slice(1))),
              yB.set(g, B),
              mB.set(g, E),
              I(E, [g]);
          }
        }
        (0, e.unstable_now)();
        var ZB = 8;
        function XB(A) {
          if (0 !== (1 & A)) return (ZB = 15), 1;
          if (0 !== (2 & A)) return (ZB = 14), 2;
          if (0 !== (4 & A)) return (ZB = 13), 4;
          var B = 24 & A;
          return 0 !== B
            ? ((ZB = 12), B)
            : 0 !== (32 & A)
            ? ((ZB = 11), 32)
            : 0 !== (B = 192 & A)
            ? ((ZB = 10), B)
            : 0 !== (256 & A)
            ? ((ZB = 9), 256)
            : 0 !== (B = 3584 & A)
            ? ((ZB = 8), B)
            : 0 !== (4096 & A)
            ? ((ZB = 7), 4096)
            : 0 !== (B = 4186112 & A)
            ? ((ZB = 6), B)
            : 0 !== (B = 62914560 & A)
            ? ((ZB = 5), B)
            : 67108864 & A
            ? ((ZB = 4), 67108864)
            : 0 !== (134217728 & A)
            ? ((ZB = 3), 134217728)
            : 0 !== (B = 805306368 & A)
            ? ((ZB = 2), B)
            : 0 !== (1073741824 & A)
            ? ((ZB = 1), 1073741824)
            : ((ZB = 8), A);
        }
        function LB(A, B) {
          var Q = A.pendingLanes;
          if (0 === Q) return (ZB = 0);
          var g = 0,
            E = 0,
            e = A.expiredLanes,
            n = A.suspendedLanes,
            t = A.pingedLanes;
          if (0 !== e) (g = e), (E = ZB = 15);
          else if (0 !== (e = 134217727 & Q)) {
            var C = e & ~n;
            0 !== C
              ? ((g = XB(C)), (E = ZB))
              : 0 !== (t &= e) && ((g = XB(t)), (E = ZB));
          } else
            0 !== (e = Q & ~n)
              ? ((g = XB(e)), (E = ZB))
              : 0 !== t && ((g = XB(t)), (E = ZB));
          if (0 === g) return 0;
          if (
            ((g = Q & (((0 > (g = 31 - VB(g)) ? 0 : 1 << g) << 1) - 1)),
            0 !== B && B !== g && 0 === (B & n))
          ) {
            if ((XB(B), E <= ZB)) return B;
            ZB = E;
          }
          if (0 !== (B = A.entangledLanes))
            for (A = A.entanglements, B &= g; 0 < B; )
              (E = 1 << (Q = 31 - VB(B))), (g |= A[Q]), (B &= ~E);
          return g;
        }
        function vB(A) {
          return 0 !== (A = -1073741825 & A.pendingLanes)
            ? A
            : 1073741824 & A
            ? 1073741824
            : 0;
        }
        function SB(A, B) {
          switch (A) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (A = HB(24 & ~B)) ? SB(10, B) : A;
            case 10:
              return 0 === (A = HB(192 & ~B)) ? SB(8, B) : A;
            case 8:
              return (
                0 === (A = HB(3584 & ~B)) &&
                  0 === (A = HB(4186112 & ~B)) &&
                  (A = 512),
                A
              );
            case 2:
              return 0 === (B = HB(805306368 & ~B)) && (B = 268435456), B;
          }
          throw Error(n(358, A));
        }
        function HB(A) {
          return A & -A;
        }
        function WB(A) {
          for (var B = [], Q = 0; 31 > Q; Q++) B.push(A);
          return B;
        }
        function OB(A, B, Q) {
          A.pendingLanes |= B;
          var g = B - 1;
          (A.suspendedLanes &= g),
            (A.pingedLanes &= g),
            ((A = A.eventTimes)[(B = 31 - VB(B))] = Q);
        }
        var VB = Math.clz32
            ? Math.clz32
            : function (A) {
                return 0 === A ? 32 : (31 - ((xB(A) / TB) | 0)) | 0;
              },
          xB = Math.log,
          TB = Math.LN2;
        var zB = e.unstable_UserBlockingPriority,
          jB = e.unstable_runWithPriority,
          KB = !0;
        function PB(A, B, Q, g) {
          XA || kA();
          var E = _B,
            e = XA;
          XA = !0;
          try {
            JA(E, A, B, Q, g);
          } finally {
            (XA = e) || vA();
          }
        }
        function qB(A, B, Q, g) {
          jB(zB, _B.bind(null, A, B, Q, g));
        }
        function _B(A, B, Q, g) {
          var E;
          if (KB)
            if ((E = 0 === (4 & B)) && 0 < nB.length && -1 < wB.indexOf(A))
              (A = rB(null, A, B, Q, g)), nB.push(A);
            else {
              var e = $B(A, B, Q, g);
              if (null === e) E && cB(A, g);
              else {
                if (E) {
                  if (-1 < wB.indexOf(A))
                    return (A = rB(e, A, B, Q, g)), void nB.push(A);
                  if (
                    (function (A, B, Q, g, E) {
                      switch (B) {
                        case 'focusin':
                          return (tB = sB(tB, A, B, Q, g, E)), !0;
                        case 'dragenter':
                          return (CB = sB(CB, A, B, Q, g, E)), !0;
                        case 'mouseover':
                          return (IB = sB(IB, A, B, Q, g, E)), !0;
                        case 'pointerover':
                          var e = E.pointerId;
                          return (
                            oB.set(e, sB(oB.get(e) || null, A, B, Q, g, E)), !0
                          );
                        case 'gotpointercapture':
                          return (
                            (e = E.pointerId),
                            iB.set(e, sB(iB.get(e) || null, A, B, Q, g, E)),
                            !0
                          );
                      }
                      return !1;
                    })(e, A, B, Q, g)
                  )
                    return;
                  cB(A, g);
                }
                Jg(A, B, g, null, Q);
              }
            }
        }
        function $B(A, B, Q, g) {
          var E = hA(g);
          if (null !== (E = BE(E))) {
            var e = PA(E);
            if (null === e) E = null;
            else {
              var n = e.tag;
              if (13 === n) {
                if (null !== (E = qA(e))) return E;
                E = null;
              } else if (3 === n) {
                if (e.stateNode.hydrate)
                  return 3 === e.tag ? e.stateNode.containerInfo : null;
                E = null;
              } else e !== E && (E = null);
            }
          }
          return Jg(A, B, g, E, Q), null;
        }
        var AQ = null,
          BQ = null,
          QQ = null;
        function gQ() {
          if (QQ) return QQ;
          var A,
            B,
            Q = BQ,
            g = Q.length,
            E = 'value' in AQ ? AQ.value : AQ.textContent,
            e = E.length;
          for (A = 0; A < g && Q[A] === E[A]; A++);
          var n = g - A;
          for (B = 1; B <= n && Q[g - B] === E[e - B]; B++);
          return (QQ = E.slice(A, 1 < B ? 1 - B : void 0));
        }
        function EQ(A) {
          var B = A.keyCode;
          return (
            'charCode' in A
              ? 0 === (A = A.charCode) && 13 === B && (A = 13)
              : (A = B),
            10 === A && (A = 13),
            32 <= A || 13 === A ? A : 0
          );
        }
        function eQ() {
          return !0;
        }
        function nQ() {
          return !1;
        }
        function tQ(A) {
          function B(B, Q, g, E, e) {
            for (var n in ((this._reactName = B),
            (this._targetInst = g),
            (this.type = Q),
            (this.nativeEvent = E),
            (this.target = e),
            (this.currentTarget = null),
            A))
              A.hasOwnProperty(n) && ((B = A[n]), (this[n] = B ? B(E) : E[n]));
            return (
              (this.isDefaultPrevented = (
                null != E.defaultPrevented
                  ? E.defaultPrevented
                  : !1 === E.returnValue
              )
                ? eQ
                : nQ),
              (this.isPropagationStopped = nQ),
              this
            );
          }
          return (
            E(B.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var A = this.nativeEvent;
                A &&
                  (A.preventDefault
                    ? A.preventDefault()
                    : 'unknown' !== typeof A.returnValue &&
                      (A.returnValue = !1),
                  (this.isDefaultPrevented = eQ));
              },
              stopPropagation: function () {
                var A = this.nativeEvent;
                A &&
                  (A.stopPropagation
                    ? A.stopPropagation()
                    : 'unknown' !== typeof A.cancelBubble &&
                      (A.cancelBubble = !0),
                  (this.isPropagationStopped = eQ));
              },
              persist: function () {},
              isPersistent: eQ,
            }),
            B
          );
        }
        var CQ,
          IQ,
          oQ,
          iQ = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (A) {
              return A.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          aQ = tQ(iQ),
          wQ = E({}, iQ, { view: 0, detail: 0 }),
          rQ = tQ(wQ),
          cQ = E({}, wQ, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: RQ,
            button: 0,
            buttons: 0,
            relatedTarget: function (A) {
              return void 0 === A.relatedTarget
                ? A.fromElement === A.srcElement
                  ? A.toElement
                  : A.fromElement
                : A.relatedTarget;
            },
            movementX: function (A) {
              return 'movementX' in A
                ? A.movementX
                : (A !== oQ &&
                    (oQ && 'mousemove' === A.type
                      ? ((CQ = A.screenX - oQ.screenX),
                        (IQ = A.screenY - oQ.screenY))
                      : (IQ = CQ = 0),
                    (oQ = A)),
                  CQ);
            },
            movementY: function (A) {
              return 'movementY' in A ? A.movementY : IQ;
            },
          }),
          sQ = tQ(cQ),
          lQ = tQ(E({}, cQ, { dataTransfer: 0 })),
          FQ = tQ(E({}, wQ, { relatedTarget: 0 })),
          DQ = tQ(
            E({}, iQ, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          UQ = E({}, iQ, {
            clipboardData: function (A) {
              return 'clipboardData' in A
                ? A.clipboardData
                : window.clipboardData;
            },
          }),
          uQ = tQ(UQ),
          dQ = tQ(E({}, iQ, { data: 0 })),
          MQ = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          fQ = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          GQ = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function hQ(A) {
          var B = this.nativeEvent;
          return B.getModifierState
            ? B.getModifierState(A)
            : !!(A = GQ[A]) && !!B[A];
        }
        function RQ() {
          return hQ;
        }
        var YQ = E({}, wQ, {
            key: function (A) {
              if (A.key) {
                var B = MQ[A.key] || A.key;
                if ('Unidentified' !== B) return B;
              }
              return 'keypress' === A.type
                ? 13 === (A = EQ(A))
                  ? 'Enter'
                  : String.fromCharCode(A)
                : 'keydown' === A.type || 'keyup' === A.type
                ? fQ[A.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: RQ,
            charCode: function (A) {
              return 'keypress' === A.type ? EQ(A) : 0;
            },
            keyCode: function (A) {
              return 'keydown' === A.type || 'keyup' === A.type ? A.keyCode : 0;
            },
            which: function (A) {
              return 'keypress' === A.type
                ? EQ(A)
                : 'keydown' === A.type || 'keyup' === A.type
                ? A.keyCode
                : 0;
            },
          }),
          pQ = tQ(YQ),
          NQ = tQ(
            E({}, cQ, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          bQ = tQ(
            E({}, wQ, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: RQ,
            }),
          ),
          mQ = tQ(
            E({}, iQ, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yQ = E({}, cQ, {
            deltaX: function (A) {
              return 'deltaX' in A
                ? A.deltaX
                : 'wheelDeltaX' in A
                ? -A.wheelDeltaX
                : 0;
            },
            deltaY: function (A) {
              return 'deltaY' in A
                ? A.deltaY
                : 'wheelDeltaY' in A
                ? -A.wheelDeltaY
                : 'wheelDelta' in A
                ? -A.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          JQ = tQ(yQ),
          kQ = [9, 13, 27, 32],
          ZQ = i && 'CompositionEvent' in window,
          XQ = null;
        i && 'documentMode' in document && (XQ = document.documentMode);
        var LQ = i && 'TextEvent' in window && !XQ,
          vQ = i && (!ZQ || (XQ && 8 < XQ && 11 >= XQ)),
          SQ = String.fromCharCode(32),
          HQ = !1;
        function WQ(A, B) {
          switch (A) {
            case 'keyup':
              return -1 !== kQ.indexOf(B.keyCode);
            case 'keydown':
              return 229 !== B.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function OQ(A) {
          return 'object' === typeof (A = A.detail) && 'data' in A
            ? A.data
            : null;
        }
        var VQ = !1;
        var xQ = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function TQ(A) {
          var B = A && A.nodeName && A.nodeName.toLowerCase();
          return 'input' === B ? !!xQ[A.type] : 'textarea' === B;
        }
        function zQ(A, B, Q, g) {
          bA(g),
            0 < (B = Zg(B, 'onChange')).length &&
              ((Q = new aQ('onChange', 'change', null, Q, g)),
              A.push({ event: Q, listeners: B }));
        }
        var jQ = null,
          KQ = null;
        function PQ(A) {
          Yg(A, 0);
        }
        function qQ(A) {
          if (q(gE(A))) return A;
        }
        function _Q(A, B) {
          if ('change' === A) return B;
        }
        var $Q = !1;
        if (i) {
          var Ag;
          if (i) {
            var Bg = 'oninput' in document;
            if (!Bg) {
              var Qg = document.createElement('div');
              Qg.setAttribute('oninput', 'return;'),
                (Bg = 'function' === typeof Qg.oninput);
            }
            Ag = Bg;
          } else Ag = !1;
          $Q = Ag && (!document.documentMode || 9 < document.documentMode);
        }
        function gg() {
          jQ && (jQ.detachEvent('onpropertychange', Eg), (KQ = jQ = null));
        }
        function Eg(A) {
          if ('value' === A.propertyName && qQ(KQ)) {
            var B = [];
            if ((zQ(B, KQ, A, hA(A)), (A = PQ), XA)) A(B);
            else {
              XA = !0;
              try {
                yA(A, B);
              } finally {
                (XA = !1), vA();
              }
            }
          }
        }
        function eg(A, B, Q) {
          'focusin' === A
            ? (gg(), (KQ = Q), (jQ = B).attachEvent('onpropertychange', Eg))
            : 'focusout' === A && gg();
        }
        function ng(A) {
          if ('selectionchange' === A || 'keyup' === A || 'keydown' === A)
            return qQ(KQ);
        }
        function tg(A, B) {
          if ('click' === A) return qQ(B);
        }
        function Cg(A, B) {
          if ('input' === A || 'change' === A) return qQ(B);
        }
        var Ig =
            'function' === typeof Object.is
              ? Object.is
              : function (A, B) {
                  return (
                    (A === B && (0 !== A || 1 / A === 1 / B)) ||
                    (A !== A && B !== B)
                  );
                },
          og = Object.prototype.hasOwnProperty;
        function ig(A, B) {
          if (Ig(A, B)) return !0;
          if (
            'object' !== typeof A ||
            null === A ||
            'object' !== typeof B ||
            null === B
          )
            return !1;
          var Q = Object.keys(A),
            g = Object.keys(B);
          if (Q.length !== g.length) return !1;
          for (g = 0; g < Q.length; g++)
            if (!og.call(B, Q[g]) || !Ig(A[Q[g]], B[Q[g]])) return !1;
          return !0;
        }
        function ag(A) {
          for (; A && A.firstChild; ) A = A.firstChild;
          return A;
        }
        function wg(A, B) {
          var Q,
            g = ag(A);
          for (A = 0; g; ) {
            if (3 === g.nodeType) {
              if (((Q = A + g.textContent.length), A <= B && Q >= B))
                return { node: g, offset: B - A };
              A = Q;
            }
            A: {
              for (; g; ) {
                if (g.nextSibling) {
                  g = g.nextSibling;
                  break A;
                }
                g = g.parentNode;
              }
              g = void 0;
            }
            g = ag(g);
          }
        }
        function rg(A, B) {
          return (
            !(!A || !B) &&
            (A === B ||
              ((!A || 3 !== A.nodeType) &&
                (B && 3 === B.nodeType
                  ? rg(A, B.parentNode)
                  : 'contains' in A
                  ? A.contains(B)
                  : !!A.compareDocumentPosition &&
                    !!(16 & A.compareDocumentPosition(B)))))
          );
        }
        function cg() {
          for (var A = window, B = _(); B instanceof A.HTMLIFrameElement; ) {
            try {
              var Q = 'string' === typeof B.contentWindow.location.href;
            } catch (g) {
              Q = !1;
            }
            if (!Q) break;
            B = _((A = B.contentWindow).document);
          }
          return B;
        }
        function sg(A) {
          var B = A && A.nodeName && A.nodeName.toLowerCase();
          return (
            B &&
            (('input' === B &&
              ('text' === A.type ||
                'search' === A.type ||
                'tel' === A.type ||
                'url' === A.type ||
                'password' === A.type)) ||
              'textarea' === B ||
              'true' === A.contentEditable)
          );
        }
        var lg = i && 'documentMode' in document && 11 >= document.documentMode,
          Fg = null,
          Dg = null,
          Ug = null,
          ug = !1;
        function dg(A, B, Q) {
          var g =
            Q.window === Q
              ? Q.document
              : 9 === Q.nodeType
              ? Q
              : Q.ownerDocument;
          ug ||
            null == Fg ||
            Fg !== _(g) ||
            ('selectionStart' in (g = Fg) && sg(g)
              ? (g = { start: g.selectionStart, end: g.selectionEnd })
              : (g = {
                  anchorNode: (g = (
                    (g.ownerDocument && g.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: g.anchorOffset,
                  focusNode: g.focusNode,
                  focusOffset: g.focusOffset,
                }),
            (Ug && ig(Ug, g)) ||
              ((Ug = g),
              0 < (g = Zg(Dg, 'onSelect')).length &&
                ((B = new aQ('onSelect', 'select', null, B, Q)),
                A.push({ event: B, listeners: g }),
                (B.target = Fg))));
        }
        kB(
          'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
            ' ',
          ),
          0,
        ),
          kB(
            'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
              ' ',
            ),
            1,
          ),
          kB(JB, 2);
        for (
          var Mg =
              'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
                ' ',
              ),
            fg = 0;
          fg < Mg.length;
          fg++
        )
          yB.set(Mg[fg], 0);
        o('onMouseEnter', ['mouseout', 'mouseover']),
          o('onMouseLeave', ['mouseout', 'mouseover']),
          o('onPointerEnter', ['pointerout', 'pointerover']),
          o('onPointerLeave', ['pointerout', 'pointerover']),
          I(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' ',
            ),
          ),
          I(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          I('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          I(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          I(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          I(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          );
        var Gg =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          hg = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Gg),
          );
        function Rg(A, B, Q) {
          var g = A.type || 'unknown-event';
          (A.currentTarget = Q),
            (function (A, B, Q, g, E, e, t, C, I) {
              if ((KA.apply(this, arguments), VA)) {
                if (!VA) throw Error(n(198));
                var o = xA;
                (VA = !1), (xA = null), TA || ((TA = !0), (zA = o));
              }
            })(g, B, void 0, A),
            (A.currentTarget = null);
        }
        function Yg(A, B) {
          B = 0 !== (4 & B);
          for (var Q = 0; Q < A.length; Q++) {
            var g = A[Q],
              E = g.event;
            g = g.listeners;
            A: {
              var e = void 0;
              if (B)
                for (var n = g.length - 1; 0 <= n; n--) {
                  var t = g[n],
                    C = t.instance,
                    I = t.currentTarget;
                  if (((t = t.listener), C !== e && E.isPropagationStopped()))
                    break A;
                  Rg(E, t, I), (e = C);
                }
              else
                for (n = 0; n < g.length; n++) {
                  if (
                    ((C = (t = g[n]).instance),
                    (I = t.currentTarget),
                    (t = t.listener),
                    C !== e && E.isPropagationStopped())
                  )
                    break A;
                  Rg(E, t, I), (e = C);
                }
            }
          }
          if (TA) throw ((A = zA), (TA = !1), (zA = null), A);
        }
        function pg(A, B) {
          var Q = eE(B),
            g = A + '__bubble';
          Q.has(g) || (yg(B, A, 2, !1), Q.add(g));
        }
        var Ng = '_reactListening' + Math.random().toString(36).slice(2);
        function bg(A) {
          A[Ng] ||
            ((A[Ng] = !0),
            t.forEach(function (B) {
              hg.has(B) || mg(B, !1, A, null), mg(B, !0, A, null);
            }));
        }
        function mg(A, B, Q, g) {
          var E =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            e = Q;
          if (
            ('selectionchange' === A &&
              9 !== Q.nodeType &&
              (e = Q.ownerDocument),
            null !== g && !B && hg.has(A))
          ) {
            if ('scroll' !== A) return;
            (E |= 2), (e = g);
          }
          var n = eE(e),
            t = A + '__' + (B ? 'capture' : 'bubble');
          n.has(t) || (B && (E |= 4), yg(e, A, E, B), n.add(t));
        }
        function yg(A, B, Q, g) {
          var E = yB.get(B);
          switch (void 0 === E ? 2 : E) {
            case 0:
              E = PB;
              break;
            case 1:
              E = qB;
              break;
            default:
              E = _B;
          }
          (Q = E.bind(null, B, Q, A)),
            (E = void 0),
            !HA ||
              ('touchstart' !== B && 'touchmove' !== B && 'wheel' !== B) ||
              (E = !0),
            g
              ? void 0 !== E
                ? A.addEventListener(B, Q, { capture: !0, passive: E })
                : A.addEventListener(B, Q, !0)
              : void 0 !== E
              ? A.addEventListener(B, Q, { passive: E })
              : A.addEventListener(B, Q, !1);
        }
        function Jg(A, B, Q, g, E) {
          var e = g;
          if (0 === (1 & B) && 0 === (2 & B) && null !== g)
            A: for (;;) {
              if (null === g) return;
              var n = g.tag;
              if (3 === n || 4 === n) {
                var t = g.stateNode.containerInfo;
                if (t === E || (8 === t.nodeType && t.parentNode === E)) break;
                if (4 === n)
                  for (n = g.return; null !== n; ) {
                    var C = n.tag;
                    if (
                      (3 === C || 4 === C) &&
                      ((C = n.stateNode.containerInfo) === E ||
                        (8 === C.nodeType && C.parentNode === E))
                    )
                      return;
                    n = n.return;
                  }
                for (; null !== t; ) {
                  if (null === (n = BE(t))) return;
                  if (5 === (C = n.tag) || 6 === C) {
                    g = e = n;
                    continue A;
                  }
                  t = t.parentNode;
                }
              }
              g = g.return;
            }
          !(function (A, B, Q) {
            if (LA) return A(B, Q);
            LA = !0;
            try {
              ZA(A, B, Q);
            } finally {
              (LA = !1), vA();
            }
          })(function () {
            var g = e,
              E = hA(Q),
              n = [];
            A: {
              var t = mB.get(A);
              if (void 0 !== t) {
                var C = aQ,
                  I = A;
                switch (A) {
                  case 'keypress':
                    if (0 === EQ(Q)) break A;
                  case 'keydown':
                  case 'keyup':
                    C = pQ;
                    break;
                  case 'focusin':
                    (I = 'focus'), (C = FQ);
                    break;
                  case 'focusout':
                    (I = 'blur'), (C = FQ);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    C = FQ;
                    break;
                  case 'click':
                    if (2 === Q.button) break A;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    C = sQ;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    C = lQ;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    C = bQ;
                    break;
                  case YB:
                  case pB:
                  case NB:
                    C = DQ;
                    break;
                  case bB:
                    C = mQ;
                    break;
                  case 'scroll':
                    C = rQ;
                    break;
                  case 'wheel':
                    C = JQ;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    C = uQ;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    C = NQ;
                }
                var o = 0 !== (4 & B),
                  i = !o && 'scroll' === A,
                  a = o ? (null !== t ? t + 'Capture' : null) : t;
                o = [];
                for (var w, r = g; null !== r; ) {
                  var c = (w = r).stateNode;
                  if (
                    (5 === w.tag &&
                      null !== c &&
                      ((w = c),
                      null !== a &&
                        null != (c = SA(r, a)) &&
                        o.push(kg(r, c, w))),
                    i)
                  )
                    break;
                  r = r.return;
                }
                0 < o.length &&
                  ((t = new C(t, I, null, Q, E)),
                  n.push({ event: t, listeners: o }));
              }
            }
            if (0 === (7 & B)) {
              if (
                ((C = 'mouseout' === A || 'pointerout' === A),
                (!(t = 'mouseover' === A || 'pointerover' === A) ||
                  0 !== (16 & B) ||
                  !(I = Q.relatedTarget || Q.fromElement) ||
                  (!BE(I) && !I[$g])) &&
                  (C || t) &&
                  ((t =
                    E.window === E
                      ? E
                      : (t = E.ownerDocument)
                      ? t.defaultView || t.parentWindow
                      : window),
                  C
                    ? ((C = g),
                      null !==
                        (I = (I = Q.relatedTarget || Q.toElement)
                          ? BE(I)
                          : null) &&
                        (I !== (i = PA(I)) || (5 !== I.tag && 6 !== I.tag)) &&
                        (I = null))
                    : ((C = null), (I = g)),
                  C !== I))
              ) {
                if (
                  ((o = sQ),
                  (c = 'onMouseLeave'),
                  (a = 'onMouseEnter'),
                  (r = 'mouse'),
                  ('pointerout' !== A && 'pointerover' !== A) ||
                    ((o = NQ),
                    (c = 'onPointerLeave'),
                    (a = 'onPointerEnter'),
                    (r = 'pointer')),
                  (i = null == C ? t : gE(C)),
                  (w = null == I ? t : gE(I)),
                  ((t = new o(c, r + 'leave', C, Q, E)).target = i),
                  (t.relatedTarget = w),
                  (c = null),
                  BE(E) === g &&
                    (((o = new o(a, r + 'enter', I, Q, E)).target = w),
                    (o.relatedTarget = i),
                    (c = o)),
                  (i = c),
                  C && I)
                )
                  A: {
                    for (a = I, r = 0, w = o = C; w; w = Xg(w)) r++;
                    for (w = 0, c = a; c; c = Xg(c)) w++;
                    for (; 0 < r - w; ) (o = Xg(o)), r--;
                    for (; 0 < w - r; ) (a = Xg(a)), w--;
                    for (; r--; ) {
                      if (o === a || (null !== a && o === a.alternate)) break A;
                      (o = Xg(o)), (a = Xg(a));
                    }
                    o = null;
                  }
                else o = null;
                null !== C && Lg(n, t, C, o, !1),
                  null !== I && null !== i && Lg(n, i, I, o, !0);
              }
              if (
                'select' ===
                  (C =
                    (t = g ? gE(g) : window).nodeName &&
                    t.nodeName.toLowerCase()) ||
                ('input' === C && 'file' === t.type)
              )
                var s = _Q;
              else if (TQ(t))
                if ($Q) s = Cg;
                else {
                  s = ng;
                  var l = eg;
                }
              else
                (C = t.nodeName) &&
                  'input' === C.toLowerCase() &&
                  ('checkbox' === t.type || 'radio' === t.type) &&
                  (s = tg);
              switch (
                (s && (s = s(A, g))
                  ? zQ(n, s, Q, E)
                  : (l && l(A, t, g),
                    'focusout' === A &&
                      (l = t._wrapperState) &&
                      l.controlled &&
                      'number' === t.type &&
                      EA(t, 'number', t.value)),
                (l = g ? gE(g) : window),
                A)
              ) {
                case 'focusin':
                  (TQ(l) || 'true' === l.contentEditable) &&
                    ((Fg = l), (Dg = g), (Ug = null));
                  break;
                case 'focusout':
                  Ug = Dg = Fg = null;
                  break;
                case 'mousedown':
                  ug = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (ug = !1), dg(n, Q, E);
                  break;
                case 'selectionchange':
                  if (lg) break;
                case 'keydown':
                case 'keyup':
                  dg(n, Q, E);
              }
              var F;
              if (ZQ)
                A: {
                  switch (A) {
                    case 'compositionstart':
                      var D = 'onCompositionStart';
                      break A;
                    case 'compositionend':
                      D = 'onCompositionEnd';
                      break A;
                    case 'compositionupdate':
                      D = 'onCompositionUpdate';
                      break A;
                  }
                  D = void 0;
                }
              else
                VQ
                  ? WQ(A, Q) && (D = 'onCompositionEnd')
                  : 'keydown' === A &&
                    229 === Q.keyCode &&
                    (D = 'onCompositionStart');
              D &&
                (vQ &&
                  'ko' !== Q.locale &&
                  (VQ || 'onCompositionStart' !== D
                    ? 'onCompositionEnd' === D && VQ && (F = gQ())
                    : ((BQ = 'value' in (AQ = E) ? AQ.value : AQ.textContent),
                      (VQ = !0))),
                0 < (l = Zg(g, D)).length &&
                  ((D = new dQ(D, A, null, Q, E)),
                  n.push({ event: D, listeners: l }),
                  F ? (D.data = F) : null !== (F = OQ(Q)) && (D.data = F))),
                (F = LQ
                  ? (function (A, B) {
                      switch (A) {
                        case 'compositionend':
                          return OQ(B);
                        case 'keypress':
                          return 32 !== B.which ? null : ((HQ = !0), SQ);
                        case 'textInput':
                          return (A = B.data) === SQ && HQ ? null : A;
                        default:
                          return null;
                      }
                    })(A, Q)
                  : (function (A, B) {
                      if (VQ)
                        return 'compositionend' === A || (!ZQ && WQ(A, B))
                          ? ((A = gQ()), (QQ = BQ = AQ = null), (VQ = !1), A)
                          : null;
                      switch (A) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(B.ctrlKey || B.altKey || B.metaKey) ||
                            (B.ctrlKey && B.altKey)
                          ) {
                            if (B.char && 1 < B.char.length) return B.char;
                            if (B.which) return String.fromCharCode(B.which);
                          }
                          return null;
                        case 'compositionend':
                          return vQ && 'ko' !== B.locale ? null : B.data;
                      }
                    })(A, Q)) &&
                  0 < (g = Zg(g, 'onBeforeInput')).length &&
                  ((E = new dQ('onBeforeInput', 'beforeinput', null, Q, E)),
                  n.push({ event: E, listeners: g }),
                  (E.data = F));
            }
            Yg(n, B);
          });
        }
        function kg(A, B, Q) {
          return { instance: A, listener: B, currentTarget: Q };
        }
        function Zg(A, B) {
          for (var Q = B + 'Capture', g = []; null !== A; ) {
            var E = A,
              e = E.stateNode;
            5 === E.tag &&
              null !== e &&
              ((E = e),
              null != (e = SA(A, Q)) && g.unshift(kg(A, e, E)),
              null != (e = SA(A, B)) && g.push(kg(A, e, E))),
              (A = A.return);
          }
          return g;
        }
        function Xg(A) {
          if (null === A) return null;
          do {
            A = A.return;
          } while (A && 5 !== A.tag);
          return A || null;
        }
        function Lg(A, B, Q, g, E) {
          for (var e = B._reactName, n = []; null !== Q && Q !== g; ) {
            var t = Q,
              C = t.alternate,
              I = t.stateNode;
            if (null !== C && C === g) break;
            5 === t.tag &&
              null !== I &&
              ((t = I),
              E
                ? null != (C = SA(Q, e)) && n.unshift(kg(Q, C, t))
                : E || (null != (C = SA(Q, e)) && n.push(kg(Q, C, t)))),
              (Q = Q.return);
          }
          0 !== n.length && A.push({ event: B, listeners: n });
        }
        function vg() {}
        var Sg = null,
          Hg = null;
        function Wg(A, B) {
          switch (A) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              return !!B.autoFocus;
          }
          return !1;
        }
        function Og(A, B) {
          return (
            'textarea' === A ||
            'option' === A ||
            'noscript' === A ||
            'string' === typeof B.children ||
            'number' === typeof B.children ||
            ('object' === typeof B.dangerouslySetInnerHTML &&
              null !== B.dangerouslySetInnerHTML &&
              null != B.dangerouslySetInnerHTML.__html)
          );
        }
        var Vg = 'function' === typeof setTimeout ? setTimeout : void 0,
          xg = 'function' === typeof clearTimeout ? clearTimeout : void 0;
        function Tg(A) {
          1 === A.nodeType
            ? (A.textContent = '')
            : 9 === A.nodeType && null != (A = A.body) && (A.textContent = '');
        }
        function zg(A) {
          for (; null != A; A = A.nextSibling) {
            var B = A.nodeType;
            if (1 === B || 3 === B) break;
          }
          return A;
        }
        function jg(A) {
          A = A.previousSibling;
          for (var B = 0; A; ) {
            if (8 === A.nodeType) {
              var Q = A.data;
              if ('$' === Q || '$!' === Q || '$?' === Q) {
                if (0 === B) return A;
                B--;
              } else '/$' === Q && B++;
            }
            A = A.previousSibling;
          }
          return null;
        }
        var Kg = 0;
        var Pg = Math.random().toString(36).slice(2),
          qg = '__reactFiber$' + Pg,
          _g = '__reactProps$' + Pg,
          $g = '__reactContainer$' + Pg,
          AE = '__reactEvents$' + Pg;
        function BE(A) {
          var B = A[qg];
          if (B) return B;
          for (var Q = A.parentNode; Q; ) {
            if ((B = Q[$g] || Q[qg])) {
              if (
                ((Q = B.alternate),
                null !== B.child || (null !== Q && null !== Q.child))
              )
                for (A = jg(A); null !== A; ) {
                  if ((Q = A[qg])) return Q;
                  A = jg(A);
                }
              return B;
            }
            Q = (A = Q).parentNode;
          }
          return null;
        }
        function QE(A) {
          return !(A = A[qg] || A[$g]) ||
            (5 !== A.tag && 6 !== A.tag && 13 !== A.tag && 3 !== A.tag)
            ? null
            : A;
        }
        function gE(A) {
          if (5 === A.tag || 6 === A.tag) return A.stateNode;
          throw Error(n(33));
        }
        function EE(A) {
          return A[_g] || null;
        }
        function eE(A) {
          var B = A[AE];
          return void 0 === B && (B = A[AE] = new Set()), B;
        }
        var nE = [],
          tE = -1;
        function CE(A) {
          return { current: A };
        }
        function IE(A) {
          0 > tE || ((A.current = nE[tE]), (nE[tE] = null), tE--);
        }
        function oE(A, B) {
          tE++, (nE[tE] = A.current), (A.current = B);
        }
        var iE = {},
          aE = CE(iE),
          wE = CE(!1),
          rE = iE;
        function cE(A, B) {
          var Q = A.type.contextTypes;
          if (!Q) return iE;
          var g = A.stateNode;
          if (g && g.__reactInternalMemoizedUnmaskedChildContext === B)
            return g.__reactInternalMemoizedMaskedChildContext;
          var E,
            e = {};
          for (E in Q) e[E] = B[E];
          return (
            g &&
              (((A = A.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                B),
              (A.__reactInternalMemoizedMaskedChildContext = e)),
            e
          );
        }
        function sE(A) {
          return null !== (A = A.childContextTypes) && void 0 !== A;
        }
        function lE() {
          IE(wE), IE(aE);
        }
        function FE(A, B, Q) {
          if (aE.current !== iE) throw Error(n(168));
          oE(aE, B), oE(wE, Q);
        }
        function DE(A, B, Q) {
          var g = A.stateNode;
          if (
            ((A = B.childContextTypes), 'function' !== typeof g.getChildContext)
          )
            return Q;
          for (var e in (g = g.getChildContext()))
            if (!(e in A)) throw Error(n(108, z(B) || 'Unknown', e));
          return E({}, Q, g);
        }
        function UE(A) {
          return (
            (A =
              ((A = A.stateNode) &&
                A.__reactInternalMemoizedMergedChildContext) ||
              iE),
            (rE = aE.current),
            oE(aE, A),
            oE(wE, wE.current),
            !0
          );
        }
        function uE(A, B, Q) {
          var g = A.stateNode;
          if (!g) throw Error(n(169));
          Q
            ? ((A = DE(A, B, rE)),
              (g.__reactInternalMemoizedMergedChildContext = A),
              IE(wE),
              IE(aE),
              oE(aE, A))
            : IE(wE),
            oE(wE, Q);
        }
        var dE = null,
          ME = null,
          fE = e.unstable_runWithPriority,
          GE = e.unstable_scheduleCallback,
          hE = e.unstable_cancelCallback,
          RE = e.unstable_shouldYield,
          YE = e.unstable_requestPaint,
          pE = e.unstable_now,
          NE = e.unstable_getCurrentPriorityLevel,
          bE = e.unstable_ImmediatePriority,
          mE = e.unstable_UserBlockingPriority,
          yE = e.unstable_NormalPriority,
          JE = e.unstable_LowPriority,
          kE = e.unstable_IdlePriority,
          ZE = {},
          XE = void 0 !== YE ? YE : function () {},
          LE = null,
          vE = null,
          SE = !1,
          HE = pE(),
          WE =
            1e4 > HE
              ? pE
              : function () {
                  return pE() - HE;
                };
        function OE() {
          switch (NE()) {
            case bE:
              return 99;
            case mE:
              return 98;
            case yE:
              return 97;
            case JE:
              return 96;
            case kE:
              return 95;
            default:
              throw Error(n(332));
          }
        }
        function VE(A) {
          switch (A) {
            case 99:
              return bE;
            case 98:
              return mE;
            case 97:
              return yE;
            case 96:
              return JE;
            case 95:
              return kE;
            default:
              throw Error(n(332));
          }
        }
        function xE(A, B) {
          return (A = VE(A)), fE(A, B);
        }
        function TE(A, B, Q) {
          return (A = VE(A)), GE(A, B, Q);
        }
        function zE() {
          if (null !== vE) {
            var A = vE;
            (vE = null), hE(A);
          }
          jE();
        }
        function jE() {
          if (!SE && null !== LE) {
            SE = !0;
            var A = 0;
            try {
              var B = LE;
              xE(99, function () {
                for (; A < B.length; A++) {
                  var Q = B[A];
                  do {
                    Q = Q(!0);
                  } while (null !== Q);
                }
              }),
                (LE = null);
            } catch (Q) {
              throw (null !== LE && (LE = LE.slice(A + 1)), GE(bE, zE), Q);
            } finally {
              SE = !1;
            }
          }
        }
        var KE = u.ReactCurrentBatchConfig;
        function PE(A, B) {
          if (A && A.defaultProps) {
            for (var Q in ((B = E({}, B)), (A = A.defaultProps)))
              void 0 === B[Q] && (B[Q] = A[Q]);
            return B;
          }
          return B;
        }
        var qE = CE(null),
          _E = null,
          $E = null,
          Ae = null;
        function Be() {
          Ae = $E = _E = null;
        }
        function Qe(A) {
          var B = qE.current;
          IE(qE), (A.type._context._currentValue = B);
        }
        function ge(A, B) {
          for (; null !== A; ) {
            var Q = A.alternate;
            if ((A.childLanes & B) === B) {
              if (null === Q || (Q.childLanes & B) === B) break;
              Q.childLanes |= B;
            } else (A.childLanes |= B), null !== Q && (Q.childLanes |= B);
            A = A.return;
          }
        }
        function Ee(A, B) {
          (_E = A),
            (Ae = $E = null),
            null !== (A = A.dependencies) &&
              null !== A.firstContext &&
              (0 !== (A.lanes & B) && (Zn = !0), (A.firstContext = null));
        }
        function ee(A, B) {
          if (Ae !== A && !1 !== B && 0 !== B)
            if (
              (('number' === typeof B && 1073741823 !== B) ||
                ((Ae = A), (B = 1073741823)),
              (B = { context: A, observedBits: B, next: null }),
              null === $E)
            ) {
              if (null === _E) throw Error(n(308));
              ($E = B),
                (_E.dependencies = {
                  lanes: 0,
                  firstContext: B,
                  responders: null,
                });
            } else $E = $E.next = B;
          return A._currentValue;
        }
        var ne = !1;
        function te(A) {
          A.updateQueue = {
            baseState: A.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function Ce(A, B) {
          (A = A.updateQueue),
            B.updateQueue === A &&
              (B.updateQueue = {
                baseState: A.baseState,
                firstBaseUpdate: A.firstBaseUpdate,
                lastBaseUpdate: A.lastBaseUpdate,
                shared: A.shared,
                effects: A.effects,
              });
        }
        function Ie(A, B) {
          return {
            eventTime: A,
            lane: B,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function oe(A, B) {
          if (null !== (A = A.updateQueue)) {
            var Q = (A = A.shared).pending;
            null === Q ? (B.next = B) : ((B.next = Q.next), (Q.next = B)),
              (A.pending = B);
          }
        }
        function ie(A, B) {
          var Q = A.updateQueue,
            g = A.alternate;
          if (null !== g && Q === (g = g.updateQueue)) {
            var E = null,
              e = null;
            if (null !== (Q = Q.firstBaseUpdate)) {
              do {
                var n = {
                  eventTime: Q.eventTime,
                  lane: Q.lane,
                  tag: Q.tag,
                  payload: Q.payload,
                  callback: Q.callback,
                  next: null,
                };
                null === e ? (E = e = n) : (e = e.next = n), (Q = Q.next);
              } while (null !== Q);
              null === e ? (E = e = B) : (e = e.next = B);
            } else E = e = B;
            return (
              (Q = {
                baseState: g.baseState,
                firstBaseUpdate: E,
                lastBaseUpdate: e,
                shared: g.shared,
                effects: g.effects,
              }),
              void (A.updateQueue = Q)
            );
          }
          null === (A = Q.lastBaseUpdate)
            ? (Q.firstBaseUpdate = B)
            : (A.next = B),
            (Q.lastBaseUpdate = B);
        }
        function ae(A, B, Q, g) {
          var e = A.updateQueue;
          ne = !1;
          var n = e.firstBaseUpdate,
            t = e.lastBaseUpdate,
            C = e.shared.pending;
          if (null !== C) {
            e.shared.pending = null;
            var I = C,
              o = I.next;
            (I.next = null), null === t ? (n = o) : (t.next = o), (t = I);
            var i = A.alternate;
            if (null !== i) {
              var a = (i = i.updateQueue).lastBaseUpdate;
              a !== t &&
                (null === a ? (i.firstBaseUpdate = o) : (a.next = o),
                (i.lastBaseUpdate = I));
            }
          }
          if (null !== n) {
            for (a = e.baseState, t = 0, i = o = I = null; ; ) {
              C = n.lane;
              var w = n.eventTime;
              if ((g & C) === C) {
                null !== i &&
                  (i = i.next =
                    {
                      eventTime: w,
                      lane: 0,
                      tag: n.tag,
                      payload: n.payload,
                      callback: n.callback,
                      next: null,
                    });
                A: {
                  var r = A,
                    c = n;
                  switch (((C = B), (w = Q), c.tag)) {
                    case 1:
                      if ('function' === typeof (r = c.payload)) {
                        a = r.call(w, a, C);
                        break A;
                      }
                      a = r;
                      break A;
                    case 3:
                      r.flags = (-4097 & r.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (C =
                            'function' === typeof (r = c.payload)
                              ? r.call(w, a, C)
                              : r) ||
                        void 0 === C
                      )
                        break A;
                      a = E({}, a, C);
                      break A;
                    case 2:
                      ne = !0;
                  }
                }
                null !== n.callback &&
                  ((A.flags |= 32),
                  null === (C = e.effects) ? (e.effects = [n]) : C.push(n));
              } else
                (w = {
                  eventTime: w,
                  lane: C,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                }),
                  null === i ? ((o = i = w), (I = a)) : (i = i.next = w),
                  (t |= C);
              if (null === (n = n.next)) {
                if (null === (C = e.shared.pending)) break;
                (n = C.next),
                  (C.next = null),
                  (e.lastBaseUpdate = C),
                  (e.shared.pending = null);
              }
            }
            null === i && (I = a),
              (e.baseState = I),
              (e.firstBaseUpdate = o),
              (e.lastBaseUpdate = i),
              (St |= t),
              (A.lanes = t),
              (A.memoizedState = a);
          }
        }
        function we(A, B, Q) {
          if (((A = B.effects), (B.effects = null), null !== A))
            for (B = 0; B < A.length; B++) {
              var g = A[B],
                E = g.callback;
              if (null !== E) {
                if (((g.callback = null), (g = Q), 'function' !== typeof E))
                  throw Error(n(191, E));
                E.call(g);
              }
            }
        }
        var re = new g.Component().refs;
        function ce(A, B, Q, g) {
          (Q =
            null === (Q = Q(g, (B = A.memoizedState))) || void 0 === Q
              ? B
              : E({}, B, Q)),
            (A.memoizedState = Q),
            0 === A.lanes && (A.updateQueue.baseState = Q);
        }
        var se = {
          isMounted: function (A) {
            return !!(A = A._reactInternals) && PA(A) === A;
          },
          enqueueSetState: function (A, B, Q) {
            A = A._reactInternals;
            var g = iC(),
              E = aC(A),
              e = Ie(g, E);
            (e.payload = B),
              void 0 !== Q && null !== Q && (e.callback = Q),
              oe(A, e),
              wC(A, E, g);
          },
          enqueueReplaceState: function (A, B, Q) {
            A = A._reactInternals;
            var g = iC(),
              E = aC(A),
              e = Ie(g, E);
            (e.tag = 1),
              (e.payload = B),
              void 0 !== Q && null !== Q && (e.callback = Q),
              oe(A, e),
              wC(A, E, g);
          },
          enqueueForceUpdate: function (A, B) {
            A = A._reactInternals;
            var Q = iC(),
              g = aC(A),
              E = Ie(Q, g);
            (E.tag = 2),
              void 0 !== B && null !== B && (E.callback = B),
              oe(A, E),
              wC(A, g, Q);
          },
        };
        function le(A, B, Q, g, E, e, n) {
          return 'function' === typeof (A = A.stateNode).shouldComponentUpdate
            ? A.shouldComponentUpdate(g, e, n)
            : !B.prototype ||
                !B.prototype.isPureReactComponent ||
                !ig(Q, g) ||
                !ig(E, e);
        }
        function Fe(A, B, Q) {
          var g = !1,
            E = iE,
            e = B.contextType;
          return (
            'object' === typeof e && null !== e
              ? (e = ee(e))
              : ((E = sE(B) ? rE : aE.current),
                (e = (g = null !== (g = B.contextTypes) && void 0 !== g)
                  ? cE(A, E)
                  : iE)),
            (B = new B(Q, e)),
            (A.memoizedState =
              null !== B.state && void 0 !== B.state ? B.state : null),
            (B.updater = se),
            (A.stateNode = B),
            (B._reactInternals = A),
            g &&
              (((A = A.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                E),
              (A.__reactInternalMemoizedMaskedChildContext = e)),
            B
          );
        }
        function De(A, B, Q, g) {
          (A = B.state),
            'function' === typeof B.componentWillReceiveProps &&
              B.componentWillReceiveProps(Q, g),
            'function' === typeof B.UNSAFE_componentWillReceiveProps &&
              B.UNSAFE_componentWillReceiveProps(Q, g),
            B.state !== A && se.enqueueReplaceState(B, B.state, null);
        }
        function Ue(A, B, Q, g) {
          var E = A.stateNode;
          (E.props = Q), (E.state = A.memoizedState), (E.refs = re), te(A);
          var e = B.contextType;
          'object' === typeof e && null !== e
            ? (E.context = ee(e))
            : ((e = sE(B) ? rE : aE.current), (E.context = cE(A, e))),
            ae(A, Q, E, g),
            (E.state = A.memoizedState),
            'function' === typeof (e = B.getDerivedStateFromProps) &&
              (ce(A, B, e, Q), (E.state = A.memoizedState)),
            'function' === typeof B.getDerivedStateFromProps ||
              'function' === typeof E.getSnapshotBeforeUpdate ||
              ('function' !== typeof E.UNSAFE_componentWillMount &&
                'function' !== typeof E.componentWillMount) ||
              ((B = E.state),
              'function' === typeof E.componentWillMount &&
                E.componentWillMount(),
              'function' === typeof E.UNSAFE_componentWillMount &&
                E.UNSAFE_componentWillMount(),
              B !== E.state && se.enqueueReplaceState(E, E.state, null),
              ae(A, Q, E, g),
              (E.state = A.memoizedState)),
            'function' === typeof E.componentDidMount && (A.flags |= 4);
        }
        var ue = Array.isArray;
        function de(A, B, Q) {
          if (
            null !== (A = Q.ref) &&
            'function' !== typeof A &&
            'object' !== typeof A
          ) {
            if (Q._owner) {
              if ((Q = Q._owner)) {
                if (1 !== Q.tag) throw Error(n(309));
                var g = Q.stateNode;
              }
              if (!g) throw Error(n(147, A));
              var E = '' + A;
              return null !== B &&
                null !== B.ref &&
                'function' === typeof B.ref &&
                B.ref._stringRef === E
                ? B.ref
                : ((B = function (A) {
                    var B = g.refs;
                    B === re && (B = g.refs = {}),
                      null === A ? delete B[E] : (B[E] = A);
                  }),
                  (B._stringRef = E),
                  B);
            }
            if ('string' !== typeof A) throw Error(n(284));
            if (!Q._owner) throw Error(n(290, A));
          }
          return A;
        }
        function Me(A, B) {
          if ('textarea' !== A.type)
            throw Error(
              n(
                31,
                '[object Object]' === Object.prototype.toString.call(B)
                  ? 'object with keys {' + Object.keys(B).join(', ') + '}'
                  : B,
              ),
            );
        }
        function fe(A) {
          function B(B, Q) {
            if (A) {
              var g = B.lastEffect;
              null !== g
                ? ((g.nextEffect = Q), (B.lastEffect = Q))
                : (B.firstEffect = B.lastEffect = Q),
                (Q.nextEffect = null),
                (Q.flags = 8);
            }
          }
          function Q(Q, g) {
            if (!A) return null;
            for (; null !== g; ) B(Q, g), (g = g.sibling);
            return null;
          }
          function g(A, B) {
            for (A = new Map(); null !== B; )
              null !== B.key ? A.set(B.key, B) : A.set(B.index, B),
                (B = B.sibling);
            return A;
          }
          function E(A, B) {
            return ((A = xC(A, B)).index = 0), (A.sibling = null), A;
          }
          function e(B, Q, g) {
            return (
              (B.index = g),
              A
                ? null !== (g = B.alternate)
                  ? (g = g.index) < Q
                    ? ((B.flags = 2), Q)
                    : g
                  : ((B.flags = 2), Q)
                : Q
            );
          }
          function t(B) {
            return A && null === B.alternate && (B.flags = 2), B;
          }
          function C(A, B, Q, g) {
            return null === B || 6 !== B.tag
              ? (((B = KC(Q, A.mode, g)).return = A), B)
              : (((B = E(B, Q)).return = A), B);
          }
          function I(A, B, Q, g) {
            return null !== B && B.elementType === Q.type
              ? (((g = E(B, Q.props)).ref = de(A, B, Q)), (g.return = A), g)
              : (((g = TC(Q.type, Q.key, Q.props, null, A.mode, g)).ref = de(
                  A,
                  B,
                  Q,
                )),
                (g.return = A),
                g);
          }
          function o(A, B, Q, g) {
            return null === B ||
              4 !== B.tag ||
              B.stateNode.containerInfo !== Q.containerInfo ||
              B.stateNode.implementation !== Q.implementation
              ? (((B = PC(Q, A.mode, g)).return = A), B)
              : (((B = E(B, Q.children || [])).return = A), B);
          }
          function i(A, B, Q, g, e) {
            return null === B || 7 !== B.tag
              ? (((B = zC(Q, A.mode, g, e)).return = A), B)
              : (((B = E(B, Q)).return = A), B);
          }
          function a(A, B, Q) {
            if ('string' === typeof B || 'number' === typeof B)
              return ((B = KC('' + B, A.mode, Q)).return = A), B;
            if ('object' === typeof B && null !== B) {
              switch (B.$$typeof) {
                case d:
                  return (
                    ((Q = TC(B.type, B.key, B.props, null, A.mode, Q)).ref = de(
                      A,
                      null,
                      B,
                    )),
                    (Q.return = A),
                    Q
                  );
                case M:
                  return ((B = PC(B, A.mode, Q)).return = A), B;
              }
              if (ue(B) || W(B))
                return ((B = zC(B, A.mode, Q, null)).return = A), B;
              Me(A, B);
            }
            return null;
          }
          function w(A, B, Q, g) {
            var E = null !== B ? B.key : null;
            if ('string' === typeof Q || 'number' === typeof Q)
              return null !== E ? null : C(A, B, '' + Q, g);
            if ('object' === typeof Q && null !== Q) {
              switch (Q.$$typeof) {
                case d:
                  return Q.key === E
                    ? Q.type === f
                      ? i(A, B, Q.props.children, g, E)
                      : I(A, B, Q, g)
                    : null;
                case M:
                  return Q.key === E ? o(A, B, Q, g) : null;
              }
              if (ue(Q) || W(Q)) return null !== E ? null : i(A, B, Q, g, null);
              Me(A, Q);
            }
            return null;
          }
          function r(A, B, Q, g, E) {
            if ('string' === typeof g || 'number' === typeof g)
              return C(B, (A = A.get(Q) || null), '' + g, E);
            if ('object' === typeof g && null !== g) {
              switch (g.$$typeof) {
                case d:
                  return (
                    (A = A.get(null === g.key ? Q : g.key) || null),
                    g.type === f
                      ? i(B, A, g.props.children, E, g.key)
                      : I(B, A, g, E)
                  );
                case M:
                  return o(
                    B,
                    (A = A.get(null === g.key ? Q : g.key) || null),
                    g,
                    E,
                  );
              }
              if (ue(g) || W(g))
                return i(B, (A = A.get(Q) || null), g, E, null);
              Me(B, g);
            }
            return null;
          }
          function c(E, n, t, C) {
            for (
              var I = null, o = null, i = n, c = (n = 0), s = null;
              null !== i && c < t.length;
              c++
            ) {
              i.index > c ? ((s = i), (i = null)) : (s = i.sibling);
              var l = w(E, i, t[c], C);
              if (null === l) {
                null === i && (i = s);
                break;
              }
              A && i && null === l.alternate && B(E, i),
                (n = e(l, n, c)),
                null === o ? (I = l) : (o.sibling = l),
                (o = l),
                (i = s);
            }
            if (c === t.length) return Q(E, i), I;
            if (null === i) {
              for (; c < t.length; c++)
                null !== (i = a(E, t[c], C)) &&
                  ((n = e(i, n, c)),
                  null === o ? (I = i) : (o.sibling = i),
                  (o = i));
              return I;
            }
            for (i = g(E, i); c < t.length; c++)
              null !== (s = r(i, E, c, t[c], C)) &&
                (A &&
                  null !== s.alternate &&
                  i.delete(null === s.key ? c : s.key),
                (n = e(s, n, c)),
                null === o ? (I = s) : (o.sibling = s),
                (o = s));
            return (
              A &&
                i.forEach(function (A) {
                  return B(E, A);
                }),
              I
            );
          }
          function s(E, t, C, I) {
            var o = W(C);
            if ('function' !== typeof o) throw Error(n(150));
            if (null == (C = o.call(C))) throw Error(n(151));
            for (
              var i = (o = null), c = t, s = (t = 0), l = null, F = C.next();
              null !== c && !F.done;
              s++, F = C.next()
            ) {
              c.index > s ? ((l = c), (c = null)) : (l = c.sibling);
              var D = w(E, c, F.value, I);
              if (null === D) {
                null === c && (c = l);
                break;
              }
              A && c && null === D.alternate && B(E, c),
                (t = e(D, t, s)),
                null === i ? (o = D) : (i.sibling = D),
                (i = D),
                (c = l);
            }
            if (F.done) return Q(E, c), o;
            if (null === c) {
              for (; !F.done; s++, F = C.next())
                null !== (F = a(E, F.value, I)) &&
                  ((t = e(F, t, s)),
                  null === i ? (o = F) : (i.sibling = F),
                  (i = F));
              return o;
            }
            for (c = g(E, c); !F.done; s++, F = C.next())
              null !== (F = r(c, E, s, F.value, I)) &&
                (A &&
                  null !== F.alternate &&
                  c.delete(null === F.key ? s : F.key),
                (t = e(F, t, s)),
                null === i ? (o = F) : (i.sibling = F),
                (i = F));
            return (
              A &&
                c.forEach(function (A) {
                  return B(E, A);
                }),
              o
            );
          }
          return function (A, g, e, C) {
            var I =
              'object' === typeof e &&
              null !== e &&
              e.type === f &&
              null === e.key;
            I && (e = e.props.children);
            var o = 'object' === typeof e && null !== e;
            if (o)
              switch (e.$$typeof) {
                case d:
                  A: {
                    for (o = e.key, I = g; null !== I; ) {
                      if (I.key === o) {
                        if (7 === I.tag) {
                          if (e.type === f) {
                            Q(A, I.sibling),
                              ((g = E(I, e.props.children)).return = A),
                              (A = g);
                            break A;
                          }
                        } else if (I.elementType === e.type) {
                          Q(A, I.sibling),
                            ((g = E(I, e.props)).ref = de(A, I, e)),
                            (g.return = A),
                            (A = g);
                          break A;
                        }
                        Q(A, I);
                        break;
                      }
                      B(A, I), (I = I.sibling);
                    }
                    e.type === f
                      ? (((g = zC(e.props.children, A.mode, C, e.key)).return =
                          A),
                        (A = g))
                      : (((C = TC(
                          e.type,
                          e.key,
                          e.props,
                          null,
                          A.mode,
                          C,
                        )).ref = de(A, g, e)),
                        (C.return = A),
                        (A = C));
                  }
                  return t(A);
                case M:
                  A: {
                    for (I = e.key; null !== g; ) {
                      if (g.key === I) {
                        if (
                          4 === g.tag &&
                          g.stateNode.containerInfo === e.containerInfo &&
                          g.stateNode.implementation === e.implementation
                        ) {
                          Q(A, g.sibling),
                            ((g = E(g, e.children || [])).return = A),
                            (A = g);
                          break A;
                        }
                        Q(A, g);
                        break;
                      }
                      B(A, g), (g = g.sibling);
                    }
                    ((g = PC(e, A.mode, C)).return = A), (A = g);
                  }
                  return t(A);
              }
            if ('string' === typeof e || 'number' === typeof e)
              return (
                (e = '' + e),
                null !== g && 6 === g.tag
                  ? (Q(A, g.sibling), ((g = E(g, e)).return = A), (A = g))
                  : (Q(A, g), ((g = KC(e, A.mode, C)).return = A), (A = g)),
                t(A)
              );
            if (ue(e)) return c(A, g, e, C);
            if (W(e)) return s(A, g, e, C);
            if ((o && Me(A, e), 'undefined' === typeof e && !I))
              switch (A.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(n(152, z(A.type) || 'Component'));
              }
            return Q(A, g);
          };
        }
        var Ge = fe(!0),
          he = fe(!1),
          Re = {},
          Ye = CE(Re),
          pe = CE(Re),
          Ne = CE(Re);
        function be(A) {
          if (A === Re) throw Error(n(174));
          return A;
        }
        function me(A, B) {
          switch ((oE(Ne, B), oE(pe, A), oE(Ye, Re), (A = B.nodeType))) {
            case 9:
            case 11:
              B = (B = B.documentElement) ? B.namespaceURI : rA(null, '');
              break;
            default:
              B = rA(
                (B = (A = 8 === A ? B.parentNode : B).namespaceURI || null),
                (A = A.tagName),
              );
          }
          IE(Ye), oE(Ye, B);
        }
        function ye() {
          IE(Ye), IE(pe), IE(Ne);
        }
        function Je(A) {
          be(Ne.current);
          var B = be(Ye.current),
            Q = rA(B, A.type);
          B !== Q && (oE(pe, A), oE(Ye, Q));
        }
        function ke(A) {
          pe.current === A && (IE(Ye), IE(pe));
        }
        var Ze = CE(0);
        function Xe(A) {
          for (var B = A; null !== B; ) {
            if (13 === B.tag) {
              var Q = B.memoizedState;
              if (
                null !== Q &&
                (null === (Q = Q.dehydrated) ||
                  '$?' === Q.data ||
                  '$!' === Q.data)
              )
                return B;
            } else if (19 === B.tag && void 0 !== B.memoizedProps.revealOrder) {
              if (0 !== (64 & B.flags)) return B;
            } else if (null !== B.child) {
              (B.child.return = B), (B = B.child);
              continue;
            }
            if (B === A) break;
            for (; null === B.sibling; ) {
              if (null === B.return || B.return === A) return null;
              B = B.return;
            }
            (B.sibling.return = B.return), (B = B.sibling);
          }
          return null;
        }
        var Le = null,
          ve = null,
          Se = !1;
        function He(A, B) {
          var Q = OC(5, null, null, 0);
          (Q.elementType = 'DELETED'),
            (Q.type = 'DELETED'),
            (Q.stateNode = B),
            (Q.return = A),
            (Q.flags = 8),
            null !== A.lastEffect
              ? ((A.lastEffect.nextEffect = Q), (A.lastEffect = Q))
              : (A.firstEffect = A.lastEffect = Q);
        }
        function We(A, B) {
          switch (A.tag) {
            case 5:
              var Q = A.type;
              return (
                null !==
                  (B =
                    1 !== B.nodeType ||
                    Q.toLowerCase() !== B.nodeName.toLowerCase()
                      ? null
                      : B) && ((A.stateNode = B), !0)
              );
            case 6:
              return (
                null !==
                  (B = '' === A.pendingProps || 3 !== B.nodeType ? null : B) &&
                ((A.stateNode = B), !0)
              );
            default:
              return !1;
          }
        }
        function Oe(A) {
          if (Se) {
            var B = ve;
            if (B) {
              var Q = B;
              if (!We(A, B)) {
                if (!(B = zg(Q.nextSibling)) || !We(A, B))
                  return (
                    (A.flags = (-1025 & A.flags) | 2), (Se = !1), void (Le = A)
                  );
                He(Le, Q);
              }
              (Le = A), (ve = zg(B.firstChild));
            } else (A.flags = (-1025 & A.flags) | 2), (Se = !1), (Le = A);
          }
        }
        function Ve(A) {
          for (
            A = A.return;
            null !== A && 5 !== A.tag && 3 !== A.tag && 13 !== A.tag;

          )
            A = A.return;
          Le = A;
        }
        function xe(A) {
          if (A !== Le) return !1;
          if (!Se) return Ve(A), (Se = !0), !1;
          var B = A.type;
          if (
            5 !== A.tag ||
            ('head' !== B && 'body' !== B && !Og(B, A.memoizedProps))
          )
            for (B = ve; B; ) He(A, B), (B = zg(B.nextSibling));
          if ((Ve(A), 13 === A.tag)) {
            if (!(A = null !== (A = A.memoizedState) ? A.dehydrated : null))
              throw Error(n(317));
            A: {
              for (A = A.nextSibling, B = 0; A; ) {
                if (8 === A.nodeType) {
                  var Q = A.data;
                  if ('/$' === Q) {
                    if (0 === B) {
                      ve = zg(A.nextSibling);
                      break A;
                    }
                    B--;
                  } else ('$' !== Q && '$!' !== Q && '$?' !== Q) || B++;
                }
                A = A.nextSibling;
              }
              ve = null;
            }
          } else ve = Le ? zg(A.stateNode.nextSibling) : null;
          return !0;
        }
        function Te() {
          (ve = Le = null), (Se = !1);
        }
        var ze = [];
        function je() {
          for (var A = 0; A < ze.length; A++)
            ze[A]._workInProgressVersionPrimary = null;
          ze.length = 0;
        }
        var Ke = u.ReactCurrentDispatcher,
          Pe = u.ReactCurrentBatchConfig,
          qe = 0,
          _e = null,
          $e = null,
          An = null,
          Bn = !1,
          Qn = !1;
        function gn() {
          throw Error(n(321));
        }
        function En(A, B) {
          if (null === B) return !1;
          for (var Q = 0; Q < B.length && Q < A.length; Q++)
            if (!Ig(A[Q], B[Q])) return !1;
          return !0;
        }
        function en(A, B, Q, g, E, e) {
          if (
            ((qe = e),
            (_e = B),
            (B.memoizedState = null),
            (B.updateQueue = null),
            (B.lanes = 0),
            (Ke.current = null === A || null === A.memoizedState ? mn : yn),
            (A = Q(g, E)),
            Qn)
          ) {
            e = 0;
            do {
              if (((Qn = !1), !(25 > e))) throw Error(n(301));
              (e += 1),
                (An = $e = null),
                (B.updateQueue = null),
                (Ke.current = Jn),
                (A = Q(g, E));
            } while (Qn);
          }
          if (
            ((Ke.current = bn),
            (B = null !== $e && null !== $e.next),
            (qe = 0),
            (An = $e = _e = null),
            (Bn = !1),
            B)
          )
            throw Error(n(300));
          return A;
        }
        function nn() {
          var A = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === An ? (_e.memoizedState = An = A) : (An = An.next = A), An
          );
        }
        function tn() {
          if (null === $e) {
            var A = _e.alternate;
            A = null !== A ? A.memoizedState : null;
          } else A = $e.next;
          var B = null === An ? _e.memoizedState : An.next;
          if (null !== B) (An = B), ($e = A);
          else {
            if (null === A) throw Error(n(310));
            (A = {
              memoizedState: ($e = A).memoizedState,
              baseState: $e.baseState,
              baseQueue: $e.baseQueue,
              queue: $e.queue,
              next: null,
            }),
              null === An ? (_e.memoizedState = An = A) : (An = An.next = A);
          }
          return An;
        }
        function Cn(A, B) {
          return 'function' === typeof B ? B(A) : B;
        }
        function In(A) {
          var B = tn(),
            Q = B.queue;
          if (null === Q) throw Error(n(311));
          Q.lastRenderedReducer = A;
          var g = $e,
            E = g.baseQueue,
            e = Q.pending;
          if (null !== e) {
            if (null !== E) {
              var t = E.next;
              (E.next = e.next), (e.next = t);
            }
            (g.baseQueue = E = e), (Q.pending = null);
          }
          if (null !== E) {
            (E = E.next), (g = g.baseState);
            var C = (t = e = null),
              I = E;
            do {
              var o = I.lane;
              if ((qe & o) === o)
                null !== C &&
                  (C = C.next =
                    {
                      lane: 0,
                      action: I.action,
                      eagerReducer: I.eagerReducer,
                      eagerState: I.eagerState,
                      next: null,
                    }),
                  (g = I.eagerReducer === A ? I.eagerState : A(g, I.action));
              else {
                var i = {
                  lane: o,
                  action: I.action,
                  eagerReducer: I.eagerReducer,
                  eagerState: I.eagerState,
                  next: null,
                };
                null === C ? ((t = C = i), (e = g)) : (C = C.next = i),
                  (_e.lanes |= o),
                  (St |= o);
              }
              I = I.next;
            } while (null !== I && I !== E);
            null === C ? (e = g) : (C.next = t),
              Ig(g, B.memoizedState) || (Zn = !0),
              (B.memoizedState = g),
              (B.baseState = e),
              (B.baseQueue = C),
              (Q.lastRenderedState = g);
          }
          return [B.memoizedState, Q.dispatch];
        }
        function on(A) {
          var B = tn(),
            Q = B.queue;
          if (null === Q) throw Error(n(311));
          Q.lastRenderedReducer = A;
          var g = Q.dispatch,
            E = Q.pending,
            e = B.memoizedState;
          if (null !== E) {
            Q.pending = null;
            var t = (E = E.next);
            do {
              (e = A(e, t.action)), (t = t.next);
            } while (t !== E);
            Ig(e, B.memoizedState) || (Zn = !0),
              (B.memoizedState = e),
              null === B.baseQueue && (B.baseState = e),
              (Q.lastRenderedState = e);
          }
          return [e, g];
        }
        function an(A, B, Q) {
          var g = B._getVersion;
          g = g(B._source);
          var E = B._workInProgressVersionPrimary;
          if (
            (null !== E
              ? (A = E === g)
              : ((A = A.mutableReadLanes),
                (A = (qe & A) === A) &&
                  ((B._workInProgressVersionPrimary = g), ze.push(B))),
            A)
          )
            return Q(B._source);
          throw (ze.push(B), Error(n(350)));
        }
        function wn(A, B, Q, g) {
          var E = mt;
          if (null === E) throw Error(n(349));
          var e = B._getVersion,
            t = e(B._source),
            C = Ke.current,
            I = C.useState(function () {
              return an(E, B, Q);
            }),
            o = I[1],
            i = I[0];
          I = An;
          var a = A.memoizedState,
            w = a.refs,
            r = w.getSnapshot,
            c = a.source;
          a = a.subscribe;
          var s = _e;
          return (
            (A.memoizedState = { refs: w, source: B, subscribe: g }),
            C.useEffect(
              function () {
                (w.getSnapshot = Q), (w.setSnapshot = o);
                var A = e(B._source);
                if (!Ig(t, A)) {
                  (A = Q(B._source)),
                    Ig(i, A) ||
                      (o(A),
                      (A = aC(s)),
                      (E.mutableReadLanes |= A & E.pendingLanes)),
                    (A = E.mutableReadLanes),
                    (E.entangledLanes |= A);
                  for (var g = E.entanglements, n = A; 0 < n; ) {
                    var C = 31 - VB(n),
                      I = 1 << C;
                    (g[C] |= A), (n &= ~I);
                  }
                }
              },
              [Q, B, g],
            ),
            C.useEffect(
              function () {
                return g(B._source, function () {
                  var A = w.getSnapshot,
                    Q = w.setSnapshot;
                  try {
                    Q(A(B._source));
                    var g = aC(s);
                    E.mutableReadLanes |= g & E.pendingLanes;
                  } catch (e) {
                    Q(function () {
                      throw e;
                    });
                  }
                });
              },
              [B, g],
            ),
            (Ig(r, Q) && Ig(c, B) && Ig(a, g)) ||
              (((A = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Cn,
                lastRenderedState: i,
              }).dispatch = o =
                Nn.bind(null, _e, A)),
              (I.queue = A),
              (I.baseQueue = null),
              (i = an(E, B, Q)),
              (I.memoizedState = I.baseState = i)),
            i
          );
        }
        function rn(A, B, Q) {
          return wn(tn(), A, B, Q);
        }
        function cn(A) {
          var B = nn();
          return (
            'function' === typeof A && (A = A()),
            (B.memoizedState = B.baseState = A),
            (A = (A = B.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Cn,
                lastRenderedState: A,
              }).dispatch =
              Nn.bind(null, _e, A)),
            [B.memoizedState, A]
          );
        }
        function sn(A, B, Q, g) {
          return (
            (A = { tag: A, create: B, destroy: Q, deps: g, next: null }),
            null === (B = _e.updateQueue)
              ? ((B = { lastEffect: null }),
                (_e.updateQueue = B),
                (B.lastEffect = A.next = A))
              : null === (Q = B.lastEffect)
              ? (B.lastEffect = A.next = A)
              : ((g = Q.next), (Q.next = A), (A.next = g), (B.lastEffect = A)),
            A
          );
        }
        function ln(A) {
          return (A = { current: A }), (nn().memoizedState = A);
        }
        function Fn() {
          return tn().memoizedState;
        }
        function Dn(A, B, Q, g) {
          var E = nn();
          (_e.flags |= A),
            (E.memoizedState = sn(1 | B, Q, void 0, void 0 === g ? null : g));
        }
        function Un(A, B, Q, g) {
          var E = tn();
          g = void 0 === g ? null : g;
          var e = void 0;
          if (null !== $e) {
            var n = $e.memoizedState;
            if (((e = n.destroy), null !== g && En(g, n.deps)))
              return void sn(B, Q, e, g);
          }
          (_e.flags |= A), (E.memoizedState = sn(1 | B, Q, e, g));
        }
        function un(A, B) {
          return Dn(516, 4, A, B);
        }
        function dn(A, B) {
          return Un(516, 4, A, B);
        }
        function Mn(A, B) {
          return Un(4, 2, A, B);
        }
        function fn(A, B) {
          return 'function' === typeof B
            ? ((A = A()),
              B(A),
              function () {
                B(null);
              })
            : null !== B && void 0 !== B
            ? ((A = A()),
              (B.current = A),
              function () {
                B.current = null;
              })
            : void 0;
        }
        function Gn(A, B, Q) {
          return (
            (Q = null !== Q && void 0 !== Q ? Q.concat([A]) : null),
            Un(4, 2, fn.bind(null, B, A), Q)
          );
        }
        function hn() {}
        function Rn(A, B) {
          var Q = tn();
          B = void 0 === B ? null : B;
          var g = Q.memoizedState;
          return null !== g && null !== B && En(B, g[1])
            ? g[0]
            : ((Q.memoizedState = [A, B]), A);
        }
        function Yn(A, B) {
          var Q = tn();
          B = void 0 === B ? null : B;
          var g = Q.memoizedState;
          return null !== g && null !== B && En(B, g[1])
            ? g[0]
            : ((A = A()), (Q.memoizedState = [A, B]), A);
        }
        function pn(A, B) {
          var Q = OE();
          xE(98 > Q ? 98 : Q, function () {
            A(!0);
          }),
            xE(97 < Q ? 97 : Q, function () {
              var Q = Pe.transition;
              Pe.transition = 1;
              try {
                A(!1), B();
              } finally {
                Pe.transition = Q;
              }
            });
        }
        function Nn(A, B, Q) {
          var g = iC(),
            E = aC(A),
            e = {
              lane: E,
              action: Q,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            n = B.pending;
          if (
            (null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)),
            (B.pending = e),
            (n = A.alternate),
            A === _e || (null !== n && n === _e))
          )
            Qn = Bn = !0;
          else {
            if (
              0 === A.lanes &&
              (null === n || 0 === n.lanes) &&
              null !== (n = B.lastRenderedReducer)
            )
              try {
                var t = B.lastRenderedState,
                  C = n(t, Q);
                if (((e.eagerReducer = n), (e.eagerState = C), Ig(C, t)))
                  return;
              } catch (I) {}
            wC(A, E, g);
          }
        }
        var bn = {
            readContext: ee,
            useCallback: gn,
            useContext: gn,
            useEffect: gn,
            useImperativeHandle: gn,
            useLayoutEffect: gn,
            useMemo: gn,
            useReducer: gn,
            useRef: gn,
            useState: gn,
            useDebugValue: gn,
            useDeferredValue: gn,
            useTransition: gn,
            useMutableSource: gn,
            useOpaqueIdentifier: gn,
            unstable_isNewReconciler: !1,
          },
          mn = {
            readContext: ee,
            useCallback: function (A, B) {
              return (nn().memoizedState = [A, void 0 === B ? null : B]), A;
            },
            useContext: ee,
            useEffect: un,
            useImperativeHandle: function (A, B, Q) {
              return (
                (Q = null !== Q && void 0 !== Q ? Q.concat([A]) : null),
                Dn(4, 2, fn.bind(null, B, A), Q)
              );
            },
            useLayoutEffect: function (A, B) {
              return Dn(4, 2, A, B);
            },
            useMemo: function (A, B) {
              var Q = nn();
              return (
                (B = void 0 === B ? null : B),
                (A = A()),
                (Q.memoizedState = [A, B]),
                A
              );
            },
            useReducer: function (A, B, Q) {
              var g = nn();
              return (
                (B = void 0 !== Q ? Q(B) : B),
                (g.memoizedState = g.baseState = B),
                (A = (A = g.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: A,
                    lastRenderedState: B,
                  }).dispatch =
                  Nn.bind(null, _e, A)),
                [g.memoizedState, A]
              );
            },
            useRef: ln,
            useState: cn,
            useDebugValue: hn,
            useDeferredValue: function (A) {
              var B = cn(A),
                Q = B[0],
                g = B[1];
              return (
                un(
                  function () {
                    var B = Pe.transition;
                    Pe.transition = 1;
                    try {
                      g(A);
                    } finally {
                      Pe.transition = B;
                    }
                  },
                  [A],
                ),
                Q
              );
            },
            useTransition: function () {
              var A = cn(!1),
                B = A[0];
              return ln((A = pn.bind(null, A[1]))), [A, B];
            },
            useMutableSource: function (A, B, Q) {
              var g = nn();
              return (
                (g.memoizedState = {
                  refs: { getSnapshot: B, setSnapshot: null },
                  source: A,
                  subscribe: Q,
                }),
                wn(g, A, B, Q)
              );
            },
            useOpaqueIdentifier: function () {
              if (Se) {
                var A = !1,
                  B = (function (A) {
                    return { $$typeof: k, toString: A, valueOf: A };
                  })(function () {
                    throw (
                      (A || ((A = !0), Q('r:' + (Kg++).toString(36))),
                      Error(n(355)))
                    );
                  }),
                  Q = cn(B)[1];
                return (
                  0 === (2 & _e.mode) &&
                    ((_e.flags |= 516),
                    sn(
                      5,
                      function () {
                        Q('r:' + (Kg++).toString(36));
                      },
                      void 0,
                      null,
                    )),
                  B
                );
              }
              return cn((B = 'r:' + (Kg++).toString(36))), B;
            },
            unstable_isNewReconciler: !1,
          },
          yn = {
            readContext: ee,
            useCallback: Rn,
            useContext: ee,
            useEffect: dn,
            useImperativeHandle: Gn,
            useLayoutEffect: Mn,
            useMemo: Yn,
            useReducer: In,
            useRef: Fn,
            useState: function () {
              return In(Cn);
            },
            useDebugValue: hn,
            useDeferredValue: function (A) {
              var B = In(Cn),
                Q = B[0],
                g = B[1];
              return (
                dn(
                  function () {
                    var B = Pe.transition;
                    Pe.transition = 1;
                    try {
                      g(A);
                    } finally {
                      Pe.transition = B;
                    }
                  },
                  [A],
                ),
                Q
              );
            },
            useTransition: function () {
              var A = In(Cn)[0];
              return [Fn().current, A];
            },
            useMutableSource: rn,
            useOpaqueIdentifier: function () {
              return In(Cn)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Jn = {
            readContext: ee,
            useCallback: Rn,
            useContext: ee,
            useEffect: dn,
            useImperativeHandle: Gn,
            useLayoutEffect: Mn,
            useMemo: Yn,
            useReducer: on,
            useRef: Fn,
            useState: function () {
              return on(Cn);
            },
            useDebugValue: hn,
            useDeferredValue: function (A) {
              var B = on(Cn),
                Q = B[0],
                g = B[1];
              return (
                dn(
                  function () {
                    var B = Pe.transition;
                    Pe.transition = 1;
                    try {
                      g(A);
                    } finally {
                      Pe.transition = B;
                    }
                  },
                  [A],
                ),
                Q
              );
            },
            useTransition: function () {
              var A = on(Cn)[0];
              return [Fn().current, A];
            },
            useMutableSource: rn,
            useOpaqueIdentifier: function () {
              return on(Cn)[0];
            },
            unstable_isNewReconciler: !1,
          },
          kn = u.ReactCurrentOwner,
          Zn = !1;
        function Xn(A, B, Q, g) {
          B.child = null === A ? he(B, null, Q, g) : Ge(B, A.child, Q, g);
        }
        function Ln(A, B, Q, g, E) {
          Q = Q.render;
          var e = B.ref;
          return (
            Ee(B, E),
            (g = en(A, B, Q, g, e, E)),
            null === A || Zn
              ? ((B.flags |= 1), Xn(A, B, g, E), B.child)
              : ((B.updateQueue = A.updateQueue),
                (B.flags &= -517),
                (A.lanes &= ~E),
                Et(A, B, E))
          );
        }
        function vn(A, B, Q, g, E, e) {
          if (null === A) {
            var n = Q.type;
            return 'function' !== typeof n ||
              VC(n) ||
              void 0 !== n.defaultProps ||
              null !== Q.compare ||
              void 0 !== Q.defaultProps
              ? (((A = TC(Q.type, null, g, B, B.mode, e)).ref = B.ref),
                (A.return = B),
                (B.child = A))
              : ((B.tag = 15), (B.type = n), Sn(A, B, n, g, E, e));
          }
          return (
            (n = A.child),
            0 === (E & e) &&
            ((E = n.memoizedProps),
            (Q = null !== (Q = Q.compare) ? Q : ig)(E, g) && A.ref === B.ref)
              ? Et(A, B, e)
              : ((B.flags |= 1),
                ((A = xC(n, g)).ref = B.ref),
                (A.return = B),
                (B.child = A))
          );
        }
        function Sn(A, B, Q, g, E, e) {
          if (null !== A && ig(A.memoizedProps, g) && A.ref === B.ref) {
            if (((Zn = !1), 0 === (e & E)))
              return (B.lanes = A.lanes), Et(A, B, e);
            0 !== (16384 & A.flags) && (Zn = !0);
          }
          return On(A, B, Q, g, e);
        }
        function Hn(A, B, Q) {
          var g = B.pendingProps,
            E = g.children,
            e = null !== A ? A.memoizedState : null;
          if ('hidden' === g.mode || 'unstable-defer-without-hiding' === g.mode)
            if (0 === (4 & B.mode))
              (B.memoizedState = { baseLanes: 0 }), uC(B, Q);
            else {
              if (0 === (1073741824 & Q))
                return (
                  (A = null !== e ? e.baseLanes | Q : Q),
                  (B.lanes = B.childLanes = 1073741824),
                  (B.memoizedState = { baseLanes: A }),
                  uC(B, A),
                  null
                );
              (B.memoizedState = { baseLanes: 0 }),
                uC(B, null !== e ? e.baseLanes : Q);
            }
          else
            null !== e
              ? ((g = e.baseLanes | Q), (B.memoizedState = null))
              : (g = Q),
              uC(B, g);
          return Xn(A, B, E, Q), B.child;
        }
        function Wn(A, B) {
          var Q = B.ref;
          ((null === A && null !== Q) || (null !== A && A.ref !== Q)) &&
            (B.flags |= 128);
        }
        function On(A, B, Q, g, E) {
          var e = sE(Q) ? rE : aE.current;
          return (
            (e = cE(B, e)),
            Ee(B, E),
            (Q = en(A, B, Q, g, e, E)),
            null === A || Zn
              ? ((B.flags |= 1), Xn(A, B, Q, E), B.child)
              : ((B.updateQueue = A.updateQueue),
                (B.flags &= -517),
                (A.lanes &= ~E),
                Et(A, B, E))
          );
        }
        function Vn(A, B, Q, g, E) {
          if (sE(Q)) {
            var e = !0;
            UE(B);
          } else e = !1;
          if ((Ee(B, E), null === B.stateNode))
            null !== A &&
              ((A.alternate = null), (B.alternate = null), (B.flags |= 2)),
              Fe(B, Q, g),
              Ue(B, Q, g, E),
              (g = !0);
          else if (null === A) {
            var n = B.stateNode,
              t = B.memoizedProps;
            n.props = t;
            var C = n.context,
              I = Q.contextType;
            'object' === typeof I && null !== I
              ? (I = ee(I))
              : (I = cE(B, (I = sE(Q) ? rE : aE.current)));
            var o = Q.getDerivedStateFromProps,
              i =
                'function' === typeof o ||
                'function' === typeof n.getSnapshotBeforeUpdate;
            i ||
              ('function' !== typeof n.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof n.componentWillReceiveProps) ||
              ((t !== g || C !== I) && De(B, n, g, I)),
              (ne = !1);
            var a = B.memoizedState;
            (n.state = a),
              ae(B, g, n, E),
              (C = B.memoizedState),
              t !== g || a !== C || wE.current || ne
                ? ('function' === typeof o &&
                    (ce(B, Q, o, g), (C = B.memoizedState)),
                  (t = ne || le(B, Q, t, g, a, C, I))
                    ? (i ||
                        ('function' !== typeof n.UNSAFE_componentWillMount &&
                          'function' !== typeof n.componentWillMount) ||
                        ('function' === typeof n.componentWillMount &&
                          n.componentWillMount(),
                        'function' === typeof n.UNSAFE_componentWillMount &&
                          n.UNSAFE_componentWillMount()),
                      'function' === typeof n.componentDidMount &&
                        (B.flags |= 4))
                    : ('function' === typeof n.componentDidMount &&
                        (B.flags |= 4),
                      (B.memoizedProps = g),
                      (B.memoizedState = C)),
                  (n.props = g),
                  (n.state = C),
                  (n.context = I),
                  (g = t))
                : ('function' === typeof n.componentDidMount && (B.flags |= 4),
                  (g = !1));
          } else {
            (n = B.stateNode),
              Ce(A, B),
              (t = B.memoizedProps),
              (I = B.type === B.elementType ? t : PE(B.type, t)),
              (n.props = I),
              (i = B.pendingProps),
              (a = n.context),
              'object' === typeof (C = Q.contextType) && null !== C
                ? (C = ee(C))
                : (C = cE(B, (C = sE(Q) ? rE : aE.current)));
            var w = Q.getDerivedStateFromProps;
            (o =
              'function' === typeof w ||
              'function' === typeof n.getSnapshotBeforeUpdate) ||
              ('function' !== typeof n.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof n.componentWillReceiveProps) ||
              ((t !== i || a !== C) && De(B, n, g, C)),
              (ne = !1),
              (a = B.memoizedState),
              (n.state = a),
              ae(B, g, n, E);
            var r = B.memoizedState;
            t !== i || a !== r || wE.current || ne
              ? ('function' === typeof w &&
                  (ce(B, Q, w, g), (r = B.memoizedState)),
                (I = ne || le(B, Q, I, g, a, r, C))
                  ? (o ||
                      ('function' !== typeof n.UNSAFE_componentWillUpdate &&
                        'function' !== typeof n.componentWillUpdate) ||
                      ('function' === typeof n.componentWillUpdate &&
                        n.componentWillUpdate(g, r, C),
                      'function' === typeof n.UNSAFE_componentWillUpdate &&
                        n.UNSAFE_componentWillUpdate(g, r, C)),
                    'function' === typeof n.componentDidUpdate &&
                      (B.flags |= 4),
                    'function' === typeof n.getSnapshotBeforeUpdate &&
                      (B.flags |= 256))
                  : ('function' !== typeof n.componentDidUpdate ||
                      (t === A.memoizedProps && a === A.memoizedState) ||
                      (B.flags |= 4),
                    'function' !== typeof n.getSnapshotBeforeUpdate ||
                      (t === A.memoizedProps && a === A.memoizedState) ||
                      (B.flags |= 256),
                    (B.memoizedProps = g),
                    (B.memoizedState = r)),
                (n.props = g),
                (n.state = r),
                (n.context = C),
                (g = I))
              : ('function' !== typeof n.componentDidUpdate ||
                  (t === A.memoizedProps && a === A.memoizedState) ||
                  (B.flags |= 4),
                'function' !== typeof n.getSnapshotBeforeUpdate ||
                  (t === A.memoizedProps && a === A.memoizedState) ||
                  (B.flags |= 256),
                (g = !1));
          }
          return xn(A, B, Q, g, e, E);
        }
        function xn(A, B, Q, g, E, e) {
          Wn(A, B);
          var n = 0 !== (64 & B.flags);
          if (!g && !n) return E && uE(B, Q, !1), Et(A, B, e);
          (g = B.stateNode), (kn.current = B);
          var t =
            n && 'function' !== typeof Q.getDerivedStateFromError
              ? null
              : g.render();
          return (
            (B.flags |= 1),
            null !== A && n
              ? ((B.child = Ge(B, A.child, null, e)),
                (B.child = Ge(B, null, t, e)))
              : Xn(A, B, t, e),
            (B.memoizedState = g.state),
            E && uE(B, Q, !0),
            B.child
          );
        }
        function Tn(A) {
          var B = A.stateNode;
          B.pendingContext
            ? FE(0, B.pendingContext, B.pendingContext !== B.context)
            : B.context && FE(0, B.context, !1),
            me(A, B.containerInfo);
        }
        var zn,
          jn,
          Kn,
          Pn = { dehydrated: null, retryLane: 0 };
        function qn(A, B, Q) {
          var g,
            E = B.pendingProps,
            e = Ze.current,
            n = !1;
          return (
            (g = 0 !== (64 & B.flags)) ||
              (g = (null === A || null !== A.memoizedState) && 0 !== (2 & e)),
            g
              ? ((n = !0), (B.flags &= -65))
              : (null !== A && null === A.memoizedState) ||
                void 0 === E.fallback ||
                !0 === E.unstable_avoidThisFallback ||
                (e |= 1),
            oE(Ze, 1 & e),
            null === A
              ? (void 0 !== E.fallback && Oe(B),
                (A = E.children),
                (e = E.fallback),
                n
                  ? ((A = _n(B, A, e, Q)),
                    (B.child.memoizedState = { baseLanes: Q }),
                    (B.memoizedState = Pn),
                    A)
                  : 'number' === typeof E.unstable_expectedLoadTime
                  ? ((A = _n(B, A, e, Q)),
                    (B.child.memoizedState = { baseLanes: Q }),
                    (B.memoizedState = Pn),
                    (B.lanes = 33554432),
                    A)
                  : (((Q = jC(
                      { mode: 'visible', children: A },
                      B.mode,
                      Q,
                      null,
                    )).return = B),
                    (B.child = Q)))
              : (A.memoizedState,
                n
                  ? ((E = At(A, B, E.children, E.fallback, Q)),
                    (n = B.child),
                    (e = A.child.memoizedState),
                    (n.memoizedState =
                      null === e
                        ? { baseLanes: Q }
                        : { baseLanes: e.baseLanes | Q }),
                    (n.childLanes = A.childLanes & ~Q),
                    (B.memoizedState = Pn),
                    E)
                  : ((Q = $n(A, B, E.children, Q)),
                    (B.memoizedState = null),
                    Q))
          );
        }
        function _n(A, B, Q, g) {
          var E = A.mode,
            e = A.child;
          return (
            (B = { mode: 'hidden', children: B }),
            0 === (2 & E) && null !== e
              ? ((e.childLanes = 0), (e.pendingProps = B))
              : (e = jC(B, E, 0, null)),
            (Q = zC(Q, E, g, null)),
            (e.return = A),
            (Q.return = A),
            (e.sibling = Q),
            (A.child = e),
            Q
          );
        }
        function $n(A, B, Q, g) {
          var E = A.child;
          return (
            (A = E.sibling),
            (Q = xC(E, { mode: 'visible', children: Q })),
            0 === (2 & B.mode) && (Q.lanes = g),
            (Q.return = B),
            (Q.sibling = null),
            null !== A &&
              ((A.nextEffect = null),
              (A.flags = 8),
              (B.firstEffect = B.lastEffect = A)),
            (B.child = Q)
          );
        }
        function At(A, B, Q, g, E) {
          var e = B.mode,
            n = A.child;
          A = n.sibling;
          var t = { mode: 'hidden', children: Q };
          return (
            0 === (2 & e) && B.child !== n
              ? (((Q = B.child).childLanes = 0),
                (Q.pendingProps = t),
                null !== (n = Q.lastEffect)
                  ? ((B.firstEffect = Q.firstEffect),
                    (B.lastEffect = n),
                    (n.nextEffect = null))
                  : (B.firstEffect = B.lastEffect = null))
              : (Q = xC(n, t)),
            null !== A ? (g = xC(A, g)) : ((g = zC(g, e, E, null)).flags |= 2),
            (g.return = B),
            (Q.return = B),
            (Q.sibling = g),
            (B.child = Q),
            g
          );
        }
        function Bt(A, B) {
          A.lanes |= B;
          var Q = A.alternate;
          null !== Q && (Q.lanes |= B), ge(A.return, B);
        }
        function Qt(A, B, Q, g, E, e) {
          var n = A.memoizedState;
          null === n
            ? (A.memoizedState = {
                isBackwards: B,
                rendering: null,
                renderingStartTime: 0,
                last: g,
                tail: Q,
                tailMode: E,
                lastEffect: e,
              })
            : ((n.isBackwards = B),
              (n.rendering = null),
              (n.renderingStartTime = 0),
              (n.last = g),
              (n.tail = Q),
              (n.tailMode = E),
              (n.lastEffect = e));
        }
        function gt(A, B, Q) {
          var g = B.pendingProps,
            E = g.revealOrder,
            e = g.tail;
          if ((Xn(A, B, g.children, Q), 0 !== (2 & (g = Ze.current))))
            (g = (1 & g) | 2), (B.flags |= 64);
          else {
            if (null !== A && 0 !== (64 & A.flags))
              A: for (A = B.child; null !== A; ) {
                if (13 === A.tag) null !== A.memoizedState && Bt(A, Q);
                else if (19 === A.tag) Bt(A, Q);
                else if (null !== A.child) {
                  (A.child.return = A), (A = A.child);
                  continue;
                }
                if (A === B) break A;
                for (; null === A.sibling; ) {
                  if (null === A.return || A.return === B) break A;
                  A = A.return;
                }
                (A.sibling.return = A.return), (A = A.sibling);
              }
            g &= 1;
          }
          if ((oE(Ze, g), 0 === (2 & B.mode))) B.memoizedState = null;
          else
            switch (E) {
              case 'forwards':
                for (Q = B.child, E = null; null !== Q; )
                  null !== (A = Q.alternate) && null === Xe(A) && (E = Q),
                    (Q = Q.sibling);
                null === (Q = E)
                  ? ((E = B.child), (B.child = null))
                  : ((E = Q.sibling), (Q.sibling = null)),
                  Qt(B, !1, E, Q, e, B.lastEffect);
                break;
              case 'backwards':
                for (Q = null, E = B.child, B.child = null; null !== E; ) {
                  if (null !== (A = E.alternate) && null === Xe(A)) {
                    B.child = E;
                    break;
                  }
                  (A = E.sibling), (E.sibling = Q), (Q = E), (E = A);
                }
                Qt(B, !0, Q, null, e, B.lastEffect);
                break;
              case 'together':
                Qt(B, !1, null, null, void 0, B.lastEffect);
                break;
              default:
                B.memoizedState = null;
            }
          return B.child;
        }
        function Et(A, B, Q) {
          if (
            (null !== A && (B.dependencies = A.dependencies),
            (St |= B.lanes),
            0 !== (Q & B.childLanes))
          ) {
            if (null !== A && B.child !== A.child) throw Error(n(153));
            if (null !== B.child) {
              for (
                Q = xC((A = B.child), A.pendingProps),
                  B.child = Q,
                  Q.return = B;
                null !== A.sibling;

              )
                (A = A.sibling),
                  ((Q = Q.sibling = xC(A, A.pendingProps)).return = B);
              Q.sibling = null;
            }
            return B.child;
          }
          return null;
        }
        function et(A, B) {
          if (!Se)
            switch (A.tailMode) {
              case 'hidden':
                B = A.tail;
                for (var Q = null; null !== B; )
                  null !== B.alternate && (Q = B), (B = B.sibling);
                null === Q ? (A.tail = null) : (Q.sibling = null);
                break;
              case 'collapsed':
                Q = A.tail;
                for (var g = null; null !== Q; )
                  null !== Q.alternate && (g = Q), (Q = Q.sibling);
                null === g
                  ? B || null === A.tail
                    ? (A.tail = null)
                    : (A.tail.sibling = null)
                  : (g.sibling = null);
            }
        }
        function nt(A, B, Q) {
          var g = B.pendingProps;
          switch (B.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return sE(B.type) && lE(), null;
            case 3:
              return (
                ye(),
                IE(wE),
                IE(aE),
                je(),
                (g = B.stateNode).pendingContext &&
                  ((g.context = g.pendingContext), (g.pendingContext = null)),
                (null !== A && null !== A.child) ||
                  (xe(B) ? (B.flags |= 4) : g.hydrate || (B.flags |= 256)),
                null
              );
            case 5:
              ke(B);
              var e = be(Ne.current);
              if (((Q = B.type), null !== A && null != B.stateNode))
                jn(A, B, Q, g), A.ref !== B.ref && (B.flags |= 128);
              else {
                if (!g) {
                  if (null === B.stateNode) throw Error(n(166));
                  return null;
                }
                if (((A = be(Ye.current)), xe(B))) {
                  (g = B.stateNode), (Q = B.type);
                  var t = B.memoizedProps;
                  switch (((g[qg] = B), (g[_g] = t), Q)) {
                    case 'dialog':
                      pg('cancel', g), pg('close', g);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      pg('load', g);
                      break;
                    case 'video':
                    case 'audio':
                      for (A = 0; A < Gg.length; A++) pg(Gg[A], g);
                      break;
                    case 'source':
                      pg('error', g);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      pg('error', g), pg('load', g);
                      break;
                    case 'details':
                      pg('toggle', g);
                      break;
                    case 'input':
                      AA(g, t), pg('invalid', g);
                      break;
                    case 'select':
                      (g._wrapperState = { wasMultiple: !!t.multiple }),
                        pg('invalid', g);
                      break;
                    case 'textarea':
                      CA(g, t), pg('invalid', g);
                  }
                  for (var I in (fA(Q, t), (A = null), t))
                    t.hasOwnProperty(I) &&
                      ((e = t[I]),
                      'children' === I
                        ? 'string' === typeof e
                          ? g.textContent !== e && (A = ['children', e])
                          : 'number' === typeof e &&
                            g.textContent !== '' + e &&
                            (A = ['children', '' + e])
                        : C.hasOwnProperty(I) &&
                          null != e &&
                          'onScroll' === I &&
                          pg('scroll', g));
                  switch (Q) {
                    case 'input':
                      P(g), gA(g, t, !0);
                      break;
                    case 'textarea':
                      P(g), oA(g);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof t.onClick && (g.onclick = vg);
                  }
                  (g = A), (B.updateQueue = g), null !== g && (B.flags |= 4);
                } else {
                  switch (
                    ((I = 9 === e.nodeType ? e : e.ownerDocument),
                    A === iA && (A = wA(Q)),
                    A === iA
                      ? 'script' === Q
                        ? (((A = I.createElement('div')).innerHTML =
                            '<script></script>'),
                          (A = A.removeChild(A.firstChild)))
                        : 'string' === typeof g.is
                        ? (A = I.createElement(Q, { is: g.is }))
                        : ((A = I.createElement(Q)),
                          'select' === Q &&
                            ((I = A),
                            g.multiple
                              ? (I.multiple = !0)
                              : g.size && (I.size = g.size)))
                      : (A = I.createElementNS(A, Q)),
                    (A[qg] = B),
                    (A[_g] = g),
                    zn(A, B),
                    (B.stateNode = A),
                    (I = GA(Q, g)),
                    Q)
                  ) {
                    case 'dialog':
                      pg('cancel', A), pg('close', A), (e = g);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      pg('load', A), (e = g);
                      break;
                    case 'video':
                    case 'audio':
                      for (e = 0; e < Gg.length; e++) pg(Gg[e], A);
                      e = g;
                      break;
                    case 'source':
                      pg('error', A), (e = g);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      pg('error', A), pg('load', A), (e = g);
                      break;
                    case 'details':
                      pg('toggle', A), (e = g);
                      break;
                    case 'input':
                      AA(A, g), (e = $(A, g)), pg('invalid', A);
                      break;
                    case 'option':
                      e = eA(A, g);
                      break;
                    case 'select':
                      (A._wrapperState = { wasMultiple: !!g.multiple }),
                        (e = E({}, g, { value: void 0 })),
                        pg('invalid', A);
                      break;
                    case 'textarea':
                      CA(A, g), (e = tA(A, g)), pg('invalid', A);
                      break;
                    default:
                      e = g;
                  }
                  fA(Q, e);
                  var o = e;
                  for (t in o)
                    if (o.hasOwnProperty(t)) {
                      var i = o[t];
                      'style' === t
                        ? dA(A, i)
                        : 'dangerouslySetInnerHTML' === t
                        ? null != (i = i ? i.__html : void 0) && lA(A, i)
                        : 'children' === t
                        ? 'string' === typeof i
                          ? ('textarea' !== Q || '' !== i) && FA(A, i)
                          : 'number' === typeof i && FA(A, '' + i)
                        : 'suppressContentEditableWarning' !== t &&
                          'suppressHydrationWarning' !== t &&
                          'autoFocus' !== t &&
                          (C.hasOwnProperty(t)
                            ? null != i && 'onScroll' === t && pg('scroll', A)
                            : null != i && U(A, t, i, I));
                    }
                  switch (Q) {
                    case 'input':
                      P(A), gA(A, g, !1);
                      break;
                    case 'textarea':
                      P(A), oA(A);
                      break;
                    case 'option':
                      null != g.value &&
                        A.setAttribute('value', '' + j(g.value));
                      break;
                    case 'select':
                      (A.multiple = !!g.multiple),
                        null != (t = g.value)
                          ? nA(A, !!g.multiple, t, !1)
                          : null != g.defaultValue &&
                            nA(A, !!g.multiple, g.defaultValue, !0);
                      break;
                    default:
                      'function' === typeof e.onClick && (A.onclick = vg);
                  }
                  Wg(Q, g) && (B.flags |= 4);
                }
                null !== B.ref && (B.flags |= 128);
              }
              return null;
            case 6:
              if (A && null != B.stateNode) Kn(0, B, A.memoizedProps, g);
              else {
                if ('string' !== typeof g && null === B.stateNode)
                  throw Error(n(166));
                (Q = be(Ne.current)),
                  be(Ye.current),
                  xe(B)
                    ? ((g = B.stateNode),
                      (Q = B.memoizedProps),
                      (g[qg] = B),
                      g.nodeValue !== Q && (B.flags |= 4))
                    : (((g = (
                        9 === Q.nodeType ? Q : Q.ownerDocument
                      ).createTextNode(g))[qg] = B),
                      (B.stateNode = g));
              }
              return null;
            case 13:
              return (
                IE(Ze),
                (g = B.memoizedState),
                0 !== (64 & B.flags)
                  ? ((B.lanes = Q), B)
                  : ((g = null !== g),
                    (Q = !1),
                    null === A
                      ? void 0 !== B.memoizedProps.fallback && xe(B)
                      : (Q = null !== A.memoizedState),
                    g &&
                      !Q &&
                      0 !== (2 & B.mode) &&
                      ((null === A &&
                        !0 !== B.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & Ze.current)
                        ? 0 === Xt && (Xt = 3)
                        : ((0 !== Xt && 3 !== Xt) || (Xt = 4),
                          null === mt ||
                            (0 === (134217727 & St) &&
                              0 === (134217727 & Ht)) ||
                            lC(mt, Jt))),
                    (g || Q) && (B.flags |= 4),
                    null)
              );
            case 4:
              return ye(), null === A && bg(B.stateNode.containerInfo), null;
            case 10:
              return Qe(B), null;
            case 19:
              if ((IE(Ze), null === (g = B.memoizedState))) return null;
              if (((t = 0 !== (64 & B.flags)), null === (I = g.rendering)))
                if (t) et(g, !1);
                else {
                  if (0 !== Xt || (null !== A && 0 !== (64 & A.flags)))
                    for (A = B.child; null !== A; ) {
                      if (null !== (I = Xe(A))) {
                        for (
                          B.flags |= 64,
                            et(g, !1),
                            null !== (t = I.updateQueue) &&
                              ((B.updateQueue = t), (B.flags |= 4)),
                            null === g.lastEffect && (B.firstEffect = null),
                            B.lastEffect = g.lastEffect,
                            g = Q,
                            Q = B.child;
                          null !== Q;

                        )
                          (A = g),
                            ((t = Q).flags &= 2),
                            (t.nextEffect = null),
                            (t.firstEffect = null),
                            (t.lastEffect = null),
                            null === (I = t.alternate)
                              ? ((t.childLanes = 0),
                                (t.lanes = A),
                                (t.child = null),
                                (t.memoizedProps = null),
                                (t.memoizedState = null),
                                (t.updateQueue = null),
                                (t.dependencies = null),
                                (t.stateNode = null))
                              : ((t.childLanes = I.childLanes),
                                (t.lanes = I.lanes),
                                (t.child = I.child),
                                (t.memoizedProps = I.memoizedProps),
                                (t.memoizedState = I.memoizedState),
                                (t.updateQueue = I.updateQueue),
                                (t.type = I.type),
                                (A = I.dependencies),
                                (t.dependencies =
                                  null === A
                                    ? null
                                    : {
                                        lanes: A.lanes,
                                        firstContext: A.firstContext,
                                      })),
                            (Q = Q.sibling);
                        return oE(Ze, (1 & Ze.current) | 2), B.child;
                      }
                      A = A.sibling;
                    }
                  null !== g.tail &&
                    WE() > xt &&
                    ((B.flags |= 64),
                    (t = !0),
                    et(g, !1),
                    (B.lanes = 33554432));
                }
              else {
                if (!t)
                  if (null !== (A = Xe(I))) {
                    if (
                      ((B.flags |= 64),
                      (t = !0),
                      null !== (Q = A.updateQueue) &&
                        ((B.updateQueue = Q), (B.flags |= 4)),
                      et(g, !0),
                      null === g.tail &&
                        'hidden' === g.tailMode &&
                        !I.alternate &&
                        !Se)
                    )
                      return (
                        null !== (B = B.lastEffect = g.lastEffect) &&
                          (B.nextEffect = null),
                        null
                      );
                  } else
                    2 * WE() - g.renderingStartTime > xt &&
                      1073741824 !== Q &&
                      ((B.flags |= 64),
                      (t = !0),
                      et(g, !1),
                      (B.lanes = 33554432));
                g.isBackwards
                  ? ((I.sibling = B.child), (B.child = I))
                  : (null !== (Q = g.last) ? (Q.sibling = I) : (B.child = I),
                    (g.last = I));
              }
              return null !== g.tail
                ? ((Q = g.tail),
                  (g.rendering = Q),
                  (g.tail = Q.sibling),
                  (g.lastEffect = B.lastEffect),
                  (g.renderingStartTime = WE()),
                  (Q.sibling = null),
                  (B = Ze.current),
                  oE(Ze, t ? (1 & B) | 2 : 1 & B),
                  Q)
                : null;
            case 23:
            case 24:
              return (
                dC(),
                null !== A &&
                  (null !== A.memoizedState) !== (null !== B.memoizedState) &&
                  'unstable-defer-without-hiding' !== g.mode &&
                  (B.flags |= 4),
                null
              );
          }
          throw Error(n(156, B.tag));
        }
        function tt(A) {
          switch (A.tag) {
            case 1:
              sE(A.type) && lE();
              var B = A.flags;
              return 4096 & B ? ((A.flags = (-4097 & B) | 64), A) : null;
            case 3:
              if ((ye(), IE(wE), IE(aE), je(), 0 !== (64 & (B = A.flags))))
                throw Error(n(285));
              return (A.flags = (-4097 & B) | 64), A;
            case 5:
              return ke(A), null;
            case 13:
              return (
                IE(Ze),
                4096 & (B = A.flags) ? ((A.flags = (-4097 & B) | 64), A) : null
              );
            case 19:
              return IE(Ze), null;
            case 4:
              return ye(), null;
            case 10:
              return Qe(A), null;
            case 23:
            case 24:
              return dC(), null;
            default:
              return null;
          }
        }
        function Ct(A, B) {
          try {
            var Q = '',
              g = B;
            do {
              (Q += T(g)), (g = g.return);
            } while (g);
            var E = Q;
          } catch (e) {
            E = '\nError generating stack: ' + e.message + '\n' + e.stack;
          }
          return { value: A, source: B, stack: E };
        }
        function It(A, B) {
          try {
            console.error(B.value);
          } catch (Q) {
            setTimeout(function () {
              throw Q;
            });
          }
        }
        (zn = function (A, B) {
          for (var Q = B.child; null !== Q; ) {
            if (5 === Q.tag || 6 === Q.tag) A.appendChild(Q.stateNode);
            else if (4 !== Q.tag && null !== Q.child) {
              (Q.child.return = Q), (Q = Q.child);
              continue;
            }
            if (Q === B) break;
            for (; null === Q.sibling; ) {
              if (null === Q.return || Q.return === B) return;
              Q = Q.return;
            }
            (Q.sibling.return = Q.return), (Q = Q.sibling);
          }
        }),
          (jn = function (A, B, Q, g) {
            var e = A.memoizedProps;
            if (e !== g) {
              (A = B.stateNode), be(Ye.current);
              var n,
                t = null;
              switch (Q) {
                case 'input':
                  (e = $(A, e)), (g = $(A, g)), (t = []);
                  break;
                case 'option':
                  (e = eA(A, e)), (g = eA(A, g)), (t = []);
                  break;
                case 'select':
                  (e = E({}, e, { value: void 0 })),
                    (g = E({}, g, { value: void 0 })),
                    (t = []);
                  break;
                case 'textarea':
                  (e = tA(A, e)), (g = tA(A, g)), (t = []);
                  break;
                default:
                  'function' !== typeof e.onClick &&
                    'function' === typeof g.onClick &&
                    (A.onclick = vg);
              }
              for (i in (fA(Q, g), (Q = null), e))
                if (!g.hasOwnProperty(i) && e.hasOwnProperty(i) && null != e[i])
                  if ('style' === i) {
                    var I = e[i];
                    for (n in I)
                      I.hasOwnProperty(n) && (Q || (Q = {}), (Q[n] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== i &&
                      'children' !== i &&
                      'suppressContentEditableWarning' !== i &&
                      'suppressHydrationWarning' !== i &&
                      'autoFocus' !== i &&
                      (C.hasOwnProperty(i)
                        ? t || (t = [])
                        : (t = t || []).push(i, null));
              for (i in g) {
                var o = g[i];
                if (
                  ((I = null != e ? e[i] : void 0),
                  g.hasOwnProperty(i) && o !== I && (null != o || null != I))
                )
                  if ('style' === i)
                    if (I) {
                      for (n in I)
                        !I.hasOwnProperty(n) ||
                          (o && o.hasOwnProperty(n)) ||
                          (Q || (Q = {}), (Q[n] = ''));
                      for (n in o)
                        o.hasOwnProperty(n) &&
                          I[n] !== o[n] &&
                          (Q || (Q = {}), (Q[n] = o[n]));
                    } else Q || (t || (t = []), t.push(i, Q)), (Q = o);
                  else
                    'dangerouslySetInnerHTML' === i
                      ? ((o = o ? o.__html : void 0),
                        (I = I ? I.__html : void 0),
                        null != o && I !== o && (t = t || []).push(i, o))
                      : 'children' === i
                      ? ('string' !== typeof o && 'number' !== typeof o) ||
                        (t = t || []).push(i, '' + o)
                      : 'suppressContentEditableWarning' !== i &&
                        'suppressHydrationWarning' !== i &&
                        (C.hasOwnProperty(i)
                          ? (null != o && 'onScroll' === i && pg('scroll', A),
                            t || I === o || (t = []))
                          : 'object' === typeof o &&
                            null !== o &&
                            o.$$typeof === k
                          ? o.toString()
                          : (t = t || []).push(i, o));
              }
              Q && (t = t || []).push('style', Q);
              var i = t;
              (B.updateQueue = i) && (B.flags |= 4);
            }
          }),
          (Kn = function (A, B, Q, g) {
            Q !== g && (B.flags |= 4);
          });
        var ot = 'function' === typeof WeakMap ? WeakMap : Map;
        function it(A, B, Q) {
          ((Q = Ie(-1, Q)).tag = 3), (Q.payload = { element: null });
          var g = B.value;
          return (
            (Q.callback = function () {
              Kt || ((Kt = !0), (Pt = g)), It(0, B);
            }),
            Q
          );
        }
        function at(A, B, Q) {
          (Q = Ie(-1, Q)).tag = 3;
          var g = A.type.getDerivedStateFromError;
          if ('function' === typeof g) {
            var E = B.value;
            Q.payload = function () {
              return It(0, B), g(E);
            };
          }
          var e = A.stateNode;
          return (
            null !== e &&
              'function' === typeof e.componentDidCatch &&
              (Q.callback = function () {
                'function' !== typeof g &&
                  (null === qt ? (qt = new Set([this])) : qt.add(this),
                  It(0, B));
                var A = B.stack;
                this.componentDidCatch(B.value, {
                  componentStack: null !== A ? A : '',
                });
              }),
            Q
          );
        }
        var wt = 'function' === typeof WeakSet ? WeakSet : Set;
        function rt(A) {
          var B = A.ref;
          if (null !== B)
            if ('function' === typeof B)
              try {
                B(null);
              } catch (Q) {
                vC(A, Q);
              }
            else B.current = null;
        }
        function ct(A, B) {
          switch (B.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & B.flags && null !== A) {
                var Q = A.memoizedProps,
                  g = A.memoizedState;
                (B = (A = B.stateNode).getSnapshotBeforeUpdate(
                  B.elementType === B.type ? Q : PE(B.type, Q),
                  g,
                )),
                  (A.__reactInternalSnapshotBeforeUpdate = B);
              }
              return;
            case 3:
              return void (256 & B.flags && Tg(B.stateNode.containerInfo));
          }
          throw Error(n(163));
        }
        function st(A, B, Q) {
          switch (Q.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (B = null !== (B = Q.updateQueue) ? B.lastEffect : null)
              ) {
                A = B = B.next;
                do {
                  if (3 === (3 & A.tag)) {
                    var g = A.create;
                    A.destroy = g();
                  }
                  A = A.next;
                } while (A !== B);
              }
              if (
                null !==
                (B = null !== (B = Q.updateQueue) ? B.lastEffect : null)
              ) {
                A = B = B.next;
                do {
                  var E = A;
                  (g = E.next),
                    0 !== (4 & (E = E.tag)) &&
                      0 !== (1 & E) &&
                      (ZC(Q, A), kC(Q, A)),
                    (A = g);
                } while (A !== B);
              }
              return;
            case 1:
              return (
                (A = Q.stateNode),
                4 & Q.flags &&
                  (null === B
                    ? A.componentDidMount()
                    : ((g =
                        Q.elementType === Q.type
                          ? B.memoizedProps
                          : PE(Q.type, B.memoizedProps)),
                      A.componentDidUpdate(
                        g,
                        B.memoizedState,
                        A.__reactInternalSnapshotBeforeUpdate,
                      ))),
                void (null !== (B = Q.updateQueue) && we(Q, B, A))
              );
            case 3:
              if (null !== (B = Q.updateQueue)) {
                if (((A = null), null !== Q.child))
                  switch (Q.child.tag) {
                    case 5:
                    case 1:
                      A = Q.child.stateNode;
                  }
                we(Q, B, A);
              }
              return;
            case 5:
              return (
                (A = Q.stateNode),
                void (
                  null === B &&
                  4 & Q.flags &&
                  Wg(Q.type, Q.memoizedProps) &&
                  A.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === Q.memoizedState &&
                ((Q = Q.alternate),
                null !== Q &&
                  ((Q = Q.memoizedState),
                  null !== Q && ((Q = Q.dehydrated), null !== Q && dB(Q))))
              );
          }
          throw Error(n(163));
        }
        function lt(A, B) {
          for (var Q = A; ; ) {
            if (5 === Q.tag) {
              var g = Q.stateNode;
              if (B)
                'function' === typeof (g = g.style).setProperty
                  ? g.setProperty('display', 'none', 'important')
                  : (g.display = 'none');
              else {
                g = Q.stateNode;
                var E = Q.memoizedProps.style;
                (E =
                  void 0 !== E && null !== E && E.hasOwnProperty('display')
                    ? E.display
                    : null),
                  (g.style.display = uA('display', E));
              }
            } else if (6 === Q.tag)
              Q.stateNode.nodeValue = B ? '' : Q.memoizedProps;
            else if (
              ((23 !== Q.tag && 24 !== Q.tag) ||
                null === Q.memoizedState ||
                Q === A) &&
              null !== Q.child
            ) {
              (Q.child.return = Q), (Q = Q.child);
              continue;
            }
            if (Q === A) break;
            for (; null === Q.sibling; ) {
              if (null === Q.return || Q.return === A) return;
              Q = Q.return;
            }
            (Q.sibling.return = Q.return), (Q = Q.sibling);
          }
        }
        function Ft(A, B) {
          if (ME && 'function' === typeof ME.onCommitFiberUnmount)
            try {
              ME.onCommitFiberUnmount(dE, B);
            } catch (e) {}
          switch (B.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (A = B.updateQueue) && null !== (A = A.lastEffect)) {
                var Q = (A = A.next);
                do {
                  var g = Q,
                    E = g.destroy;
                  if (((g = g.tag), void 0 !== E))
                    if (0 !== (4 & g)) ZC(B, Q);
                    else {
                      g = B;
                      try {
                        E();
                      } catch (e) {
                        vC(g, e);
                      }
                    }
                  Q = Q.next;
                } while (Q !== A);
              }
              break;
            case 1:
              if (
                (rt(B),
                'function' === typeof (A = B.stateNode).componentWillUnmount)
              )
                try {
                  (A.props = B.memoizedProps),
                    (A.state = B.memoizedState),
                    A.componentWillUnmount();
                } catch (e) {
                  vC(B, e);
                }
              break;
            case 5:
              rt(B);
              break;
            case 4:
              ft(A, B);
          }
        }
        function Dt(A) {
          (A.alternate = null),
            (A.child = null),
            (A.dependencies = null),
            (A.firstEffect = null),
            (A.lastEffect = null),
            (A.memoizedProps = null),
            (A.memoizedState = null),
            (A.pendingProps = null),
            (A.return = null),
            (A.updateQueue = null);
        }
        function Ut(A) {
          return 5 === A.tag || 3 === A.tag || 4 === A.tag;
        }
        function ut(A) {
          A: {
            for (var B = A.return; null !== B; ) {
              if (Ut(B)) break A;
              B = B.return;
            }
            throw Error(n(160));
          }
          var Q = B;
          switch (((B = Q.stateNode), Q.tag)) {
            case 5:
              var g = !1;
              break;
            case 3:
            case 4:
              (B = B.containerInfo), (g = !0);
              break;
            default:
              throw Error(n(161));
          }
          16 & Q.flags && (FA(B, ''), (Q.flags &= -17));
          A: B: for (Q = A; ; ) {
            for (; null === Q.sibling; ) {
              if (null === Q.return || Ut(Q.return)) {
                Q = null;
                break A;
              }
              Q = Q.return;
            }
            for (
              Q.sibling.return = Q.return, Q = Q.sibling;
              5 !== Q.tag && 6 !== Q.tag && 18 !== Q.tag;

            ) {
              if (2 & Q.flags) continue B;
              if (null === Q.child || 4 === Q.tag) continue B;
              (Q.child.return = Q), (Q = Q.child);
            }
            if (!(2 & Q.flags)) {
              Q = Q.stateNode;
              break A;
            }
          }
          g ? dt(A, Q, B) : Mt(A, Q, B);
        }
        function dt(A, B, Q) {
          var g = A.tag,
            E = 5 === g || 6 === g;
          if (E)
            (A = E ? A.stateNode : A.stateNode.instance),
              B
                ? 8 === Q.nodeType
                  ? Q.parentNode.insertBefore(A, B)
                  : Q.insertBefore(A, B)
                : (8 === Q.nodeType
                    ? (B = Q.parentNode).insertBefore(A, Q)
                    : (B = Q).appendChild(A),
                  (null !== (Q = Q._reactRootContainer) && void 0 !== Q) ||
                    null !== B.onclick ||
                    (B.onclick = vg));
          else if (4 !== g && null !== (A = A.child))
            for (dt(A, B, Q), A = A.sibling; null !== A; )
              dt(A, B, Q), (A = A.sibling);
        }
        function Mt(A, B, Q) {
          var g = A.tag,
            E = 5 === g || 6 === g;
          if (E)
            (A = E ? A.stateNode : A.stateNode.instance),
              B ? Q.insertBefore(A, B) : Q.appendChild(A);
          else if (4 !== g && null !== (A = A.child))
            for (Mt(A, B, Q), A = A.sibling; null !== A; )
              Mt(A, B, Q), (A = A.sibling);
        }
        function ft(A, B) {
          for (var Q, g, E = B, e = !1; ; ) {
            if (!e) {
              e = E.return;
              A: for (;;) {
                if (null === e) throw Error(n(160));
                switch (((Q = e.stateNode), e.tag)) {
                  case 5:
                    g = !1;
                    break A;
                  case 3:
                  case 4:
                    (Q = Q.containerInfo), (g = !0);
                    break A;
                }
                e = e.return;
              }
              e = !0;
            }
            if (5 === E.tag || 6 === E.tag) {
              A: for (var t = A, C = E, I = C; ; )
                if ((Ft(t, I), null !== I.child && 4 !== I.tag))
                  (I.child.return = I), (I = I.child);
                else {
                  if (I === C) break A;
                  for (; null === I.sibling; ) {
                    if (null === I.return || I.return === C) break A;
                    I = I.return;
                  }
                  (I.sibling.return = I.return), (I = I.sibling);
                }
              g
                ? ((t = Q),
                  (C = E.stateNode),
                  8 === t.nodeType
                    ? t.parentNode.removeChild(C)
                    : t.removeChild(C))
                : Q.removeChild(E.stateNode);
            } else if (4 === E.tag) {
              if (null !== E.child) {
                (Q = E.stateNode.containerInfo),
                  (g = !0),
                  (E.child.return = E),
                  (E = E.child);
                continue;
              }
            } else if ((Ft(A, E), null !== E.child)) {
              (E.child.return = E), (E = E.child);
              continue;
            }
            if (E === B) break;
            for (; null === E.sibling; ) {
              if (null === E.return || E.return === B) return;
              4 === (E = E.return).tag && (e = !1);
            }
            (E.sibling.return = E.return), (E = E.sibling);
          }
        }
        function Gt(A, B) {
          switch (B.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var Q = B.updateQueue;
              if (null !== (Q = null !== Q ? Q.lastEffect : null)) {
                var g = (Q = Q.next);
                do {
                  3 === (3 & g.tag) &&
                    ((A = g.destroy),
                    (g.destroy = void 0),
                    void 0 !== A && A()),
                    (g = g.next);
                } while (g !== Q);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (Q = B.stateNode)) {
                g = B.memoizedProps;
                var E = null !== A ? A.memoizedProps : g;
                A = B.type;
                var e = B.updateQueue;
                if (((B.updateQueue = null), null !== e)) {
                  for (
                    Q[_g] = g,
                      'input' === A &&
                        'radio' === g.type &&
                        null != g.name &&
                        BA(Q, g),
                      GA(A, E),
                      B = GA(A, g),
                      E = 0;
                    E < e.length;
                    E += 2
                  ) {
                    var t = e[E],
                      C = e[E + 1];
                    'style' === t
                      ? dA(Q, C)
                      : 'dangerouslySetInnerHTML' === t
                      ? lA(Q, C)
                      : 'children' === t
                      ? FA(Q, C)
                      : U(Q, t, C, B);
                  }
                  switch (A) {
                    case 'input':
                      QA(Q, g);
                      break;
                    case 'textarea':
                      IA(Q, g);
                      break;
                    case 'select':
                      (A = Q._wrapperState.wasMultiple),
                        (Q._wrapperState.wasMultiple = !!g.multiple),
                        null != (e = g.value)
                          ? nA(Q, !!g.multiple, e, !1)
                          : A !== !!g.multiple &&
                            (null != g.defaultValue
                              ? nA(Q, !!g.multiple, g.defaultValue, !0)
                              : nA(Q, !!g.multiple, g.multiple ? [] : '', !1));
                  }
                }
              }
              return;
            case 6:
              if (null === B.stateNode) throw Error(n(162));
              return void (B.stateNode.nodeValue = B.memoizedProps);
            case 3:
              return void (
                (Q = B.stateNode).hydrate &&
                ((Q.hydrate = !1), dB(Q.containerInfo))
              );
            case 13:
              return (
                null !== B.memoizedState && ((Vt = WE()), lt(B.child, !0)),
                void ht(B)
              );
            case 19:
              return void ht(B);
            case 23:
            case 24:
              return void lt(B, null !== B.memoizedState);
          }
          throw Error(n(163));
        }
        function ht(A) {
          var B = A.updateQueue;
          if (null !== B) {
            A.updateQueue = null;
            var Q = A.stateNode;
            null === Q && (Q = A.stateNode = new wt()),
              B.forEach(function (B) {
                var g = HC.bind(null, A, B);
                Q.has(B) || (Q.add(B), B.then(g, g));
              });
          }
        }
        function Rt(A, B) {
          return (
            null !== A &&
            (null === (A = A.memoizedState) || null !== A.dehydrated) &&
            null !== (B = B.memoizedState) &&
            null === B.dehydrated
          );
        }
        var Yt = Math.ceil,
          pt = u.ReactCurrentDispatcher,
          Nt = u.ReactCurrentOwner,
          bt = 0,
          mt = null,
          yt = null,
          Jt = 0,
          kt = 0,
          Zt = CE(0),
          Xt = 0,
          Lt = null,
          vt = 0,
          St = 0,
          Ht = 0,
          Wt = 0,
          Ot = null,
          Vt = 0,
          xt = 1 / 0;
        function Tt() {
          xt = WE() + 500;
        }
        var zt,
          jt = null,
          Kt = !1,
          Pt = null,
          qt = null,
          _t = !1,
          $t = null,
          AC = 90,
          BC = [],
          QC = [],
          gC = null,
          EC = 0,
          eC = null,
          nC = -1,
          tC = 0,
          CC = 0,
          IC = null,
          oC = !1;
        function iC() {
          return 0 !== (48 & bt) ? WE() : -1 !== nC ? nC : (nC = WE());
        }
        function aC(A) {
          if (0 === (2 & (A = A.mode))) return 1;
          if (0 === (4 & A)) return 99 === OE() ? 1 : 2;
          if ((0 === tC && (tC = vt), 0 !== KE.transition)) {
            0 !== CC && (CC = null !== Ot ? Ot.pendingLanes : 0), (A = tC);
            var B = 4186112 & ~CC;
            return (
              0 === (B &= -B) &&
                0 === (B = (A = 4186112 & ~A) & -A) &&
                (B = 8192),
              B
            );
          }
          return (
            (A = OE()),
            0 !== (4 & bt) && 98 === A
              ? (A = SB(12, tC))
              : (A = SB(
                  (A = (function (A) {
                    switch (A) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(A)),
                  tC,
                )),
            A
          );
        }
        function wC(A, B, Q) {
          if (50 < EC) throw ((EC = 0), (eC = null), Error(n(185)));
          if (null === (A = rC(A, B))) return null;
          OB(A, B, Q), A === mt && ((Ht |= B), 4 === Xt && lC(A, Jt));
          var g = OE();
          1 === B
            ? 0 !== (8 & bt) && 0 === (48 & bt)
              ? FC(A)
              : (cC(A, Q), 0 === bt && (Tt(), zE()))
            : (0 === (4 & bt) ||
                (98 !== g && 99 !== g) ||
                (null === gC ? (gC = new Set([A])) : gC.add(A)),
              cC(A, Q)),
            (Ot = A);
        }
        function rC(A, B) {
          A.lanes |= B;
          var Q = A.alternate;
          for (null !== Q && (Q.lanes |= B), Q = A, A = A.return; null !== A; )
            (A.childLanes |= B),
              null !== (Q = A.alternate) && (Q.childLanes |= B),
              (Q = A),
              (A = A.return);
          return 3 === Q.tag ? Q.stateNode : null;
        }
        function cC(A, B) {
          for (
            var Q = A.callbackNode,
              g = A.suspendedLanes,
              E = A.pingedLanes,
              e = A.expirationTimes,
              t = A.pendingLanes;
            0 < t;

          ) {
            var C = 31 - VB(t),
              I = 1 << C,
              o = e[C];
            if (-1 === o) {
              if (0 === (I & g) || 0 !== (I & E)) {
                (o = B), XB(I);
                var i = ZB;
                e[C] = 10 <= i ? o + 250 : 6 <= i ? o + 5e3 : -1;
              }
            } else o <= B && (A.expiredLanes |= I);
            t &= ~I;
          }
          if (((g = LB(A, A === mt ? Jt : 0)), (B = ZB), 0 === g))
            null !== Q &&
              (Q !== ZE && hE(Q),
              (A.callbackNode = null),
              (A.callbackPriority = 0));
          else {
            if (null !== Q) {
              if (A.callbackPriority === B) return;
              Q !== ZE && hE(Q);
            }
            15 === B
              ? ((Q = FC.bind(null, A)),
                null === LE ? ((LE = [Q]), (vE = GE(bE, jE))) : LE.push(Q),
                (Q = ZE))
              : 14 === B
              ? (Q = TE(99, FC.bind(null, A)))
              : ((Q = (function (A) {
                  switch (A) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(n(358, A));
                  }
                })(B)),
                (Q = TE(Q, sC.bind(null, A)))),
              (A.callbackPriority = B),
              (A.callbackNode = Q);
          }
        }
        function sC(A) {
          if (((nC = -1), (CC = tC = 0), 0 !== (48 & bt))) throw Error(n(327));
          var B = A.callbackNode;
          if (JC() && A.callbackNode !== B) return null;
          var Q = LB(A, A === mt ? Jt : 0);
          if (0 === Q) return null;
          var g = Q,
            E = bt;
          bt |= 16;
          var e = GC();
          for ((mt === A && Jt === g) || (Tt(), MC(A, g)); ; )
            try {
              YC();
              break;
            } catch (C) {
              fC(A, C);
            }
          if (
            (Be(),
            (pt.current = e),
            (bt = E),
            null !== yt ? (g = 0) : ((mt = null), (Jt = 0), (g = Xt)),
            0 !== (vt & Ht))
          )
            MC(A, 0);
          else if (0 !== g) {
            if (
              (2 === g &&
                ((bt |= 64),
                A.hydrate && ((A.hydrate = !1), Tg(A.containerInfo)),
                0 !== (Q = vB(A)) && (g = hC(A, Q))),
              1 === g)
            )
              throw ((B = Lt), MC(A, 0), lC(A, Q), cC(A, WE()), B);
            switch (
              ((A.finishedWork = A.current.alternate), (A.finishedLanes = Q), g)
            ) {
              case 0:
              case 1:
                throw Error(n(345));
              case 2:
              case 5:
                bC(A);
                break;
              case 3:
                if (
                  (lC(A, Q), (62914560 & Q) === Q && 10 < (g = Vt + 500 - WE()))
                ) {
                  if (0 !== LB(A, 0)) break;
                  if (((E = A.suspendedLanes) & Q) !== Q) {
                    iC(), (A.pingedLanes |= A.suspendedLanes & E);
                    break;
                  }
                  A.timeoutHandle = Vg(bC.bind(null, A), g);
                  break;
                }
                bC(A);
                break;
              case 4:
                if ((lC(A, Q), (4186112 & Q) === Q)) break;
                for (g = A.eventTimes, E = -1; 0 < Q; ) {
                  var t = 31 - VB(Q);
                  (e = 1 << t), (t = g[t]) > E && (E = t), (Q &= ~e);
                }
                if (
                  ((Q = E),
                  10 <
                    (Q =
                      (120 > (Q = WE() - Q)
                        ? 120
                        : 480 > Q
                        ? 480
                        : 1080 > Q
                        ? 1080
                        : 1920 > Q
                        ? 1920
                        : 3e3 > Q
                        ? 3e3
                        : 4320 > Q
                        ? 4320
                        : 1960 * Yt(Q / 1960)) - Q))
                ) {
                  A.timeoutHandle = Vg(bC.bind(null, A), Q);
                  break;
                }
                bC(A);
                break;
              default:
                throw Error(n(329));
            }
          }
          return cC(A, WE()), A.callbackNode === B ? sC.bind(null, A) : null;
        }
        function lC(A, B) {
          for (
            B &= ~Wt,
              B &= ~Ht,
              A.suspendedLanes |= B,
              A.pingedLanes &= ~B,
              A = A.expirationTimes;
            0 < B;

          ) {
            var Q = 31 - VB(B),
              g = 1 << Q;
            (A[Q] = -1), (B &= ~g);
          }
        }
        function FC(A) {
          if (0 !== (48 & bt)) throw Error(n(327));
          if ((JC(), A === mt && 0 !== (A.expiredLanes & Jt))) {
            var B = Jt,
              Q = hC(A, B);
            0 !== (vt & Ht) && (Q = hC(A, (B = LB(A, B))));
          } else Q = hC(A, (B = LB(A, 0)));
          if (
            (0 !== A.tag &&
              2 === Q &&
              ((bt |= 64),
              A.hydrate && ((A.hydrate = !1), Tg(A.containerInfo)),
              0 !== (B = vB(A)) && (Q = hC(A, B))),
            1 === Q)
          )
            throw ((Q = Lt), MC(A, 0), lC(A, B), cC(A, WE()), Q);
          return (
            (A.finishedWork = A.current.alternate),
            (A.finishedLanes = B),
            bC(A),
            cC(A, WE()),
            null
          );
        }
        function DC(A, B) {
          var Q = bt;
          bt |= 1;
          try {
            return A(B);
          } finally {
            0 === (bt = Q) && (Tt(), zE());
          }
        }
        function UC(A, B) {
          var Q = bt;
          (bt &= -2), (bt |= 8);
          try {
            return A(B);
          } finally {
            0 === (bt = Q) && (Tt(), zE());
          }
        }
        function uC(A, B) {
          oE(Zt, kt), (kt |= B), (vt |= B);
        }
        function dC() {
          (kt = Zt.current), IE(Zt);
        }
        function MC(A, B) {
          (A.finishedWork = null), (A.finishedLanes = 0);
          var Q = A.timeoutHandle;
          if ((-1 !== Q && ((A.timeoutHandle = -1), xg(Q)), null !== yt))
            for (Q = yt.return; null !== Q; ) {
              var g = Q;
              switch (g.tag) {
                case 1:
                  null !== (g = g.type.childContextTypes) &&
                    void 0 !== g &&
                    lE();
                  break;
                case 3:
                  ye(), IE(wE), IE(aE), je();
                  break;
                case 5:
                  ke(g);
                  break;
                case 4:
                  ye();
                  break;
                case 13:
                case 19:
                  IE(Ze);
                  break;
                case 10:
                  Qe(g);
                  break;
                case 23:
                case 24:
                  dC();
              }
              Q = Q.return;
            }
          (mt = A),
            (yt = xC(A.current, null)),
            (Jt = kt = vt = B),
            (Xt = 0),
            (Lt = null),
            (Wt = Ht = St = 0);
        }
        function fC(A, B) {
          for (;;) {
            var Q = yt;
            try {
              if ((Be(), (Ke.current = bn), Bn)) {
                for (var g = _e.memoizedState; null !== g; ) {
                  var E = g.queue;
                  null !== E && (E.pending = null), (g = g.next);
                }
                Bn = !1;
              }
              if (
                ((qe = 0),
                (An = $e = _e = null),
                (Qn = !1),
                (Nt.current = null),
                null === Q || null === Q.return)
              ) {
                (Xt = 1), (Lt = B), (yt = null);
                break;
              }
              A: {
                var e = A,
                  n = Q.return,
                  t = Q,
                  C = B;
                if (
                  ((B = Jt),
                  (t.flags |= 2048),
                  (t.firstEffect = t.lastEffect = null),
                  null !== C &&
                    'object' === typeof C &&
                    'function' === typeof C.then)
                ) {
                  var I = C;
                  if (0 === (2 & t.mode)) {
                    var o = t.alternate;
                    o
                      ? ((t.updateQueue = o.updateQueue),
                        (t.memoizedState = o.memoizedState),
                        (t.lanes = o.lanes))
                      : ((t.updateQueue = null), (t.memoizedState = null));
                  }
                  var i = 0 !== (1 & Ze.current),
                    a = n;
                  do {
                    var w;
                    if ((w = 13 === a.tag)) {
                      var r = a.memoizedState;
                      if (null !== r) w = null !== r.dehydrated;
                      else {
                        var c = a.memoizedProps;
                        w =
                          void 0 !== c.fallback &&
                          (!0 !== c.unstable_avoidThisFallback || !i);
                      }
                    }
                    if (w) {
                      var s = a.updateQueue;
                      if (null === s) {
                        var l = new Set();
                        l.add(I), (a.updateQueue = l);
                      } else s.add(I);
                      if (0 === (2 & a.mode)) {
                        if (
                          ((a.flags |= 64),
                          (t.flags |= 16384),
                          (t.flags &= -2981),
                          1 === t.tag)
                        )
                          if (null === t.alternate) t.tag = 17;
                          else {
                            var F = Ie(-1, 1);
                            (F.tag = 2), oe(t, F);
                          }
                        t.lanes |= 1;
                        break A;
                      }
                      (C = void 0), (t = B);
                      var D = e.pingCache;
                      if (
                        (null === D
                          ? ((D = e.pingCache = new ot()),
                            (C = new Set()),
                            D.set(I, C))
                          : void 0 === (C = D.get(I)) &&
                            ((C = new Set()), D.set(I, C)),
                        !C.has(t))
                      ) {
                        C.add(t);
                        var U = SC.bind(null, e, I, t);
                        I.then(U, U);
                      }
                      (a.flags |= 4096), (a.lanes = B);
                      break A;
                    }
                    a = a.return;
                  } while (null !== a);
                  C = Error(
                    (z(t.type) || 'A React component') +
                      ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
                  );
                }
                5 !== Xt && (Xt = 2), (C = Ct(C, t)), (a = n);
                do {
                  switch (a.tag) {
                    case 3:
                      (e = C),
                        (a.flags |= 4096),
                        (B &= -B),
                        (a.lanes |= B),
                        ie(a, it(0, e, B));
                      break A;
                    case 1:
                      e = C;
                      var u = a.type,
                        d = a.stateNode;
                      if (
                        0 === (64 & a.flags) &&
                        ('function' === typeof u.getDerivedStateFromError ||
                          (null !== d &&
                            'function' === typeof d.componentDidCatch &&
                            (null === qt || !qt.has(d))))
                      ) {
                        (a.flags |= 4096),
                          (B &= -B),
                          (a.lanes |= B),
                          ie(a, at(a, e, B));
                        break A;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              NC(Q);
            } catch (M) {
              (B = M), yt === Q && null !== Q && (yt = Q = Q.return);
              continue;
            }
            break;
          }
        }
        function GC() {
          var A = pt.current;
          return (pt.current = bn), null === A ? bn : A;
        }
        function hC(A, B) {
          var Q = bt;
          bt |= 16;
          var g = GC();
          for ((mt === A && Jt === B) || MC(A, B); ; )
            try {
              RC();
              break;
            } catch (E) {
              fC(A, E);
            }
          if ((Be(), (bt = Q), (pt.current = g), null !== yt))
            throw Error(n(261));
          return (mt = null), (Jt = 0), Xt;
        }
        function RC() {
          for (; null !== yt; ) pC(yt);
        }
        function YC() {
          for (; null !== yt && !RE(); ) pC(yt);
        }
        function pC(A) {
          var B = zt(A.alternate, A, kt);
          (A.memoizedProps = A.pendingProps),
            null === B ? NC(A) : (yt = B),
            (Nt.current = null);
        }
        function NC(A) {
          var B = A;
          do {
            var Q = B.alternate;
            if (((A = B.return), 0 === (2048 & B.flags))) {
              if (null !== (Q = nt(Q, B, kt))) return void (yt = Q);
              if (
                (24 !== (Q = B).tag && 23 !== Q.tag) ||
                null === Q.memoizedState ||
                0 !== (1073741824 & kt) ||
                0 === (4 & Q.mode)
              ) {
                for (var g = 0, E = Q.child; null !== E; )
                  (g |= E.lanes | E.childLanes), (E = E.sibling);
                Q.childLanes = g;
              }
              null !== A &&
                0 === (2048 & A.flags) &&
                (null === A.firstEffect && (A.firstEffect = B.firstEffect),
                null !== B.lastEffect &&
                  (null !== A.lastEffect &&
                    (A.lastEffect.nextEffect = B.firstEffect),
                  (A.lastEffect = B.lastEffect)),
                1 < B.flags &&
                  (null !== A.lastEffect
                    ? (A.lastEffect.nextEffect = B)
                    : (A.firstEffect = B),
                  (A.lastEffect = B)));
            } else {
              if (null !== (Q = tt(B))) return (Q.flags &= 2047), void (yt = Q);
              null !== A &&
                ((A.firstEffect = A.lastEffect = null), (A.flags |= 2048));
            }
            if (null !== (B = B.sibling)) return void (yt = B);
            yt = B = A;
          } while (null !== B);
          0 === Xt && (Xt = 5);
        }
        function bC(A) {
          var B = OE();
          return xE(99, mC.bind(null, A, B)), null;
        }
        function mC(A, B) {
          do {
            JC();
          } while (null !== $t);
          if (0 !== (48 & bt)) throw Error(n(327));
          var Q = A.finishedWork;
          if (null === Q) return null;
          if (((A.finishedWork = null), (A.finishedLanes = 0), Q === A.current))
            throw Error(n(177));
          A.callbackNode = null;
          var g = Q.lanes | Q.childLanes,
            E = g,
            e = A.pendingLanes & ~E;
          (A.pendingLanes = E),
            (A.suspendedLanes = 0),
            (A.pingedLanes = 0),
            (A.expiredLanes &= E),
            (A.mutableReadLanes &= E),
            (A.entangledLanes &= E),
            (E = A.entanglements);
          for (var t = A.eventTimes, C = A.expirationTimes; 0 < e; ) {
            var I = 31 - VB(e),
              o = 1 << I;
            (E[I] = 0), (t[I] = -1), (C[I] = -1), (e &= ~o);
          }
          if (
            (null !== gC && 0 === (24 & g) && gC.has(A) && gC.delete(A),
            A === mt && ((yt = mt = null), (Jt = 0)),
            1 < Q.flags
              ? null !== Q.lastEffect
                ? ((Q.lastEffect.nextEffect = Q), (g = Q.firstEffect))
                : (g = Q)
              : (g = Q.firstEffect),
            null !== g)
          ) {
            if (
              ((E = bt),
              (bt |= 32),
              (Nt.current = null),
              (Sg = KB),
              sg((t = cg())))
            ) {
              if ('selectionStart' in t)
                C = { start: t.selectionStart, end: t.selectionEnd };
              else
                A: if (
                  ((C = ((C = t.ownerDocument) && C.defaultView) || window),
                  (o = C.getSelection && C.getSelection()) &&
                    0 !== o.rangeCount)
                ) {
                  (C = o.anchorNode),
                    (e = o.anchorOffset),
                    (I = o.focusNode),
                    (o = o.focusOffset);
                  try {
                    C.nodeType, I.nodeType;
                  } catch (h) {
                    C = null;
                    break A;
                  }
                  var i = 0,
                    a = -1,
                    w = -1,
                    r = 0,
                    c = 0,
                    s = t,
                    l = null;
                  B: for (;;) {
                    for (
                      var F;
                      s !== C || (0 !== e && 3 !== s.nodeType) || (a = i + e),
                        s !== I || (0 !== o && 3 !== s.nodeType) || (w = i + o),
                        3 === s.nodeType && (i += s.nodeValue.length),
                        null !== (F = s.firstChild);

                    )
                      (l = s), (s = F);
                    for (;;) {
                      if (s === t) break B;
                      if (
                        (l === C && ++r === e && (a = i),
                        l === I && ++c === o && (w = i),
                        null !== (F = s.nextSibling))
                      )
                        break;
                      l = (s = l).parentNode;
                    }
                    s = F;
                  }
                  C = -1 === a || -1 === w ? null : { start: a, end: w };
                } else C = null;
              C = C || { start: 0, end: 0 };
            } else C = null;
            (Hg = { focusedElem: t, selectionRange: C }),
              (KB = !1),
              (IC = null),
              (oC = !1),
              (jt = g);
            do {
              try {
                yC();
              } catch (h) {
                if (null === jt) throw Error(n(330));
                vC(jt, h), (jt = jt.nextEffect);
              }
            } while (null !== jt);
            (IC = null), (jt = g);
            do {
              try {
                for (t = A; null !== jt; ) {
                  var D = jt.flags;
                  if ((16 & D && FA(jt.stateNode, ''), 128 & D)) {
                    var U = jt.alternate;
                    if (null !== U) {
                      var u = U.ref;
                      null !== u &&
                        ('function' === typeof u
                          ? u(null)
                          : (u.current = null));
                    }
                  }
                  switch (1038 & D) {
                    case 2:
                      ut(jt), (jt.flags &= -3);
                      break;
                    case 6:
                      ut(jt), (jt.flags &= -3), Gt(jt.alternate, jt);
                      break;
                    case 1024:
                      jt.flags &= -1025;
                      break;
                    case 1028:
                      (jt.flags &= -1025), Gt(jt.alternate, jt);
                      break;
                    case 4:
                      Gt(jt.alternate, jt);
                      break;
                    case 8:
                      ft(t, (C = jt));
                      var d = C.alternate;
                      Dt(C), null !== d && Dt(d);
                  }
                  jt = jt.nextEffect;
                }
              } catch (h) {
                if (null === jt) throw Error(n(330));
                vC(jt, h), (jt = jt.nextEffect);
              }
            } while (null !== jt);
            if (
              ((u = Hg),
              (U = cg()),
              (D = u.focusedElem),
              (t = u.selectionRange),
              U !== D &&
                D &&
                D.ownerDocument &&
                rg(D.ownerDocument.documentElement, D))
            ) {
              null !== t &&
                sg(D) &&
                ((U = t.start),
                void 0 === (u = t.end) && (u = U),
                'selectionStart' in D
                  ? ((D.selectionStart = U),
                    (D.selectionEnd = Math.min(u, D.value.length)))
                  : (u =
                      ((U = D.ownerDocument || document) && U.defaultView) ||
                      window).getSelection &&
                    ((u = u.getSelection()),
                    (C = D.textContent.length),
                    (d = Math.min(t.start, C)),
                    (t = void 0 === t.end ? d : Math.min(t.end, C)),
                    !u.extend && d > t && ((C = t), (t = d), (d = C)),
                    (C = wg(D, d)),
                    (e = wg(D, t)),
                    C &&
                      e &&
                      (1 !== u.rangeCount ||
                        u.anchorNode !== C.node ||
                        u.anchorOffset !== C.offset ||
                        u.focusNode !== e.node ||
                        u.focusOffset !== e.offset) &&
                      ((U = U.createRange()).setStart(C.node, C.offset),
                      u.removeAllRanges(),
                      d > t
                        ? (u.addRange(U), u.extend(e.node, e.offset))
                        : (U.setEnd(e.node, e.offset), u.addRange(U))))),
                (U = []);
              for (u = D; (u = u.parentNode); )
                1 === u.nodeType &&
                  U.push({ element: u, left: u.scrollLeft, top: u.scrollTop });
              for (
                'function' === typeof D.focus && D.focus(), D = 0;
                D < U.length;
                D++
              )
                ((u = U[D]).element.scrollLeft = u.left),
                  (u.element.scrollTop = u.top);
            }
            (KB = !!Sg), (Hg = Sg = null), (A.current = Q), (jt = g);
            do {
              try {
                for (D = A; null !== jt; ) {
                  var M = jt.flags;
                  if ((36 & M && st(D, jt.alternate, jt), 128 & M)) {
                    U = void 0;
                    var f = jt.ref;
                    if (null !== f) {
                      var G = jt.stateNode;
                      jt.tag,
                        (U = G),
                        'function' === typeof f ? f(U) : (f.current = U);
                    }
                  }
                  jt = jt.nextEffect;
                }
              } catch (h) {
                if (null === jt) throw Error(n(330));
                vC(jt, h), (jt = jt.nextEffect);
              }
            } while (null !== jt);
            (jt = null), XE(), (bt = E);
          } else A.current = Q;
          if (_t) (_t = !1), ($t = A), (AC = B);
          else
            for (jt = g; null !== jt; )
              (B = jt.nextEffect),
                (jt.nextEffect = null),
                8 & jt.flags &&
                  (((M = jt).sibling = null), (M.stateNode = null)),
                (jt = B);
          if (
            (0 === (g = A.pendingLanes) && (qt = null),
            1 === g ? (A === eC ? EC++ : ((EC = 0), (eC = A))) : (EC = 0),
            (Q = Q.stateNode),
            ME && 'function' === typeof ME.onCommitFiberRoot)
          )
            try {
              ME.onCommitFiberRoot(
                dE,
                Q,
                void 0,
                64 === (64 & Q.current.flags),
              );
            } catch (h) {}
          if ((cC(A, WE()), Kt)) throw ((Kt = !1), (A = Pt), (Pt = null), A);
          return 0 !== (8 & bt) || zE(), null;
        }
        function yC() {
          for (; null !== jt; ) {
            var A = jt.alternate;
            oC ||
              null === IC ||
              (0 !== (8 & jt.flags)
                ? AB(jt, IC) && (oC = !0)
                : 13 === jt.tag && Rt(A, jt) && AB(jt, IC) && (oC = !0));
            var B = jt.flags;
            0 !== (256 & B) && ct(A, jt),
              0 === (512 & B) ||
                _t ||
                ((_t = !0),
                TE(97, function () {
                  return JC(), null;
                })),
              (jt = jt.nextEffect);
          }
        }
        function JC() {
          if (90 !== AC) {
            var A = 97 < AC ? 97 : AC;
            return (AC = 90), xE(A, XC);
          }
          return !1;
        }
        function kC(A, B) {
          BC.push(B, A),
            _t ||
              ((_t = !0),
              TE(97, function () {
                return JC(), null;
              }));
        }
        function ZC(A, B) {
          QC.push(B, A),
            _t ||
              ((_t = !0),
              TE(97, function () {
                return JC(), null;
              }));
        }
        function XC() {
          if (null === $t) return !1;
          var A = $t;
          if ((($t = null), 0 !== (48 & bt))) throw Error(n(331));
          var B = bt;
          bt |= 32;
          var Q = QC;
          QC = [];
          for (var g = 0; g < Q.length; g += 2) {
            var E = Q[g],
              e = Q[g + 1],
              t = E.destroy;
            if (((E.destroy = void 0), 'function' === typeof t))
              try {
                t();
              } catch (I) {
                if (null === e) throw Error(n(330));
                vC(e, I);
              }
          }
          for (Q = BC, BC = [], g = 0; g < Q.length; g += 2) {
            (E = Q[g]), (e = Q[g + 1]);
            try {
              var C = E.create;
              E.destroy = C();
            } catch (I) {
              if (null === e) throw Error(n(330));
              vC(e, I);
            }
          }
          for (C = A.current.firstEffect; null !== C; )
            (A = C.nextEffect),
              (C.nextEffect = null),
              8 & C.flags && ((C.sibling = null), (C.stateNode = null)),
              (C = A);
          return (bt = B), zE(), !0;
        }
        function LC(A, B, Q) {
          oe(A, (B = it(0, (B = Ct(Q, B)), 1))),
            (B = iC()),
            null !== (A = rC(A, 1)) && (OB(A, 1, B), cC(A, B));
        }
        function vC(A, B) {
          if (3 === A.tag) LC(A, A, B);
          else
            for (var Q = A.return; null !== Q; ) {
              if (3 === Q.tag) {
                LC(Q, A, B);
                break;
              }
              if (1 === Q.tag) {
                var g = Q.stateNode;
                if (
                  'function' === typeof Q.type.getDerivedStateFromError ||
                  ('function' === typeof g.componentDidCatch &&
                    (null === qt || !qt.has(g)))
                ) {
                  var E = at(Q, (A = Ct(B, A)), 1);
                  if ((oe(Q, E), (E = iC()), null !== (Q = rC(Q, 1))))
                    OB(Q, 1, E), cC(Q, E);
                  else if (
                    'function' === typeof g.componentDidCatch &&
                    (null === qt || !qt.has(g))
                  )
                    try {
                      g.componentDidCatch(B, A);
                    } catch (e) {}
                  break;
                }
              }
              Q = Q.return;
            }
        }
        function SC(A, B, Q) {
          var g = A.pingCache;
          null !== g && g.delete(B),
            (B = iC()),
            (A.pingedLanes |= A.suspendedLanes & Q),
            mt === A &&
              (Jt & Q) === Q &&
              (4 === Xt ||
              (3 === Xt && (62914560 & Jt) === Jt && 500 > WE() - Vt)
                ? MC(A, 0)
                : (Wt |= Q)),
            cC(A, B);
        }
        function HC(A, B) {
          var Q = A.stateNode;
          null !== Q && Q.delete(B),
            0 === (B = 0) &&
              (0 === (2 & (B = A.mode))
                ? (B = 1)
                : 0 === (4 & B)
                ? (B = 99 === OE() ? 1 : 2)
                : (0 === tC && (tC = vt),
                  0 === (B = HB(62914560 & ~tC)) && (B = 4194304))),
            (Q = iC()),
            null !== (A = rC(A, B)) && (OB(A, B, Q), cC(A, Q));
        }
        function WC(A, B, Q, g) {
          (this.tag = A),
            (this.key = Q),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = B),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = g),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function OC(A, B, Q, g) {
          return new WC(A, B, Q, g);
        }
        function VC(A) {
          return !(!(A = A.prototype) || !A.isReactComponent);
        }
        function xC(A, B) {
          var Q = A.alternate;
          return (
            null === Q
              ? (((Q = OC(A.tag, B, A.key, A.mode)).elementType =
                  A.elementType),
                (Q.type = A.type),
                (Q.stateNode = A.stateNode),
                (Q.alternate = A),
                (A.alternate = Q))
              : ((Q.pendingProps = B),
                (Q.type = A.type),
                (Q.flags = 0),
                (Q.nextEffect = null),
                (Q.firstEffect = null),
                (Q.lastEffect = null)),
            (Q.childLanes = A.childLanes),
            (Q.lanes = A.lanes),
            (Q.child = A.child),
            (Q.memoizedProps = A.memoizedProps),
            (Q.memoizedState = A.memoizedState),
            (Q.updateQueue = A.updateQueue),
            (B = A.dependencies),
            (Q.dependencies =
              null === B
                ? null
                : { lanes: B.lanes, firstContext: B.firstContext }),
            (Q.sibling = A.sibling),
            (Q.index = A.index),
            (Q.ref = A.ref),
            Q
          );
        }
        function TC(A, B, Q, g, E, e) {
          var t = 2;
          if (((g = A), 'function' === typeof A)) VC(A) && (t = 1);
          else if ('string' === typeof A) t = 5;
          else
            A: switch (A) {
              case f:
                return zC(Q.children, E, e, B);
              case Z:
                (t = 8), (E |= 16);
                break;
              case G:
                (t = 8), (E |= 1);
                break;
              case h:
                return (
                  ((A = OC(12, Q, B, 8 | E)).elementType = h),
                  (A.type = h),