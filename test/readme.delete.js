var Model = require( 'sg-model' ),
	should = require( 'should' );

describe( 'destroy', function () {

	before( function () {
		Model.useify.clear();
		Model.use( 'adapter', require( '../src' ) );
	} );

	it( 'should `destroy` a model', function ( _done ) {
		var personModel = new Model( 'person', {
			key: 'guid',
			baseUrl: 'http://localhost:3000/api',
			properties: {
				name: '',
				age: ''
			}
		} );

		personModel.$get( {
			guid: '5f55821f-3a28-45c3-b91d-7df927a863d8'
		}, function ( _error, _bennett ) {

			if ( _error ) {
				return _done( _error );
			}

			_bennett.$destroy( function ( _error, _res ) {

				if ( _error ) {
					return _done( _error );
				}
				_done();

			} );

		} );
	} );

} );