const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOEphemerataLink_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('ROCOEphemerataLink', function test_ROCOEphemerataLink () {

		it('classes OLSKCommonTie', function () {
			return browser.assert.hasClass(ROCOEphemerataLink, 'OLSKCommonTie');
		});

		it('sets href', function () {
			return browser.assert.attribute(ROCOEphemerataLink, 'href', process.env.ROCO_EPHEMERATA_LINK_URL);
		});

	});

	describe('ROCOEphemerataLinkImage', function test_ROCOEphemerataLinkImage () {

		it('sets src', function () {
			return browser.assert.attribute(ROCOEphemerataLinkImage, 'src', process.env.ROCO_EPHEMERATA_LINK_ICON_URL);
		});

	});

});
