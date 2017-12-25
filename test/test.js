// 모듈 선언
// 다음 모듈이 나올때까지 아래 나오는 테스트 코드들은 해당 모듈의 소속이 된다.
QUnit.module('isTest');

// equal
QUnit.test( "a basic test example", function( assert ) {
    var value = "hello";
    assert.equal( value, "hello", "We expect value to be hello" );
});


// ok
QUnit.test( "ok test", function( assert ) {
    assert.ok( true, "true succeeds" );
    assert.ok( "non-empty", "non-empty string succeeds" );

    assert.ok( false, "false fails" );
    assert.ok( 0, "0 fails" );
    assert.ok( NaN, "NaN fails" );
    assert.ok( "", "empty string fails" );
    assert.ok( null, "null fails" );s
    assert.ok( undefined, "undefined fails" );
});

// 모듈
QUnit.module('isTest2');

testFunction = function () {
    return true;
};

// equal
QUnit.test( "deepEqual test", function( assert ) {
    assert.equal( testFunction(), true, "Two objects can be the same in value" );
});


