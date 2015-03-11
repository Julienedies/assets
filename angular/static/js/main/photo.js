$(document).ready(function(){
	$(".dimg").live('click',function(){
		//$("#container").html('');
		//init();
		//animate();
	})
	
	$(".wico").hover(function(){$(".wpic").show()},function(){$(".wpic").hide()})
})


var camera, scene, renderer;
var controls;
var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };
init(targets.sphere,0);
animate();

function init() {
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
		camera.position.z = 2500;
		scene = new THREE.Scene();


	// table
	objects =[];
	for ( var i = 0; i < table.length; i += 5 ) {
		var element = document.createElement( 'div' );
		element.className = 'element';
		element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
		var symbol = document.createElement( 'div' );
		symbol.className = 'symbol';
		symbol.innerHTML = table[ i ];
		element.appendChild( symbol );
		var details = document.createElement( 'div' );
		details.className = 'details';
		details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
		element.appendChild( details );
		var object = new THREE.CSS3DObject( element );
		object.position.x = Math.random() * 4000 - 2000;
		object.position.y = Math.random() * 4000 - 2000;
		object.position.z = Math.random() * 4000 - 2000;
		scene.add( object );
		objects.push( object );
		targets.table.push( object );
	}

	// sphere
	var vector = new THREE.Vector3();
	for ( var i = 0, l = objects.length; i < l; i ++ ) {
		var phi = Math.acos( -1 + ( 2 * i ) / l );
		var theta = Math.sqrt( l * Math.PI ) * phi;
		var object = new THREE.Object3D();
		object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
		object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
		object.position.z = 800 * Math.cos( phi );
		vector.copy( object.position ).multiplyScalar( 2 );
		object.lookAt( vector );
		targets.sphere.push( object );
	}

	// helix
	var vector = new THREE.Vector3();
	for ( var i = 0, l = objects.length; i < l; i ++ ) {
		var phi = i * 0.175 + Math.PI;
		var object = new THREE.Object3D();
		object.position.x = 900 * Math.sin( phi );
		object.position.y = - ( i * 8 ) + 450;
		object.position.z = 900 * Math.cos( phi );
		vector.x = object.position.x * 2;
		vector.y = object.position.y;
		vector.z = object.position.z * 2;
		object.lookAt( vector );
		targets.helix.push( object );
	}

	// grid
	for ( var i = 0; i < objects.length; i ++ ) {
		var object = new THREE.Object3D();
		object.position.x = ( ( i % 5 ) * 400 ) - 800;
		object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
		object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;
		targets.grid.push( object );
	}

	renderer = new THREE.CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	document.getElementById( 'container' ).appendChild( renderer.domElement );

	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 0.5;
	controls.addEventListener( 'change', render );

	var button = document.getElementById( 'sphere' );
	button.addEventListener( 'click', function ( event ) {
		transform( targets.sphere, 2000 );
	}, false );

	var button = document.getElementById( 'helix' );
	button.addEventListener( 'click', function ( event ) {
		transform( targets.helix, 2000 );
	}, false );

	var button = document.getElementById( 'grid' );
	button.addEventListener( 'click', function ( event ) {
		transform( targets.grid, 2000 );
	}, false );
	
	transform( targets.sphere, 2000 );
	window.addEventListener( 'resize', onWindowResize, false );
}

function transform( targets, duration ) {
	TWEEN.removeAll();
	for ( var i = 0; i < objects.length; i ++ ) {
		var object = objects[ i ];
		var target = targets[ i ];
		new TWEEN.Tween( object.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();
		new TWEEN.Tween( object.rotation )
			.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();
	}

	new TWEEN.Tween( this )
		.to( {}, duration * 2 )
		.onUpdate( render )
		.start();
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	render();
}

function animate() {
	requestAnimationFrame( animate );
	TWEEN.update();
	controls.update();
}

function render() {
	renderer.render( scene, camera );
}


function f(){
	var lt;
	lt = new Date;
	var secondsUntilNow = (lt.getHours()*60 + lt.getMinutes())*60 + lt.getSeconds();
	var newSeconds = secondsUntilNow * (25/24);
	var time_gap = newSeconds - secondsUntilNow;
	var minutes_gap = Math.floor(time_gap/60);
	var hours = Math.floor(newSeconds / 3600);
	var minutes = Math.floor((newSeconds - hours * 3600 )/60);
	var seconds = Math.floor( newSeconds - hours*3600 - minutes*60 );
	//return now;
	document.getElementById( 'l_time' ).innerHTML = ft(lt.getHours())+":"+ft(lt.getMinutes())+":"+ft(lt.getSeconds());
	document.getElementById( 'new_time' ).innerHTML = ft(hours) +":" + ft(minutes) +":"+ft(seconds);
	document.getElementById( 'add_time' ).innerHTML = Math.floor(minutes_gap);
}


function ft(tt){
	if (tt < 10){
		return '0'+tt;
	}else{
		return tt;
	}
}

var new_time=setInterval("f();",1000);