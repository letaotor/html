<?php
$q=$_GET["q"];

$hint = "";
if(strlen($q) > 0)
{
	$con = mysql_connect('localhost', 'root', 'cbTuqhs2w7Ec');
	if(!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db('stuinfo', $con);
	$sql = "select * from student where id like '" . $q . "%' limit 10;";
	$result = mysql_query($sql);
	/*$hint = "<table border='1'>";
	while($row = mysql_fetch_array($result))
	{
		$hint = $hint . "<tr><td>";
		$hint = $hint . $row['id'] . "</td><td>";
		$hint = $hint . $row['name'] . "</td><td>";
		$hint = $hint . $row['sex'] . "</td><td>";
		$hint = $hint . $row['birth'] . "</td></tr>";
	}
	$hint = $hint . "</table>";
	*/
	$hint = "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
	$hint = $hint . "<?xml-stylesheet type=\"text/xsl\" href=\"stuinfo.xsl\"?><stu>";
	while($row = mysql_fetch_array($result))
	{
		$hint = $hint . "<info><id>" . $row['id'] . "</id>";
		$hint = $hint . "<name>" . $row['name'] . "</name>";
		$hint = $hint . "<sex>" . $row['sex'] . "</sex>";
		$hint = $hint . "<birth>" . $row['birth'] . "</birth></info>";
	}
	$hint = $hint . "</stu>";
	file_put_contents("result.xml", $hint);
}
else
{
	$hint = "无";
}


$response = $hint;

mysql_close($con);
echo $response;
	
?>
