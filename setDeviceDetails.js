const fiftyOneDegrees = require('fiftyonedegreescore');

fiftyOneDegrees.log.on('error', e => console.warn(e));

const deviceDetectionProvider = new fiftyOneDegrees.provider({
    dataFile:            require('fiftyonedegreeslitepattern'),
    properties:          'DeviceType,BrowserName,BrowserVersion,PlatformName,PlatformVersion,ScreenPixelsWidth,ScreenPixelsHeight',
    UsageSharingEnabled: false
});

module.exports = (req, res, next) => {
    deviceDetectionProvider.getMatch(req);
    req.deviceDetails = {
        deviceType:         req.fiftyoneDevice.DeviceType,
        browserName:        req.fiftyoneDevice.BrowserName,
        browserVersion:     req.fiftyoneDevice.BrowserVersion,
        platformName:       req.fiftyoneDevice.PlatformName,
        platformVersion:    req.fiftyoneDevice.PlatformVersion,
        screenPixelsWidth:  req.fiftyoneDevice.ScreenPixelsWidth,
        screenPixelsHeight: req.fiftyoneDevice.ScreenPixelsHeight
    };
    next();
};