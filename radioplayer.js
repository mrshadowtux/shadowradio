$(document).ready
(
	function()
	{
		function checkmusic()
		{
			$("main section#senderliste article").each
			(
				function()
				{
					var songurl="http://shadowtux.info/radio/whatsplaying.php?sender="+$(this).data("title");
					$(this).find("output.song").load(songurl);
				}
			);
		}

		checkmusic();

		var player=$("main audio#player");
		var status=$("main output#status");

		setInterval
		(
			function()
			{
				checkmusic();
			}
		,5000);


		$("main section#senderliste article ul.actions li button.listen_here").click
		(
			function()
			{
				var sender=$(this).parent().parent().parent();
				var streamlink=sender.data("streamlink");
				player.trigger("stop");
				player.attr("src",streamlink);
				player.trigger("play");
				status.addClass("active");
				status.html("Spiele den Sender "+sender.data("title"));
			}
		);
		$("main section#senderliste article ul.actions li button.listen_server").click
		(
			function()
			{
				alert("Noch nicht implementiert..");
			}
		);
	}
);