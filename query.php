<?php
$q=$_GET["q"];
$action=$_GET["action"];

$hint = "";
if(strlen($q) > 0)
{
	$con = mysql_connect('localhost', 'root', 'cbTuqhs2w7Ec');
	if(!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db('stuinfo', $con);
	$sql = "select * from student where id = '" . $q . "';";
	$result = mysql_query($sql);
	$hint = "<table border='1'>";
	$count = 0;
	while($row = mysql_fetch_array($result))
	{
		$hint = $hint . "<tr><td>";
		$hint = $hint . $row['id'] . "</td><td>";
		$hint = $hint . $row['name'] . "</td><td>";
		$hint = $hint . $row['sex'] . "</td><td>";
		$hint = $hint . $row['birth'] . "</td></tr>";
		$count++;
	}
	$hint = $hint . "</table>";
	if ($count)
	{
		if ($action == "edit")
			$hint = $hint . "<br />学号为" . $q ."的学籍已存在，提交后将修改该学籍";
		if ($action == "delete")
			$hint = $hint . "<br />学号为" . $q ."的学籍将被注销，确认后单击注销按钮";
	}
	else
	{
		if ($action == "edit")
			$hint = $hint . "学籍" . $q . "不存在, 提交后将添加该学籍";
		if ($action == "delete")
			$hint = $hint . "学籍" . $q . "不存在, 请确认学号";
	}

}
else
{
	$hint = "无";
}


$response =  $hint;

mysql_close($con);
echo $response;
	
?>
