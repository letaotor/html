<?php
$id = $_POST["id"];
$type = $_POST["type"];
if ($type == "edit")
{
	$name = $_POST["name"];
	$sex = $_POST["sex"];
	$birth = $_POST["birth"];
}
if (strlen($id) > 0)
{
	$con = mysql_connect('localhost', 'root', 'cbTuqhs2w7Ec');
	if(!$con)
	{
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db('stuinfo', $con);
	if ($type == "edit")
	{
		$sql = "update student set name ='" . $name ."',sex ='" . $sex . "',birth ='" . $birth ."'where id ='" . $id . "';";
		$result = mysql_query($sql);
		$row = mysql_affected_rows($con);
		if ($result == false || $row == 0)
		{
			$sql = "insert into student values ('" . $id ."','" . $name . "','" . $sex . "','" . $birth . "');";
			$result = mysql_query($sql);
			$row = mysql_affected_rows($con);
			if ($result == true && $row == 1)
				echo "学籍" . $id . "添加成功";
			else
				echo "学籍" . $id . "添加失败";

		}
		else
			echo "学籍" . $id . "修改成功";
	}
	if ($type == "delete")
	{
		$sql = "delete from student where id = '" . $id . "';";
		$result = mysql_query($sql);
		$row = mysql_affected_rows($con);
		if ($result == true && $row == 1)
			echo "学籍" . $id . "已被成功注销";
		else
			echo "学籍" . $id . "注销失败,请检查输入";
	}
}
else
	echo "请输入学号"; 

?>



