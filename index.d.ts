declare module 'adapterjs' {
  export = AdapterJS;
}

declare module 'adapterjs/publish/adapter.min' {
  export = AdapterJS;
}

declare const AdapterJS: AdapterJsStatic;

  // !!!! WARNING: DO NOT OVERRIDE THIS FUNCTION. !!!
  // This function will be called when plugin is ready. It sends necessary
  // details to the plugin.
  // The function will wait for the document to be ready and the set the
  // plugin state to AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY,
  // indicating that it can start being requested.
  // This function is not in the IE/Safari condition brackets so that
  // TemPluginLoaded function might be called on Chrome/Firefox.
  // This function is the only private function that is not encapsulated to
  // allow the plugin method to be called.
declare const __TemWebRTCReady0: Function;
  
interface AdapterJsStatic {
  // Plugin Options
  options?: AdapterJSOptions;

  // AdapterJS version
  VERSION: string;

  // This function will be called when the WebRTC API is ready to be used
  // Whether it is the native implementation (Chrome, Firefox, Opera) or
  // the plugin
  // You may Override this function to synchronise the start of your application
  // with the WebRTC API being ready.
  // If you decide not to override use this synchronisation, it may result in
  // an extensive CPU usage on the plugin start (once per tab loaded)
  // Params:
  //    - isUsingPlugin: true is the WebRTC plugin is being used, false otherwise
  //
  onwebrtcready(isUsingPlugin: boolean): this;

  // New interface to store multiple callbacks, private
  _onwebrtcreadies: any[];

  // Sets a callback function to be called when the WebRTC interface is ready.
  // The first argument is the function to callback.\
  // Throws an error if the first argument is not a function
  webRTCReady(callback?: Function);

  // Plugin namespace
  WebRTCPlugin: WebRTCPluginStatic;

  maybeThroughWebRTCReady();

  TEXT: AdapterJsTextStatic;

  // The result of ice connection states.
  // - starting: Ice connection is starting.
  // - checking: Ice connection is checking.
  // - connected Ice connection is connected.
  // - completed Ice connection is connected.
  // - done Ice connection has been completed.
  // - disconnected Ice connection has been disconnected.
  // - failed Ice connection has failed.
  // - closed Ice connection is closed.
  _iceConnectionStates: IceConnectionsStatic;

  //The IceConnection states that has been fired for each peer.
  _iceConnectionFiredStates: any[];

  // Check if WebRTC Interface is defined.
  isDefined: null | boolean;

  // This function helps to retrieve the webrtc detected browser information.
  // This sets:
  // - webrtcDetectedBrowser: The browser agent name.
  // - webrtcDetectedVersion: The browser version.
  // - webrtcMinimumVersion: The minimum browser version still supported by AJS.
  // - webrtcDetectedType: The types of webRTC support.
  //   - 'moz': Mozilla implementation of webRTC.
  //   - 'webkit': WebKit implementation of webRTC.
  //   - 'plugin': Using the plugin implementation.
  parseWebrtcDetectedBrowser();

  addEvent(elem: any, evnt: Event, func: Function);

  renderNotificationBar(message: any, buttonText: string, buttonCallback: Function);
}

interface IceConnectionsStatic {
  starting: string;
  checking: string;
  connected: string;
  completed: string;
  done: string;
  disconnected: string;
  failed: string;
  closed: string;
}

interface AdapterJsTextStatic {
  PLUGIN: {
    REQUIRE_INSTALLATION: string;
    NOT_SUPPORTED: string;
    BUTTON: string;
  };
  REFRESH: {
    REQUIRE_REFRESH: string;
    BUTTON: string;
  }
}

interface WebRTCPluginStatic {
  // The object to store plugin information
  /* jshint ignore:start */
  pluginInfo: pluginInfoStatic;

  TAGS: TagStatic;

  // Unique identifier of each opened page
  pageId: number;

  // Use this whenever you want to call the plugin.
  plugin: null | string;

  // Set log level for the plugin once it is ready.
  // The different values are
  // This is an asynchronous function that will run when the plugin is ready
  setLogLevel: null | string;

  // Defines webrtc's JS interface according to the plugin's implementation.
  // Define plugin Browsers as WebRTC Interface.
  defineWebRTCInterface: null | object;

  // This function detects whether or not a plugin is installed.
  // Checks if Not IE (firefox, for example), else if it's IE,
  // we're running IE and do something. If not it is not supported.
  isPluginInstalled: null | boolean;

  // Lets adapter.js wait until the the document is ready before injecting the plugin
  pluginInjectionInterval: null | any;

  // Inject the HTML DOM object element into the page.
  injectPlugin: null | any; 

  // States of readiness that the plugin goes through when
  // being injected and stated
  PLUGIN_STATES: PluginStateStatic;

  // Current state of the plugin. You cannot use the plugin before this is
  // equal to AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY

  pluginState: PluginStateStatic.NONE | PluginStateStatic.INITIALIZING | PluginStateStatic.INJECTING | PluginStateStatic.INJECTED | PluginStateStatic.READY;

  // True is AdapterJS.onwebrtcready was already called, false otherwise
  // Used to make sure AdapterJS.onwebrtcready is only called once
  onwebrtcreadyDone: boolean;

  // Log levels for the plugin.
  // To be set by calling AdapterJS.WebRTCPlugin.setLogLevel
  /*
  Log outputs are prefixed in some cases.
    INFO: Information reported by the plugin.
    ERROR: Errors originating from within the plugin.
    WEBRTC: Error originating from within the libWebRTC library
  */
  // From the least verbose to the most verbose
  PLUGIN_LOG_LEVELS: PluginLogLevelsStatic;

  // Does a waiting check before proceeding to load the plugin.
  WaitForPluginReady: null | any;

  // This methid will use an interval to wait for the plugin to be ready.
  callWhenPluginReady: null | any;


}

interface PluginLogLevelsStatic {
  NONE: 'NONE';
  ERROR: 'ERROR';
  WARNING: 'WARNING';
  INFO: 'INFO';
  VERBOSE: 'VERBOSE';
  SENSITIVE: 'SENSITIVE';
}

interface PluginStateStatic {
  NONE: 0;           // no plugin use
  INITIALIZING: 1;   // Detected need for plugin
  INJECTING: 2;      // Injecting plugin
  INJECTED: 3;       // Plugin element injected but not usable yet
  READY: 4;          // Plugin ready to be used
}

interface TagStatic {
  NONE: 'none';
  AUDIO: 'audio';
  VIDEO: 'video';
}

interface pluginInfoStatic {
  prefix: string;
  plugName: string;
  pluginId: string;
  type: string;
  onload: string;
  portalLink: string;
  downloadLink: string;
  companyName: string;
  downloadLinks: {
    mac: string;
    win: string;
  }
}


interface AdapterJSOptions {
  // uncomment to get virtual webcams
  // AdapterJS.options.getAllCams = true;
  getAllCams: boolean;

  // uncomment to prevent the install prompt when the plugin in not yet installed
  // AdapterJS.options.hidePluginInstallPrompt = true;
  hidePluginInstallPrompt: boolean;

  // uncomment to force the use of the plugin on Safari
  // AdapterJS.options.forceSafariPlugin = true;
  forceSafariPlugin: boolean;
}