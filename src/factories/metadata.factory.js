(function() {
    'use strict';

    angular
        .module('rets-rabbit-angular.factory.metadata', [])
        .factory('MetadataFactory', Factory);

    function Factory() {
        var factory = {
            fields: _fields
        };

        return factory;

        function _fields() {
            return [{
                name: 'ListPrice',
                type: 'Number'
            }, {
                name: 'ListingId',
                type: 'String'
            }, {
                name: 'ListingKey',
                type: 'Number'
            }, {
                name: 'OriginatingSystemKey',
                type: 'String'
            }, {
                name: 'StandardStatus',
                type: 'String'
            }, {
                name: 'ListingContractDate',
                type: 'Date'
            }, {
                name: 'PurchaseContractDate',
                type: 'Date'
            }, {
                name: 'CloseDate',
                type: 'Date'
            }, {
                name: 'ModificationTimestamp',
                type: 'Timestamp'
            }, {
                name: 'StatusChangeTimestamp',
                type: 'Timestamp'
            }, {
                name: 'MajorChangeType',
                type: 'String'
            }, {
                name: 'OriginalEntryTimestamp',
                type: 'Timestamp'
            }, {
                name: 'OnMarketTimestamp',
                type: 'Timestamp'
            }, {
                name: 'OffMarketTimestamp',
                type: 'Timestamp'
            }, {
                name: 'DaysOnMarket',
                type: 'Number'
            }, {
                name: 'CumulativeDaysOnMarket',
                type: 'Number'
            }, {
                name: 'ClosePrice',
                type: 'Number'
            }, {
                name: 'ListPrice',
                type: 'Number'
            }, {
                name: 'OriginalListPrice',
                type: 'Number'
            }, {
                name: 'ListPriceLow',
                type: 'Number'
            }, {
                name: 'InternetEntireListingDisplayYN',
                type: 'Boolean'
            }, {
                name: 'InternetAddressDisplayYN',
                type: 'Boolean'
            }, {
                name: 'PhotosCount',
                type: 'Number'
            }, {
                name: 'PhotosChangeTimestamp',
                type: 'Timestamp'
            }, {
                name: 'VirtualTourURLUnbranded',
                type: 'String'
            }, {
                name: 'PublicRemarks',
                type: 'String'
            }, {
                name: 'StreetNumber',
                type: 'String'
            }, {
                name: 'StreetNumberNumeric',
                type: 'Number'
            }, {
                name: 'StreetName',
                type: 'String'
            }, {
                name: 'StreetSuffix',
                type: 'String'
            }, {
                name: 'City',
                type: 'String'
            }, {
                name: 'StateOrProvince',
                type: 'String'
            }, {
                name: 'PostalCode',
                type: 'Number'
            }, {
                name: 'PostalCodePlus4',
                type: 'Number'
            }, {
                name: 'CountyOrParish',
                type: 'String'
            }, {
                name: 'MLSAreaMajor',
                type: 'String'
            }, {
                name: 'Directions',
                type: 'String'
            }, {
                name: 'ListAgentFirstName',
                type: 'String'
            }, {
                name: 'ListAgentLastName',
                type: 'String'
            }, {
                name: 'ListAgentMlsId',
                type: 'String'
            }, {
                name: 'ListAgentStateLicense',
                type: 'Number'
            }, {
                name: 'ListOfficeName',
                type: 'String'
            }, {
                name: 'ListOfficeMlsId',
                type: 'String'
            }, {
                name: 'BuyerAgentFirstName',
                type: 'String'
            }, {
                name: 'BuyerAgentLastName',
                type: 'String'
            }, {
                name: 'BuyerAgentMlsId',
                type: 'String'
            }, {
                name: 'BuyerAgentStateLicense',
                type: 'Number'
            }, {
                name: 'BuyerOfficeName',
                type: 'String'
            }, {
                name: 'BuyerOfficeMlsId',
                type: 'String'
            }];
        }
    }
})();