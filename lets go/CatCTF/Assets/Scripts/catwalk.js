#pragma strict

var cat1prefab : Transform;
var blueflag : Transform;
var catSpeed : float;
var hairball : GameObject;
var timestamp: float;

var hasflag : boolean;
var coolDown : float;
var captures : int;

function Start () {
	
	coolDown += 2.0;
	hasflag = false;
}

function Update () {
	
	if(Input.GetKey(KeyCode.Escape)){
		Application.Quit();
	}
	
	if (transform.position.y > 2.57)
		transform.position.y = 2.57;
		
	if (transform.position.y < -2.5)
		transform.position.y = -2.5;
		
	if (transform.position.x < -4.32)
		transform.position.x = -4.32;
		
	if (transform.position.x > 4.32)
		transform.position.x = 4.32;
			
	if(Input.GetKey ('w')){
		transform.Translate(0,catSpeed * Time.deltaTime,0);
		}
		
		if(Input.GetKey ('s')){
		transform.Translate(0,-catSpeed * Time.deltaTime,0);
		}
		
		if(Input.GetKey ('a')){
		transform.Translate(-catSpeed * Time.deltaTime,0,0);
		}
		
		if(Input.GetKey ('d')){
		transform.Translate(catSpeed * Time.deltaTime,0,0);
		}
		

		shot();
		
}

function shot(){

		if(Time.time > timestamp){
			if (Input.GetKey('f')){
				timestamp = Time.time + coolDown;
				
				Instantiate(hairball, Vector3(transform.position.x + 1.1, 
						transform.position.y,-1), Quaternion.identity);
				
		}
	}
}

function OnCollisionEnter2D (other: Collision2D) {
	
	/*if (other.gameObject.tag == "Hairball")
	{
			Destroy(other.gameObject);
			Destroy(gameObject);
				Instantiate(cat1prefab, Vector3(-2.73, .17, -1), Quaternion.identity); 

	}*/
	
	if (other.gameObject.tag == "blueflag")
	{
		hasflag = true;
		Destroy(other.gameObject);
	}
	
	if (other.gameObject.tag == "returnblue" && hasflag == true)
	{
		Instantiate(blueflag, Vector3(4.88, 0, -1), Quaternion.identity);
		captures++;
		hasflag = false;
	}
	
}