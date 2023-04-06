const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOEphemerataLink: '.ROCOEphemerataLink',
	ROCOEphemerataLinkImage: '.ROCOEphemerataLinkImage',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('ROCOEphemerataLink_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOEphemerataLink', function () {
		return browser.assert.elements(ROCOEphemerataLink, 1);
	});

	it('shows ROCOEphemerataLinkImage', function () {
		return browser.assert.elements(ROCOEphemerataLinkImage, 1);
	});

});
