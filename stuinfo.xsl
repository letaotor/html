<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	<html>
	<body>
	<table border="1">
	<tr>
		<th>学号</th>
		<th>姓名</th>
		<th>性别</th>
		<th>生日</th>
	</tr>
	<xsl:for-each select="stu/info">
	<tr>
		<td><xsl:value-of select="id"/></td>
		<td><xsl:value-of select="name"/></td>
		<td><xsl:value-of select="sex"/></td>
		<td><xsl:value-of select="birth"/></td>
	</tr>
	</xsl:for-each>
	</table>
	</body>
	</html>
</xsl:template>
</xsl:stylesheet>
