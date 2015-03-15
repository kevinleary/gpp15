#pragma strict

var cat2prefab : Transform;
var redflag : Transform;
var catSpeed : float;
var hairball : GameObject;
var timestamp: float;

//var flaganim : Animation;

var hasflag : boolean;
var coolDown : float;

var captures : int;
//var redspawn : flagspawn;

function Start () {
	
	coolDown += 2;
	hasflag = false;
	
}

function Update () {
	
	if (transform.position.y > 2.57)
		transform.position.y = 2.57;
		
	if (transform.position.y < -2.5)
		transform.position.y = -2.5;
		
	if (transform.position.x < -4.32)
		transform.position.x = -4.32;
		
	if (transform.position.x > 4.32)
		transform.position.x = 4.32;
		
	if(Input.GetKey ('up')){
		transform.Translate(0,catSpeed * Time.deltaTime,0);
		}
		
		if(Input.GetKey ('down')){
		transform.Translate(0,-catSpeed * Time.deltaTime,0);
		}
		
		if(Input.GetKey ('left')){
		transform.Translate(-catSpeed * Time.deltaTime,0,0);
		}
		
		if(Input.GetKey ('right')){
		transform.Translate(catSpeed * Time.deltaTime,0,0);
		}
		
		shot();
		
		//if(hasflag){
			//flaganim = GetComponent.<Animation>();
		//}
}

function shot(){

		if(Time.time > timestamp){
			if (Input.GetKey(KeyCode.RightControl)){
				timestamp = Time.time + coolDown;
				
				Instantiate(hairball, Vector3(transform.position.x + -1.1, 
						transform.position.y,-1), Quaternion.identity);
				
		}
	}
}

function OnCollisionEnter2D (other: Collision2D) {
	
	/*if (other.gameObject.tag == "Hairball")
	{
			Destroy(other.gameObject);
			Destroy(gameObject);
			
				Instantiate(cat2prefab, Vector3(2.65, .19, -1), Quaternion.identity); 
				
			
	}*/
	
	if (other.gameObject.tag == "redflag")
	{
		hasflag = true;
		Destroy(other.gameObject);
	}
	
	if (other.gameObject.tag == "returnred" && hasflag == true)
	{
		Instantiate(redflag, Vector3(-4.88, 0, -1), Quaternion.identity);
		captures++;
		hasflag = false;
	}
}

function onGUI(){
	GUI.Box (Rect (10,10,90,30), "Blue captures: " + captures);
}
