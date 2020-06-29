<?php
file_put_contents('link/'.$_POST['name'], $_POST['url']);
echo "<p>name : ".$_POST['name']."</p>";
echo "<p>url : ".$_POST['url']."</p>";
?>