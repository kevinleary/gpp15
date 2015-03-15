#pragma strict

var cat2prefab : Transform;
var cat1prefab : Transform;
function Start () {
	
	Instantiate(cat2prefab, Vector3(4.2, -2.5, -1), Quaternion.identity); 
	Instantiate(cat1prefab, Vector3(-4.2, 2.1, -1), Quaternion.identity); 
}

function Update () {

}