<?php
	session_start();
?>
<!doctype html>
<html>
<head>
	<title>todo.list</title>
	<meta charset="utf-8" />

	<link rel="stylesheet" href='css/todo.css' />
	<link rel="stylesheet" href='css/font-awesome.min.css' />
	<link href='http://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>

</head>
<body>
	<div class="content">
		<h3>Simple task manager</h3>

		<ul class="list"></ul>

		<input type="text" placeholder="Let's add a new task" class="newtask holo" />


	</div>

			<footer><a href='#' class='reset'>Reset list</a> - <a class='save' href='#'>Force save</a> - Saved in cookies seconds ago. Created by <a href='http://tiphedor.fr'>tiphedor</a>. Sources <a href='http://github.com'>here</a></footer>



	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="js/todo.js"></script>
	<script src="js/cookie.js"></script>

</body>
</html>