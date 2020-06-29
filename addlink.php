<?php
file_put_contents('link/'.$_GET['name'], $_GET['url']);
echo "<p>name : ".$_GET['name']."</p>";
echo "<p>url : ".$_GET['url']."</p>";
?>