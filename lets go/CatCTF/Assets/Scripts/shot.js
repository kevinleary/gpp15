#pragma strict

var hairballspeed: float;

function Start () {

}

function Update () {
	
		transform.Translate(hairballspeed * Time.deltaTime, 0, 0);
		if(transform.position.x > 5.5 || transform.position.x < -5.5)
			Destroy(gameObject);	
}